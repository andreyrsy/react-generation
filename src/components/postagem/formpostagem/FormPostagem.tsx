import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import type Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { toast } from "react-toastify";

function FormPostagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [temas, setTemas] = useState<Tema[]>([])

    const [tema, setTema] = useState<Tema>({ id: 0, descricao: '', })

    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPostagemPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarTemaPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toast.info('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTemas()

        if (id !== undefined) {
            buscarPostagemPorId(id)
        }
    }, [id])

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        })
    }, [tema])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario,
        })
    }

    function retornar() {
        navigate("/postagens")
    }

    async function gerarNovaPostagem(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: { 'Authorization': token }
                })
                toast.success('A Postagem foi atualizada com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    toast.error('Erro ao atualizar a postagem.')
                }

            }
        } else {
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: { 'Authorization': token }
                })
                toast.success('A Postagem foi cadastrada com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    toast.error('Erro ao cadastrar a postagem.')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTema = tema.descricao === '';

    return (
        <div className="min-h-[60vh] bg-gradient-to-br from-slate-50 to-purple-50 py-12">
            <div className="container flex flex-col items-center justify-center mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10
                                shadow-2xl border border-purple-100 w-full max-w-lg">
                    
                    <h1 className="text-3xl text-center font-bold text-transparent bg-clip-text 
                                   bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                        {id === undefined ? '✨ Nova Postagem' : '✏️ Editar Postagem'}
                    </h1>
                    <p className="text-center text-gray-500 mb-8">
                        {id === undefined ? 'Crie uma nova postagem para seu blog' : 'Atualize as informações da postagem'}
                    </p>

                    <form className="flex flex-col gap-6" 
                          onSubmit={gerarNovaPostagem} >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="titulo" className="text-gray-600 font-medium">
                                Título
                            </label>
                            <input
                                type="text"
                                placeholder="Título da Postagem"
                                name='titulo'
                                className="border-2 border-purple-200 rounded-xl p-4
                                           focus:border-purple-500 transition-all duration-300
                                           bg-purple-50/50 text-lg"
                                value={postagem.titulo}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="texto" className="text-gray-600 font-medium">
                                Texto
                            </label>
                            <input
                                type="text"
                                placeholder="Texto da Postagem"
                                name='texto'
                                className="border-2 border-purple-200 rounded-xl p-4
                                           focus:border-purple-500 transition-all duration-300
                                           bg-purple-50/50 text-lg"
                                value={postagem.texto}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="tema" className="text-gray-600 font-medium">
                                Tema da Postagem
                            </label>
                            <select name="tema" id="tema" 
                                className='border-2 border-purple-200 rounded-xl p-4
                                           focus:border-purple-500 transition-all duration-300
                                           bg-purple-50/50'
                                onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
                            >
                                <option value="" selected disabled>Selecione um Tema</option>

                                {temas.map((tema) => (
                                    <>
                                        <option value={tema.id} >{tema.descricao}</option>
                                    </>
                                ))}

                            </select>
                        </div>
                        
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={retornar}
                                className="rounded-xl text-gray-600 bg-gray-100 
                                           hover:bg-gray-200 flex-1 py-3 
                                           transition-all duration-300 font-semibold">
                                ← Voltar
                            </button>
                            <button
                                className="rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 
                                           hover:from-indigo-700 hover:to-purple-700 flex-1 py-3
                                           flex justify-center items-center gap-2
                                           transition-all duration-300 hover:scale-[1.02]
                                           shadow-lg hover:shadow-xl font-semibold
                                           disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={carregandoTema}>

                                { isLoading ?
                                        <ClipLoader
                                            color="#ffffff"
                                            size={24}
                                        /> :
                                       <span>{id === undefined ? '🚀 Cadastrar' : '✅ Atualizar'}</span>
                                }

                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormPostagem;

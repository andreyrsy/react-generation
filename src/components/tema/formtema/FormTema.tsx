import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
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

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/temas")
    }

    async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                alert('O Tema foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    alert('Erro ao atualizar o tema.')
                }

            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                alert('O Tema foi cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar o tema.')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="min-h-[60vh] bg-gradient-to-br from-slate-50 to-purple-50 py-12">
            <div className="container flex flex-col items-center justify-center mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10
                                shadow-2xl border border-purple-100 w-full max-w-lg">
                    
                    <h1 className="text-3xl text-center font-bold text-transparent bg-clip-text 
                                   bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                        {id === undefined ? '✨ Novo Tema' : '✏️ Editar Tema'}
                    </h1>
                    <p className="text-center text-gray-500 mb-8">
                        {id === undefined ? 'Crie um novo tema para organizar suas postagens' : 'Atualize as informações do tema'}
                    </p>

                    <form className="flex flex-col gap-6" 
                          onSubmit={gerarNovoTema} >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="descricao" className="text-gray-600 font-medium">
                                Descrição do Tema
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: Tecnologia, Viagens, Culinária..."
                                name='descricao'
                                className="border-2 border-purple-200 rounded-xl p-4
                                           focus:border-purple-500 transition-all duration-300
                                           bg-purple-50/50 text-lg"
                                value={tema.descricao}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
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
                                           shadow-lg hover:shadow-xl font-semibold"
                                type="submit">

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

export default FormTema;

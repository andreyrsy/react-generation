import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Postagem from "../../../models/Postagem"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"

function DeletarPostagem() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toast.info('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPostagem() {
        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toast.success('Postagem deletada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                toast.error('Erro ao deletar a postagem.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/postagens")
    }

    return (
        <div className="min-h-[60vh] bg-gradient-to-br from-slate-50 to-red-50 py-12">
            <div className='container max-w-lg mx-auto px-4'>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8
                                shadow-2xl border border-red-100 overflow-hidden">
                    
                    <div className="text-center mb-6">
                        <span className="text-6xl">⚠️</span>
                        <h1 className='text-3xl font-bold text-red-600 mt-4'>
                            Deletar Postagem
                        </h1>
                        <p className='text-gray-500 mt-2'>
                            Esta ação não pode ser desfeita
                        </p>
                    </div>

                    <div className='rounded-2xl overflow-hidden shadow-lg border border-red-200'>
                        <header 
                            className='py-3 px-6 bg-gradient-to-r from-red-500 to-red-600 
                                       text-white font-bold text-xl'>
                            <span className="flex items-center gap-2">
                                📝 Postagem
                            </span>
                        </header>
                        <div className='p-6 bg-gradient-to-br from-white to-red-50'>
                            <p className='text-2xl text-gray-700 font-medium'>{postagem.titulo}</p>
                            <p className='text-gray-500 mt-2'>{postagem.texto}</p>
                        </div>
                    </div>

                    <p className='text-center text-gray-600 my-6 font-medium'>
                        Você tem certeza que deseja excluir esta postagem?
                    </p>

                    <div className="flex gap-4">
                        <button 
                            className='flex-1 rounded-xl text-gray-600 bg-gray-100 
                                       hover:bg-gray-200 py-3
                                       transition-all duration-300 font-semibold'
                            onClick={retornar}>
                            ← Não, voltar
                        </button>
                        <button 
                            className='flex-1 rounded-xl text-white bg-gradient-to-r from-red-500 to-red-600
                                       hover:from-red-600 hover:to-red-700 py-3
                                       flex items-center justify-center gap-2
                                       transition-all duration-300 hover:scale-[1.02]
                                       shadow-lg hover:shadow-xl font-semibold'
                            onClick={deletarPostagem}>

                            { isLoading ? 
                                <ClipLoader 
                                    color="#ffffff" 
                                    size={24}
                                /> : 
                                <span>🗑️ Sim, deletar</span>
                            }

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeletarPostagem

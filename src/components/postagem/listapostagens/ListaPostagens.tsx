import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import CardPostagem from "../cardpostagem/CardPostagem";
import { toast } from "react-toastify";

function ListaPostagens() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [postagens, setPostagens] = useState<Postagem[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            toast.info('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()    
    }, [postagens.length])

    async function buscarPostagens() {
        try {

            setIsLoading(true)

            await buscar('/postagens', setPostagens, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-[60vh] bg-gradient-to-br from-slate-50 to-purple-50 py-8">

            {isLoading && (
                <div className="flex flex-col items-center justify-center w-full my-12">
                    <SyncLoader
                        color="#7c3aed"
                        size={20}
                    />
                    <p className="mt-4 text-purple-600 font-medium animate-pulse">
                        Carregando postagens...
                    </p>
                </div>
            )}

            <div className="flex justify-center w-full">
                <div className="container flex flex-col px-4">
                    
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text 
                                   bg-gradient-to-r from-indigo-600 to-purple-600 
                                   text-center mb-8">
                        📝 Lista de Postagens
                    </h1>

                    {(!isLoading && postagens.length === 0) && (
                        <div className="flex flex-col items-center justify-center my-12
                                        bg-white/80 backdrop-blur-sm rounded-2xl p-8
                                        shadow-lg border border-purple-100 max-w-md mx-auto">
                            <span className="text-6xl mb-4">📭</span>
                            <span className="text-2xl text-gray-600 text-center">
                                Nenhuma Postagem encontrada!
                            </span>
                            <p className="text-gray-400 mt-2 text-center">
                                Crie sua primeira postagem para começar
                            </p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-6">
                            {
                                postagens.map((postagem) => (
                                    <CardPostagem key={postagem.id} postagem={postagem}/>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListaPostagens;

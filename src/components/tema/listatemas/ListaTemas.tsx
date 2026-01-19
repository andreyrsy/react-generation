import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";
import CardTema from "../cardtema/CardTema";

function ListaTemas() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [temas, setTemas] = useState<Tema[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTemas()    
    }, [temas.length])

    async function buscarTemas() {
        try {

            setIsLoading(true)

            await buscar('/temas', setTemas, {
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
                        Carregando temas...
                    </p>
                </div>
            )}

            <div className="flex justify-center w-full">
                <div className="container flex flex-col px-4">
                    
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text 
                                   bg-gradient-to-r from-indigo-600 to-purple-600 
                                   text-center mb-8">
                        🏷️ Lista de Temas
                    </h1>

                    {(!isLoading && temas.length === 0) && (
                        <div className="flex flex-col items-center justify-center my-12
                                        bg-white/80 backdrop-blur-sm rounded-2xl p-8
                                        shadow-lg border border-purple-100 max-w-md mx-auto">
                            <span className="text-6xl mb-4">📭</span>
                            <span className="text-2xl text-gray-600 text-center">
                                Nenhum Tema encontrado!
                            </span>
                            <p className="text-gray-400 mt-2 text-center">
                                Crie seu primeiro tema para começar
                            </p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-6">
                            {
                                temas.map((tema) => (
                                    <CardTema key={tema.id} tema={tema}/>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListaTemas;

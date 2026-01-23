import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toast.info('Você precisa estar logado')
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className='min-h-[80vh] flex justify-center items-center bg-gradient-to-br from-slate-50 to-purple-50'>
            <div className='container mx-auto rounded-2xl overflow-hidden max-w-xl'>
                
                <img 
                    className='w-full h-72 object-cover border-b-8 border-white'
                    src="https://i.imgur.com/ZZFAmzo.jpg" 
                    alt="Capa do Perfil" 
                />

                <img 
                    className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10'
                    src={usuario.foto} 
                    alt={`Foto de perfil de ${usuario.nome}`} 
                />

                <div className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-2xl 
                    items-center justify-center shadow-2xl">
                    <p className='font-bold text-3xl mt-24'>{usuario.nome}</p>
                    <p className='text-xl opacity-80 mt-2'>{usuario.usuario}</p>
                </div>

            </div>
        </div>
    )
}

export default Perfil

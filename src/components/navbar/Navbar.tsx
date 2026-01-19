import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 
                           text-white shadow-lg'>
            
                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="text-2xl font-bold tracking-wide 
                        hover:scale-105 transition-transform duration-300
                        drop-shadow-md">
                        ✨ Blog Pessoal
                    </Link>

                    <div className='flex gap-6 items-center'>
                        <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                            Postagens
                        </span>
                        <Link to='/temas' className='hover:scale-105 transition-all duration-300 
                            px-3 py-1 rounded-full hover:bg-white/20'>
                            Temas
                        </Link>
                        <Link to='/cadastrartema' className='hover:scale-105 transition-all duration-300
                            px-3 py-1 rounded-full hover:bg-white/20'>
                            Cadastrar tema
                        </Link>
                        <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                            Perfil
                        </span>
                        <Link to='' onClick={logout} className='bg-white/20 backdrop-blur-sm 
                            px-4 py-1.5 rounded-full hover:bg-white/30 
                            transition-all duration-300 hover:scale-105
                            border border-white/30'>
                            Sair
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";



function Navbar() {


    const navigate = useNavigate();


    const { usuario, handleLogout } = useContext(AuthContext)


    function logout() {


        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }


    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg mx-8 items-center">
                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className="flex gap-2 items-center">
                        <img src={usuario.foto} alt="Foto do Usuário" className="w-12 h-12 rounded-full" />
                        <div className="flex flex-col text-sm">
                            <p>Bem vindo!</p>
                            <p className="font-bold">{usuario.nome}</p>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Navbar

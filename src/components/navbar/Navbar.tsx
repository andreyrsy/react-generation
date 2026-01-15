import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <span className='hover:underline cursor-pointer'>Postagens</span>
                        <span className='hover:underline cursor-pointer'>Temas</span>
                        <span className='hover:underline cursor-pointer'>Cadastrar tema</span>
                        <span className='hover:underline cursor-pointer'>Perfil</span>
                        <span className='hover:underline cursor-pointer'>Sair</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

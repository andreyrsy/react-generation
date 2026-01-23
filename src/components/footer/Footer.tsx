import { type ReactNode, useContext } from "react"
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { AuthContext } from "../../contexts/AuthContext"


function Footer() {

    const { usuario } = useContext(AuthContext)

    let data = new Date().getFullYear()

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <div className="flex justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 
                            text-white shadow-2xl">
                <div className="container flex flex-col items-center py-6">
                    <p className='text-xl font-bold tracking-wide drop-shadow-md'>
                        ✨ Blog Pessoal Generation | Copyright: {data}
                    </p>
                    <p className='text-lg opacity-90 mt-1'>Acesse nossas redes sociais</p>
                    <div className='flex gap-4 mt-3'>
                        <a href="https://www.linkedin.com/school/generationbrasil" target="_blank" rel="noopener noreferrer"
                           className="bg-white/20 p-2 rounded-full hover:bg-white/30 
                                      transition-all duration-300 hover:scale-110 hover:-translate-y-1
                                      backdrop-blur-sm border border-white/20">
                            <LinkedinLogoIcon size={32} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil" target="_blank" rel="noopener noreferrer"
                           className="bg-white/20 p-2 rounded-full hover:bg-white/30 
                                      transition-all duration-300 hover:scale-110 hover:-translate-y-1
                                      backdrop-blur-sm border border-white/20">
                            <InstagramLogoIcon size={32} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer"
                           className="bg-white/20 p-2 rounded-full hover:bg-white/30 
                                      transition-all duration-300 hover:scale-110 hover:-translate-y-1
                                      backdrop-blur-sm border border-white/20">
                            <FacebookLogoIcon size={32} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer

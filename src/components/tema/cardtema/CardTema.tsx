import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemaProps{
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className='bg-white rounded-2xl overflow-hidden 
                        shadow-lg hover:shadow-2xl transition-all duration-300
                        hover:-translate-y-2 border border-purple-100
                        group'>
            <header className='py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 
                               text-white font-bold text-xl
                               group-hover:from-indigo-700 group-hover:to-purple-700
                               transition-all duration-300'>
                <span className="flex items-center gap-2">
                    🏷️ Tema
                </span>
            </header>
            <div className='p-6 bg-gradient-to-br from-white to-purple-50 min-h-[100px]
                            flex items-center'>
                <p className='text-2xl text-gray-700 font-medium'>{tema.descricao}</p>
            </div>
            
            <div className="flex border-t border-purple-100">
                <Link to={`/editartema/${tema.id}`} 
                    className='w-full text-white bg-gradient-to-r from-indigo-500 to-purple-500
                               hover:from-indigo-600 hover:to-purple-600
                               flex items-center justify-center py-3 gap-2
                               transition-all duration-300 font-semibold'>
                    <span>✏️ Editar</span>
                </Link>

                <Link to={`/deletartema/${tema.id}`} 
                    className='w-full text-white bg-gradient-to-r from-red-400 to-red-500
                               hover:from-red-500 hover:to-red-600
                               flex items-center justify-center py-3 gap-2
                               transition-all duration-300 font-semibold'>
                    <span>🗑️ Deletar</span>
                </Link>
            </div>

        </div>
    )
}

export default CardTema

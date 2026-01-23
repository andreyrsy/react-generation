import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem'

interface CardPostagemProps{
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagemProps) {
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
                    📝 Postagem
                </span>
            </header>
            <div className='p-6 bg-gradient-to-br from-white to-purple-50'>
                <div className='flex items-center gap-3 mb-4'>
                    <img 
                        src={postagem.usuario?.foto} 
                        alt={postagem.usuario?.nome}
                        className='w-12 h-12 rounded-full object-cover border-2 border-purple-200'
                    />
                    <div>
                        <h3 className='text-lg font-bold text-gray-800'>{postagem.titulo}</h3>
                        <p className='text-sm text-gray-500'>{postagem.usuario?.nome}</p>
                    </div>
                </div>
                <p className='text-gray-600 mb-3'>{postagem.texto}</p>
                <span className='inline-block px-3 py-1 bg-purple-100 text-purple-700 
                                  rounded-full text-sm font-medium'>
                    {postagem.tema?.descricao}
                </span>
            </div>
            
            <div className="flex border-t border-purple-100">
                <Link to={`/editarpostagem/${postagem.id}`} 
                    className='w-full text-white bg-gradient-to-r from-indigo-500 to-purple-500
                               hover:from-indigo-600 hover:to-purple-600
                               flex items-center justify-center py-3 gap-2
                               transition-all duration-300 font-semibold'>
                    <span>✏️ Editar</span>
                </Link>

                <Link to={`/deletarpostagem/${postagem.id}`} 
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

export default CardPostagem

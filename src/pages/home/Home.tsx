
function Home() {
    return (
        <>
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 
                            flex justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>
                
                <div className='container grid grid-cols-2 text-white relative z-10'>
                    <div className="flex flex-col gap-6 items-center justify-center py-12">
                        <h2 className='text-6xl font-bold tracking-tight drop-shadow-lg
                                       bg-clip-text'>
                            Seja Bem Vinde! ✨
                        </h2>
                        <p className='text-xl opacity-90 max-w-md text-center'>
                            Expresse aqui seus pensamentos e opiniões em um espaço criado especialmente para você
                        </p>

                        <div className="flex justify-around gap-4 mt-4">
                            <div className='rounded-full text-white 
                                            bg-white/20 backdrop-blur-sm
                                            border border-white/30 py-3 px-8
                                            hover:bg-white hover:text-purple-600
                                            transition-all duration-300 cursor-pointer
                                            hover:scale-105 hover:shadow-xl
                                            font-semibold tracking-wide'
                                >
                                🚀 Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center py-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 
                                            rounded-3xl blur-2xl opacity-50 scale-110"></div>
                            <img
                                src="https://i.imgur.com/fyfri1v.png"
                                alt="Imagem Página Home"
                                className='w-80 relative z-10 drop-shadow-2xl 
                                           hover:scale-105 transition-transform duration-500'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
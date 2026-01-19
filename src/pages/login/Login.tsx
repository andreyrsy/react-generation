import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";


function Login() {


    const navigate = useNavigate();


    const { usuario, handleLogin, isLoading } = useContext(AuthContext)


    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )


    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }


    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }


    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold 
                            bg-gradient-to-br from-slate-50 to-purple-50">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4 
                                 bg-white/80 backdrop-blur-sm p-10 rounded-3xl
                                 shadow-2xl border border-white/50" 
                    onSubmit={login}>


                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r 
                                   from-indigo-600 to-purple-600 text-5xl font-bold">
                        Entrar
                    </h2>
                    <p className="text-gray-500 -mt-2 font-normal">Acesse sua conta</p>
                    
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario" className="text-gray-600 mb-1">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Digite seu e-mail"
                            className="border-2 border-purple-200 rounded-xl p-3
                                       focus:border-purple-500 transition-all duration-300
                                       bg-purple-50/50"
                            value = {usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha" className="text-gray-600 mb-1">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            className="border-2 border-purple-200 rounded-xl p-3
                                       focus:border-purple-500 transition-all duration-300
                                       bg-purple-50/50"
                            value = {usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button 
                        type='submit' 
                        className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 
                                   flex justify-center text-white w-full py-3 mt-2
                                   hover:from-indigo-700 hover:to-purple-700
                                   transition-all duration-300 hover:scale-[1.02]
                                   shadow-lg hover:shadow-xl font-semibold tracking-wide">
                        { isLoading ? 
                            <ClipLoader 
                                color="#ffffff" 
                                size={24}
                            /> : 
                            <span>🚀 Entrar</span>
                        }
                    </button>


                    <div className="flex items-center w-full gap-4 my-2">
                        <hr className="border-purple-200 flex-1" />
                        <span className="text-gray-400 font-normal text-sm">ou</span>
                        <hr className="border-purple-200 flex-1" />
                    </div>


                   <p className="font-normal text-gray-600">
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-purple-600 hover:text-purple-800 
                                                         font-semibold hover:underline
                                                         transition-all duration-300">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 
                                lg:block hidden w-full min-h-screen
                                relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-40 right-10 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img 
                            src="https://i.imgur.com/fyfri1v.png" 
                            alt="Blog Illustration"
                            className="w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 text-center">
                        <p className="text-2xl font-bold">✨ Blog Pessoal</p>
                        <p className="text-sm opacity-70">Compartilhe suas ideias com o mundo</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login;

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";


function Cadastro() {


  const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const[confirmarSenha, setConfirmarSenha] = useState<string>("")


  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })
  
  useEffect(() => {
    if (usuario.id !== 0){
      retornar()
    }
  }, [usuario])


  function retornar(){
    navigate('/')
  }


  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })


  }


  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(e.target.value)
  }


  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault()


    if(confirmarSenha === usuario.senha && usuario.senha.length >= 8){


      setIsLoading(true)


      try{
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        alert('Usuário cadastrado com sucesso!')
      }catch(error){
        alert('Erro ao cadastrar o usuário!')
      }
    }else{
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
      setUsuario({...usuario, senha: ''})
      setConfirmarSenha('')
    }


    setIsLoading(false)
  }


  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 
                        lg:block hidden w-full min-h-screen relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-40 left-10 w-60 h-60 bg-pink-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img 
                    src="https://i.imgur.com/fyfri1v.png" 
                    alt="Blog Illustration"
                    className="w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 text-center">
                <p className="text-2xl font-bold">✨ Blog Pessoal</p>
                <p className="text-sm opacity-70">Crie sua conta e comece a compartilhar</p>
            </div>
        </div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3
                         bg-white/80 backdrop-blur-sm p-8 rounded-3xl
                         shadow-2xl border border-white/50' 
              onSubmit={cadastrarNovoUsuario}>


          <h2 className='text-transparent bg-clip-text bg-gradient-to-r 
                         from-indigo-600 to-purple-600 text-4xl font-bold'>
            Criar Conta
          </h2>
          <p className="text-gray-500 -mt-1 font-normal text-sm">Preencha seus dados</p>
          
          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-gray-600 mb-1 font-normal text-sm">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
              className="border-2 border-purple-200 rounded-xl p-2.5
                         focus:border-purple-500 transition-all duration-300
                         bg-purple-50/50 font-normal"
              value = {usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-gray-600 mb-1 font-normal text-sm">E-mail</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="seu@email.com"
              className="border-2 border-purple-200 rounded-xl p-2.5
                         focus:border-purple-500 transition-all duration-300
                         bg-purple-50/50 font-normal"
              value = {usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-gray-600 mb-1 font-normal text-sm">URL da Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="https://..."
              className="border-2 border-purple-200 rounded-xl p-2.5
                         focus:border-purple-500 transition-all duration-300
                         bg-purple-50/50 font-normal"
              value = {usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="senha" className="text-gray-600 mb-1 font-normal text-sm">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Mínimo 8 caracteres"
                className="border-2 border-purple-200 rounded-xl p-2.5
                           focus:border-purple-500 transition-all duration-300
                           bg-purple-50/50 font-normal"
                value = {usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmarSenha" className="text-gray-600 mb-1 font-normal text-sm">Confirmar</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Repita a senha"
                className="border-2 border-purple-200 rounded-xl p-2.5
                           focus:border-purple-500 transition-all duration-300
                           bg-purple-50/50 font-normal"
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
          </div>
          <div className="flex justify-around w-full gap-4 mt-2">
            <button 
                type='reset'
                className='rounded-xl text-white bg-gradient-to-r from-red-400 to-red-500 
                           hover:from-red-500 hover:to-red-600 w-1/2 py-2.5
                           transition-all duration-300 hover:scale-[1.02]
                           shadow-md hover:shadow-lg font-semibold'
                onClick={retornar}
             >
                ← Cancelar
            </button>
            <button 
                type='submit'
                className='rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600
                           hover:from-indigo-700 hover:to-purple-700 w-1/2 py-2.5
                           flex justify-center transition-all duration-300 hover:scale-[1.02]
                           shadow-lg hover:shadow-xl font-semibold' 
                >
                { isLoading ? 
                  <ClipLoader 
                    color="#ffffff" 
                    size={24}
                  /> : 
                  <span>🚀 Cadastrar</span>
                }
            </button>
          </div>
        </form>
      </div>
    </>
  )
}


export default Cadastro

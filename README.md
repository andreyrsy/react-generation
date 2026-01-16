# Blog Pessoal - React + TypeScript + Vite

Projeto do bootcamp Generation Brasil - Blog Pessoal desenvolvido em React com TypeScript.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Phosphor Icons
- React Router DOM
- Axios
- Context API

## 📁 Estrutura do Projeto

```
src/
├── assets/
├── components/
│   ├── footer/
│   │   └── Footer.tsx
│   └── navbar/
│       └── Navbar.tsx
├── contexts/
│   └── AuthContext.tsx
├── models/
│   ├── Postagem.ts
│   ├── Tema.ts
│   ├── Usuario.ts
│   └── UsuarioLogin.ts
├── pages/
│   ├── cadastro/
│   │   └── Cadastro.tsx
│   ├── home/
│   │   └── Home.tsx
│   └── login/
│       └── Login.tsx
├── services/
│   └── Service.ts
├── App.tsx
├── index.css
└── main.tsx
```

## 📋 Passos Concluídos

### Passos 1-4 (Configuração Inicial)

- Criação do projeto React com Vite e TypeScript
- Configuração do ESLint
- Criação do componente Home com CSS inline

### Passos 5-8 (Tailwind CSS e Componentes)

- **Passo 5**: Introdução a Props, Hooks e Renderização Condicional (teoria)
- **Passo 6**: Introdução ao Tailwind CSS (teoria)
- **Passo 7**: Instalação e configuração do Tailwind CSS 4
  - Instalação do `tailwindcss` e `@tailwindcss/vite`
  - Configuração do plugin no `vite.config.ts`
  - Importação do Tailwind no `index.css`
- **Passo 8**: Atualização e criação de componentes
  - Atualização do componente `Home.tsx` com classes Tailwind
  - Criação do componente `Navbar.tsx`
  - Criação do componente `Footer.tsx` com ícones Phosphor
  - Atualização do `App.tsx` para incluir Navbar, Home e Footer

### Passos 9-10 (Rotas)

- **Passo 9**: Introdução ao React Router DOM (teoria)
- **Passo 10**: Configuração de Rotas
  - Instalação do `react-router-dom`
  - Configuração do `BrowserRouter`, `Routes` e `Route` no `App.tsx`
  - Atualização do `Navbar` para usar `Link` para navegação interna

### Passos 11-12 (Páginas de Cadastro e Login)

- **Passo 11**: Página de Cadastro - Estilização
  - Criação da pasta `cadastro` em `pages`
  - Criação do componente `Cadastro.tsx` com formulário estilizado
  - Layout responsivo com grid (2 colunas em telas grandes)
  - Imagem de fundo na primeira coluna
  - Atualização das rotas no `App.tsx`
- **Passo 12**: Página de Login - Estilização
  - Criação da pasta `login` em `pages`
  - Criação do componente `Login.tsx` com formulário estilizado
  - Link para página de cadastro
  - Layout responsivo com grid (2 colunas em telas grandes)
  - Imagem de fundo na segunda coluna
  - Atualização das rotas no `App.tsx`

### Passos 13-16 (Contexto, Models e Services)

- **Passo 13**: Introdução ao Axios (teoria)
- **Passo 14**: Criação das Models
  - `Usuario.ts`
  - `Tema.ts`
  - `Postagem.ts`
  - `UsuarioLogin.ts`
- **Passo 15**: Criação do Service
  - Instalação do `axios`
  - Configuração da instância do Axios com `baseURL`
  - Implementação dos métodos `cadastrarUsuario` e `login`
- **Passo 16**: Página de Cadastro - Lógica
  - Instalação do `react-spinners`
  - Implementação de `useState` para gerenciar dados do formulário
  - Integração com a API via Service para cadastro de usuários
  - Validação de senha e confirmação de senha
  - Feedback visual de carregamento (`ClipLoader`)
  - Redirecionamento após cadastro com `useNavigate`

### Passos 17-19 (Autenticação)

- **Passo 17**: Introdução a Context API (teoria)
- **Passo 18**: Implementação do AuthContext
  - Criação da pasta `contexts`
  - Implementação do `AuthContext` com estados de `usuario` e `isLoading`
  - Funções `handleLogin` e `handleLogout`
  - Configuração do `AuthProvider` no `App.tsx`
- **Passo 19**: Lógica de Login
  - Integração do `AuthContext` no componente `Login`
  - Implementação da função de login com chamada à API
  - Redirecionamento para `/home` após login com sucesso
  - Implementação do Logout no `Navbar`

## ✨ Extras Implementados

Além dos requisitos básicos, foram implementadas melhorias de UX:

- **Hover Effects com Transições Suaves**:

  - Links da Navbar com `hover:underline` para feedback visual
  - Botão "Nova Postagem" com efeito de inversão de cores (`hover:bg-white hover:text-indigo-900`)
  - Ícones de redes sociais com efeito de scale (`hover:scale-110`)
  - Todas as transições com `transition-*` e `duration-300` para animações suaves

- **Links Funcionais nas Redes Sociais**:
  - LinkedIn: https://www.linkedin.com/school/generationbrasil
  - Instagram: https://www.instagram.com/generationbrasil
  - Facebook: https://www.facebook.com/generationbrasil

## 🏃 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📚 Referências

- [Cookbook Generation - React](https://github.com/conteudoGeneration/cookbook_java_fullstack/tree/main/05_react)
- [Tailwind CSS](https://tailwindcss.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Context API](https://react.dev/reference/react/createContext)

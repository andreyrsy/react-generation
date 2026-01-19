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
│   ├── navbar/
│   │   └── Navbar.tsx
│   └── tema/
│       ├── cardtema/
│       │   └── CardTema.tsx
│       ├── deletartema/
│       │   └── DeletarTema.tsx
│       ├── formtema/
│       │   └── FormTema.tsx
│       └── listatemas/
│           └── ListaTemas.tsx
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

- [Tailwind CSS](https://tailwindcss.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Context API](https://react.dev/reference/react/createContext)

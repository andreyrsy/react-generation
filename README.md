# Blog Pessoal - React + TypeScript + Vite

Projeto do bootcamp Generation Brasil - Blog Pessoal desenvolvido em React com TypeScript.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Phosphor Icons

## 📁 Estrutura do Projeto

```
src/
├── assets/
├── components/
│   ├── footer/
│   │   └── Footer.tsx
│   └── navbar/
│       └── Navbar.tsx
├── pages/
│   └── home/
│       └── Home.tsx
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

## ✨ Extras Implementados

Além dos requisitos básicos, foram implementadas melhorias de UX:

- **Hover Effects com Transições Suaves**:

  - Links da Navbar com `hover:underline` para feedback visual
  - Botão "Nova Postagem" com efeito de inversão de cores (`hover:bg-white hover:text-indigo-900`)
  - Ícones de redes sociais com efeito de scale (`hover:scale-110`)
  - Todas as transições com `transition-*` e `duration-300` para animações suaves

- **Links Funcionais nas Redes Sociais**:
  - LinkedIn: https://www.linkedin.com/school/generaborasil
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

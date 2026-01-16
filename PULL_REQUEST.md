# Pull Request: Implementação da Autenticação e Login (Passos 17-19)

## 📝 Descrição

Este PR implementa a lógica completa de autenticação utilizando **Context API** e integra o fluxo de Login à aplicação.

## ✨ Alterações Principais

- **Context API (Passo 17-18):**
  - Criação do `AuthContext` para gerenciamento global do estado de usuário.
  - Implementação do `AuthProvider` com métodos `handleLogin` e `handleLogout`.
- **Lógica de Login (Passo 19):**
  - Integração do formulário de login com o `AuthContext`.
  - Redirecionamento automático para `/home` após login bem-sucedido.
  - Tratamento de erros e feedback visual (loading spinner).
- **Navbar:**
  - Adicionada funcionalidade de Logout no link "Sair".
- **App.tsx:**
  - Envelope da aplicação com `AuthProvider`.

## 🔗 Tarefas Relacionadas

- [x] Passo 17: Teoria Context API
- [x] Passo 18: Implementação AuthContext
- [x] Passo 19: Lógica de Login

## 🧪 Como Testar

1. Acesse a rota `/` (Login).
2. Entre com credenciais válidas.
3. Verifique o redirecionamento para `/home`.
4. Clique em "Sair" na Navbar e verifique o retorno para a tela de Login.

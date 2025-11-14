# Project Context — Home Master Life’s Residencial System

## Overview
O projeto é um sistema interno para um residencial de idosos.  
O objetivo é organizar o gerenciamento de pacientes, cuidadores, relatórios, medicações e módulos administrativos.

O sistema terá acesso para 3 roles:
- **CUIDADOR**
  - Emitir relatórios diários
  - Cadastrar e editar pacientes
  - Registrar medicações
- **ADMIN**
  - Acompanhar tarefas e relatórios dos cuidadores
  - Gestão geral de pacientes
- **SUPERADMIN**
  - Gestão de contratos, parte financeira e administração completa do sistema

## Frontend
Desenvolvido com **Next.js 16**, **TailwindCSS 4** e **Shadcn UI (Radix)**.  
A identidade visual segue as cores extraídas do logo:  
- Azul (#1E2A78 aproximado)  
- Verde (#8BC53F aproximado)  
- Laranja (#EE6C3C aproximado)  
- Azul claro/ciano (#39C3E6 aproximado)

## Backend
API implementada no próprio Next.js (route handlers) seguindo uma arquitetura **feature-based**.  
Banco de dados PostgreSQL hospedado no **Supabase**.  
ORM utilizado: **Prisma**.

## Arquitetura Geral usando como exemplo uma feature Users

src/
|
|_app
|  |_ api (onde vai chamar os handlers de feature em especifico)
|  |   |_ users
|  |   |     |_[id]
|  |   |       |_route.ts
|  |   |_route.ts
|  |_ users
|  |     |_page.tsx
|  |
|  |_layout.tsx
|  |_page.tsx
|
|_core
|    |_utils
|    |     |_api-response.tsx  (padronizacao da resposta da API para todo o projeto, contendo um ApiResponseSuccess e um ApiResponseError)
|    |_lib
|    |   |_prisma.ts    (Adotando o padrao singleton para instanciar o prisma em outros lugares)
|    |_hooks (para uso de hooks globais)
|    |_types (para uso de types globais)
|
|_features
|     |
|     |_users
|     |   |_api  (contem os handlers que vao ser chamados no app/api/users)
|     |   |  |_ create-user.ts
|     |   |  |_ get-users.ts
|     |   |  |_ get-user-by-id.ts
|     |   |  |_ update-user.ts
|     |   |  |_ delete-user.ts
|     |   |_components (components relacionados a feature que vao ser importados la no page.tsx)
|     |   |     |_UsersList.tsx
|     |   |     |_RegisterUserForm.tsx
|     |   |_hooks (logica que vai ser chamada dentro do page.tsx para fazer fetch, etc)
|     |   |   |_useUsersList.ts
|     |   |_ services ( encarregados de fazer nossa logica de CRUD, sao chamados pelo handler)
|     |   |     |_user-service.ts (createUser, listAll, getUserById, updateUser, deleteUser)
|     |   |
|     |   |_repositories (quem fica encarregado da comunicacao com nosso banco de dados e utilizacao do ORM)
|     |   |       |_user-repository.ts (save, find, findAll, update, remove, exists)
|     |   |
|     |   |_validators  ( responsavel pela validacao dos dados recebidos pelo usuario)
|     |         |_user-validator.ts     
|     | 
|     |_(Outras features)
|
|_ tests  (testes realizados)

# Fluxos
### Escrita (Mutations)
`route.ts → handler → service → validator → repository → return ApiResponse`

### Leitura (UI)
`page.tsx → components → hooks (fetch) → renderização`

## API Response Pattern
```ts
{
  success: boolean;
  data: any;
  message: string;
  errors: string[] | null;
  meta: {
    timestamp: string;
  }
}
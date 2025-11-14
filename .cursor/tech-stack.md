# Tech Stack & Conventions

## Frontend — Next.js 16
- React Server Components habilitados
- TailwindCSS 4
- Shadcn UI + Radix
- Arquitetura Feature-Based
- ESLint com padrão Next.js
- Componentes desacoplados e reutilizáveis
- Hooks por feature para abstração de lógica de fetch

## Backend — Next.js Route Handlers
- Prisma ORM
- Postgres (Supabase)
- Padrão API Handler → Service → Validator → Repository
- Validadores utilizando Zod
- Resend para envio de email de recuperacao de conta
- Padrão Singleton para o client do Prisma
- Responses padronizadas via `ApiResponse`

## Banco de Dados
- Provider: PostgreSQL (Supabase)
- Migrations via Prisma
- Índices em colunas de leitura frequente (patient_id, caregiver_id, etc)

## Deploy
- Deploy vai ser realizado na Vercel.

## Convenções de Código
- Nome de arquivos sempre kebab-case
- Services usam verbos (createUser, listAllUsers)
- Repositories usam verbos: save, find, findAll, update, remove, exists
- Components em PascalCase
- Hooks sempre começando com "use"

## Temas & Cores (Extraídas do Logo)
- Azul principal: #1E2A78
- Verde: #8BC53F
- Laranja: #EE6C3C
- Azul claro: #39C3E6
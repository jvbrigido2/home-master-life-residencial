# Global Rules for Code Generation

## 1. Estrutura Obrigatória
Toda nova feature deve conter:
- api/
- components/
- hooks/
- services/
- repositories/
- validators/

## 2. Fluxo obrigatório de ações (mutations)
route.ts → handler → service → validator → repository → ApiResponse

### Nunca chamar Repository diretamente do Handler.

## 3. Fluxo obrigatório de leitura (UI)
page.tsx → components → hooks → fetch → render

### Nunca colocar fetch dentro do componente diretamente.
### Nunca alterar nomes ou alterar codigo que nao tem haver com oque foi pedido

## 4. Padrões de Código
- Sempre usar Prisma através do repositório
- Sempre validar com Zod antes do service
- Sempre retornar ApiResponse Success ou Error
- Sempre formatar data via util global quando necessário (de preferencia a data de Campo Grande Mato Grosso do Sul, Brasil)
- Services não podem importar componentes nem hooks

## 5. UI e Componentes
- Sempre utilizar componentes que estao na pasta UI, ex (Button, Sidebar, etc..), caso nao tenha, solicitar para criar e falar o porque seria benefico a criacao
- Utilizar Shadcn UI
- TailwindCSS 4 com classes sem redundâncias e com o tailwind.config muito bem estruturado
- Seguir identidade visual usando classes que reflitam as cores principais

## 6. Segurança
- Proteger handlers por role quando necessário
- Nunca expor informações de contratos a roles CUIDADOR ou ADMIN
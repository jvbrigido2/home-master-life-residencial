# Configuração do Shadcn UI - Home Master Life's Residencial

## ✅ Configuração Concluída

O projeto está configurado para usar shadcn/ui com a seguinte estrutura:

### Estrutura de Pastas
```
src/
├── core/
│   ├── components/
│   │   └── ui/              # Componentes shadcn/ui ficam aqui
│   ├── lib/
│   │   └── utils.ts         # Função cn() para merge de classes
│   └── hooks/               # Hooks globais
├── features/                # Features do projeto
└── app/                     # Next.js App Router
```

### Arquivos de Configuração

#### ✅ `components.json`
Configurado com:
- **Style**: new-york
- **RSC**: habilitado (React Server Components)
- **Aliases**: apontando para `src/core/components/ui`

#### ✅ `tsconfig.json`
Path aliases ajustados:
- `@/*` → `./src/*`

#### ✅ `globals.css`
Variáveis CSS configuradas com as cores do logo:
- **Primary** (Azul): `#1E2A78`
- **Green**: `#8BC53F`
- **Orange**: `#EE6C3C`
- **Light Blue**: `#39C3E6`

#### ✅ `tailwind.config.ts`
Já configurado com:
- CSS variables habilitadas
- Keyframes para animações (accordion, etc)
- Plugin `tailwindcss-animate`

## 📦 Dependências Instaladas

```json
{
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.4",
  "tailwindcss-animate": "latest",
  "class-variance-authority": "latest",
  "lucide-react": "latest"
}
```

## 🚀 Como Adicionar Componentes

### Método CLI (Recomendado)

Para adicionar um componente shadcn/ui, use:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add dialog
# etc...
```

Os componentes serão automaticamente criados em: `src/core/components/ui/`

### Exemplo de Uso

```tsx
// Em qualquer arquivo dentro de src/
import { Button } from "@/core/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/core/components/ui/card";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Título</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Clique aqui</Button>
      </CardContent>
    </Card>
  );
}
```

## 🎨 Variantes de Cores Disponíveis

Baseado nas cores do logo, você pode usar:

```tsx
// Botões
<Button variant="default">Primary (Azul)</Button>
<Button variant="secondary">Secondary (Azul Claro)</Button>
<Button variant="destructive">Destructive (Laranja)</Button>

// Classes Tailwind customizadas
<div className="bg-primary-blue">Azul principal</div>
<div className="bg-primary-green">Verde</div>
<div className="bg-primary-orange">Laranja</div>
<div className="bg-primary-light-blue">Azul claro</div>
```

## 📝 Convenções do Projeto

De acordo com as regras em `.cursor/rules.md`:

1. **Sempre use componentes da pasta UI**: Se precisar de um componente que não existe, solicite sua criação
2. **Nunca importe componentes diretamente de features**: Use apenas componentes globais em `src/core/components/ui`
3. **Mantenha o padrão de nomenclatura**: PascalCase para componentes, kebab-case para arquivos

## 🔧 Função Utilitária `cn()`

Localizada em `src/core/lib/utils.ts`, use para merge de classes:

```tsx
import { cn } from "@/core/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  customClassName
)} />
```

## 📚 Componentes Recomendados para Instalar

Para o sistema de residencial de idosos, considere instalar:

```bash
# Formulários
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group

# Navegação e Layout
npx shadcn@latest add sidebar
npx shadcn@latest add navigation-menu
npx shadcn@latest add breadcrumb
npx shadcn@latest add tabs

# Data Display
npx shadcn@latest add table
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add avatar

# Feedback
npx shadcn@latest add dialog
npx shadcn@latest add alert-dialog
npx shadcn@latest add toast
npx shadcn@latest add alert

# Data Entry
npx shadcn@latest add calendar
npx shadcn@latest add date-picker
npx shadcn@latest add combobox
```

## 🎯 Próximos Passos

1. Instale os componentes necessários usando `npx shadcn@latest add [component]`
2. Comece a desenvolver suas features usando os componentes em `src/features/`
3. Mantenha a arquitetura feature-based conforme definido em `.cursor/project-context.md`

## 🐛 Troubleshooting

Se encontrar erro de imports:
- Verifique se está usando `@/core/components/ui/...` 
- Reinicie o servidor de desenvolvimento: `npm run dev`
- Limpe o cache do Next.js: `rm -rf .next`

---

**Configuração por**: Cascade AI  
**Data**: Configurado para Next.js 16 + TailwindCSS 4 + Shadcn UI

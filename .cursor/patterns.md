# Patterns (Blueprints)

## API Handler Pattern
```ts
import { NextRequest } from "next/server";
import { createUserHandler } from "@/features/users/api/create-user";

export async function POST(req: NextRequest) {
  return createUserHandler(req);
}
```

## Service Pattern
```ts
export async function createUser(data: CreateUserDTO) {
  const validated = UserValidator.parse(data);
  return userRepository.save(validated);
}
```
## Repository Pattern
```ts
export const userRepository = {
  async save(data) {
    return prisma.user.create({ data });
  },
  async findAll() {
    return prisma.user.findMany();
  }
};
```

## Component Pattern (Shadcn)

```ts
export function CardContainer({ children }) {
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white">
      {children}
    </div>
  );
}
```

## Hook Pattern
```ts
export function useUsersList() {
  const { data, error } = useSWR("/api/users");
  return { users: data, error };
}
```

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
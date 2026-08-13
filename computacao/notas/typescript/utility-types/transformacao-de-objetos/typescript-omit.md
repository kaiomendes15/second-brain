---
tipo: conceito
area: computacao
tags: [typescript, utility-types, omit]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — Omit<Type, Keys>

Constrói um tipo pegando todas as propriedades de `Type` e removendo `Keys` (um literal de string ou union de literais de string). É o oposto de [[typescript-pick|Pick]].

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
```

---
tipo: conceito
area: computacao
tags: [typescript, utility-types, pick]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — Pick<Type, Keys>

Constrói um tipo escolhendo o conjunto de propriedades `Keys` (um literal de string ou union de literais de string) a partir de `Type`.

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

É o oposto de [[typescript-omit|Omit]].

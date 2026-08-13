---
tipo: conceito
area: computacao
tags: [typescript, utility-types, partial]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — Partial\<Type>

Constrói um tipo com todas as propriedades de `Type` definidas como opcionais. Esse utilitário retorna um tipo que representa todos os subconjuntos possíveis de um tipo dado.

```ts
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

Útil para funções de atualização parcial (patch), onde o chamador só precisa informar os campos que quer mudar.

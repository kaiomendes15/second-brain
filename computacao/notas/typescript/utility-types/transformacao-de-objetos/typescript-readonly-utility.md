---
tipo: conceito
area: computacao
tags: [typescript, utility-types, readonly]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — Readonly\<Type>

Constrói um tipo com todas as propriedades de `Type` definidas como `readonly`, ou seja, as propriedades do tipo construído não podem ser reatribuídas.

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";
// Cannot assign to 'title' because it is a read-only property.
```

Útil para representar expressões de atribuição que falhariam em runtime (por exemplo, ao tentar reatribuir propriedades de um objeto congelado com `Object.freeze`):

```ts
function freeze<Type>(obj: Type): Readonly<Type>;
```

Diferente do modificador `readonly` aplicado a uma única propriedade (ver [[typescript-readonly-properties]]), este utilitário aplica `readonly` a todas as propriedades do tipo de uma vez.

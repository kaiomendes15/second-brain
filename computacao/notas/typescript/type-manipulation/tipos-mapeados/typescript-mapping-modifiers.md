---
tipo: conceito
area: computacao
tags: [typescript, type-manipulation, mapped-types, readonly, optional]
atualizado: 2026-07-20
fonte_url: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
---

# TypeScript — Mapping Modifiers

Existem dois modificadores adicionais que podem ser aplicados durante o mapeamento em um [[typescript-mapped-types|mapped type]]: `readonly` e `?`, que afetam mutabilidade e opcionalidade respectivamente.

É possível remover ou adicionar esses modificadores prefixando com `-` ou `+`. Sem prefixo, `+` é assumido.

Removendo `readonly`:

```ts
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
// type UnlockedAccount = {
//   id: string;
//   name: string;
// }
```

Removendo `?` (opcionalidade), tornando tudo obrigatório:

```ts
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
// type User = {
//   id: string;
//   name: string;
//   age: number;
// }
```

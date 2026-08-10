---
tipo: conceito
area: computacao
tags: [typescript, type-manipulation, conditional-types, union-types]
atualizado: 2026-07-20
fonte_url: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
---

# TypeScript — Distributive Conditional Types

Quando um [[typescript-conditional-types|conditional type]] atua sobre um tipo genérico, ele se torna *distributivo* ao receber uma [[typescript-union-types|union type]] — o conditional type é aplicado a cada membro da union separadamente.

```ts
type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;
// type StrArrOrNumArr = string[] | number[]
```

O que acontece é que `ToArray` distribui sobre `string | number`, mapeando cada membro da union, o que equivale efetivamente a:

```ts
ToArray<string> | ToArray<number>;
```

resultando em:

```ts
string[] | number[];
```

Normalmente a distributividade é o comportamento desejado. Para evitá-la, basta envolver cada lado do `extends` com colchetes:

```ts
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'ArrOfStrOrNum' não é mais uma union
type ArrOfStrOrNum = ToArrayNonDist<string | number>;
// type ArrOfStrOrNum = (string | number)[]
```

---
tipo: conceito
area: computacao
tags: [typescript, type-manipulation, conditional-types, infer]
atualizado: 2026-07-20
fonte_url: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
---

# TypeScript — infer

`infer` é uma keyword usada apenas dentro do branch de comparação (`extends`) de um [[typescript-conditional-types|conditional type]], para declarar uma nova variável de tipo genérica a partir do que foi comparado, em vez de extrair a informação "manualmente" (ex: via indexed access, como em [[typescript-conditional-type-constraints|Flatten]]):

```ts
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
```

Aqui, `infer Item` introduz declarativamente `Item` como o tipo de elemento do array, sem precisar escrever como escavar essa informação.

Um uso comum é extrair o tipo de retorno de uma função:

```ts
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;                    // number
type Str = GetReturnType<(x: string) => string>;           // string
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>; // boolean[]
```

Ao inferir a partir de um tipo com múltiplas call signatures (como uma função com [[typescript-function-overloads|overloads]]), a inferência usa a *última* assinatura — presumivelmente a mais permissiva/genérica. Não é possível fazer resolução de overload baseada em uma lista de argumentos:

```ts
declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;
// type T1 = string | number
```

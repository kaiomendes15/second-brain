---
tipo: conceito
area: computacao
tags: [typescript, utility-types, required]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — Required\<Type>

Constrói um tipo com todas as propriedades de `Type` definidas como obrigatórias. É o oposto de [[typescript-partial|Partial]].

```ts
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```

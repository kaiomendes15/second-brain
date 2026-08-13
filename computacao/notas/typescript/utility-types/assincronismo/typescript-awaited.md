---
tipo: conceito
area: computacao
tags: [typescript, utility-types, awaited, async]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — Awaited\<Type>

Modela operações como `await` em funções `async`, ou o método `.then()` em `Promise`s — especificamente, a forma como elas desembrulham `Promise`s recursivamente.

```ts
type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = number | boolean
```

Útil combinado com [[typescript-returntype|ReturnType]] para extrair o tipo resolvido de uma função `async`: `Awaited<ReturnType<typeof fn>>`.

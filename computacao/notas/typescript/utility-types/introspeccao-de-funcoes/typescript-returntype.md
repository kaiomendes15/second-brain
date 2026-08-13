---
tipo: conceito
area: computacao
tags: [typescript, utility-types, returntype]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — ReturnType\<Type>

Constrói um tipo consistindo do tipo de retorno da função `Type`.

Para funções com overload, usa o tipo de retorno da *última* assinatura.

```ts
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
// type T0 = string

type T1 = ReturnType<(s: string) => void>;
// type T1 = void

type T2 = ReturnType<<T>() => T>;
// type T2 = unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T3 = number[]

type T4 = ReturnType<typeof f1>;
// type T4 = { a: number; b: string }

type T5 = ReturnType<any>;
// type T5 = any

type T6 = ReturnType<never>;
// type T6 = never

type T7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T7 = any

type T8 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// type T8 = any
```

Para desembrulhar uma `Promise` retornada por uma função `async`, combine com [[typescript-awaited|Awaited]]: `Awaited<ReturnType<typeof fn>>`.

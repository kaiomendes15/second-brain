---
tipo: conceito
area: computacao
tags: [typescript, utility-types, parameters]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — Parameters\<Type>

Constrói um tipo tupla a partir dos tipos usados nos parâmetros de um tipo de função `Type`.

Para funções com overload, usa os parâmetros da *última* assinatura (ver `infer` em [[typescript-infer-keyword]]).

```ts
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;
// type T0 = []

type T1 = Parameters<(s: string) => void>;
// type T1 = [s: string]

type T2 = Parameters<<T>(arg: T) => T>;
// type T2 = [arg: unknown]

type T3 = Parameters<typeof f1>;
// type T3 = [arg: { a: number; b: string }]

type T4 = Parameters<any>;
// type T4 = unknown[]

type T5 = Parameters<never>;
// type T5 = never

type T6 = Parameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T6 = never

type T7 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// type T7 = never
```

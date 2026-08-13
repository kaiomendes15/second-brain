---
tipo: conceito
area: computacao
tags: [typescript, utility-types, instancetype]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — InstanceType\<Type>

Constrói um tipo consistindo do tipo de instância de uma função construtora em `Type`.

```ts
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// type T0 = C

type T1 = InstanceType<any>;
// type T1 = any

type T2 = InstanceType<never>;
// type T2 = never

type T3 = InstanceType<string>;
// Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
// type T3 = any

type T4 = InstanceType<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// type T4 = any
```

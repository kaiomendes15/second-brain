---
tipo: conceito
area: computacao
tags: [typescript, utility-types, constructorparameters]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — ConstructorParameters\<Type>

Constrói um tipo tupla (ou array) a partir dos tipos de um tipo de função construtora. Produz um tipo tupla com todos os tipos de parâmetro (ou o tipo `never` se `Type` não for uma função).

```ts
type T0 = ConstructorParameters<ErrorConstructor>;
// type T0 = [message?: string]

type T1 = ConstructorParameters<FunctionConstructor>;
// type T1 = string[]

type T2 = ConstructorParameters<RegExpConstructor>;
// type T2 = [pattern: string | RegExp, flags?: string]

class C {
  constructor(a: number, b: string) {}
}
type T3 = ConstructorParameters<typeof C>;
// type T3 = [a: number, b: string]

type T4 = ConstructorParameters<any>;
// type T4 = unknown[]

type T5 = ConstructorParameters<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// type T5 = never
```

Análogo a [[typescript-parameters|Parameters]], mas para funções construtoras (`new`).

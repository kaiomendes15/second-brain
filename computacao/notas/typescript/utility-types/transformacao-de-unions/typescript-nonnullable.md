---
tipo: conceito
area: computacao
tags: [typescript, utility-types, nonnullable]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — NonNullable\<Type>

Constrói um tipo excluindo `null` e `undefined` de `Type`.

```ts
type T0 = NonNullable<string | number | undefined>;
// type T0 = string | number

type T1 = NonNullable<string[] | null | undefined>;
// type T1 = string[]
```

Relacionado a como o TypeScript trata `null`/`undefined` como tipos distintos sob `strictNullChecks` (ver [[typescript-null-undefined]]).

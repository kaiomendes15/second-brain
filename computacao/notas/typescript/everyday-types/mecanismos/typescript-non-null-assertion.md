---
tipo: conceito
area: computacao
tags: [typescript, non-null-assertion, null, undefined, type-assertions, tipagem]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Non-null Assertion Operator (`!`)

O operador `!` (postfix) remove `null` e `undefined` de um tipo sem nenhuma checagem explícita. É efetivamente uma [[typescript-type-assertions|type assertion]] de que o valor não é `null` nem `undefined`:

```ts
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed()); // sem erro
}
```

Assim como outras type assertions, **não altera o comportamento em runtime**. Só use `!` quando você tem certeza de que o valor não pode ser [[typescript-null-undefined|`null` ou `undefined`]] naquele ponto.

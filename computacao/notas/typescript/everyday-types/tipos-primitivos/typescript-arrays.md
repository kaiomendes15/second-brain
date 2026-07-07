---
tipo: conceito
area: computacao
tags: [typescript, arrays, generics, tipos]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Arrays

Para tipar um array como `[1, 2, 3]`, use a sintaxe `number[]`. Funciona para qualquer tipo — `string[]` é um array de strings, etc.

A mesma coisa pode ser escrita como `Array<number>`, que é equivalente. A sintaxe `T<U>` será aprofundada ao estudar generics.

```ts
const nums: number[] = [1, 2, 3];
const strs: Array<string> = ["a", "b"];
```

> `[number]` é diferente — isso é uma Tuple, não um array de numbers.

---
tipo: conceito
area: computacao
tags: [typescript, object-types, tuples, readonly]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — readonly Tuple Types

[[typescript-tuple-types|Tuple types]] têm variantes `readonly`, especificadas com o modificador `readonly` na frente — igual à sintaxe curta de array:

```ts
function doSomething(pair: readonly [string, number]) {
  // ...
}
```

Como esperado, escrever em qualquer posição de uma tupla `readonly` não é permitido:

```ts
function doSomething(pair: readonly [string, number]) {
  pair[0] = "hello!";
  // Cannot assign to '0' because it is a read-only property.
}
```

Tuplas costumam ser criadas e nunca modificadas na maior parte do código, então anotar como `readonly` por padrão é uma boa prática. Isso importa ainda mais porque **array literals com `as const` são inferidos como tuplas `readonly`**:

```ts
let point = [3, 4] as const;

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

distanceFromOrigin(point);
// Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'.
// The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.
```

`distanceFromOrigin` nunca modifica seus elementos, mas espera uma tupla mutável — e como `point` foi inferido como `readonly [3, 4]`, não é compatível com `[number, number]`, já que esse tipo não garante que os elementos de `point` não serão mutados.

Ver [[typescript-readonlyarray-type]] para o equivalente em arrays.

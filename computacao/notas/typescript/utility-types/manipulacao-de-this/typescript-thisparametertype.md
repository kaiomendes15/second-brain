---
tipo: conceito
area: computacao
tags: [typescript, utility-types, thisparametertype]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — ThisParameterType\<Type>

Extrai o tipo do parâmetro `this` de um tipo de função, ou `unknown` se o tipo de função não tiver parâmetro `this`.

```ts
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
```

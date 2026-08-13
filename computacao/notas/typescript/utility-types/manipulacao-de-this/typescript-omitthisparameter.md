---
tipo: conceito
area: computacao
tags: [typescript, utility-types, omitthisparameter]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — OmitThisParameter\<Type>

Remove o parâmetro `this` de `Type`. Se `Type` não tiver um parâmetro `this` declarado explicitamente, o resultado é simplesmente `Type`. Caso contrário, um novo tipo de função sem parâmetro `this` é criado a partir de `Type`. Generics são apagados e apenas a última assinatura de overload é propagada para o novo tipo de função.

```ts
function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());
```

Complementar a [[typescript-thisparametertype|ThisParameterType]]: um extrai o tipo de `this`, o outro remove o parâmetro `this` do tipo da função.

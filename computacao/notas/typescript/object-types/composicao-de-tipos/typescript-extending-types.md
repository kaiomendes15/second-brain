---
tipo: conceito
area: computacao
tags: [typescript, object-types, interfaces, extends]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — Extending Types (interface extends)

É comum ter tipos que são versões mais específicas de outros tipos. Em vez de repetir campos, uma `interface` pode *estender* outra com `extends`, herdando seus membros e adicionando só o que é novo:

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```

Isso reduz boilerplate e sinaliza intenção: um leitor sabe que `AddressWithUnit` e `BasicAddress` estão relacionados porque compartilham `street`, `city` etc. sem precisar repetir a declaração.

Uma `interface` pode estender **múltiplos tipos** ao mesmo tempo:

```ts
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};
```

Ver [[typescript-intersection-types]] para o equivalente via `type` + `&`, e [[typescript-interface-extends-vs-intersection]] para a diferença prática entre as duas abordagens.

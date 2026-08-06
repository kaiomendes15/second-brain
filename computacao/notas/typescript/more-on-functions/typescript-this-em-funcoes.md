---
tipo: conceito
area: computacao
tags: [typescript, functions, this]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Declaring this in a Function

O TypeScript infere o que `this` deve ser via análise de fluxo de código, como neste exemplo:

```ts
const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
```

Aqui, `this` dentro de `user.becomeAdmin` é entendido como o objeto externo `user`. Mas em muitos casos é preciso mais controle sobre o que `this` representa. Como a especificação de JavaScript proíbe um parâmetro literalmente chamado `this`, o TypeScript reserva essa posição sintática para declarar o tipo de `this` no corpo da função:

```ts
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
```

Esse padrão é comum em APIs estilo callback, onde outro objeto controla quando a função é chamada. É preciso usar `function` — arrow functions não têm esse comportamento, pois capturam o `this` do escopo léxico:

```ts
const admins = db.filterUsers(() => this.admin);
// Erro: a arrow function captura o valor global de 'this'.
```

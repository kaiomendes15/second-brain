---
tipo: conceito
area: computacao
tags: [typescript, functions, destructuring]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Parameter Destructuring

Destructuring de parâmetro permite desempacotar um objeto recebido como argumento em uma ou mais variáveis locais no corpo da função. Em JavaScript:

```js
function sum({ a, b, c }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
```

No TypeScript, a type annotation do objeto vai depois da sintaxe de destructuring:

```ts
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
```

Fica verboso, mas dá pra usar um tipo nomeado:

```ts
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
```

---
tipo: conceito
area: computacao
tags: [typescript, contextual-typing, inferencia, funcoes-anonimas, tipagem]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Contextual Typing

Quando uma função anônima aparece em um lugar onde o TypeScript consegue determinar como ela será chamada, seus parâmetros recebem tipos automaticamente — sem annotations explícitas.

```ts
const names = ["Alice", "Bob", "Eve"];

// O parâmetro s é inferido como string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// O mesmo vale para arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
```

O TypeScript usa o tipo de `forEach` combinado com o tipo inferido do array para determinar que `s` é `string`.

Esse processo é chamado de *contextual typing* porque o **contexto** em que a função ocorre informa qual tipo ela deve ter. É uma extensão da [[typescript-inferencia-de-tipos]] geral — você não precisa aprender as regras explicitamente, mas saber que o mecanismo existe ajuda a notar quando annotations são desnecessárias.

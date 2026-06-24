---
tipo: conceito
area: computacao
tags: [typescript, erased-types, compilacao, runtime, javascript]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — Erased Types

As type annotations do TypeScript são **completamente removidas durante a compilação**. O JavaScript resultante não contém nenhum rastro delas.

## Exemplo

Código TypeScript:
```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
```

JavaScript gerado pelo [[typescript-compilador-tsc]]:
```js
function greet(person, date) {
  console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
```

As anotações `: string` e `: Date` desapareceram.

## Consequência fundamental

> **Type annotations nunca alteram o comportamento do programa em runtime.**

Elas existem exclusivamente para o type-checker. Browsers e runtimes como Node.js não entendem TypeScript — eles executam apenas o JavaScript gerado.

## Relação com outros conceitos

- Além das annotations, o `tsc` também pode reescrever sintaxe moderna — veja [[typescript-downleveling]].
- O que é removido vs. o que é transformado são coisas distintas: tipos são *apagados*, sintaxe nova é *convertida*.

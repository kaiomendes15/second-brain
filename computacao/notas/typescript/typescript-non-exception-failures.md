---
tipo: conceito
area: computacao
tags: [typescript, static-type-checking, non-exception-failures, javascript, runtime-errors]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — Non-exception Failures

O JavaScript define em sua especificação (ECMAScript) quais situações lançam um erro em runtime. Mas nem todo comportamento problemático resulta em exceção — muitos são silenciosos.

## Exemplo: propriedade inexistente

```js
const user = { name: "Daniel", age: 26 };
user.location; // retorna undefined — sem erro!
```

O JavaScript simplesmente retorna `undefined`. O TypeScript trata isso como erro:

```ts
const user = { name: "Daniel", age: 26 };
user.location;
// Erro: Property 'location' does not exist on type '{ name: string; age: number; }'
```

## Outros exemplos capturados pelo TypeScript

**Typos em métodos:**
```ts
const announcement = "Hello World!";
announcement.toLocaleLowercase(); // typo — método não existe
```

**Função não chamada usada como valor:**
```ts
function flipCoin() {
  return Math.random < 0.5; // faltou () — Math.random é uma função, não um número
}
```

**Lógica inalcançável:**
```ts
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // Nunca alcançado: se chegou aqui, value === "a", nunca "b"
}
```

## Relação com outros conceitos

- Esses erros são detectados pela [[typescript-verificacao-de-tipos-estatica]] antes da execução.
- O nível de rigor na detecção é controlado pelo [[typescript-modo-strict]].

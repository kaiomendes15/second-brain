---
tipo: conceito
area: computacao
tags: [typescript, object-types, excess-property-checks]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — Excess Property Checks

Object literals recebem um tratamento especial: quando são atribuídos diretamente a uma variável ou passados como argumento, o TypeScript checa se têm propriedades a mais do que o "target type" espera — e se tiverem, erro:

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({ colour: "red", width: 100 });
// Object literal may only specify known properties, but 'colour' does not exist
// in type 'SquareConfig'. Did you mean to write 'color'?
```

Estruturalmente, `colour` seria uma propriedade "insignificante" e o tipo continuaria compatível — mas o TypeScript assume que isso é provavelmente um bug (erro de digitação), daí a checagem extra só para object literals.

**Três formas de contornar a checagem** (nem sempre recomendadas):

1. Type assertion:
```ts
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

2. Adicionar um index signature de string, se o tipo realmente aceita propriedades extras:
```ts
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: unknown;
}
```
Ver [[typescript-index-signatures]].

3. Atribuir o objeto a uma variável intermediária antes de passá-la — variáveis não sofrem excess property checking, só literais:
```ts
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions); // sem erro
```
Isso só funciona se `squareOptions` tiver pelo menos uma propriedade em comum com `SquareConfig` (aqui, `width`). Sem propriedade em comum, dá erro de "no properties in common".

A recomendação da documentação: na maioria dos casos, um erro de excess property é sinal de um bug real (nome errado) — o ideal é corrigir o tipo ou o literal, não burlar a checagem.

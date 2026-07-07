---
tipo: conceito
area: computacao
tags: [typescript, narrowing, union-types, typeof, tipagem, controle-de-fluxo]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Narrowing

*Narrowing* ocorre quando o TypeScript consegue deduzir um tipo mais específico para um valor a partir da estrutura do código. É a solução para usar operações específicas de um membro de uma [[typescript-union-types|union type]].

## Com `typeof`

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    // Neste branch: id é 'string'
    console.log(id.toUpperCase());
  } else {
    // Aqui: id é 'number'
    console.log(id);
  }
}
```

## Com `Array.isArray`

```ts
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Aqui: x é 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Aqui: x é 'string'
    console.log("Welcome lone traveler " + x);
  }
}
```

No branch `else`, não é necessário fazer nada especial — se `x` não é `string[]`, então deve ser `string`.

## Sem narrowing (método comum a todos os membros)

Quando todos os membros de uma union compartilham um método, ele pode ser chamado diretamente:

```ts
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3); // slice existe em ambos
}
```

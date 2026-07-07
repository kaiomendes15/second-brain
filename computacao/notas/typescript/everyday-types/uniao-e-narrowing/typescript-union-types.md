---
tipo: conceito
area: computacao
tags: [typescript, union-types, tipos, combinacao, operadores]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Union Types

Um *union type* é formado por dois ou mais tipos com `|`, representando valores que podem ser **qualquer um** desses tipos. Cada tipo é chamado de *membro* da union.

```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101);             // OK
printId("202");           // OK
printId({ myID: 22342 }); // Erro
```

O separador `|` também pode aparecer antes do primeiro membro (útil para formatação multiline).

## Restrições de uso

O TypeScript só permite operações que sejam válidas para **todos os membros** da union. Para usar uma operação exclusiva de um membro, é preciso fazer [[typescript-narrowing|narrowing]]:

```ts
function printId(id: number | string) {
  // Erro: 'toUpperCase' não existe em 'number'
  console.log(id.toUpperCase());
}
```

Se todos os membros compartilham um método, ele pode ser usado diretamente sem narrowing:

```ts
// slice existe em string[] e em string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```

> A nomenclatura "union" vem da teoria de tipos: `number | string` é a união dos *valores* de cada tipo. As operações disponíveis são a *interseção* das operações de cada membro.

---
tipo: conceito
area: computacao
tags: [typescript, type-aliases, tipos, reutilizacao, tipagem]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Type Aliases

Um *type alias* é um nome para qualquer tipo. Permite reutilizar o mesmo tipo sem repeti-lo em cada annotation.

```ts
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("x: " + pt.x + ", y: " + pt.y);
}
```

Type aliases também nomeiam [[typescript-union-types|union types]]:

```ts
type ID = number | string;
```

## Importante: aliases são apenas aliases

Um type alias não cria uma versão nova ou distinta do tipo. Ao usar o alias, é exatamente como se você tivesse escrito o tipo original. Por isso, este código é válido:

```ts
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

let userInput = sanitizeInput(getInput());
userInput = "new input"; // ainda permitido — é uma string
```

Para as diferenças entre type aliases e interfaces, veja [[typescript-type-aliases-vs-interfaces]].

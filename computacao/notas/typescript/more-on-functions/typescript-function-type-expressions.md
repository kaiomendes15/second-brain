---
tipo: conceito
area: computacao
tags: [typescript, functions, function-type-expressions]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Function Type Expressions

A forma mais simples de descrever uma função é com uma *function type expression*, sintaticamente parecida com uma arrow function:

```ts
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
```

`(a: string) => void` significa "uma função com um parâmetro `a` do tipo `string`, que não retorna valor". Assim como em declarações de função, um parâmetro sem tipo especificado é implicitamente `any`.

> O nome do parâmetro é **obrigatório** na sintaxe. `(string) => void` significa "uma função com um parâmetro chamado `string` do tipo `any`" — não o que parece!

Um type alias pode nomear o tipo de função:

```ts
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
```

Ver [[typescript-call-signatures]] para descrever uma função que também tem propriedades — algo que a function type expression sozinha não permite.

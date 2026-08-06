---
tipo: conceito
area: computacao
tags: [typescript, functions, call-signatures]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Call Signatures

Em JavaScript, funções podem ter propriedades além de serem chamáveis. A sintaxe de [[typescript-function-type-expressions|function type expression]] não permite declarar propriedades — para isso, escreve-se uma *call signature* dentro de um object type:

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);
```

A sintaxe é ligeiramente diferente da function type expression: usa-se `:` entre a lista de parâmetros e o tipo de retorno, em vez de `=>`.

Ver [[typescript-construct-signatures]] para o equivalente com `new`.

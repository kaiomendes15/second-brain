---
tipo: conceito
area: computacao
tags: [typescript, functions, generics]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Generic Functions

É comum escrever uma função onde o tipo da entrada se relaciona com o tipo da saída, ou onde os tipos de duas entradas se relacionam entre si. Considere uma função que retorna o primeiro elemento de um array:

```ts
function firstElement(arr: any[]) {
  return arr[0];
}
```

Funciona, mas o retorno é `any` — perde a informação do tipo do elemento. *Generics* servem exatamente para descrever essa correspondência entre valores, declarando um *type parameter* na assinatura:

```ts
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
```

Ao usar `Type` em dois lugares (parâmetro e retorno), cria-se um link entre entrada e saída — a chamada retorna um tipo mais específico:

```ts
const s = firstElement(["a", "b", "c"]); // s: string
const n = firstElement([1, 2, 3]);       // n: number
const u = firstElement([]);              // u: undefined
```

## Inference

Não é preciso especificar `Type` manualmente — o TypeScript *infere* automaticamente. Também é possível usar múltiplos type parameters, como numa versão standalone de `map`:

```ts
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// Parâmetro 'n' é 'string'; 'parsed' é 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

Aqui o TypeScript infere `Input` a partir do array `string[]` recebido, e `Output` a partir do retorno da função passada.

Ver [[typescript-generic-constraints]] para limitar quais tipos um type parameter aceita, [[typescript-especificar-type-arguments]] para os casos em que a inferência falha, e [[typescript-boas-praticas-generics]] para diretrizes de quando (não) usar generics.

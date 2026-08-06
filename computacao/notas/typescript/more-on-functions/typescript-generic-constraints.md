---
tipo: conceito
area: computacao
tags: [typescript, functions, generics, constraints]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Constraints em Generics

Um [[typescript-generic-functions|type parameter genérico]] às vezes precisa ser limitado a um subconjunto de tipos — para isso usa-se uma *constraint*, escrita como uma cláusula `extends`.

Exemplo: uma função que retorna o mais longo entre dois valores precisa de uma propriedade `length` numérica:

```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);   // number[]
const longerString = longest("alice", "bob");      // 'alice' | 'bob'

const notOK = longest(10, 100);
// Erro: number não tem propriedade 'length'
```

O retorno de `longest` é inferido automaticamente — inferência de retorno também funciona em funções genéricas. A constraint `{ length: number }` é o que permite acessar `.length` em `a` e `b`; sem ela, o acesso não seria permitido porque os valores poderiam ser de outro tipo sem essa propriedade.

## Working with Constrained Values

Um erro comum ao trabalhar com constraints:

```ts
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
    // Erro: '{ length: number; }' é atribuível à constraint de 'Type',
    // mas 'Type' pode ter sido instanciado com um subtipo mais específico
    // da constraint '{ length: number; }'.
  }
}
```

O problema: a função promete devolver o **mesmo tipo** de objeto que recebeu, não só *algum* objeto que satisfaz a constraint. Se isso fosse permitido, código como este quebraria em runtime:

```ts
// 'arr' recebe { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// crasha aqui: arrays têm 'slice', mas o objeto retornado não tem!
console.log(arr.slice(0));
```

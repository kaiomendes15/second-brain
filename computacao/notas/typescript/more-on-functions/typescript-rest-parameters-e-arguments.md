---
tipo: conceito
area: computacao
tags: [typescript, functions, rest-parameters, spread]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Rest Parameters e Rest Arguments

## Rest Parameters

Além de [[typescript-optional-parameters|parâmetros opcionais]] ou [[typescript-function-overloads|overloads]], é possível aceitar um número *ilimitado* de argumentos com *rest parameters*. Um rest parameter aparece depois de todos os outros e usa `...`:

```ts
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
const a = multiply(10, 1, 2, 3, 4); // [10, 20, 30, 40]
```

No TypeScript, a type annotation desses parâmetros é implicitamente `any[]` (não `any`), e qualquer anotação explícita precisa ser `Array<T>`, `T[]` ou um tuple type.

## Rest Arguments

Também é possível *fornecer* um número variável de argumentos a partir de um iterável, via spread syntax:

```ts
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
```

O TypeScript não assume que arrays são imutáveis por padrão, o que pode surpreender:

```ts
// Inferido como number[] — "array com zero ou mais números", não exatamente dois
const args = [8, 5];
const angle = Math.atan2(...args);
// Erro: um spread argument precisa ter tuple type ou ir para um rest parameter.
```

A solução mais direta é um contexto `const`:

```ts
// Inferido como tupla de comprimento 2
const args = [8, 5] as const;
const angle = Math.atan2(...args); // OK
```

Usar rest arguments pode exigir habilitar [`downlevelIteration`](https://www.typescriptlang.org/tsconfig#downlevelIteration) ao mirar runtimes mais antigos.

---
tipo: conceito
area: computacao
tags: [typescript, object-types, tuples]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — Tuple Types

Um *tuple type* é outra variante de `Array` que sabe exatamente quantos elementos contém e exatamente quais tipos ocupam cada posição:

```ts
type StringNumberPair = [string, number];
```

`StringNumberPair` descreve arrays cujo índice `0` é `string` e cujo índice `1` é `number`. Tuplas não têm representação em runtime, mas são significativas pro type system:

```ts
function doSomething(pair: [string, number]) {
  const a = pair[0]; // const a: string
  const b = pair[1]; // const b: number
}

doSomething(["hello", 42]);
```

Indexar além do número de elementos declarados é erro:

```ts
function doSomething(pair: [string, number]) {
  const c = pair[2];
  // Tuple type '[string, number]' of length '2' has no element at index '2'.
}
```

Tuplas podem ser destructuradas como qualquer array em JavaScript:

```ts
function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;
  console.log(inputString); // const inputString: string
  console.log(hash);        // const hash: number
}
```

> Tuplas são úteis em APIs fortemente baseadas em convenção, onde o significado de cada elemento é "óbvio" — mas se o time não concorda sobre o que é óbvio, objetos com nomes de propriedade descritivos podem ser melhor escolha.

Fora as checagens de tamanho, tuplas simples são equivalentes a um `Array` que declara propriedades para índices específicos e um `length` como literal numérico:

```ts
interface StringNumberPair {
  length: 2;
  0: string;
  1: number;
  slice(start?: number, end?: number): Array<string | number>;
}
```

**Elementos opcionais** — um `?` depois do tipo do elemento, só permitido no final, também afeta o tipo de `length`:

```ts
type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord; // const z: number | undefined
  console.log(`Provided coordinates had ${coord.length} dimensions`);
  // (property) length: 2 | 3
}
```

**Rest elements** — precisam ser array/tuple type, e podem aparecer em qualquer posição:

```ts
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
```

- `StringNumberBooleans`: `string` e `number` fixos no início, seguidos de qualquer quantidade de `boolean`.
- `StringBooleansNumber`: `string` no início, qualquer quantidade de `boolean` no meio, `number` no fim.
- `BooleansStringNumber`: qualquer quantidade de `boolean` no início, terminando em `string` e `number`.

Uma tupla com rest element não tem `length` fixo — só um conjunto de posições conhecidas:

```ts
const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];
```

Elementos opcionais e rest existem principalmente para corresponder tuplas com listas de parâmetros — tuplas podem ser usadas em rest parameters e argumentos:

```ts
function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
}

// equivalente a:
function readButtonInput(name: string, version: number, ...input: boolean[]) {
  // ...
}
```

Isso é útil pra aceitar um número variável de argumentos com um mínimo obrigatório, sem precisar de variáveis intermediárias.

Ver [[typescript-readonly-tuple-types]] para a variante `readonly`.

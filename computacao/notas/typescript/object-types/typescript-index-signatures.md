---
tipo: conceito
area: computacao
tags: [typescript, object-types, index-signatures]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — Index Signatures

Quando você não sabe todos os nomes das propriedades de um tipo antecipadamente, mas conhece a forma dos valores, pode usar uma *index signature*:

```ts
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1]; // const secondItem: string
```

Aqui, `StringArray` diz: "quando indexado com um `number`, retorna um `string`".

Só alguns tipos são permitidos como chave de index signature: `string`, `number`, `symbol`, template string patterns e union types compostas só por esses.

É possível ter múltiplos indexadores (`number` e `string`), mas o tipo retornado pelo indexador numérico precisa ser subtipo do retornado pelo indexador de string — porque, em runtime, JavaScript converte índices numéricos para string antes de indexar (`100` vira `"100"`):

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Erro: indexar com string numérica poderia devolver um Animal totalmente diferente!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}
```

Um index signature de string implica que `obj.property` também está disponível como `obj["property"]` — por isso todas as propriedades nomeadas precisam ser compatíveis com o tipo do índice:

```ts
interface NumberDictionary {
  [index: string]: number;

  length: number; // ok
  name: string;
  // Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}
```

Isso é contornável com uma union no índice:

```ts
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length é number
  name: string;   // ok, name é string
}
```

Index signatures também podem ser `readonly`, o que impede escrita nos índices:

```ts
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
// Index signature in type 'ReadonlyStringArray' only permits reading.
```

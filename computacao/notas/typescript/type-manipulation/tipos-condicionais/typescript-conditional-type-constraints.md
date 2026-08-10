---
tipo: conceito
area: computacao
tags: [typescript, type-manipulation, conditional-types, generics]
atualizado: 2026-07-20
fonte_url: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
---

# TypeScript — Conditional Type Constraints

Assim como o [[typescript-narrowing|narrowing]] com type guards dá um tipo mais específico, o branch verdadeiro de um [[typescript-conditional-types|conditional type]] constrange ainda mais o generic pelo tipo com que ele foi comparado.

Tomando este exemplo, o TypeScript erra porque `T` não é conhecido por ter uma propriedade `message`:

```ts
type MessageOf<T> = T["message"];
// Type '"message"' cannot be used to index type 'T'.
```

Uma solução é constranger `T` diretamente:

```ts
type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf<Email>;
// type EmailMessageContents = string
```

Mas isso obriga todo tipo usado com `MessageOf` a ter `message`. Para aceitar qualquer tipo e cair em `never` quando `message` não existir, move-se a constraint para dentro de um conditional type:

```ts
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}
interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>; // string
type DogMessageContents = MessageOf<Dog>;     // never
```

Dentro do branch verdadeiro, o TypeScript sabe que `T` *terá* a propriedade `message`.

Outro exemplo: um `Flatten` que extrai o tipo de elemento de um array e deixa outros tipos intactos:

```ts
type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>; // string
type Num = Flatten<number>;   // number
```

Quando `Flatten` recebe um array, usa indexed access com `number` (ver [[typescript-generic-object-types]]) para extrair o tipo de elemento; caso contrário, devolve o próprio tipo recebido.

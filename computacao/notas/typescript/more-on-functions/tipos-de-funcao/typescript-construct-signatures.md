---
tipo: conceito
area: computacao
tags: [typescript, functions, construct-signatures]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Construct Signatures

Funções JavaScript também podem ser invocadas com `new` — o TypeScript chama isso de *construtores*, porque em geral criam um novo objeto. Uma *construct signature* se escreve adicionando `new` na frente de uma [[typescript-call-signatures|call signature]]:

```ts
type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

Alguns objetos, como `Date`, podem ser chamados com ou sem `new`. É possível combinar call e construct signatures arbitrariamente no mesmo tipo:

```ts
interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

function fn(ctor: CallOrConstruct) {
  // Passar um number casa com a primeira definição
  console.log(ctor(10));
  // (parameter) ctor: CallOrConstruct — (n?: number) => string

  // Passar um string com 'new' casa com a segunda definição
  console.log(new ctor("10"));
  // (parameter) ctor: CallOrConstruct — new (s: string) => Date
}

fn(Date);
```

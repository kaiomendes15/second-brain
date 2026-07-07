---
tipo: conceito
area: computacao
tags: [typescript, any, tipagem, type-checking]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — O tipo `any`

`any` é um tipo especial do TypeScript para quando você não quer que um valor cause erros de type-checking.

Com `any`, você pode:
- Acessar qualquer propriedade (que também será `any`)
- Chamar como se fosse uma função
- Atribuir a (ou de) um valor de qualquer tipo
- Fazer praticamente qualquer coisa sintaticamente legal

```ts
let obj: any = { x: 0 };
obj.foo();            // sem erro
obj();                // sem erro
obj.bar = 100;        // sem erro
obj = "hello";        // sem erro
const n: number = obj; // sem erro
```

`any` é útil quando você não quer escrever um tipo longo apenas para convencer o TypeScript de que uma linha está correta.

O problema é que `any` **desabilita toda verificação de tipos** — você perde as garantias do type-checker para aquela variável. A flag [[typescript-no-implicit-any]] evita que `any` apareça de forma implícita.

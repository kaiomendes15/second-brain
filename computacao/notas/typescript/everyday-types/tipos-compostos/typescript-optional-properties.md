---
tipo: conceito
area: computacao
tags: [typescript, optional-properties, objetos, undefined, tipagem]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Optional Properties

Em [[typescript-object-types|object types]], propriedades podem ser marcadas como opcionais adicionando `?` após o nome:

```ts
function printName(obj: { first: string; last?: string }) {
  // ...
}
printName({ first: "Bob" });                      // OK
printName({ first: "Alice", last: "Alisson" });   // OK
```

## Lendo uma propriedade opcional

Acessar uma propriedade opcional sem checar pode retornar `undefined`. Para usá-la com segurança, é necessário checar antes:

```ts
function printName(obj: { first: string; last?: string }) {
  // Erro: 'obj.last' is possibly 'undefined'
  console.log(obj.last.toUpperCase());

  // Correto: checagem explícita
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }

  // Alternativa com optional chaining
  console.log(obj.last?.toUpperCase());
}
```

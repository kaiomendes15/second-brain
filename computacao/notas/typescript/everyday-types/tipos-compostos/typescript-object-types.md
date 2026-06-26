---
tipo: conceito
area: computacao
tags: [typescript, object-types, objetos, tipagem, propriedades]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Object Types

Além dos primitivos, o tipo mais comum é o *object type* — qualquer valor JavaScript com propriedades. Para definir um object type inline, liste suas propriedades e os tipos de cada uma:

```ts
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

- Use `,` ou `;` para separar as propriedades (o último separador é opcional)
- O tipo de cada propriedade é opcional — se omitido, é assumido como `any`

Object types podem ter [[typescript-optional-properties|propriedades opcionais]].

Para reutilizar um object type com nome próprio, use [[typescript-type-aliases]] ou [[typescript-interfaces]].

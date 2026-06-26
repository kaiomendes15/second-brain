---
tipo: conceito
area: computacao
tags: [typescript, interfaces, object-types, tipagem, estrutural]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Interfaces

Uma *interface declaration* é outra forma de nomear um [[typescript-object-types|object type]]:

```ts
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("x: " + pt.x + ", y: " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

O comportamento é idêntico a usar um object type anônimo inline. O TypeScript se preocupa apenas com a **estrutura** do valor passado — se ele tem as propriedades esperadas. Isso é a essência do [[typescript-structural-type-system]].

Para as diferenças entre interfaces e type aliases, veja [[typescript-type-aliases-vs-interfaces]].

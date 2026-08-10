---
tipo: conceito
area: computacao
tags: [typescript, object-types, intersection-types]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — Intersection Types

Enquanto `interface` permite construir tipos novos estendendo outros (ver [[typescript-extending-types]]), TypeScript também oferece *intersection types*, usadas principalmente para combinar object types existentes com o operador `&`:

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
```

`ColorfulCircle` é um novo tipo com todos os membros de `Colorful` **e** `Circle`:

```ts
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: "blue", radius: 42 }); // ok

draw({ color: "red", raidus: 42 });
// Object literal may only specify known properties, but 'raidus' does not
// exist in type 'Colorful & Circle'. Did you mean to write 'radius'?
```

Para a diferença prática entre usar `extends` numa interface ou `&` num type alias, ver [[typescript-interface-extends-vs-intersection]].

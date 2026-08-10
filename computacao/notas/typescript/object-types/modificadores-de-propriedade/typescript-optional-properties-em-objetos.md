---
tipo: conceito
area: computacao
tags: [typescript, object-types, propriedades-opcionais]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — Optional Properties em Object Types

Cada propriedade de um object type pode declarar o tipo, se é opcional e se pode ser escrita. Uma propriedade é marcada como *opcional* adicionando `?` ao final do nome:

```ts
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // ...
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
```

Opcionalidade só diz que, *se* a propriedade for definida, ela precisa ter um tipo específico — não obriga o chamador a fornecê-la.

Ao ler uma propriedade opcional sob [[typescript-strict-null-checks|strictNullChecks]], o TypeScript avisa que o valor é potencialmente `undefined`:

```ts
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos;
  //  (property) PaintOptions.xPos?: number | undefined
}
```

Em JavaScript, acessar uma propriedade nunca definida retorna `undefined` em vez de lançar erro em runtime, então é preciso tratar isso explicitamente:

```ts
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
  //  let xPos: number
}
```

Esse padrão de valor default é tão comum que o JavaScript tem sintaxe própria para isso — destructuring com default values no parâmetro:

```ts
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos); // (parameter) xPos: number
  console.log("y coordinate at", yPos); // (parameter) yPos: number
}
```

Com isso, `xPos` e `yPos` estão sempre presentes dentro do corpo de `paintShape`, mas continuam opcionais para quem chama a função.

> Não existe forma de colocar type annotations dentro de um padrão de destructuring — `{ shape: Shape, xPos: number = 100 }` já significa outra coisa em JavaScript puro: `shape: Shape` renomeia a propriedade `shape` para uma variável local chamada `Shape`, e não anota o tipo.

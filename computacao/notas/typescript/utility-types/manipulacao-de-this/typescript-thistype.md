---
tipo: conceito
area: computacao
tags: [typescript, utility-types, thistype]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — ThisType\<Type>

Não retorna um tipo transformado. Em vez disso, serve como um marcador para um tipo de `this` contextual. A flag `noImplicitThis` precisa estar habilitada para usar este utilitário.

```ts
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

No exemplo acima, o objeto `methods` passado como argumento para `makeObject` tem um tipo contextual que inclui `ThisType<D & M>`, então o tipo de `this` dentro dos métodos do objeto `methods` é `{ x: number, y: number } & { moveBy(dx: number, dy: number): void }`. O tipo da propriedade `methods` é simultaneamente alvo de inferência e fonte para o tipo de `this` nos métodos.

`ThisType<T>` é apenas uma interface vazia declarada em `lib.d.ts`. Fora ser reconhecida no tipo contextual de um object literal, a interface se comporta como qualquer interface vazia.

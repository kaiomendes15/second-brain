---
tipo: conceito
area: computacao
tags: [typescript, type-manipulation, mapped-types, template-literal-types]
atualizado: 2026-07-20
fonte_url: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
---

# TypeScript — Key Remapping via as

A partir do TypeScript 4.1, é possível remapear chaves em [[typescript-mapped-types|mapped types]] com uma cláusula `as`:

```ts
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

Isso pode ser combinado com template literal types para criar novos nomes de propriedade a partir dos antigos:

```ts
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;
// type LazyPerson = {
//   getName: () => string;
//   getAge: () => number;
//   getLocation: () => string;
// }
```

É possível filtrar chaves produzindo `never` via [[typescript-conditional-types|conditional type]]:

```ts
// Remove a propriedade 'kind'
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};

interface Circle {
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
// type KindlessCircle = {
//   radius: number;
// }
```

Também é possível mapear sobre unions arbitrárias, não só unions de `string | number | symbol`, mas unions de qualquer tipo:

```ts
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}

type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>
// type Config = {
//   square: (event: SquareEvent) => void;
//   circle: (event: CircleEvent) => void;
// }
```

---
tipo: conceito
area: computacao
tags: [typescript, object-types, readonly]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — readonly Properties

Uma propriedade pode ser marcada `readonly`. Isso não muda nenhum comportamento em runtime, mas durante o type-checking a propriedade não pode ser reescrita:

```ts
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'.`); // OK ler

  obj.prop = "hello";
  // Cannot assign to 'prop' because it is a read-only property.
}
```

`readonly` **não implica imutabilidade profunda** — só impede a reatribuição da própria propriedade, não de conteúdos internos que ela referencia:

```ts
interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++; // OK: só o objeto interno é mutado

  home.resident = { name: "Victor the Evictor", age: 42 };
  // Erro: não pode reescrever a própria propriedade 'resident'
}
```

`readonly` também **não é considerado na checagem de compatibilidade estrutural** entre tipos — por isso uma propriedade `readonly` pode mudar de valor via aliasing:

```ts
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = { name: "Person McPersonface", age: 42 };

// funciona: Person é estruturalmente compatível com ReadonlyPerson
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // 42
writablePerson.age++;
console.log(readonlyPerson.age); // 43 — mudou através do alias mutável
```

`readonly` serve principalmente para sinalizar *intenção* durante o desenvolvimento. Modifiers de mapeamento permitem remover `readonly` de um tipo (ver mapped types).

Ver também: [[typescript-readonlyarray-type]] e [[typescript-readonly-tuple-types]] aplicam a mesma ideia a arrays e tuplas.

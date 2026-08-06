---
tipo: conceito
area: computacao
tags: [typescript, object-types, generics, arrays]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — The Array Type

[[typescript-generic-object-types|Generic object types]] costumam ser algum tipo de container que funciona independente do tipo dos elementos que guarda — e o exemplo mais usado no dia a dia é o próprio tipo `Array`.

Todo `number[]` ou `string[]` que você escreve é só um atalho para `Array<number>` e `Array<string>`:

```ts
function doSomething(value: Array<string>) {
  // ...
}

let myArray: string[] = ["hello", "world"];

// as duas formas funcionam!
doSomething(myArray);
doSomething(new Array("hello", "world"));
```

Ver [[typescript-arrays]] para a sintaxe `T[]` vs `Array<T>` em si.

Assim como `Box` (ver [[typescript-generic-object-types]]), `Array` em si é um tipo genérico:

```ts
interface Array<Type> {
  length: number;
  pop(): Type | undefined;
  push(...items: Type[]): number;
  // ...
}
```

O JavaScript moderno tem outras estruturas de dados também genéricas — `Map<K, V>`, `Set<T>` e `Promise<T>` — todas capazes de trabalhar com qualquer conjunto de tipos por causa de como se comportam internamente.

---
tipo: conceito
area: computacao
tags: [typescript, type-manipulation, mapped-types, generics]
atualizado: 2026-07-20
fonte_url: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
---

# TypeScript — Mapped Types

Mapped types servem para basear um tipo em outro sem repetir a mesma forma. Eles constroem em cima da sintaxe de [[typescript-index-signatures|index signatures]], usada para declarar tipos de propriedades não conhecidas antecipadamente:

```ts
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

Um mapped type é um tipo genérico que usa uma union de `PropertyKey`s (frequentemente criada via [[typescript-index-signatures|keyof]]) para iterar sobre as chaves e criar um novo tipo:

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

Neste exemplo, `OptionsFlags` pega todas as propriedades do tipo `Type` e transforma seus valores em `boolean`:

```ts
type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;
// type FeatureOptions = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// }
```

Também é possível combinar mapped types com [[typescript-conditional-types|conditional types]] — por exemplo, um mapped type que retorna `true` ou `false` dependendo se uma propriedade `pii` é `true`:

```ts
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
// type ObjectsNeedingGDPRDeletion = {
//   id: false;
//   name: true;
// }
```

Ver também [[typescript-mapping-modifiers]] e [[typescript-key-remapping-via-as]].

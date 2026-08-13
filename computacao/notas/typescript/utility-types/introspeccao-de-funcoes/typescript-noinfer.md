---
tipo: conceito
area: computacao
tags: [typescript, utility-types, noinfer]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — NoInfer\<Type>

Bloqueia inferências para o tipo contido. Fora bloquear inferências, `NoInfer<Type>` é idêntico a `Type`.

```ts
function createStreetLight<C extends string>(
  colors: C[],
  defaultColor?: NoInfer<C>,
) {
  // ...
}

createStreetLight(["red", "yellow", "green"], "red");  // OK
createStreetLight(["red", "yellow", "green"], "blue");  // Error
```

Aqui, sem `NoInfer`, o parâmetro `defaultColor` também participaria da inferência do type parameter `C`, permitindo que um valor fora da lista `colors` "vazasse" para a union inferida. `NoInfer` marca `defaultColor` como um ponto de checagem, não de inferência.

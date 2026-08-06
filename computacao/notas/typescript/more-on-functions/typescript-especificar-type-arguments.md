---
tipo: conceito
area: computacao
tags: [typescript, functions, generics]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Especificar Type Arguments Manualmente

O TypeScript geralmente consegue inferir os type arguments numa chamada genérica (ver [[typescript-generic-functions]]), mas nem sempre. Considere uma função que combina dois arrays:

```ts
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
```

Normalmente é erro chamar essa função com arrays de tipos diferentes:

```ts
const arr = combine([1, 2, 3], ["hello"]);
// Erro: Type 'string' is not assignable to type 'number'.
```

Se a intenção é misturar os tipos mesmo, dá pra especificar `Type` manualmente:

```ts
const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

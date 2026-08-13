---
tipo: conceito
area: computacao
tags: [typescript, utility-types, extract]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — Extract<Type, Union>

Constrói um tipo extraindo de `Type` todos os membros da union que são atribuíveis a `Union`. É o oposto de [[typescript-exclude|Exclude]].

```ts
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
// type T0 = "a"

type T1 = Extract<string | number | (() => void), Function>;
// type T1 = () => void

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T2 = Extract<Shape, { kind: "circle" }>;
// type T2 = { kind: "circle"; radius: number }
```

---
tipo: conceito
area: computacao
tags: [typescript, utility-types, record]
atualizado: 2026-08-11
fonte_url: https://www.typescriptlang.org/docs/handbook/utility-types.html
---

# TypeScript — Record<Keys, Type>

Constrói um object type cujas chaves de propriedade são `Keys` e cujos valores de propriedade são `Type`. Útil para mapear as propriedades de um tipo para outro tipo.

```ts
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;
// const cats: Record<CatName, CatInfo>
```

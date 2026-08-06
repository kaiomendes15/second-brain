---
tipo: conceito
area: computacao
tags: [typescript, object-types, interfaces, intersection-types]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — Interface Extension vs. Intersection

[[typescript-extending-types|interface extends]] e [[typescript-intersection-types|intersection types]] parecem alcançar o mesmo resultado, mas a diferença principal é **como cada uma trata conflitos de propriedade** — e é essa diferença que costuma decidir qual escolher.

**Interfaces com o mesmo nome (ou `extends` conflitante):** o TypeScript tenta fazer merge se as propriedades forem compatíveis. Se não forem (mesmo nome, tipos diferentes), ele **lança erro de declaração**:

```ts
interface Person {
  name: string;
}

interface Person {
  name: number;
}
// Erro: propriedades incompatíveis
```

**Intersection types:** propriedades com tipos diferentes são mescladas automaticamente — sem erro de declaração. O tipo resultante exige que a propriedade satisfaça os dois tipos simultaneamente, o que colapsa a propriedade para `never`:

```ts
interface Person1 {
  name: string;
}

interface Person2 {
  name: number;
}

type Staff = Person1 & Person2;

declare const staffer: Staff;
staffer.name;
//       (property) name: never
```

Ou seja: `interface extends` falha cedo, na própria declaração; `A & B` compila e só se manifesta depois, quando a propriedade em conflito vira `never` e não pode receber valor algum.

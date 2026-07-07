---
tipo: conceito
area: computacao
tags: [typescript, null, undefined, strictNullChecks, tipagem]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — null e undefined

JavaScript tem dois valores primitivos para sinalizar valor ausente ou não-inicializado: `null` e `undefined`. O TypeScript tem tipos correspondentes com os mesmos nomes.

O comportamento depende da flag [[typescript-strict-null-checks]].

## Sem `strictNullChecks`

Valores que poderiam ser `null` ou `undefined` podem ser acessados normalmente, e podem ser atribuídos a qualquer tipo — similar a linguagens sem null checks como C# e Java. A falta dessa checagem é uma fonte comum de bugs; recomenda-se habilitar a flag sempre que possível.

## Com `strictNullChecks`

É necessário testar para `null` ou `undefined` antes de usar métodos ou propriedades. Use [[typescript-narrowing|narrowing]] para tratar esses casos:

```ts
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```

Para remover `null`/`undefined` de um tipo sem checagem explícita, veja [[typescript-non-null-assertion]].

---
tipo: conceito
area: computacao
tags: [typescript, tsc, compilador, noEmitOnError, erros-de-compilacao]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — Emissão com Erros

Por padrão, o [[typescript-compilador-tsc]] **emite o arquivo `.js` mesmo quando encontra erros de tipo**. Isso é intencional.

## Por que esse é o comportamento padrão

O TypeScript parte do princípio de que *você conhece seu código melhor do que ele*. Um erro de tipo não significa necessariamente que o programa não vai funcionar — especialmente durante migrações de JavaScript para TypeScript, onde erros de tipo são inevitáveis no começo, mas o código original já funcionava.

Forçar a parada da compilação a cada erro atrapalharia esse processo incremental.

## Como bloquear a emissão em caso de erro

Use a flag `--noEmitOnError`:

```sh
tsc --noEmitOnError hello.ts
```

Com isso, se houver qualquer erro de tipo, o `.js` **não será gerado ou atualizado**.

## Relação com outros conceitos

- O comportamento de emissão pode ser configurado no `tsconfig.json` junto com outras flags de [[typescript-modo-strict]].

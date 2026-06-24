---
tipo: conceito
area: computacao
tags: [typescript, tooling, autocomplete, editor, type-checker, developer-experience]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — Tooling

O type-checker do TypeScript não serve apenas para encontrar bugs — ele também alimenta ferramentas do editor que melhoram a experiência de desenvolvimento.

## O que o type-checker habilita no editor

- **Autocomplete:** sugere propriedades e métodos válidos conforme você digita.
- **Quick fixes:** corrige erros automaticamente.
- **Refactoring:** renomeações e reorganizações de código assistidas.
- **Go to definition:** navega até onde uma variável ou função foi declarada.
- **Find all references:** localiza todos os usos de um símbolo no projeto.

## Por que isso é possível

O type-checker tem informação sobre o **formato** de cada valor em tempo de escrita. Com isso, ele sabe quais propriedades existem, quais métodos são válidos e o que faz sentido em cada contexto.

```ts
import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.sen // → editor sugere: send, sendDate, sendFile, sendStatus
});
```

## Observação

Esse suporte é **cross-platform** — qualquer editor com suporte a TypeScript (VS Code, WebStorm, etc.) se beneficia disso, pois tudo é construído sobre o mesmo type-checker.

## Relação com outros conceitos

- O type-checker é executado pelo [[typescript-compilador-tsc]].
- A qualidade das sugestões melhora com [[typescript-anotacoes-de-tipo-explicitas]] e [[typescript-inferencia-de-tipos]].

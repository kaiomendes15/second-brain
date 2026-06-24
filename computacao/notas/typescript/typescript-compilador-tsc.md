---
tipo: conceito
area: computacao
tags: [typescript, tsc, compilador, cli, npm]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — Compilador `tsc`

O `tsc` é o compilador oficial do TypeScript. Ele é responsável por verificar tipos e transformar arquivos `.ts` em `.js` executáveis.

## Instalação

```sh
npm install -g typescript
```

> Alternativa sem instalação global: usar `npx tsc`.

## Uso básico

```sh
tsc hello.ts
```

- Se não houver erros de tipo → gera `hello.js` sem output no terminal.
- Se houver erros → exibe mensagens no terminal **e ainda assim gera o `.js`** por padrão.

## O que o compilador faz

1. **Verifica tipos** — analisa o código antes de executar.
2. **Remove anotações de tipo** — veja [[typescript-tipos-apagados]].
3. **Downleveling** — converte sintaxe moderna para versões mais antigas do ECMAScript. Veja [[typescript-downleveling]].

## Comportamento com erros

Por padrão, o `tsc` emite o `.js` mesmo quando encontra erros de tipo. Para bloquear a emissão em caso de erro:

```sh
tsc --noEmitOnError hello.ts
```

Mais detalhes em [[typescript-emissao-com-erros]].

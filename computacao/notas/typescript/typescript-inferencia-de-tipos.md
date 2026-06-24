---
tipo: conceito
area: computacao
tags: [typescript, type-inference, inferencia, tipagem, automatico]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — Type Inference

O TypeScript consegue **inferir (deduzir) o tipo de um valor automaticamente**, sem que você precise escrever uma type annotation explícita.

## Exemplo

```ts
let msg = "hello there!";
//  ^? let msg: string
```

Mesmo sem `: string`, o TypeScript sabe que `msg` é uma `string` porque foi inicializada com um string literal.

## Quando a inferência funciona bem

- Variáveis inicializadas na declaração.
- Retorno de funções com lógica clara.
- Valores literais simples (`string`, `number`, `boolean`).

## Boas práticas

Não adicione type annotations quando o TypeScript inferiria o mesmo tipo — isso é ruído desnecessário. Prefira:

```ts
let count = 0; // inferido como number
```

Em vez de:

```ts
let count: number = 0; // redundante
```

Use [[typescript-anotacoes-de-tipo-explicitas]] apenas quando a inferência não for suficiente ou quando o tipo inferido seria `any`.

## Relação com outros conceitos

- Quando o TypeScript não consegue inferir e cai em `any` implícito, a flag [[typescript-no-implicit-any]] emite um erro.

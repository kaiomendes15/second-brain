---
tipo: conceito
area: computacao
tags: [typescript, strictNullChecks, strict-mode, null, undefined, tipagem]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — `strictNullChecks`

Por padrão, os valores `null` e `undefined` podem ser atribuídos a **qualquer tipo** no TypeScript. Isso facilita a escrita de código, mas é a causa de inúmeros bugs — frequentemente chamado de "billion dollar mistake".

## Sem a flag (comportamento padrão)

```ts
let name: string = null; // permitido sem strictNullChecks
```

Você pode passar `null` onde uma `string` é esperada sem nenhum aviso.

## Com `strictNullChecks` habilitado

`null` e `undefined` passam a ser **tipos distintos**. Para usar um valor potencialmente nulo, você precisa tratar explicitamente esse caso:

```ts
function greet(name: string | null) {
  if (name === null) {
    console.log("Olá, visitante!");
  } else {
    console.log(`Olá, ${name}!`);
  }
}
```

O TypeScript emite erro se você usar um valor potencialmente `null` sem verificá-lo antes.

## Como habilitar

Individualmente no `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

Ou via [[typescript-modo-strict]], que habilita essa e outras flags juntas.

## Relação com outros conceitos

- Junto com [[typescript-no-implicit-any]], é uma das duas flags mais importantes do [[typescript-modo-strict]].

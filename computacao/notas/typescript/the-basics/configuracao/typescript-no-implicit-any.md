---
tipo: conceito
area: computacao
tags: [typescript, noImplicitAny, strict-mode, any, tipagem]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — `noImplicitAny`

Quando o TypeScript não consegue inferir o tipo de uma variável ou parâmetro, ele recai silenciosamente para o tipo `any` — o tipo mais amplo possível, que desabilita toda verificação.

## O problema

Usar `any` implícito é equivalente a voltar ao JavaScript puro: você perde todas as garantias do type-checker para aquela variável.

## O que a flag faz

`noImplicitAny` faz o TypeScript **emitir um erro** sempre que um tipo `any` seria inferido implicitamente:

```ts
function fn(x) {
// Erro: Parameter 'x' implicitly has an 'any' type.
  return x.flip();
}
```

A solução é adicionar uma [[typescript-anotacoes-de-tipo-explicitas|type annotation]]:

```ts
function fn(x: { flip(): void }) {
  return x.flip();
}
```

## Como habilitar

Individualmente no `tsconfig.json`:
```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

Ou via [[typescript-modo-strict]], que habilita essa e outras flags juntas.

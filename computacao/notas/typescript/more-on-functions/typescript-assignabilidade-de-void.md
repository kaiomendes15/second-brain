---
tipo: conceito
area: computacao
tags: [typescript, functions, void, assignability]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Assignability of Functions com Retorno void

O tipo de retorno [[typescript-outros-tipos-de-retorno|void]] produz um comportamento pouco intuitivo em contextual typing: um tipo de função contextual com retorno `void` (`type voidFunc = () => void`) **não impede** a implementação de retornar outra coisa — o valor retornado é simplesmente ignorado.

Por isso, todas essas implementações de `voidFunc` são válidas:

```ts
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};
```

E quando o retorno de uma dessas funções é atribuído a outra variável, ele mantém o tipo `void`:

```ts
const v1 = f1();
const v2 = f2();
const v3 = f3();
```

Esse comportamento existe para que código como este continue válido, mesmo `Array.prototype.push` retornando um `number` e `Array.prototype.forEach` esperando uma função com retorno `void`:

```ts
const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));
```

**Exceção:** quando a *definição literal* de uma função declara `void` como retorno, essa função não pode retornar nada:

```ts
function f2(): void {
  // @ts-expect-error
  return true;
}

const f3 = function (): void {
  // @ts-expect-error
  return true;
};
```

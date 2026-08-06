---
tipo: conceito
area: computacao
tags: [typescript, functions, overloads]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Function Overloads

Algumas funções JavaScript aceitam quantidades e tipos de argumentos variados (ex: uma função `makeDate` que aceita um timestamp OU dia/mês/ano). No TypeScript, isso se declara com *overload signatures*: várias assinaturas seguidas da implementação:

```ts
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
// Erro: nenhum overload aceita 2 argumentos (só 1 ou 3)
```

As duas primeiras assinaturas são as *overload signatures*. A função com corpo é a *implementation signature* — ela não pode ser chamada diretamente de fora, mesmo tendo parâmetros opcionais compatíveis com dois argumentos.

## Overload Signatures and the Implementation Signature

Fonte comum de confusão:

```ts
function fn(x: string): void;
function fn() {
  // ...
}
fn();
// Erro: Expected 1 arguments, but got 0.
```

A assinatura da *implementação* não é visível de fora. Uma função com overloads sempre precisa de **duas ou mais** overload signatures acima da implementação.

A implementation signature também precisa ser *compatível* com as overload signatures:

```ts
function fn(x: boolean): void;
function fn(x: string): void; // Erro: tipo do argumento não bate
function fn(x: boolean) {}
```

```ts
function fn(x: string): string;
function fn(x: number): boolean; // Erro: tipo de retorno não bate
function fn(x: string | number) {
  return "oops";
}
```

## Writing Good Overloads

```ts
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
```

Funciona com `string` ou `any[]` isoladamente, mas não com um valor que *pode ser* um ou outro — o TypeScript só resolve uma chamada para um único overload por vez:

```ts
len("");    // OK
len([0]);   // OK
len(Math.random() > 0.5 ? "hello" : [0]);
// Erro: nenhum overload casa
```

Como os dois overloads têm a mesma contagem de argumentos e mesmo tipo de retorno, o ideal é uma versão sem overload, com union type:

```ts
function len(x: any[] | string) {
  return x.length;
}
```

> Prefira sempre parâmetros com union types em vez de overloads, quando possível.

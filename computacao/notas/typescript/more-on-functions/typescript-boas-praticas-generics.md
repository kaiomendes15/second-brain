---
tipo: conceito
area: computacao
tags: [typescript, functions, generics, boas-praticas]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Boas Práticas de Generic Functions

Ter type parameters demais, ou usar constraints sem necessidade, prejudica a inferência e frustra quem chama a função. Três regras práticas:

## 1. Push Type Parameters Down

```ts
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

const a = firstElement1([1, 2, 3]); // a: number (bom)
const b = firstElement2([1, 2, 3]); // b: any (ruim)
```

Parecem iguais, mas `firstElement1` é melhor: seu retorno inferido é `Type`, enquanto `firstElement2` resolve `arr[0]` usando o tipo da constraint (`any[]`) em vez de esperar o tipo real do elemento na chamada — por isso vira `any`.

> **Regra:** Quando possível, use o próprio type parameter em vez de restringi-lo com uma constraint.

## 2. Use Fewer Type Parameters

```ts
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

`Func`, em `filter2`, não relaciona dois valores — é sinal de alerta: obriga quem chama a especificar um type argument extra sem motivo, só dificultando leitura.

> **Regra:** Use sempre o menor número possível de type parameters.

## 3. Type Parameters Should Appear Twice

```ts
function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}
```

Podia ser simplesmente:

```ts
function greet(s: string) {
  console.log("Hello, " + s);
}
```

Type parameters existem para *relacionar* os tipos de múltiplos valores. Se aparecem só uma vez na assinatura, não estão relacionando nada — isso inclui o tipo de retorno inferido: se `Str` fizesse parte do retorno, relacionaria argumento e retorno, contando como duas aparições mesmo aparecendo uma vez no código escrito.

> **Regra:** Se um type parameter aparece em só um lugar, reconsidere se ele é realmente necessário.

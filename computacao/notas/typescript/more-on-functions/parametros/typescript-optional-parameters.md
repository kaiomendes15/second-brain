---
tipo: conceito
area: computacao
tags: [typescript, functions, optional-parameters]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Optional Parameters

Funções em JavaScript costumam aceitar um número variável de argumentos (ex: `toFixed` aceita uma contagem de dígitos opcional). Isso se modela marcando o parâmetro com `?`:

```ts
function f(x?: number) {
  // ...
}
f();   // OK
f(10); // OK
```

Mesmo anotado como `number`, `x` tem na verdade o tipo `number | undefined`, porque parâmetros não passados em JavaScript recebem `undefined`.

Também é possível fornecer um valor *default*:

```ts
function f(x = 10) {
  // ...
}
```

Agora, no corpo de `f`, `x` tem o tipo `number`, porque qualquer `undefined` é substituído por `10`. Quando um parâmetro é opcional, quem chama sempre pode passar `undefined` explicitamente — simula um argumento "ausente":

```ts
f();          // OK
f(10);        // OK
f(undefined); // OK
```

## Optional Parameters in Callbacks

Erro comum ao combinar parâmetros opcionais com function type expressions:

```ts
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
```

A intenção costuma ser permitir as duas chamadas:

```ts
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
```

Mas `index?` no tipo do callback significa outra coisa: que a *implementação* pode chamar `callback` com só um argumento:

```ts
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]); // implementação legítima segundo o tipo
  }
}
```

Por isso o TypeScript acusa erro em código que parecia válido:

```ts
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
  // 'i' is possibly 'undefined'.
});
```

Em JavaScript (e TypeScript), chamar uma função com mais argumentos do que parâmetros simplesmente ignora os extras — funções com menos parâmetros (dos mesmos tipos) sempre podem substituir funções com mais parâmetros.

> **Regra:** Ao escrever o tipo de função de um callback, nunca use parâmetro opcional a menos que você pretenda *chamar* a função sem passar aquele argumento.

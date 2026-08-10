---
tipo: conceito
area: computacao
tags: [typescript, functions, void, unknown, never, object]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/functions.html
---

# TypeScript — Outros Tipos a Conhecer (void, object, unknown, never, Function)

Tipos que aparecem com frequência no contexto de funções — todos utilizáveis em qualquer lugar, mas especialmente relevantes aqui.

## void

Representa o retorno de funções que não retornam valor. É o tipo inferido sempre que a função não tem `return`, ou tem `return` sem valor explícito:

```ts
function noop() {
  return;
}
// tipo de retorno inferido: void
```

Em JavaScript puro, uma função sem retorno explícito devolve `undefined` implicitamente — mas `void` e `undefined` **não são a mesma coisa** no TypeScript (ver [[typescript-assignabilidade-de-void]] para o caso especial de atribuição).

## object

Representa qualquer valor que não seja primitivo (`string`, `number`, `bigint`, `boolean`, `symbol`, `null` ou `undefined`). É diferente do *empty object type* `{ }` e do tipo global `Object` — praticamente nunca se usa `Object` diretamente.

Funções, em JavaScript, são objetos (têm propriedades, `Object.prototype` na cadeia de protótipos, são `instanceof Object`), então tipos de função também são considerados `object` no TypeScript.

## unknown

Representa *qualquer* valor, como `any`, mas de forma segura — não é permitido fazer nada com um valor `unknown` sem antes checar o tipo:

```ts
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
  // Erro: 'a' is of type 'unknown'.
}
```

Útil para descrever funções que aceitam qualquer valor sem introduzir `any` no corpo, ou que retornam algo de tipo desconhecido:

```ts
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
// preciso ter cuidado com o resultado antes de usar
const obj = safeParse(someRandomString);
```

## never

Representa valores que nunca são observados. Como tipo de retorno, significa que a função lança exceção ou nunca termina:

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```

`never` também aparece quando o TypeScript determina que não sobrou nada numa union — o caso clássico de exhaustiveness checking:

```ts
function fn(x: string | number) {
  if (typeof x === "string") {
    // ...
  } else if (typeof x === "number") {
    // ...
  } else {
    x; // tem tipo 'never'!
  }
}
```

## Function

O tipo global `Function` descreve propriedades como `bind`, `call`, `apply` presentes em todo valor de função em JavaScript. Valores de tipo `Function` sempre podem ser chamados, e a chamada retorna `any`:

```ts
function doSomething(f: Function) {
  return f(1, 2, 3);
}
```

Isso é uma *chamada de função sem tipagem* e geralmente deve ser evitado, por causa do retorno `any` inseguro. Se o objetivo é aceitar uma função arbitrária sem chamá-la, `() => void` é geralmente mais seguro.

---
tipo: conceito
area: computacao
tags: [typescript, funcoes, type-annotations, parametros, retorno, promise]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Type Annotations em Funções

## Anotações de parâmetro

Type annotations em parâmetros vão após o nome do parâmetro:

```ts
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

Com a annotation, os argumentos passados são verificados:

```ts
greet(42);
// Argument of type 'number' is not assignable to parameter of type 'string'.
```

> Mesmo sem annotations nos parâmetros, o TypeScript verifica se o número correto de argumentos foi passado.

## Anotações de retorno

Vão após a lista de parâmetros:

```ts
function getFavoriteNumber(): number {
  return 26;
}
```

Na maioria dos casos não é necessário — o TypeScript infere o tipo de retorno pelos `return` statements. Veja [[typescript-inferencia-de-tipos]]. Alguns codebases especificam explicitamente para documentação ou para prevenir mudanças acidentais.

## Funções que retornam Promise

Use o tipo `Promise<T>`:

```ts
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

## Funções anônimas

Funções anônimas têm seus parâmetros tipados automaticamente pelo contexto em que aparecem. Veja [[typescript-contextual-typing]].

---
tipo: conceito
area: computacao
tags: [typescript, type-annotations, explicit-types, tipagem, funcoes]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — Type Annotations Explícitas

Type annotations são a forma de dizer explicitamente ao TypeScript qual é o tipo esperado de um valor, parâmetro ou variável.

## Sintaxe

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

A assinatura acima lê-se: "`greet` recebe `person` do tipo `string` e `date` do tipo `Date`".

## O que acontece sem a annotation correta

```ts
greet("Maddison", Date());
// Erro: Argument of type 'string' is not assignable to parameter of type 'Date'.
```

`Date()` sem `new` retorna uma `string` no JavaScript. Com a annotation, o TypeScript detecta o engano:

```ts
greet("Maddison", new Date()); // correto
```

## Quando usar

Não é necessário anotar tudo. O TypeScript consegue **inferir** o tipo em muitos casos sem anotação explícita — veja [[typescript-inferencia-de-tipos]]. Use type annotations quando:

- A inferência não consegue determinar o tipo correto.
- Você quer documentar a intenção do código de forma explícita.
- O tipo inferido seria `any`.

## Observação importante

As type annotations são **removidas durante a compilação** e não afetam o comportamento em runtime. Veja [[typescript-tipos-apagados]].

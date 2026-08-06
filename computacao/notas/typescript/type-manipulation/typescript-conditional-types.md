---
tipo: conceito
area: computacao
tags: [typescript, type-manipulation, conditional-types, generics]
atualizado: 2026-07-20
fonte_url: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
---

# TypeScript — Conditional Types

Conditional types descrevem a relação entre o tipo de uma entrada e o tipo de uma saída, de forma parecida com uma expressão condicional do JavaScript (`condition ? trueExpression : falseExpression`):

```ts
SomeType extends OtherType ? TrueType : FalseType;
```

Quando o tipo à esquerda do `extends` é atribuível ao tipo à direita, o resultado é o branch verdadeiro; caso contrário, o branch falso:

```ts
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
//   type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
//   type Example2 = string
```

Isoladamente, conditional types com tipos concretos não são muito úteis — o poder deles aparece ao combiná-los com [[typescript-generic-functions|generics]]. Em vez de escrever múltiplos [[typescript-function-overloads|overloads]] para cobrir cada combinação de tipos de entrada e saída, é possível encodar essa lógica em um único conditional type genérico:

```ts
interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript"); // type a: NameLabel
let b = createLabel(2.8);          // type b: IdLabel
let c = createLabel(Math.random() ? "hello" : 42); // type c: NameLabel | IdLabel
```

Isso substitui o crescimento exponencial de overloads (um para cada tipo suportado) por uma única função sem overloads. Ver também [[typescript-conditional-type-constraints]], [[typescript-infer-keyword]] e [[typescript-distributive-conditional-types]].

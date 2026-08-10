---
tipo: conceito
area: computacao
tags: [typescript, object-types, generics]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — Generic Object Types

Imagine um tipo `Box` que pode conter qualquer valor. Uma primeira tentativa usando `any` funciona, mas abre espaço para acidentes:

```ts
interface Box {
  contents: any;
}
```

Trocar por `unknown` é mais seguro, mas exige checagens ou type assertions toda vez que se lê `contents`:

```ts
interface Box {
  contents: unknown;
}

let x: Box = { contents: "hello world" };

if (typeof x.contents === "string") {
  console.log(x.contents.toLowerCase());
}

console.log((x.contents as string).toLowerCase());
```

Uma alternativa tipo-segura seria criar um `Box` dedicado para cada tipo de conteúdo (`NumberBox`, `StringBox`, `BooleanBox`...), mas isso força a duplicar funções ou usar overloads para cada variante — muito boilerplate.

A solução é um `Box` **genérico**, que declara um *type parameter*:

```ts
interface Box<Type> {
  contents: Type;
}
```

Isso se lê como "um `Box` de `Type` é algo cujo `contents` tem o tipo `Type`". Ao usar `Box`, você fornece um *type argument* no lugar de `Type`:

```ts
let box: Box<string>;
```

`Box<string>` funciona de forma idêntica a um `StringBox` escrito à mão — `Type` é substituído por `string` em todo o corpo de `Box<Type>`. `Box` é reutilizável: `Type` pode ser substituído por qualquer coisa, sem precisar declarar um novo tipo (`type AppleBox = Box<Apple>`).

Isso também permite eliminar overloads inteiramente, usando funções genéricas:

```ts
function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}
```

**Type aliases também podem ser genéricos** — não só interfaces:

```ts
type Box<Type> = {
  contents: Type;
};
```

E, ao contrário de interfaces, type aliases podem descrever mais do que object types, então dá pra escrever outros helpers genéricos:

```ts
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
```

Container types genéricos aparecem por todo o TypeScript: [[typescript-array-type|Array<Type>]] é o exemplo mais comum, junto de `Map<K, V>`, `Set<T>` e `Promise<T>`.

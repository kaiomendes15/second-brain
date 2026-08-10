---
tipo: conceito
area: computacao
tags: [typescript, object-types, readonly, arrays]
atualizado: 2026-07-15
fonte_url: https://www.typescriptlang.org/docs/handbook/2/objects.html
---

# TypeScript — The ReadonlyArray Type

`ReadonlyArray` é um tipo especial que descreve arrays que não devem ser alterados:

```ts
function doStuff(values: ReadonlyArray<string>) {
  const copy = values.slice(); // ok: ler
  console.log(`The first value is ${values[0]}`);

  values.push("hello!");
  // Property 'push' does not exist on type 'readonly string[]'.
}
```

Como o modificador [[typescript-readonly-properties|readonly]] em propriedades, é sobretudo uma ferramenta de intenção: uma função que retorna `ReadonlyArray` sinaliza que quem recebe não deve alterar o conteúdo; uma função que aceita `ReadonlyArray` sinaliza que qualquer array pode ser passado sem risco de ser modificado.

Diferente de `Array`, não existe um construtor `ReadonlyArray`:

```ts
new ReadonlyArray("red", "green", "blue");
// 'ReadonlyArray' only refers to a type, but is being used as a value here.
```

Em vez disso, arrays normais podem ser atribuídos a `ReadonlyArray`:

```ts
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
```

Assim como `Type[]` é atalho para `Array<Type>` (ver [[typescript-array-type]]), `readonly Type[]` é atalho para `ReadonlyArray<Type>`:

```ts
function doStuff(values: readonly string[]) {
  const copy = values.slice();
  values.push("hello!");
  // Property 'push' does not exist on type 'readonly string[]'.
}
```

Diferente do modificador `readonly` em propriedades, a atribuição **não é bidirecional** entre `Array` e `ReadonlyArray`:

```ts
let x: readonly string[] = [];
let y: string[] = [];

x = y; // ok
y = x;
// The type 'readonly string[]' is 'readonly' and cannot be assigned
// to the mutable type 'string[]'.
```

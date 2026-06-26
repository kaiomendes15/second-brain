---
tipo: conceito
area: computacao
tags: [typescript, literal-types, string-literal, number-literal, boolean-literal, tipagem]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Literal Types

Além dos tipos gerais `string` e `number`, o TypeScript permite usar *valores específicos* como tipos.

Variáveis declaradas com `const` recebem literal types (o valor é fixo); com `let`/`var`, o tipo é geral (o valor pode mudar):

```ts
const constantString = "Hello World";
// Tipo: "Hello World" (literal)

let changingString = "Hello World";
// Tipo: string (geral)
```

Sozinhos, literal types têm uso limitado. Combinados em [[typescript-union-types|unions]], expressam conjuntos de valores aceitos:

```ts
function printText(s: string, alignment: "left" | "right" | "center") { ... }

function compare(a: string, b: string): -1 | 0 | 1 { ... }
```

Literal types também se combinam com tipos gerais:

```ts
interface Options { width: number; }
function configure(x: Options | "auto") { ... }
```

## Boolean literals

Os tipos `true` e `false` são boolean literals. O tipo `boolean` é um alias para a union `true | false`.

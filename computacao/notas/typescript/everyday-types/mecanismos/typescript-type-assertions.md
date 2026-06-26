---
tipo: conceito
area: computacao
tags: [typescript, type-assertions, as, tipagem, compile-time]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Type Assertions

Use type assertions quando você tem informação sobre o tipo de um valor que o TypeScript não tem acesso. Por exemplo, `document.getElementById` retorna `HTMLElement`, mas você sabe que é sempre um `HTMLCanvasElement`:

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

A sintaxe com angle-bracket é equivalente (exceto em arquivos `.tsx`):

```ts
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

## Comportamento em runtime

Type assertions são removidas pelo compilador. **Não há checagem em runtime** — se a assertion estiver errada, nenhuma exceção é gerada.

## Restrições

O TypeScript só permite assertions para tipos **mais específicos** ou **menos específicos**. Coerções "impossíveis" são bloqueadas:

```ts
const x = "hello" as number;
// Erro: os tipos não se sobrepõem suficientemente
```

## Double assertion

Para casos que exijam uma coerção não permitida diretamente, use duas assertions (primeiro para `any` ou `unknown`, depois para o tipo desejado):

```ts
const a = expr as any as T;
```

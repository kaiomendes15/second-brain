---
tipo: conceito
area: computacao
tags: [typescript, literal-inference, as-const, type-assertions, tipagem]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Literal Inference

Quando uma variável é inicializada com um objeto, o TypeScript assume que suas propriedades podem mudar depois. Por isso, infere tipos gerais em vez de [[typescript-literal-types|literal types]]:

```ts
const req = { url: "https://example.com", method: "GET" };
// req.method inferido como string, não "GET"

handleRequest(req.url, req.method);
// Erro: Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'
```

## Soluções

**1. Type assertion na propriedade:**
```ts
const req = { url: "https://example.com", method: "GET" as "GET" };
```

**2. [[typescript-type-assertions|Type assertion]] no uso:**
```ts
handleRequest(req.url, req.method as "GET");
```

**3. `as const` no objeto inteiro:**
```ts
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method); // OK
```

`as const` funciona como `const` para o sistema de tipos: todas as propriedades recebem literal types em vez de tipos gerais.

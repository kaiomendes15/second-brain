---
tipo: conceito
area: computacao
tags: [typescript, interfaces, type-aliases, comparacao, extends, merging]
atualizado: 2026-06-25
fonte_url: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
---

# TypeScript — Type Aliases vs Interfaces

[[typescript-type-aliases|Type aliases]] e [[typescript-interfaces|interfaces]] são muito similares. Na maioria dos casos, você pode escolher livremente. Quase todas as features de `interface` estão disponíveis em `type`.

## Diferença principal: extensibilidade

| | Interface | Type |
|---|---|---|
| **Extensão** | `interface Bear extends Animal` | `type Bear = Animal & { honey: boolean }` |
| **Re-abertura** | Pode ser declarada duas vezes para adicionar campos | Não pode ser alterada após criada |
| **Escopo** | Apenas object types | Qualquer tipo, incluindo primitivos e unions |
| **Error messages** | Nome sempre aparece na forma original | Pode mostrar o tipo expandido |

## Declaration merging (exclusivo de interfaces)

```ts
interface Window { title: string; }
interface Window { ts: TypeScriptAPI; }
// OK — Window agora tem title e ts
```

Com `type`, isso gera erro: *Duplicate identifier 'Window'*.

## Performance

Interfaces com `extends` tendem a ser mais performáticas para o compilador do que type aliases com interseções `&`.

## Heurística

Use `interface` até precisar de alguma feature exclusiva de `type`.

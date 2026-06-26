---
tipo: revisao
area: computacao
tags: [typescript, everyday-types, revisao, fixar]
atualizado: 2026-06-26
---

# Revisões — TypeScript: Everyday Types

## Sessão 1 — 2026-06-26

**Eixo temático:** TypeScript — Everyday Types
**Nota:** 6/10 (75%)

### Lacunas identificadas
- Comportamento em runtime de `as` e `!` — ambos são removidos pelo compilador, sem nenhuma garantia em runtime
- Distinções concretas de `type` vs `interface` — declaration merging e escopo (unions/primitivos/tuples)
- Imprecisão entre os operadores `?.` (optional chaining) e `??` (nullish coalescing)

### Próximos passos
- Revisar `typescript-type-assertions.md` e `typescript-non-null-assertion.md` com foco no comportamento em runtime
- Ao estudar Narrowing (Parte 4), reforçar o que `?.` e `??` fazem individualmente

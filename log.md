# Log

Registro cronológico append-only. Prefixo: `## [AAAA-MM-DD] operação | título`.
Consulta rápida: `grep "^## \[" log.md | tail -5`.

## [2026-07-06] avançar | Bloco 0 — Parte 3 concluída, Parte 4 (Narrowing) em progresso

Sessão de estudo com pomodoro (60 min ativos): revisão das lacunas da fixação de Everyday Types (runtime de `as`/`!`, `type` vs `interface`, `?.` vs `??`), seguida de leitura e exercícios práticos de Narrowing — `typeof` guards, truthiness, equality, `in`, `instanceof`, assignment narrowing, control flow analysis e type predicate customizado. Faltam discriminated unions e `never`/exhaustiveness checking para fechar a Parte 4. estado.md atualizado.

## [2026-06-25] arquivar | Granularização de everyday-types.md (18 notas criadas)

18 notas criadas em `computacao/notas/typescript/` a partir de `everyday-types.md`: primitivos, arrays, tipo any, anotações em funções, contextual typing, object types, optional properties, union types, narrowing, type aliases, interfaces, type aliases vs interfaces, type assertions, literal types, literal inference, null e undefined, non-null assertion e enums. Nota `typescript-anotacoes-de-tipo-explicitas.md` atualizada com conteúdo adicional sobre anotações em variáveis. index.md atualizado.

## [2026-06-24] avançar | Bloco 0 — Partes 1 e 2 concluídas, Parte 3 em progresso

Partes 1 (Getting Started) e 2 (The Basics) do Bloco 0 concluídas. Parte 3 (Everyday Types) iniciada: primitivos e union types feitos. Partes 4–11 e projeto-prova pendentes. estado.md atualizado.

## [2026-06-24] arquivar | TypeScript — The Basics (11 notas granulares)

11 notas criadas em `computacao/notas/typescript/` a partir de `the-basics.md`: static type checking, non-exception failures, tooling, compilador tsc, emissão com erros, type annotations, type inference, erased types, downleveling, strict mode, noImplicitAny e strictNullChecks. index.md atualizado.

## [2026-06-24] arquivar | TypeScript — Structural Type System

Nota arquivada em `computacao/notas/typescript-structural-type-system.md`. Frontmatter aplicado (tipo: conceito, area: computacao). Arquivo renomeado para kebab-case. index.md atualizado.

## [2026-06-19] criar | Cofre inicializado

Estrutura criada: blocos `computacao/`, `projetos/`, `pessoal/` + `inbox/`, `index.md`, `log.md`, `CLAUDE.md`.
Roadmaps de curto e longo prazo semeados em `computacao/roadmaps/` como referência intocável.
Primeira versão de `computacao/estado.md` derivada dos roadmaps.

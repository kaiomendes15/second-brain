# Log

Registro cronológico append-only. Prefixo: `## [AAAA-MM-DD] operação | título`.
Consulta rápida: `grep "^## \[" log.md | tail -5`.

## [2026-07-20] arquivar | Granularização de Conditional Types.md e Mapped Types.md (7 notas criadas em computacao/notas/typescript/type-manipulation)

Processadas as notas cruas de inbox/Conditional Types.md e inbox/Mapped Types.md (clippings do TypeScript Handbook). Criada a pasta computacao/notas/typescript/type-manipulation/ (sob confirmação) com 7 notas atômicas: conditional types (sintaxe base), conditional type constraints, infer keyword, distributive conditional types, mapped types (sintaxe base), mapping modifiers (readonly/optional) e key remapping via as. index.md atualizado; notas cruas removidas do inbox.

## [2026-07-20] avançar | Bloco 0 — Parte 7 (Type Manipulation): Conditional e Mapped Types

Sessão de estudo com pomodoro (30 min ativos): leitura de Conditional Types (`T extends U ? X : Y`, `infer`) e Mapped Types (`{ [K in keyof T]: ... }`), com fixação prática em ambos (inferência de tipo condicional, aplicação de mapped type, escrita de `Nullable<T>`). Template Literal Types ficou pendente para a próxima sessão — é o último item da Parte 7. estado.md e bloco-0.md atualizados.

## [2026-07-16] avançar | Bloco 0 — Parte 7 (Type Manipulation) em progresso

Sessão de estudo com pomodoro (30 min ativos, 2 blocos): leitura inicial do cluster "Creating Types from Types" cobrindo Generics revisitado (nível básico — generic functions), Keyof, Typeof e Indexed Access Types, com fixação prática em cada tópico. Ficou pendente dentro de Generics: generic classes, generic constraints, type parameters em constraints e generic parameter defaults; e ainda faltam Conditional Types, Mapped Types e Template Literal Types (todos nível "só reconhecer"). estado.md atualizado.

## [2026-07-15] arquivar | Granularização de More on Functions.md (14 notas criadas em computacao/notas/typescript/more-on-functions)

Processada a nota crua de inbox/More on Functions.md (clipping sem frontmatter da página "More on Functions" do TypeScript Handbook). Criada a pasta computacao/notas/typescript/more-on-functions/ (sob confirmação) com 14 notas atômicas: function type expressions, call/construct signatures, generic functions (inferência, constraints, especificar type arguments, boas práticas), optional parameters, function overloads, this em funções, void/object/unknown/never/Function, rest parameters e arguments, parameter destructuring e assignabilidade de void. index.md atualizado; nota crua removida do inbox.

## [2026-07-15] arquivar | Granularização de Object Types.md (12 notas criadas em computacao/notas/typescript/object-types)

Processada a nota crua de inbox/Object Types.md (clipping da página "Object Types" do TypeScript Handbook). Criada a pasta computacao/notas/typescript/object-types/ (sob confirmação) com 12 notas atômicas: optional properties, readonly properties, index signatures, excess property checks, extending types, intersection types, interface extends vs intersection, generic object types, Array<T>, ReadonlyArray<T>, tuple types e readonly tuple types. index.md atualizado; nota crua removida do inbox.

## [2026-07-15] avançar | Bloco 0 — Parte 6 (Object Types) concluída

Sessão de estudo com pomodoro (40 min ativos, 2 blocos): leitura do restante da página "Object Types" do Handbook cobrindo extending types (`interface extends`), intersection types (`A & B`), a diferença prática entre os dois, generic object types, `Array<T>`/`ReadonlyArray<T>`, tuple types e `readonly` tuples, com fixação prática em cada tópico. Parte 6 concluída; próximo passo é a Parte 7 (Type Manipulation, só reconhecer). estado.md atualizado.

## [2026-07-14] avançar | Bloco 0 — Parte 6 (Object Types) em progresso

Sessão de estudo com pomodoro (30 min ativos, 1 bloco): leitura da página "Object Types" do Handbook cobrindo property modifiers (`?`, `readonly`), index signatures e excess property checks, com fixação prática nos três tópicos. Ficou pendente: extending types (`interface extends`), intersection types, `interface extends` vs intersection, generic object types, `Array<T>`/`ReadonlyArray<T>`, tuple types e `readonly` tuples. estado.md atualizado.

## [2026-07-13] avançar | Bloco 0 — Parte 5 (More on Functions) concluída

Sessão de estudo com pomodoro (60 min ativos, 3 blocos): leitura completa da página "More on Functions" do Handbook, com fixação prática cobrindo function type expressions, call/construct signatures, generic functions (inference, constraints, especificar type arguments manualmente, boas práticas), optional/default parameters, function overloads, rest parameters e return types (incluindo `never`). Parte 5 concluída; próximo passo é a Parte 6 (Object Types). estado.md atualizado.

## [2026-07-06] revisar | Reorganização das notas de TypeScript + limpeza

Subpastas de `computacao/notas/typescript/the-basics/` e `everyday-types/` reorganizadas em grupos mais específicos e coesos: `the-basics/` ganhou `compilador/`, `anotacoes-de-tipo/`, `configuracao-strict/` (renomeadas de `ferramentas/`, `anotacoes/`, `configuracao/`); `everyday-types/` teve a pasta genérica `mecanismos/` e `tipos-compostos/` quebradas em `tipagem-de-funcoes/`, `uniao-e-narrowing/`, `tipos-literais/`, `assercoes-de-tipo/` e `formas-de-objeto/`. Nota duplicada `typescript-static-type-checking.md` removida (conteúdo e imagem incorporados em `typescript-verificacao-de-tipos-estatica.md`, que também teve o link quebrado `[[typescript-falhas-nao-excepcionais]]` corrigido para `[[typescript-non-exception-failures]]`). Imagem solta na raiz do cofre movida para `assets/typescript-static-type-checking-exemplo.png`.

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

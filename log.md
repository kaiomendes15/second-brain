# Log

Registro cronológico append-only. Prefixo: `## [AAAA-MM-DD] operação | título`.
Consulta rápida: `grep "^## \[" log.md | tail -5`.

## [2026-08-25] arquivar | Granularização de apache-kafka (7 notas criadas em computacao/notas/integracao-sistemas/kafka/)

## [2026-08-24] arquivar | Granularização de mensageria (11 notas criadas em computacao/notas/integracao-sistemas/mensageria/)

## [2026-08-21] avançar | Preferência de abordagem prática registrada em estado-dtec

Dono achou o formato padrão das fases do roadmap-dtec (checklist teórico extenso antes da prática) alongado demais. Registrada em [[estado-dtec]] a preferência de inverter a ordem de consumo por fase: ler critério de conclusão + prática primeiro, ir direto pra implementação no `sistema-academico`, e usar os checklists de cada Parte só sob demanda como glossário de referência (mesma coisa para as tabelas De-Para Spring→Quarkus). Vale a partir da Fase 3 (Quarkus Core); Fases 0–1 continuam pré-requisito mínimo. Roadmap em si não foi alterado (é intocável).

## [2026-08-21] arquivar | Granularização de java-classloader (2 notas criadas em computacao/notas/java/class-loaders/)

## [2026-08-21] revisar | Skills e CLAUDE.md ajustados para múltiplas trilhas ativas

Skills `/estudar` e `/fixar` tinham a auto-detecção de tema (quando chamadas sem argumento) hardcoded a `computacao/estado.md` + `roadmap-curto-prazo/`, ignorando a trilha DTec recém-criada. Ajustadas para ler todos os `computacao/estado*.md` existentes e perguntar ao usuário qual trilha seguir quando mais de uma tiver progresso/próximo passo pendente; passaram a reconhecer `fase-N.md` (dtec) como arquivo de detalhe válido ao lado de `bloco-N.md`. `/lint` e `/granularizar` não precisaram de ajuste (já eram agnósticos a roadmap específico). `CLAUDE.md` também generalizado: tabela "quem edita o quê", descrição da operação Avançar e diagrama de estrutura agora tratam `computacao/estado*.md` como padrão (uma trilha por arquivo), não mais um único `estado.md`.

## [2026-08-21] revisar | Roadmap DTec (Kotlin/Quarkus) integrado ao cofre

Dono trouxe um novo roadmap de 10 fases (`computacao/roadmaps/roadmap-dtec/`) para efetivação júnior na stack Kotlin+Quarkus do emprego atual (DTec), guiado por ADR-001/ADR-002. Validação encontrou desvios de convenção: nomes de arquivo em PascalCase (corrigido para kebab-case), frontmatter sem os campos mínimos `tipo/area/tags/atualizado` (adicionado), e ausência de `index.md` de visão geral (criado, seguindo o padrão do roadmap-curto-prazo). Decisão do dono: trilha ganha estado vivo próprio em `computacao/estado-dtec.md` (não fundido em `estado.md`). Colisão de agenda entre esta trilha e o Bloco 0/freelance (ambas reivindicam a mesma janela de estudo a partir de 24/08) foi apenas sinalizada em ambos os arquivos de estado — divisão de tempo ainda não decidida. `index.md` geral atualizado com as novas entradas.

## [2026-08-19] avançar | Sessão de estudo: conclusão da Parte 10 (Modules)

20 min ativos, 1 bloco de pomodoro. Cobertos: `import`/`export` (nomeado vs default), `import type`, resolução de módulos, CommonJS (síncrono) vs ESM (assíncrono) e como `"type": "module"`/extensão de arquivo decide o modo no Node. Fixação com 4 perguntas (código, conceitual, V/F, cenário) — um erro de sintaxe corrigido (default export importado com chaves) e um V/F errado (achava CommonJS assíncrono), ambos esclarecidos. Parte 10 (Modules) fechada por completo; próximo passo é Parte 11 (Configuração/tsconfig).

## [2026-08-17] avançar | Sessão de estudo: conclusão da Parte 9 (Classes)

40 min ativos, 2 blocos de pomodoro. Cobertos: `implements`, herança (`extends`/`super`), abstract classes e métodos abstratos, decorators (reconhecimento de sintaxe). Fixação com exercícios de código (interface + classe, herança com `super`, abstract class) e conceituais, todos corretos. Parte 9 (Classes) fechada por completo; próximo passo é Parte 10 (Modules).

## [2026-08-17] revisar | Lint de computacao-grafica: fusão de duplicata

Notas [[computacao-grafica-interpretacoes-de-vetores]] e computacao-grafica-vetor-como-tupla continham a mesma ideia central (vetor como n-tupla) vindas de fontes diferentes. Fundidas em [[computacao-grafica-interpretacoes-de-vetores]] (seção "Perspectiva da Ciência da Computação" passou a incluir a notação de n-tupla); nota antiga removida, link em [[computacao-grafica-pontos-vs-vetores]] e index.md atualizados.

## [2026-08-17] arquivar | Granularização de Untitled.md — Points, Vectors and Normals (6 notas criadas em computacao/notas/computacao-grafica/pontos-vetores-normais/)

## [2026-08-17] arquivar | Granularização de Vectors.md (4 notas criadas em computacao/notas/computacao-grafica/vetores/)

## [2026-08-13] avançar | Sessão de estudo: início da Parte 9 (Classes)

Sessão de 20 min ativos (1 bloco via /estudar) sobre a primeira metade de Classes do Handbook oficial: class fields e tipagem, modificadores (`public`/`private`/`protected`/`readonly`), parameter properties, constructors, methods e getters/setters. Exercícios práticos: escrever classe `Pessoa` com campo tipado, refatorar para parameter properties, e V/F sobre `private` ser checagem só em compile-time (sem privacidade real em runtime, ao contrário de `#campo`). Não deu tempo para `implements`, herança (`extends`/`super`), abstract classes e decorators — fica para a próxima sessão.

## [2026-08-11] revisar | Lint completo de computacao/notas/** — remoção de clipping bruto órfão

Varredura de todo `computacao/notas/typescript/**`: nenhum wikilink quebrado, nenhuma imagem fora de `assets/`, index.md sincronizado, sem duplicatas, sem pastas genéricas, sem outras páginas órfãs, frontmatter completo em todas as notas restantes. Único achado: `everyday-types/everyday-types.md` era o clipping bruto original do Handbook (frontmatter fora do padrão do CLAUDE.md), órfão e com conteúdo já duplicado nas 17 notas atômicas de `everyday-types/*`. Removido após confirmação do dono.

## [2026-08-11] arquivar | Granularização de Utility Types.md (19 notas criadas em computacao/notas/typescript/utility-types)

Clipping oficial do Handbook (`utility-types.html`) quebrado em 19 notas atômicas, organizadas em 6 subpastas temáticas dentro de `computacao/notas/typescript/utility-types/`: `transformacao-de-objetos/` (Partial, Required, Readonly, Record, Pick, Omit), `transformacao-de-unions/` (Exclude, Extract, NonNullable), `introspeccao-de-funcoes/` (Parameters, ConstructorParameters, ReturnType, InstanceType, NoInfer), `manipulacao-de-this/` (ThisParameterType, OmitThisParameter, ThisType), `assincronismo/` (Awaited) e `manipulacao-de-strings/` (overview de Uppercase/Lowercase/Capitalize/Uncapitalize, que aponta para Template Literal Types). Nenhum conflito com notas existentes. index.md atualizado com a nova seção; nota crua removida do inbox.

## [2026-08-11] avançar | Sessão de estudo: Parte 8 (Utility Types) completa, Parte 7 confirmada como concluída

Sessão de 30 min ativos (dois blocos de 15 min via /estudar) sobre Utility Types do Handbook oficial. Bloco 1 cobriu `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record` com exercícios práticos (função de atualização parcial de usuário, tabela de preços por categoria). Bloco 2 cobriu `ReturnType`, `Parameters`, `Awaited`, `NonNullable`, incluindo correção de um erro comum (ordem de composição `Awaited<ReturnType<T>>`, não o inverso). De quebra, resolvida uma inconsistência entre `estado.md` e `bloco-0.md`: o checkbox de Template Literal Types (Parte 7) já estava marcado como concluído no tracker, então a Parte 7 foi confirmada como fechada. Próximo passo: Parte 9 (Classes), com foco no que o NestJS usa.

## [2026-08-09] revisar | Reorganização de more-on-functions/, object-types/ e type-manipulation/ em subpastas por tópico

Seguindo o padrão já aplicado em `everyday-types/` e `the-basics/`, as demais pastas de `computacao/notas/typescript/` que ainda tinham notas soltas foram quebradas em subpastas temáticas: `more-on-functions/` ganhou `tipos-de-funcao/`, `generics/`, `parametros/`, `overloads-e-this/` e `retorno-e-assignabilidade/`; `object-types/` ganhou `modificadores-de-propriedade/`, `composicao-de-tipos/` e `arrays-e-tuplas/`; `type-manipulation/` ganhou `tipos-condicionais/` e `tipos-mapeados/`. Apenas `git mv`, nenhum conteúdo alterado; wikilinks no cofre usam nome de arquivo puro, então nada quebrou.

## [2026-08-08] arquivar | Criação do projeto Máquina de Estados de Pedido

Criada a pasta projetos/maquina-estados-pedido/ com README.md detalhando requisitos (discriminated unions para Pedido e Evento, função de transição com narrowing exaustivo, type guard customizado, tsconfig strict) e links da documentação oficial do TypeScript a revisar antes de começar (Everyday Types, Narrowing, More on Functions, Indexed Access Types). Mini-projeto de consolidação prática do Bloco 0, sem lógica escrita pela IA. index.md atualizado.

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

## [2026-08-24] avançar | Bloco 0 (TypeScript) — Parte 11 concluída (tsconfig)

Sessão de 20 min ativos, trilha freelance/vaga remota. Cobertura completa da Parte 11
(tsconfig.json): `target`, `module`, `lib`, `strict` (e flags agrupadas), `esModuleInterop`,
`moduleResolution`, `outDir`/`rootDir`, `skipLibCheck`. Fixação com 4 exercícios (cenário,
V/F, código, conceitual) — todos com bom domínio, exceto uso de `strict: true` como atalho
(usuário havia configurado flags individuais em vez do agregador). Bloco 0 fica com apenas o
projeto-prova pendente para fechar.

## [2026-08-24] avançar | Projeto-prova do Bloco 0 iniciado: Xadrez em TypeScript

Estrutura criada em `projetos/xadrez-typescript/` (package.json, tsconfig strict, README com
requisitos). Escopo definido junto ao dono: tabuleiro + peças + geração de movimentos legais
por tipo de peça, sem xeque/xeque-mate/roque/en passant — projeto substitui as 3 opções
sugeridas pelo roadmap (decisão de sessão anterior). `npm install` rodado, ambiente validado
com `tsx`. Lógica ainda não escrita — fica a cargo do dono.

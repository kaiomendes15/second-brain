---
tipo: indice
atualizado: 2026-08-08
---

# Índice do Cofre

Mapa de tudo que existe aqui, por área. Atualizado a cada arquivamento.
Para responder perguntas, comece por este arquivo, depois abra as páginas relevantes.

## Computação & Carreira

- [[computacao/roadmaps/roadmap-curto-prazo/index]] — plano de execução de 6 meses (Bloco 0→5) rumo à vaga remota. *Referência intocável.*
- [[roadmap-longo-prazo]] — roadmap de 60 módulos, Júnior → Staff. *Referência intocável.*
- [[estado]] — onde estou agora / próximos passos. *Mantido pela IA.*

### Notas de CS

- [[typescript-structural-type-system]] — conceito de Structural Typing (Duck Typing) no TypeScript.

#### TypeScript — The Basics

- [[typescript-verificacao-de-tipos-estatica]] — o problema da tipagem dinâmica no JS e como o static type checking resolve.
- [[typescript-non-exception-failures]] — erros silenciosos do JavaScript que o TypeScript detecta (typos, lógica inalcançável, etc.).
- [[typescript-tooling]] — como o type-checker alimenta autocomplete, quick fixes e navegação no editor.
- [[typescript-compilador-tsc]] — instalação e uso do compilador `tsc`.
- [[typescript-emissao-com-erros]] — por que o `tsc` emite `.js` mesmo com erros e como bloquear isso.
- [[typescript-anotacoes-de-tipo-explicitas]] — sintaxe e quando usar type annotations explícitas.
- [[typescript-inferencia-de-tipos]] — TypeScript deduz tipos automaticamente; quando omitir annotations.
- [[typescript-tipos-apagados]] — type annotations são removidas na compilação e não afetam o runtime.
- [[typescript-downleveling]] — compilação para versões antigas do ECMAScript via flag `--target`.
- [[typescript-modo-strict]] — o dial de rigor do TypeScript e a flag `strict`.
- [[typescript-no-implicit-any]] — flag que proíbe o tipo `any` inferido implicitamente.
- [[typescript-strict-null-checks]] — flag que torna `null` e `undefined` tipos distintos.

#### TypeScript — Everyday Types

- [[typescript-primitivos]] — os três primitivos: string, number e boolean; regra de usar minúsculo.
- [[typescript-arrays]] — sintaxe `number[]` vs `Array<T>`; nota sobre Tuples.
- [[typescript-tipo-any]] — o tipo `any`: desabilita type-checking; quando e quando não usar.
- [[typescript-anotacoes-em-funcoes]] — type annotations em parâmetros, retorno e `Promise<T>`.
- [[typescript-contextual-typing]] — inferência automática de tipos em funções anônimas pelo contexto.
- [[typescript-object-types]] — object types inline: sintaxe, separadores e tipo padrão `any`.
- [[typescript-optional-properties]] — propriedades opcionais com `?` e checagem de `undefined`.
- [[typescript-union-types]] — combinação de tipos com `|`; restrições de operações.
- [[typescript-narrowing]] — narrowing com `typeof` e `Array.isArray` para tratar union types.
- [[typescript-type-aliases]] — keyword `type` para nomear e reutilizar tipos.
- [[typescript-interfaces]] — keyword `interface` para declarar object types nomeados.
- [[typescript-type-aliases-vs-interfaces]] — diferenças, extensão, merging e heurística de uso.
- [[typescript-type-assertions]] — keyword `as` e angle-bracket para assertar tipos.
- [[typescript-literal-types]] — valores específicos como tipos; string, number e boolean literals.
- [[typescript-literal-inference]] — inferência de tipo geral em objetos; como contornar com `as const`.
- [[typescript-null-undefined]] — comportamento de `null` e `undefined` com e sem `strictNullChecks`.
- [[typescript-non-null-assertion]] — operador `!` para remover `null`/`undefined` sem checagem explícita.
- [[typescript-enums]] — constantes nomeadas com `enum`; adição de runtime ao JavaScript.

#### TypeScript — More on Functions

- [[typescript-function-type-expressions]] — sintaxe `(a: T) => U` pra tipar funções.
- [[typescript-call-signatures]] — call signatures: funções callable com propriedades.
- [[typescript-construct-signatures]] — construct signatures: tipar funções chamadas com `new`.
- [[typescript-generic-functions]] — generics em funções: type parameter e inferência.
- [[typescript-generic-constraints]] — constraints (`extends`) e o erro de "working with constrained values".
- [[typescript-especificar-type-arguments]] — especificar type arguments manualmente quando a inferência falha.
- [[typescript-boas-praticas-generics]] — diretrizes: push type parameters down, menos parâmetros, aparecer 2x.
- [[typescript-optional-parameters]] — parâmetros opcionais, defaults e a pegadinha em callbacks.
- [[typescript-function-overloads]] — overload signatures vs implementation signature; quando evitar overloads.
- [[typescript-this-em-funcoes]] — declarar o tipo de `this` como parâmetro sintático.
- [[typescript-outros-tipos-de-retorno]] — `void`, `object`, `unknown`, `never` e o tipo global `Function`.
- [[typescript-rest-parameters-e-arguments]] — rest parameters (`...m: number[]`) e rest arguments (spread).
- [[typescript-parameter-destructuring]] — destructuring de parâmetros com tipo anotado após o padrão.
- [[typescript-assignabilidade-de-void]] — por que funções que retornam algo são atribuíveis a `() => void`.

#### TypeScript — Object Types

- [[typescript-optional-properties-em-objetos]] — marcar propriedades como opcionais com `?` em object types e defaults por destructuring.
- [[typescript-readonly-properties]] — modificador `readonly` em propriedades: o que garante (e o que não garante).
- [[typescript-index-signatures]] — index signatures (`[index: T]: U`), tipos permitidos e variante `readonly`.
- [[typescript-excess-property-checks]] — checagem de propriedades excedentes em object literals e como contorná-la.
- [[typescript-extending-types]] — `interface extends`, inclusive extensão múltipla.
- [[typescript-intersection-types]] — combinar object types com o operador `&`.
- [[typescript-interface-extends-vs-intersection]] — diferença de tratamento de conflitos entre `extends` e `&`.
- [[typescript-generic-object-types]] — object types genéricos (`interface Box<Type>`).
- [[typescript-array-type]] — `Array<T>` como tipo genérico embutido.
- [[typescript-readonlyarray-type]] — `ReadonlyArray<T>` e a sintaxe `readonly T[]`.
- [[typescript-tuple-types]] — tuplas: elementos fixos, opcionais e rest elements.
- [[typescript-readonly-tuple-types]] — tuplas `readonly` e inferência via `as const`.

#### TypeScript — Type Manipulation

- [[typescript-conditional-types]] — sintaxe `T extends U ? X : Y` e uso com generics para evitar overloads.
- [[typescript-conditional-type-constraints]] — constranger o branch verdadeiro de um conditional type pelo tipo comparado.
- [[typescript-infer-keyword]] — keyword `infer` para extrair tipos dentro de conditional types.
- [[typescript-distributive-conditional-types]] — conditional types se distribuem sobre union types; como evitar com colchetes.
- [[typescript-mapped-types]] — construir um tipo iterando as chaves de outro com `[Property in keyof Type]`.
- [[typescript-mapping-modifiers]] — modificadores `readonly`/`?` e prefixos `+`/`-` em mapped types.
- [[typescript-key-remapping-via-as]] — remapear chaves em mapped types com a cláusula `as`.

## Projetos

- [[projetos/maquina-estados-pedido/README|Máquina de Estados de Pedido]] — mini-projeto de consolidação do Bloco 0 (discriminated unions, narrowing, exhaustiveness checking).

## Estudos Pessoais

### Bíblia
*(vazio)*

### Curiosidades
*(vazio)*

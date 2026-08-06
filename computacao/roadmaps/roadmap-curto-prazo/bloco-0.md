 # 📘 Bloco 0 — TypeScript do Zero ao Necessário

> **Como usar este tracker.** Cada seção mapeia uma página real do Handbook oficial. Marque um item só quando passar do critério: **consigo explicar do zero, escrever sem copiar, e dizer quando usar.** Ler o vídeo/página não conta — escrever conta.
> 
> **Ordem.** Siga a navegação oficial do Handbook (de cima pra baixo). Está exatamente nessa ordem aqui.
> 
> **Regra de ouro do bloco:** IA tira dúvida pontual de sintaxe. IA **não** escreve sua lógica. Você não aprende o que não luta para entender.

---

## 🎯 Critério de conclusão do Bloco 0 inteiro

Você fecha o Bloco 0 quando consegue, sem consultar:

- [ ] Tipar uma função com parâmetros, retorno e generics sem pensar muito
- [ ] Explicar a diferença entre `interface` e `type` e escolher conscientemente
- [ ] Usar narrowing (type guards) para tratar uma união de tipos com segurança
- [ ] Explicar por que `any` é dívida e quando usar `unknown`
- [ ] Montar um `tsconfig.json` com `strict: true` e entender o que cada flag faz
- [ ] **Entregar o projeto-prova** (ver final do arquivo)

---

> ⏱️ **Plano de 4 dias (máximo).** Estimativa comprimida — bloco focado de ~2h/dia:
> - **Dia 1:** Parte 1 + Parte 2 + começar Parte 3 (Everyday Types)
> - **Dia 2:** terminar Parte 3 + Parte 4 (Narrowing) — o núcleo, onde mais vale ir devagar
> - **Dia 3:** Parte 5 (Functions) + Parte 6 (Object Types) + Parte 7 (só reconhecer)
> - **Dia 4:** Parte 8 + Parte 9 + Parte 10 + Parte 11 + iniciar o projeto-prova

---

## Parte 1 — Getting Started (Dia 1)

> Leitura rápida de contexto. Não trave aqui. Escolha o guia que casa com seu background.

- [x] **TS for JS Programmers** — o mais relevante pra você
    - 📄 https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- [x] **TypeScript Tooling in 5 minutes** — montar e rodar o primeiro `tsc`
    - 📄 https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
- [x] Instalar TypeScript local, rodar `tsc hello.ts`, ver o `.js` gerado
- [x] Entender: TS é superset de JS, tipos somem em runtime, `tsc` só checa e transpila

---

## Parte 2 — The Basics (Dia 1)

> 📄 https://www.typescriptlang.org/docs/handbook/2/basic-types.html

- [x] Entender static type checking: erro de tipo ≠ erro de sintaxe
- [x] Entender que TS nunca muda o comportamento em runtime do JS
- [x] Tipos de erro: o que o compilador pega antes de rodar
- [x] Emitir com erros (`noEmitOnError`) — entender o tradeoff
- [x] `strict` mode: o que liga e por que você sempre quer ligado
- [x] `noImplicitAny` e `strictNullChecks` — as duas flags que mais importam

---

## Parte 3 — Everyday Types (Dia 1-2) ⭐ núcleo

> 📄 https://www.typescriptlang.org/docs/handbook/2/everyday-types.html A página mais importante do bloco inteiro. Não corra.

- [x] Primitivos: `string`, `number`, `boolean`
- [x] Arrays: `number[]` vs `Array<number>`
- [x] `any` — o que é, por que evitar, como ele "infecta"
- [x] Type annotations em variáveis (e quando deixar a inferência trabalhar)
- [x] Funções: tipar parâmetros e retorno
- [x] Tipos de retorno inferidos vs explícitos
- [x] Funções anônimas e contextual typing
- [x] Object types: declarar a forma de um objeto
- [x] Propriedades opcionais (`?`)
- [x] **Union types** — declarar que algo é A ou B
- [x] Trabalhar com unions (narrowing introdutório)
- [x] Type aliases (`type`)
- [x] **Interfaces**
- [x] **`type` vs `interface`** — a diferença e quando usar cada (item de entrevista clássico)
- [x] Type assertions (`as`) — e por que usar com cautela
- [x] Literal types (`"a" | "b" | "c"`)
- [x] Literal inference e o problema do objeto literal
- [x] `null` e `undefined`, optional chaining (`?.`), non-null assertion (`!`)
- [x] Entender por que `!` pode esconder bugs reais

---

## Parte 4 — Narrowing (Dia 2) ⭐ núcleo

> 📄 https://www.typescriptlang.org/docs/handbook/2/narrowing.html Onde TS "pensa junto com você". Domina isto e some 80% da sua insegurança.

- [x] `typeof` type guards
- [x] Truthiness narrowing
- [x] Equality narrowing (`===`, `!==`)
- [x] `in` operator narrowing
- [x] `instanceof` narrowing
- [x] Assignment narrowing
- [x] Control flow analysis — como o TS segue o fluxo
- [x] Type predicates (`param is Type`) — escrever seu próprio guard
- [x] **Discriminated unions** — o padrão mais útil do TS no mundo real
- [x] O tipo `never` e exhaustiveness checking (garantir que tratei todos os casos)

---

## Parte 5 — More on Functions (Dia 3)

> 📄 https://www.typescriptlang.org/docs/handbook/2/functions.html

- [x] Function type expressions
- [x] Call signatures
- [x] Construct signatures
- [x] **Generic functions** — a base de generics
- [x] Inference em generics
- [x] Constraints (`extends`) em generics
- [x] Especificar type arguments manualmente
- [x] Boas práticas de generics (quando NÃO usar)
- [x] Optional parameters e default parameters
- [x] Function overloads — o que são e quando valem a pena
- [x] `this` em funções
- [x] Rest parameters e spread
- [x] Parameter destructuring tipado
- [x] Return types: `void`, `never`, `object`, `unknown`

---

## Parte 6 — Object Types (Dia 3)

> 📄 https://www.typescriptlang.org/docs/handbook/2/objects.html

- [x] Property modifiers: `?` (optional), `readonly`
- [x] Index signatures (`[key: string]: T`)
- [x] Excess property checks
- [x] Extending types (`interface extends`)
- [x] Intersection types (`A & B`)
- [x] `interface extends` vs intersection — diferença prática
- [x] Generic object types
- [x] `Array<T>`, `ReadonlyArray<T>`
- [x] Tuple types (`[string, number]`)
- [x] `readonly` tuples

---

## Parte 7 — Type Manipulation / Creating Types from Types (Dia 3 — só reconhecer) ⭐ o salto de nível

> Cluster "Creating Types from Types" do Handbook. Aqui você sai de júnior raso pra júnior forte. Não precisa dominar TUDO na primeira passada — mas precisa **reconhecer e usar** o básico de cada.

### 7.1 Generics (página dedicada)

> 📄 https://www.typescriptlang.org/docs/handbook/2/generics.html

- [x] Generic functions revisitado, com profundidade
- [x] Generic classes
- [x] Generic constraints
- [x] Usar type parameters em constraints
- [x] Generic parameter defaults

### 7.2 Keyof Type Operator

> 📄 https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

- [x] `keyof` — extrair as chaves de um tipo

### 7.3 Typeof Type Operator

> 📄 https://www.typescriptlang.org/docs/handbook/2/typeof-types.html

- [x] `typeof` no nível de tipo (diferente do `typeof` em runtime)

### 7.4 Indexed Access Types

> 📄 https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

- [x] `T["propriedade"]` — acessar o tipo de uma propriedade

### 7.5 Conditional Types (introdução — só reconhecer)

> 📄 https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

- [x] Entender `T extends U ? X : Y` no nível de leitura
- [x] `infer` (só reconhecer, não precisa dominar agora)

### 7.6 Mapped Types (introdução)

> 📄 https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

- [x] Entender como `{ [K in keyof T]: ... }` funciona (leitura)

### 7.7 Template Literal Types (só reconhecer)

> 📄 https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

- [ ] Saber que existem e pra que servem

---

## Parte 8 — Utility Types (Dia 4) ⭐ usa todo dia no trabalho

> 📄 https://www.typescriptlang.org/docs/handbook/utility-types.html Não decore todos. Domine os que aparecem em todo código profissional.

- [ ] `Partial<T>`
- [ ] `Required<T>`
- [ ] `Readonly<T>`
- [ ] `Pick<T, Keys>`
- [ ] `Omit<T, Keys>`
- [ ] `Record<Keys, T>`
- [ ] `Returntype<T>`
- [ ] `Parameters<T>`
- [ ] `Awaited<T>` (importante pra async)
- [ ] `NonNullable<T>`

---

## Parte 9 — Classes (Dia 4)

> 📄 https://www.typescriptlang.org/docs/handbook/2/classes.html Você vai usar muito no NestJS (Bloco 1). Foco no que o Nest usa.

- [ ] Class fields e tipagem
- [ ] Modificadores: `public`, `private`, `protected`, `readonly`
- [ ] Parameter properties (`constructor(private x: T)`) — o Nest ama isso
- [ ] Constructors
- [ ] Methods e getters/setters
- [ ] `implements` (uma classe cumprindo uma interface)
- [ ] Herança (`extends`) e `super`
- [ ] Abstract classes e métodos
- [ ] Decorators (só reconhecer — o Nest usa muito, você aprofunda no Bloco 1)

---

## Parte 10 — Modules (Dia 4)

> 📄 https://www.typescriptlang.org/docs/handbook/2/modules.html

- [ ] `import` / `export` (ES Modules)
- [ ] Default export vs named export
- [ ] `import type` (importar só o tipo)
- [ ] Como TS resolve módulos (visão geral)
- [ ] Diferença rápida CommonJS vs ESM (você vai esbarrar nisso no Node)

---

## Parte 11 — Configuração (Dia 4)

> 📄 https://www.typescriptlang.org/tsconfig/

- [ ] Montar um `tsconfig.json` do zero
- [ ] `target`, `module`, `lib`
- [ ] `strict` e as flags que ele agrupa
- [ ] `esModuleInterop`
- [ ] `moduleResolution`
- [ ] `outDir`, `rootDir`
- [ ] `skipLibCheck` (e por que costuma ficar `true`)

---

## ✅ Projeto-Prova do Bloco 0

> Sem isto, o bloco não está concluído. Marcar checkbox de leitura não prova nada — código prova.

Construa **um destes** (escolha o que te anima mais), 100% tipado, lógica escrita por você:

- [ ] **CLI de tarefas** — adicionar/listar/completar/remover tarefas, persistindo num JSON
- [ ] **API minúscula** (Express ou Node puro) — CRUD de uma entidade, tudo tipado
- [ ] **Parser/validador** — recebe dados "sujos" (`unknown`) e valida com type guards

Requisitos obrigatórios do projeto (checklist de qualidade):

- [ ] `strict: true` no tsconfig, zero `any` implícito
- [ ] Pelo menos um generic escrito por você
- [ ] Pelo menos uma discriminated union com exhaustiveness check (`never`)
- [ ] Pelo menos um type guard customizado (`x is T`)
- [ ] Entrada externa tratada como `unknown` e validada (não `any`)
- [ ] Uso de pelo menos 3 utility types diferentes
- [ ] **Consigo explicar cada decisão de tipo se alguém perguntar** ← o verdadeiro critério

---

## 🔗 Mapa de referências (todas oficiais)

|Tema|Link|
|---|---|
|Intro do Handbook|https://www.typescriptlang.org/docs/handbook/intro.html|
|The Basics|https://www.typescriptlang.org/docs/handbook/2/basic-types.html|
|Everyday Types|https://www.typescriptlang.org/docs/handbook/2/everyday-types.html|
|Narrowing|https://www.typescriptlang.org/docs/handbook/2/narrowing.html|
|More on Functions|https://www.typescriptlang.org/docs/handbook/2/functions.html|
|Object Types|https://www.typescriptlang.org/docs/handbook/2/objects.html|
|Generics|https://www.typescriptlang.org/docs/handbook/2/generics.html|
|Keyof|https://www.typescriptlang.org/docs/handbook/2/keyof-types.html|
|Typeof|https://www.typescriptlang.org/docs/handbook/2/typeof-types.html|
|Indexed Access|https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html|
|Conditional Types|https://www.typescriptlang.org/docs/handbook/2/conditional-types.html|
|Mapped Types|https://www.typescriptlang.org/docs/handbook/2/mapped-types.html|
|Template Literal Types|https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html|
|Classes|https://www.typescriptlang.org/docs/handbook/2/classes.html|
|Modules|https://www.typescriptlang.org/docs/handbook/2/modules.html|
|Utility Types|https://www.typescriptlang.org/docs/handbook/utility-types.html|
|tsconfig reference|https://www.typescriptlang.org/tsconfig/|

---

_Estimativa-alvo com seu bloco de ~2h focadas: **no máximo 4 dias** (ver plano de dias no topo). As Partes 3 (Everyday Types) e 4 (Narrowing) são o coração — se precisar ir mais devagar, sacrifique a largura da Parte 7, não a profundidade delas. A Parte 7 você passa uma vez por cima e revisita quando o projeto exigir. É um ritmo agressivo: o projeto-prova pode transbordar para um 5º dia sem culpa — ele é o que realmente fecha o bloco._
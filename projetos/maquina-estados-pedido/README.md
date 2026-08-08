---
tipo: projeto
area: projetos
tags: [typescript, discriminated-unions, narrowing, projeto-prova]
atualizado: 2026-08-08
---

# Máquina de Estados de Pedido

Mini-projeto de consolidação prática do [[computacao/roadmaps/roadmap-curto-prazo/bloco-0|Bloco 0 — Base de TypeScript Real]]. Objetivo: modelar o ciclo de vida de um pedido usando discriminated unions, narrowing e exhaustiveness checking.

## 📚 Revisar antes de começar

- [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) — union types, literal types, type aliases vs interfaces
- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) — `switch`/`in`/equality narrowing, type predicates (`param is Type`), **discriminated unions**, `never` e exhaustiveness checking
- [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html) — tipagem de retorno (`void`, `never`)
- [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html) — útil para o type guard com `Extract<...>`

## ✅ Requisitos

### 1. Modelagem de tipos
- Defina um tipo `Pedido` como union discriminada por um campo comum (ex: `status`).
- Pelo menos 4 estados, cada um com dados específicos que só fazem sentido naquele estado (ex: um estado carrega `valorPago`, outro carrega `motivo`, outro não carrega nada extra).
- Nenhum campo opcional "genérico" cobrindo todos os estados — cada variante da union só tem os campos que realmente lhe pertencem.

### 2. Eventos
- Defina um tipo `Evento` (também union discriminada) representando as ações possíveis (ex: pagar, cancelar, enviar, entregar).
- Cada evento carrega só os dados que faz sentido ele carregar.

### 3. Função de transição
- Escreva uma função `transicionar(pedido: Pedido, evento: Evento): Pedido`.
- Use `switch` (ou `if`) narrowing em cima do campo discriminante do **pedido** e do **evento** — não use `as` para forçar tipo em nenhum momento.
- Trate como **erro de lógica explícito** (lançar exceção ou retornar tipo de erro) toda combinação estado+evento que não é uma transição válida (ex: cancelar um pedido já entregue).

### 4. Exhaustiveness check
- No fim do `switch` principal (o que decide o estado atual), inclua um `default` que atribua o valor a uma variável tipada `never`.
- Prove que isso pega erro em tempo de compilação: adicione temporariamente um novo estado à union e veja o TS reclamar no `never` até você tratar o caso novo em todos os lugares necessários (e depois reverta o teste).

### 5. Type guard customizado
- Escreva pelo menos uma função guard própria (`function ehPago(p: Pedido): p is Extract<Pedido, { status: "pago" }>`) e use-a em algum ponto do fluxo (ex: numa função que só faz sentido para pedidos pagos).

### 6. Qualidade / config
- `strict: true` no `tsconfig`, zero `any` (implícito ou explícito).
- Escreva um pequeno "runner" (`main.ts`) que simula uma sequência de eventos sobre um pedido e imprime o estado final — sem framework, só TS puro rodando com `tsc` + `node`.

## 🎯 Critério de "pronto"

Você consegue adicionar um novo estado ao `Pedido` e o compilador te aponta, sozinho, todos os lugares que precisam ser atualizados — sem você precisar caçar manualmente.

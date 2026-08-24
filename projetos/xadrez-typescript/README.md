---
tipo: projeto
area: projetos
tags: [typescript, discriminated-unions, generics, type-guards, projeto-prova]
atualizado: 2026-08-24
---

# Xadrez em TypeScript

Projeto-prova de encerramento do [[computacao/roadmaps/roadmap-curto-prazo/bloco-0|Bloco 0 — Base de TypeScript Real]]. Objetivo: modelar o tabuleiro, as peças e a geração de movimentos legais de xadrez, 100% tipado.

## 🎯 Escopo

**Dentro do escopo:** representação do tabuleiro, peças, e geração de movimentos legais por tipo de peça (incluindo bloqueio por outras peças no caminho).

**Fora do escopo (não implementar):** detecção de xeque/xeque-mate, roque, en passant, promoção de peão, empate por afogamento/repetição. O projeto foca em tipagem, não em regras completas do jogo.

## ✅ Requisitos (checklist do Bloco 0)

- [ ] `strict: true` no tsconfig, zero `any` implícito ou explícito
- [ ] Pelo menos um **generic** escrito por você (ex: um tipo `Board<T>` ou uma função genérica de busca/filtro em posições)
- [ ] Pelo menos uma **discriminated union com exhaustiveness check** (`never`) — candidata natural: o tipo de peça (`Peao | Cavalo | Bispo | Torre | Rainha | Rei`) discriminado por um campo `tipo`, com `switch` exaustivo na geração de movimentos
- [ ] Pelo menos um **type guard customizado** (`x is T`) — ex: `ehMovimentoValido`, `ehPosicaoDentroDoTabuleiro`
- [ ] **Entrada externa tratada como `unknown`** e validada (não `any`) — ex: parsear uma jogada em notação simples (`"e2e4"`) vinda de string/input não confiável
- [ ] Uso de pelo menos **3 utility types diferentes** (`Readonly`, `Partial`, `Pick`, `Omit`, `Record`, etc.)
- [ ] **Consigo explicar cada decisão de tipo se alguém perguntar** ← o verdadeiro critério

## 📚 Revisar antes de começar

- [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) — discriminated unions, exhaustiveness checking
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [tsconfig reference](https://www.typescriptlang.org/tsconfig/)

## 🎯 Critério de "pronto"

Dado um tabuleiro com peças posicionadas, a função de geração de movimentos retorna as jogadas legais de uma peça (incluindo bloqueio por outras peças), com todos os tipos passando `strict` sem `any`.

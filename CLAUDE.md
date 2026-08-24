# CLAUDE.md — Constituição do Segundo Cérebro

> Este arquivo é a primeira coisa que qualquer agente lê. Ele diz o que é este cofre,
> como ele é organizado e como você (agente) deve operar. Mantenha-o curto.
> **Princípio máximo: mínimo por design. Só cresce quando a dor aparecer.**

---

## 1. O que é este cofre

Um "segundo cérebro" em Obsidian, mantido em conjunto pelo dono (estudante de Ciência da
Computação em transição para vaga remota) e por agentes de IA. Ele tem **três papéis**, nesta ordem:

1. **Companheiro de estudo** — ajudar a aprender, revisar, explicar e fixar (CS, Bíblia, curiosidades).
2. **Conselheiro de progresso** — acompanhar os roadmaps, dizer "o que fazer agora", conectar estudo ↔ projeto.
3. **Memória consultável** — responder perguntas sobre tudo que já foi anotado/lido.

**O que este cofre NÃO é:** não é uma máquina de síntese de fontes externas (modelo Karpathy puro).
Destilar fontes existe, mas é coadjuvante. O centro é **estudar + executar + recuperar**.

---

## 2. Estrutura e propriedade

```
CLAUDE.md          # este arquivo
index.md           # mapa do cofre (você mantém)
log.md             # linha do tempo append-only (você mantém)
inbox/             # captura crua sem atrito; o dono joga, você fila sob demanda
computacao/        # Computação & Carreira (faculdade + carreira + estudo de CS)
  roadmaps/        #   REFERÊNCIA intocável — docs estratégicos do dono
    roadmap-curto-prazo/   #   pasta: index.md (visão geral) + bloco-N.md (detalhe por bloco)
    roadmap-longo-prazo.md #   biblioteca de 60 módulos Pleno → Staff
  estado*.md       #   nota(s) VIVA(s): onde estou / próximos passos, uma por trilha ativa (você mantém)
  notas/           #   notas de estudo de CS, fontes destiladas, conceitos
projetos/          # um diretório por projeto ("o projeto é o currículo")
pessoal/
  biblia/          #   estudo bíblico (cresce por livro/tema)
  curiosidades/    #   conhecimento curado (ciência, história, etc.) — NÃO é pasta-lixão
assets/            # imagens/anexos
```

**Quem edita o quê:**

| Caminho | Dono | Regra |
|---|---|---|
| `computacao/roadmaps/*` | **só o dono** | Você LÊ para orientar. **Nunca edite.** |
| `computacao/estado*.md` (uma trilha ativa por arquivo, ex.: `estado.md`, `estado-dtec.md`), `index.md`, `log.md` | **você (IA)** | Mantenha atualizados. |
| `inbox/`, `*/notas/`, `projetos/`, `pessoal/` | colaborativo | Arquive/conecte sob demanda. |

> **Roadmap de curto prazo é uma pasta, não um arquivo.** `roadmap-curto-prazo/index.md` é a
> visão geral dos blocos; o dono cria progressivamente um `bloco-N.md` para detalhar cada bloco
> (tracker granular, links, estimativas). Esses arquivos também são **referência intocável** — você
> LÊ para orientar e linka a partir do `index.md`, mas só edita se o dono pedir explicitamente.

---

## 3. Convenções

- **Frontmatter mínimo** em toda página de conhecimento:
  ```yaml
  ---
  tipo: nota | fonte | conceito | estado | projeto | indice
  area: computacao | projetos | pessoal
  tags: []
  atualizado: AAAA-MM-DD
  # opcionais:
  fonte_url:                    # quando tipo: fonte
  confianca: alta | media | baixa   # para conteúdo destilado/incerto
  ---
  ```
- **Nomes de arquivo em kebab-case** (ex.: `jwt-payload.md`). **Idioma: português.**
- **Use `[[wikilinks]]` liberalmente** — inclusive para páginas que ainda não existem;
  um link quebrado marca o que vale criar depois, não é erro.
- Distinção entre tipos de página vive no frontmatter `tipo`, **não** em pastas novas.

---

## 4. Operações

Nenhuma roda automaticamente. Você age quando o dono pede. Mantém manutenção quase-zero.

- **Capturar** — o dono joga qualquer coisa em `inbox/`. Você não faz nada até ele pedir.
- **Arquivar** (sob demanda) — leia `inbox/`, decida a casa certa, crie/mova a nota com
  frontmatter e `[[links]]`, esvazie o item do inbox, atualize `index.md` e acrescente linha em `log.md`.
- **Estudar** — explique, revise ou faça perguntas sobre um tema. Boas explicações podem virar
  nota (`tipo: nota`/`conceito`) em `computacao/notas/` ou `pessoal/`.
- **Avançar** — leia o roadmap relevante + o arquivo de estado da trilha correspondente (`computacao/estado*.md`
  — pode existir mais de um, uma trilha ativa por arquivo); diga o próximo passo concreto; conecte o que ele
  estuda com a freelance/projeto/trilha em questão; **atualize o `estado*.md` da trilha, nunca os roadmaps**.
  Se houver mais de uma trilha com passo pendente e não estiver claro qual seguir, pergunte antes de agir.
- **Perguntar** — leia `index.md` primeiro para se orientar, abra as páginas relevantes, responda
  com citações via `[[links]]`. Se a resposta for valiosa, ofereça arquivá-la como nova nota.
- **Revisar** (lint, sob demanda) — procure contradições, conteúdo obsoleto, páginas órfãs,
  links faltando e lacunas. Conserte o que for seguro; sinalize julgamentos ao dono.

---

## 5. index.md e log.md

- **index.md** — catálogo orientado a conteúdo, por área. Cada página listada com link + resumo de
  uma linha. É o que você lê primeiro ao responder. Atualize a cada arquivamento.
- **log.md** — append-only, cronológico. Prefixo parseável:
  `## [AAAA-MM-DD] arquivar|estudar|avançar|perguntar|revisar | título`.
  Permite `grep "^## \[" log.md | tail -5`.

---

## 6. Princípios

1. **Sobreviver ao abandono.** Tudo deve fazer sentido após semanas sem uso. Nada quebra.
2. **A IA arquiva; não terceiriza burocracia ao dono.** O dono só captura e pergunta.
3. **Roadmaps são sagrados.** Estado vivo vai para `estado.md`, nunca dentro dos roadmaps.
4. **Não crie pasta-lixão.** `inbox/` é trânsito; conhecimento curado tem casa definida.
5. **Mínimo > robusto.** Não adicione pastas, campos ou rituais antes de existir dor real.

---
name: lint
description: Audita a saúde estrutural das notas de estudo em computacao/notas/**. Usar quando o usuário digitar /lint (varre computacao/notas/** inteiro) ou /lint <tema> (ex: /lint typescript, restringe a um subdiretório). Corrige automaticamente problemas mecânicos (links quebrados com alvo inequívoco, imagens fora de assets/, index.md fora de sincronia) e propõe para confirmação os achados que exigem julgamento (notas duplicadas, pastas genéricas demais, páginas órfãs, frontmatter incompleto). Não usar para arquivar itens do inbox/ nem para criar notas novas.
---

# Skill: /lint

## Quando usar

Quando o usuário invocar `/lint` ou `/lint <tema>`.

- `/lint` → varre `computacao/notas/**` inteiro
- `/lint <tema>` (ex: `/lint typescript`, `/lint everyday-types`) → restringe a auditoria ao subdiretório correspondente

---

## O que essa skill faz

Audita a saúde estrutural das notas de estudo: acha e corrige automaticamente problemas mecânicos (links quebrados com alvo inequívoco, imagens fora de `assets/`, `index.md` fora de sincronia), e apresenta como proposta os achados que exigem julgamento (notas duplicadas, pastas com baixa coesão temática, páginas órfãs, frontmatter incompleto) — só age sobre esses últimos com confirmação do usuário.

---

## Passo a passo de execução

### 1. Definir escopo

- Sem argumento: `computacao/notas/**` inteiro.
- Com argumento de tema: mapear para o subdiretório correspondente (mesma lógica de resolução de tema do `/fixar`).

O escopo **nunca** ultrapassa `computacao/notas/**` — não varrer `projetos/`, `pessoal/`, `inbox/` nem `computacao/roadmaps/**`.

### 2. Varredura — categorias mecânicas (corrigir direto)

**Links quebrados com alvo óbvio**
Para cada `[[wikilink]]` dentro do escopo, verificar se existe um arquivo `.md` com esse nome em qualquer lugar do cofre.
- Se não existir mas houver exatamente um arquivo de nome muito similar (mesmo conceito, grafia diferente — ex: `typescript-falhas-nao-excepcionais` vs `typescript-non-exception-failures`): corrigir o link para apontar ao arquivo real.
- Se ambíguo (mais de um candidato) ou sem correspondência nenhuma: **não mexer** — reportar como link legitimamente pendente (pode ser nota futura, conforme princípio do `CLAUDE.md` de que links quebrados marcam o que vale criar depois).

**Imagens fora de `assets/`**
Localizar arquivos de imagem embutidos (`![[...]]`) referenciados por notas do escopo que estejam fora de `assets/` (raiz do cofre ou dentro de pastas de notas). Mover para `assets/` com nome kebab-case descritivo do conteúdo, e atualizar o embed na nota que a referencia.

**`index.md` desatualizado**
- Notas existentes no escopo mas ausentes do `index.md`: adicionar entrada (`[[wikilink]]` + resumo de uma linha), seguindo o padrão já usado nas entradas vizinhas.
- Entradas do `index.md` apontando para notas que não existem mais dentro do escopo: remover a entrada.

### 3. Varredura — categorias de julgamento (propor, aguardar confirmação)

**Notas duplicadas**
Heurística: sobreposição de tags + título/tema semelhante entre arquivos do mesmo diretório temático. Reportar os pares candidatos com um resumo do que cada um cobre (tamanho, profundidade, se tem wikilinks de relação). Nunca decidir sozinho qual é a versão canônica nem apagar nada sem confirmação.

**Pastas genéricas demais**
Para cada subpasta dentro do escopo, avaliar a coesão temática dos arquivos (tags e conteúdo correlacionados vs. heterogêneos — mesmo critério da reorganização de `computacao/notas/typescript/everyday-types/` feita nesta sessão: uma pasta genérica mistura conceitos sem relação direta, tipo "mecanismos" misturando narrowing, type assertions e contextual typing). Se heterogênea, propor uma nova subdivisão nomeada e específica, onde todo arquivo de uma subpasta correlaciona diretamente com os demais.

**Páginas órfãs**
Notas no escopo que não são referenciadas por nenhum `[[wikilink]]` de outra nota nem aparecem no `index.md`. Reportar e sugerir onde poderiam ser linkadas — a inserção do link é decisão de conteúdo, então só aplicar após confirmação.

**Frontmatter incompleto/inconsistente**
Notas sem os campos mínimos do `CLAUDE.md` (`tipo/area/tags/atualizado`), ou com tags claramente inconsistentes frente a notas irmãs do mesmo tema. Reportar. Preencher automaticamente só o que é inferível sem ambiguidade (ex: `area` pelo caminho do arquivo); o resto (tags, `atualizado` quando a data real é incerta) aguarda confirmação.

### 4. Relatório único

Antes de tocar em qualquer item de julgamento, apresentar um relatório consolidado:

```
✅ Corrigidos automaticamente:
- {item mecânico 1}
- {item mecânico 2}

⚠️ Pendentes de confirmação:
- {duplicata candidata / pasta genérica / órfã / frontmatter incompleto}
```

Executar os itens de julgamento apenas após o usuário confirmar — pode ser tudo de uma vez ou item por item, conforme a preferência que ele indicar na hora.

### 5. Fechamento

- Adicionar uma entrada em `log.md`: `## [AAAA-MM-DD] revisar | <título>`, resumindo o que foi corrigido e o que ficou pendente.
- Não criar nenhum arquivo de relatório persistente — o relatório vive só na conversa e no `log.md`.

---

## O que NÃO fazer

- Não editar `computacao/roadmaps/**` sob nenhuma circunstância.
- Não tocar `projetos/`, `pessoal/` ou `inbox/` — escopo restrito a `computacao/notas/**`.
- Não fazer merge de notas duplicadas nem mover arquivos entre pastas sem confirmação explícita do usuário.
- Não inventar conteúdo, tags ou valores de frontmatter que não sejam diretamente inferíveis do próprio arquivo/caminho.
- Não apagar um wikilink apontando para uma nota que não existe se não houver um candidato inequívoco de correção.
- Não criar arquivos de relatório novos — registrar só via `log.md`.

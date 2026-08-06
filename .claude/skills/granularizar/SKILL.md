---
name: granularizar
description: Processa notas cruas depositadas em /inbox, expandindo cada uma em notas atômicas individuais por conceito e movendo-as para o caminho absoluto do cofre que corresponde ao contexto do conteúdo. Usar quando o usuário digitar /granularizar (processa todas as notas em /inbox) ou /granularizar <nome-do-arquivo> (restringe a uma nota específica dentro de /inbox). Não usar para perguntas gerais sobre o cofre nem para notas fora de /inbox.
---

# Skill: /granularizar

## Quando usar

Quando o usuário invocar `/granularizar`, opcionalmente seguido de `<nome-do-arquivo>` — o nome (ou parte do nome) de um arquivo dentro de `inbox/`.

- `/granularizar` → processa **todas** as notas em `inbox/` (exceto `.gitkeep`), uma de cada vez.
- `/granularizar Object Types.md` → processa só essa nota dentro de `inbox/`.

---

## O que essa skill faz

Lê uma nota crua de `inbox/` (tipicamente um clipping de documentação/artigo), identifica todos os conceitos atômicos presentes nela, cria uma nota granular individual para cada conceito, e **move o resultado para o diretório do cofre que corresponde ao contexto do conteúdo** — criando esse diretório se necessário (sob confirmação). Ao final, a nota crua é removida de `inbox/`. **Nunca inventa conteúdo:** só reorganiza e estrutura o que está na nota de origem.

---

## Passo a passo de execução

### 1. Levantamento do inbox

Liste os arquivos `.md` em `inbox/` (ignore `.gitkeep`). Se o usuário passou um nome de arquivo, filtre para esse único arquivo (match por nome exato ou parcial, sem ambiguidade — se houver mais de um match, pergunte qual).

Se não houver nenhuma nota para processar, informe e pare.

Se houver mais de uma nota, avise a fila antes de começar (ex: "3 notas na fila: Object Types.md, More on Functions.md, ..."). Processe **uma nota por vez**, do início ao fim (passos 2-8), antes de passar para a próxima.

### 2. Leitura e análise da nota

Leia a nota crua por completo. Extraia do frontmatter (formato de clipping: `title`, `source`, `tags`, etc., se presente) e do conteúdo:

- **Tópico/título** do conteúdo (ex: "Object Types")
- **`source` / URL de origem**, se houver — útil para inferir o domínio
- **Conceitos atômicos**: cada conceito que merece nota própria. Um conceito é atômico quando pode ser explicado isoladamente e tem nome próprio no domínio. Não agrupe conceitos diferentes em uma mesma nota — máxima granularidade.

Leia também `index.md` (raiz do cofre) para se orientar sobre o que já existe.

### 3. Inferir o destino

**Domínio:** infira a partir da URL de origem, das tags e do conteúdo (ex: `typescriptlang.org` → domínio `typescript`; conteúdo sobre livros da Bíblia → `pessoal/biblia`). Cruze com os diretórios que já existem em `computacao/notas/`, `pessoal/` e `projetos/` — prefira reaproveitar uma pasta de domínio já existente a inventar uma nova.

**Tópico:** derive um slug em kebab-case do título da nota (ex: "Object Types" → `object-types`).

**Caminho proposto:** `{área}/{domínio}/{tópico}/` (ex: `computacao/notas/typescript/object-types/`).

Verifique o estado desse caminho:

- **Já existe** (mesmo domínio e tópico) → use-o diretamente, seguindo para a checagem de conflitos no passo 5.
- **Não existe** (domínio pode ou não existir) → **pare e pergunte ao usuário**, mostrando o caminho completo proposto e o porquê (ex: "A nota fala sobre Object Types do Handbook de TypeScript. Proponho criar `computacao/notas/typescript/object-types/`. Confirma?"). Só crie o diretório após confirmação explícita.
- Se a inferência de domínio ou tópico for ambígua, pergunte ao usuário em vez de chutar.

### 4. Determinar prefixo e apresentar o plano

**Prefixo de slug:** nome do domínio (ex: `typescript-`).

Para cada conceito identificado, determine:
- `slug`: `{prefixo}-{nome-em-kebab-case}` (ex: `typescript-type-assertions`)
- Título legível (ex: `TypeScript — Type Assertions`)
- Tags específicas do conceito
- Se já existe uma nota com esse slug no diretório de destino

Exiba para o usuário:

```
Destino: computacao/notas/typescript/object-types/

Vou criar N notas:

[ NOVAS ]
- typescript-object-types.md — Object Types: sintaxe e separadores
- typescript-extending-types.md — Extending types via interface extends
- ...

[ JÁ EXISTEM — verificação necessária ]
- typescript-generic-object-types.md — já existe, vou comparar antes de atualizar
```

**Pare aqui. Não escreva nenhum arquivo até o usuário confirmar.**

### 5. Resolução de conflitos (se houver)

Para cada nota que já existe no destino:
1. Leia o conteúdo atual da nota existente
2. Compare com o que você criaria a partir da nota de origem
3. Exiba um resumo das diferenças/semelhanças em 2-4 linhas
4. Pergunte: "Deseja adicionar o conteúdo novo à nota existente?" (sim/não por nota)

### 6. Criar as notas no destino

Crie cada nota no diretório de destino (criando-o primeiro, se ainda não existir e já tiver sido confirmado no passo 3). Siga este padrão rigorosamente:

```markdown
---
tipo: conceito
area: {computacao | pessoal | ...}
tags: [{dominio}, {tags-do-conceito}]
atualizado: {data-de-hoje}
fonte_url: {url da nota de origem, se disponível}
---

# {Domínio} — {Nome do Conceito}

{Explicação do conceito com conteúdo vindo da nota de origem}

{Quando outro conceito é mencionado inline no texto, transforme a menção em wikilink:
  ex: "O compilador [[typescript-compilador-tsc|tsc]] verifica os tipos antes de executar."
  Não crie lista separada de referências — os links vivem no corpo do texto.}
```

**Regra de wikilinks:**
- Se o texto menciona um conceito que tem nota própria (existente ou recém-criada no mesmo lote), transforme a menção em `[[slug|texto da menção]]`
- Não crie uma seção "Relação com outros conceitos" como lista separada — prefira links inline
- Se quiser listar os relacionamentos ao final, faça como uma linha simples, não como seção dedicada

**Regra de conteúdo:**
- Só use conteúdo presente na nota de origem — não complemente com conhecimento externo
- Preserve exemplos de código da nota de origem; reformate se necessário para clareza
- Traduza/normalize para português nas explicações, mantendo termos técnicos em inglês

### 7. Remover a nota de origem do inbox

Depois que todas as notas granulares do lote foram criadas (e confirmadas), apague o arquivo processado de `inbox/`. A nota crua não sobrevive como arquivo — o conteúdo dela agora vive dividido nas notas atômicas.

### 8. Atualizar index.md e log.md

**index.md:** adicione cada nova nota criada na seção correspondente à sua área. Formato de uma linha:
```
- [[slug]] — resumo de uma linha do que a nota cobre
```
Se o destino é uma pasta nova, crie também a subseção correspondente no índice, seguindo o padrão das seções vizinhas.

**log.md:** adicione uma entrada no topo do arquivo (logo após o cabeçalho):
```
## [AAAA-MM-DD] arquivar | Granularização de {nome-da-nota-de-origem} ({N} notas criadas em {caminho-de-destino})
```

Repita os passos 2-8 para a próxima nota da fila, se houver.

---

## O que NÃO fazer

- Não invente conteúdo, exemplos ou explicações que não estão na nota de origem
- Não crie um diretório de destino (domínio ou tópico) sem confirmação explícita do usuário
- Não processe notas fora de `inbox/`
- Não edite os arquivos em `computacao/roadmaps/` — são intocáveis
- Não sobrescreva notas existentes sem confirmar com o usuário primeiro
- Não pule o passo de aprovação antes de escrever arquivos
- Não deixe a nota de origem em `inbox/` depois que as notas granulares foram criadas

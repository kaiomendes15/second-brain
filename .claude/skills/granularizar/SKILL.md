---
name: granularizar
description: Expande uma nota base de estudo do cofre Obsidian em notas atômicas individuais por conceito. Usar quando o usuário digitar /granularizar seguido do caminho relativo de uma nota de estudo (ex: /granularizar computacao/notas/typescript/everyday-types.md). Não usar para perguntas gerais sobre o cofre nem sem um caminho de nota explícito.
---

# Skill: /granularizar

## Quando usar

Quando o usuário invocar `/granularizar <caminho>`, onde `<caminho>` é o caminho relativo (a partir da raiz do cofre) de uma nota base de estudo.

Exemplo: `/granularizar computacao/notas/typescript/everyday-types.md`

---

## O que essa skill faz

Lê uma nota base de estudo, identifica todos os conceitos atômicos presentes nela e cria uma nota granular individual para cada conceito — seguindo o padrão do cofre Obsidian. **Nunca inventa conteúdo:** só reorganiza e estrutura o que está na nota base.

---

## Passo a passo de execução

### 1. Leitura

Leia todos estes arquivos antes de qualquer análise:

- A nota base no caminho recebido
- `index.md` (raiz do cofre) — para entender o contexto atual
- Todos os arquivos `.md` no mesmo diretório da nota base — para detectar conflitos com notas já existentes

### 2. Análise da nota base

**Frontmatter:** A nota base pode ou não ter frontmatter. Se tiver, extraia `fonte_url`, `tags`, `area`. Se não tiver (ou campos faltarem), infira:
- `area` → pelo caminho da pasta (`computacao/`, `pessoal/`, etc.)
- `tags` → pelos conceitos identificados no conteúdo
- `fonte_url` → da nota base, se presente; caso contrário, omitir o campo

**Prefixo de domínio:** determine a partir do caminho da pasta ou do nome do arquivo. Exemplos:
- `computacao/notas/typescript/` → prefixo `typescript-`
- `pessoal/biblia/` → prefixo `biblia-`
- Em dúvida, use o nome da pasta imediata como prefixo

**Conceitos atômicos:** identifique cada conceito que merece nota própria. Um conceito é atômico quando pode ser explicado isoladamente e tem nome próprio no domínio. Não agrupe conceitos diferentes em uma mesma nota — máxima granularidade.

Para cada conceito, determine:
- `slug`: `{prefixo}-{nome-em-kebab-case}` (ex: `typescript-type-assertions`)
- Título legível (ex: `TypeScript — Type Assertions`)
- Tags específicas do conceito
- Se já existe uma nota com esse slug no diretório

### 3. Apresentar o plano e aguardar aprovação

Exiba para o usuário:

```
Vou criar N notas:

[ NOVAS ]
- typescript-arrays.md — Arrays: sintaxe number[] vs Array<T>
- typescript-type-assertions.md — Type Assertions: as e angle-bracket
- ...

[ JÁ EXISTEM — verificação necessária ]
- typescript-strict-null-checks.md — já existe, vou comparar antes de atualizar
```

**Pare aqui. Não escreva nenhum arquivo até o usuário confirmar.**

### 4. Resolução de conflitos (se houver)

Para cada nota que já existe:
1. Leia o conteúdo atual da nota existente
2. Compare com o que você criaria a partir da nota base
3. Exiba um resumo das diferenças/semelhanças em 2-4 linhas
4. Pergunte: "Deseja adicionar o conteúdo novo à nota existente?" (sim/não por nota)

### 5. Criar as notas

Crie cada nota no mesmo diretório da nota base. Siga este padrão rigorosamente:

```markdown
---
tipo: conceito
area: {computacao | pessoal | ...}
tags: [{dominio}, {tags-do-conceito}]
atualizado: {data-de-hoje}
fonte_url: {url se disponível}
---

# {Domínio} — {Nome do Conceito}

{Explicação do conceito com conteúdo vindo da nota base}

{Quando outro conceito é mencionado inline no texto, transforme a menção em wikilink:
  ex: "O compilador [[typescript-compilador-tsc|tsc]] verifica os tipos antes de executar."
  Não crie lista separada de referências — os links vivem no corpo do texto.}
```

**Regra de wikilinks:**
- Se o texto menciona um conceito que tem nota própria (existente ou recém-criada no mesmo lote), transforme a menção em `[[slug|texto da menção]]`
- Não crie uma seção "Relação com outros conceitos" como lista separada — prefira links inline
- Se quiser listar os relacionamentos ao final, faça como uma linha simples, não como seção dedicada

**Regra de conteúdo:**
- Só use conteúdo presente na nota base — não complemente com conhecimento externo
- Preserve exemplos de código da nota base; reformate se necessário para clareza
- Mantenha o idioma da nota base (português nas explicações, inglês nos termos técnicos)

### 6. Atualizar a nota base

Adicione (ou atualize) uma seção `## Notas granulares` na nota base, listando todas as notas criadas:

```markdown
## Notas granulares

- [[typescript-arrays]]
- [[typescript-type-assertions]]
- ...
```

Se a seção já existir, apenas adicione as novas notas à lista.

### 7. Atualizar index.md e log.md

**index.md:** adicione cada nova nota criada na seção correspondente à sua área. Formato de uma linha:
```
- [[slug]] — resumo de uma linha do que a nota cobre
```

**log.md:** adicione uma entrada no topo (append ao final da seção de hoje, ou crie nova):
```
## [AAAA-MM-DD] arquivar | Granularização de {nome-da-nota-base} ({N} notas criadas)
```

---

## O que NÃO fazer

- Não invente conteúdo, exemplos ou explicações que não estão na nota base
- Não crie pastas novas — as notas vão sempre no mesmo diretório da nota base
- Não edite os arquivos em `computacao/roadmaps/` — são intocáveis
- Não sobrescreva notas existentes sem confirmar com o usuário primeiro
- Não pule o passo de aprovação antes de escrever arquivos

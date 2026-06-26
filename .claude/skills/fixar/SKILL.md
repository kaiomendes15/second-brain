---
name: fixar
description: Conduz uma sessão de reforço de conhecimento com perguntas práticas baseadas no que o usuário já estudou. Usar quando o usuário digitar /fixar (tema determinado pelo estado dos estudos) ou /fixar [tema] (foco no tema especificado). Ao final, registra desempenho em revisoes.md no diretório do tema. Não usar para explicações gerais nem para criar notas de estudo.
---

# Skill: /fixar

## Quando usar

Quando o usuário invocar `/fixar` ou `/fixar <tema>`.

- `/fixar` → tema determinado automaticamente pelo estado atual dos estudos
- `/fixar <tema>` → sessão restrita ao tema especificado (ex: `/fixar everyday-types`)

---

## O que essa skill faz

Conduz uma sessão interativa de reforço: faz perguntas práticas uma por vez, avalia cada resposta com feedback cirúrgico e, ao final, registra o desempenho em `revisoes.md` no diretório mais específico correspondente ao tema.

---

## Passo a passo de execução

### 1. Preparação

**Se recebeu argumento de tema:** usar esse tema diretamente.

**Se não recebeu argumento:** ler `computacao/estado.md` e o arquivo `bloco-N.md` do bloco atual (`computacao/roadmaps/roadmap-curto-prazo/`) para identificar o tópico estudado mais recentemente (parte em "Em progresso" ou a última parte concluída).

Em seguida:
- Identificar o diretório de notas correspondente ao tema (ex: `everyday-types` → `computacao/notas/typescript/everyday-types/`)
- Ler os arquivos `.md` do diretório identificado para ter contexto do que foi estudado
- Determinar o caminho do arquivo de sessão: `{diretório-do-tema}/revisoes.md`

Anunciar ao usuário antes de começar:
```
Tema: {tema identificado}
Sessão: {N perguntas} — vou perguntar uma por vez.
```

### 2. Sessão de perguntas

Faça as perguntas **uma por vez**. Aguarde a resposta antes de avançar.

**Número de perguntas:** variável — o mínimo necessário para cobrir os conceitos-chave do tema com profundidade suficiente para confirmar ou revelar lacunas. Priorize qualidade sobre quantidade.

**Tipos de pergunta — misture ao longo da sessão:**
- Conceitual/discursiva: "Explique a diferença entre X e Y."
- Código para escrever ou completar: "Escreva uma função que..."
- Verdadeiro ou falso com justificativa: "V ou F: [afirmação]. Por quê?"
- Múltipla escolha: opções A/B/C quando a distinção é pontual
- Cenário teórico: "Dado este problema, quais passos você seguiria?"

**Após cada resposta — feedback objetivo e direto:**
- Se correto: confirmar em uma linha e avançar.
- Se incorreto ou incompleto: apontar exatamente o que está errado, indicar a correção e mostrar como ficaria certo (uma linha ou um trecho de código curto). Sem relectura do conteúdo inteiro.

### 3. Avaliação e registro

Ao final de todas as perguntas:

1. Calcular nota: X/10 + percentual de acertos (baseado em respostas corretas vs. totais)
2. Exibir resumo para o usuário:
   ```
   Nota: X/10 (Y%)
   Lacunas: [lista de conceitos onde houve erro ou insegurança]
   Próximos passos: [o que revisar ou estudar antes da próxima sessão]
   ```
3. Verificar se `{diretório-do-tema}/revisoes.md` existe:
   - Se não existe: criar o arquivo
   - Se existe: fazer append ao final

Contar as entradas `## Sessão` existentes no arquivo para numerar a nova corretamente.

**Formato da entrada a adicionar:**

```markdown
## Sessão N — YYYY-MM-DD

**Eixo temático:** {tema}
**Nota:** X/10 (Y%)

### Lacunas identificadas
- {conceito onde o usuário errou ou demonstrou insegurança}

### Próximos passos
- {o que revisar ou estudar antes da próxima sessão}
```

### 4. Localização do `revisoes.md`

Usar o diretório mais específico possível para o tema:

| Tema | Caminho do arquivo |
|---|---|
| `everyday-types` | `computacao/notas/typescript/everyday-types/revisoes.md` |
| `the-basics` | `computacao/notas/typescript/the-basics/revisoes.md` |
| `typescript` (geral) | `computacao/notas/typescript/revisoes.md` |
| auto (múltiplos subtópicos de TS) | diretório pai comum mais específico |

---

## O que NÃO fazer

- Não iniciar as perguntas sem anunciar o tema e a quantidade
- Não avançar para a próxima pergunta sem aguardar a resposta
- Não dar feedback longo — um erro recebe no máximo 3 linhas: o que errou, a correção, o exemplo certo
- Não criar pastas novas — `revisoes.md` vai sempre em um diretório já existente
- Não editar arquivos em `computacao/roadmaps/` — são intocáveis
- Não sobrescrever `revisoes.md` — sempre fazer append ao final

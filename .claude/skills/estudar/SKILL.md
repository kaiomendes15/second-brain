---
name: estudar
description: Conduz uma sessão de estudo autoguiada dividida em blocos de pomodoro, com fixação rápida e leve ao final de cada bloco. Usar quando o usuário digitar /estudar (tema e tempo determinados pelo estado dos estudos), /estudar <tempo> (ex: /estudar 60min, tema auto-detectado) ou /estudar <tema> <tempo> (foco e duração explícitos). Ao final, atualiza estado.md, log.md e marca os checkboxes concluídos no bloco-N.md correspondente. Não usar para revisão formal e pontuada (isso é /fixar) nem para criar notas de estudo (isso é /granularizar).
---

# Skill: /estudar

## Quando usar

Quando o usuário invocar `/estudar`, `/estudar <tempo>` ou `/estudar <tema> <tempo>`.

- `/estudar` → tema auto-detectado, e pergunta o tempo ativo disponível hoje
- `/estudar <tempo>` (ex: `/estudar 60min`) → tema auto-detectado, tempo informado
- `/estudar <tema> <tempo>` (ex: `/estudar narrowing 40min`) → foco e duração explícitos

---

## O que essa skill faz

Organiza uma sessão de estudo autoguiada em blocos de pomodoro (padrão 20 min de estudo / 5 min de descanso), identifica a fonte oficial do tópico e aplica uma fixação rápida e prática ao fim de cada bloco de leitura — poucos exercícios, sem nota numérica, sem arquivo de revisão. O foco é orquestrar a sessão (fonte + tempo + blocos), não avaliar performance como o `/fixar` faz.

---

## Passo a passo de execução

### 1. Preparação

**Tema:**
- Se recebido como argumento, usar diretamente.
- Se ausente: ler `computacao/estado.md` (tabela de progresso + seção "Próximos passos") e o `bloco-N.md` ativo em `computacao/roadmaps/roadmap-curto-prazo/` para identificar o item mais recente ("Em progresso" ou o próximo não iniciado).

**Fonte:**
- Procurar o link 📄 associado ao item identificado no `bloco-N.md`.
- Se não houver link ali (ou o tema não vier de um roadmap), perguntar ao usuário qual é a fonte (documentação, vídeo, artigo).

**Tempo:**
- Se recebido como argumento, usar diretamente (tempo **ativo**, sem contar descansos).
- Se ausente, perguntar ao usuário quanto tempo ativo ele tem disponível hoje.

Anunciar antes de montar o plano:
```
Tema: {tema identificado}
Fonte: {fonte}
Tempo ativo: {N min}
```

### 2. Divisão em blocos de pomodoro

- Padrão: blocos de 20 min de estudo + 5 min de descanso (aceitar 25/5 clássico se o usuário pedir).
- Calcular quantos blocos cabem no tempo ativo informado.
- Dividir o conteúdo da fonte em subtópicos coerentes por bloco, seguindo a estrutura real da fonte (seções do handbook, capítulos do vídeo, etc.).
- Reservar um **conteúdo de gordura**: o(s) próximo(s) subtópico(s) fora do tempo previsto, para o caso do usuário avançar mais rápido que o esperado.
- Apresentar o plano completo (blocos + descansos + gordura) antes de iniciar o primeiro bloco.

### 3. Execução de cada bloco

- A leitura da fonte acontece fora da conversa — aguardar o usuário sinalizar que terminou antes de prosseguir.
- Fixação rápida pós-leitura: **2 a 4 exercícios objetivos** sobre o subtópico do bloco, misturando tipos (código para escrever, conceitual, cenário, V ou F com justificativa).
- Uma pergunta por vez, aguardando a resposta antes de avançar.
- Feedback imediato e curto (máximo 3 linhas): certo/errado, correção pontual, exemplo só se necessário. **Sem nota numérica.**
- Ao fim do bloco, lembrar do descanso de 5 min antes do próximo — a menos que o usuário prefira emendar direto no conteúdo de gordura.
- Se o usuário revelar que não leu (ou leu por cima) algum subtópico do bloco, ajustar as perguntas para refletir isso em vez de assumir cobertura completa.

### 4. Fechamento e registro

Quando o usuário encerrar a sessão:

1. Resumir o que foi coberto.
2. **Confirmar com o usuário** quais itens ele considera concluídos antes de registrar — nunca assumir.
3. Atualizar `computacao/estado.md`: tabela de progresso do bloco + seção "Próximos passos".
4. Adicionar entrada em `log.md`:
   ```markdown
   ## [AAAA-MM-DD] avançar | <título resumindo a sessão>

   <parágrafo: tempo ativo, tópicos cobertos, o que ficou pendente>
   ```
5. Marcar no `bloco-N.md` correspondente os checkboxes (`- [ ]` → `- [x]`) dos itens que o usuário confirmou como concluídos — **apenas o estado do checkbox**, nunca alterar texto, links, estimativas ou estrutura do arquivo.

Não criar `revisoes.md` nem qualquer outro arquivo de registro por bloco ou por sessão.

---

## O que NÃO fazer

- Não iniciar sem anunciar tema, fonte, tempo e a divisão de blocos.
- Não avançar de bloco sem confirmação explícita do usuário de que terminou a leitura/exercícios.
- Não aplicar uma fixação longa estilo `/fixar` — limite de poucos exercícios por bloco, feedback de até 3 linhas, sem nota numérica.
- Não criar arquivos de revisão por bloco ou por sessão.
- Não editar `computacao/roadmaps/**` além de marcar checkboxes já confirmados pelo usuário no `bloco-N.md` — nunca mexer em texto, links, estimativas ou estrutura, e nunca tocar em `roadmap-curto-prazo/index.md` ou `roadmap-longo-prazo.md`.
- Não inventar conteúdo da fonte — a fixação se baseia no que o usuário efetivamente leu.

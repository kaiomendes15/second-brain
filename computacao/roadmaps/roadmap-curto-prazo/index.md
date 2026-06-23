---
tipo: nota
area: computacao
tags: [roadmap, carreira, curto-prazo, referencia]
atualizado: 2026-06-19
---

> ⚠️ **Referência intocável.** A IA lê este documento para orientar, mas **nunca o edita**.
> O progresso vivo fica em [[estado]].

# 🎯 Roadmap Refatorado — Da Base Sólida ao Mercado Global

> **Leia isto primeiro.** Este roadmap tem duas camadas:
> 1. **Camada de Execução (6 meses)** — o que você realmente faz agora. Sequencial, enxuto, focado em emprego remoto.
> 2. **Camada de Referência (o seu roadmap original de 60 módulos)** — biblioteca de consulta. Você puxa de lá *quando um projeto real exige*, não em ordem.
>
> A regra de ouro que você mesmo definiu: **o projeto é o currículo.** Cada coisa que você estuda aqui existe para destravar algo que você está construindo de verdade — a freelance paga (NestJS + React), não um tutorial.

---

## ⚠️ Por que refatorei (leia para entender a lógica)

Seu roadmap original é excelente como *enciclopédia* — mas é um syllabus de 10-15 anos para Staff Engineer. Seguir ele em ordem te colocaria estudando pipeline de CPU e IEEE 754 enquanto a vaga remota — a mudança estrutural que resolve seu sono, energia e foco — passa batido.

O mercado global júnior/pleno **não contrata** quem sabe escrever sintaxe com IA. Todo mundo faz isso agora. Contrata quem **modela um domínio, toma decisão arquitetural e explica o porquê** — exatamente onde você disse que congela. Então é nisso que atacamos primeiro.

**Os 3 cortes que fiz:**
1. **Fundamentos de CS (Fase 0)** viram *just-in-time*, não pré-requisito. Você revisita binário/SO/redes quando um bug ou decisão real exige — não antes.
2. **Profundidade em UMA stack** (Node/NestJS + React) antes de qualquer largura. Mata o "master of none".
3. **Soft skills entram como pilar de estudo**, não como afterthought. Foi o que te custou a vaga no Atlântico.

---

## 🧱 Camada de Execução — Os 6 Meses Que Importam

### Visão geral dos blocos

| Bloco | Foco | Duração | Entregável que prova |
|-------|------|---------|----------------------|
| **0. Base TypeScript real** | Sair do "uso com IA" para "domino" | 3-4 semanas | App pequeno tipado do zero, sem copiar |
| **1. Backend NestJS sólido** | Arquitetura que você sabe justificar | 6-8 semanas | API da freelance estruturada por você |
| **2. Banco de dados de verdade** | O buraco que mais derruba em entrevista | 4-6 semanas | Modelagem + queries explicáveis |
| **3. React de engenheiro** | Estado, dados, não só componente | 5-7 semanas | Frontend da freelance bem arquitetado |
| **4. Deploy + Observabilidade básica** | Levar do localhost ao ar | 3-4 semanas | App no ar, com logs e CI |
| **5. Prontidão para entrevista** | Narrativa + system design júnior | Contínuo | 5 histórias + 3 system designs |

> Blocos rodam **em paralelo parcial** com a freelance. A freelance É o projeto onde tudo isso acontece. Os blocos só dizem *o que estudar quando travar*.

---

### Bloco 0 — Base de TypeScript Real (3-4 semanas)

> 📘 **Detalhamento completo deste bloco:** [[bloco-0]] — tracker granular por página do Handbook, critérios de conclusão e projeto-prova.

> Objetivo: parar de pedir sintaxe pra IA. Você precisa *raciocinar* em tipos, não tatear.

- [ ] Tipos primitivos, union, intersection, literal types
- [ ] `interface` vs `type` — quando usar cada um e por quê
- [ ] Generics: escrever uma função e um tipo genérico do zero
- [ ] Narrowing e type guards (`typeof`, `in`, discriminated unions)
- [ ] Utility types essenciais: `Partial`, `Pick`, `Omit`, `Record`, `Returntype`
- [ ] `unknown` vs `any` — por que `any` é dívida
- [ ] Async/await e o event loop do Node (o suficiente pra debugar)
- [ ] Tratamento de erro idiomático: quando exception, quando Result-like
- [ ] **Prova de conclusão:** construir uma CLI ou API minúscula (ex: gerenciador de tarefas) 100% tipada, sem IA gerando a lógica — IA só tira dúvida pontual

**Referência no roadmap original:** Módulo 07 (Domínio de Linguagem), seções 07.1, 07.3, 07.4.

---

### Bloco 1 — Backend NestJS Sólido (6-8 semanas)

> Aqui mora o seu maior gap: **arquitetura e planejamento do zero.** NestJS é perfeito pra você porque é opinativo e estruturado — espelha o Spring que você gostou. Ele te ensina arquitetura "de brinde".

#### 1.1 Fundamentos do framework
- [ ] Módulos, Controllers, Providers — o ciclo de vida de uma request
- [ ] Dependency Injection: o conceito central. Entender *por que* existe, não só usar
- [ ] DTOs + validação com `class-validator` e `class-transformer`
- [ ] Pipes, Guards, Interceptors, Filters — a ordem de execução
- [ ] Configuração por ambiente (`@nestjs/config`, `.env`, validação de env)

#### 1.2 Arquitetura — o coração do seu treino
- [ ] Separar camadas: controller → service → repository
- [ ] Por que o controller não pode ter regra de negócio
- [ ] Introdução honesta a Clean Architecture (sem over-engineering): onde fica o domínio
- [ ] Modelar um caso de uso do zero: receber requisito vago → desenhar a solução
- [ ] **Exercício anti-congelamento:** pegar UMA feature da freelance e, antes de codar, escrever em texto: entidades, endpoints, fluxo de dados, onde cada coisa vive. Só depois codar.

#### 1.3 Persistência
- [ ] Escolher um ORM (Prisma recomendado para começar — DX excelente; TypeORM se o time preferir)
- [ ] Entidades, relações (1-1, 1-N, N-N), migrations
- [ ] Repository pattern: por que abstrair o acesso a dados

#### 1.4 Autenticação real
- [ ] JWT na prática: o que vai no payload, o que NÃO vai
- [ ] Hashing de senha com bcrypt/argon2 (nunca texto plano)
- [ ] Guards de autenticação + autorização por role (RBAC simples)
- [ ] Refresh tokens — o fluxo completo

#### 1.5 Qualidade
- [ ] Testes unitários de service com Jest (mock do repository)
- [ ] Um teste de integração e2e do endpoint principal
- [ ] **Prova de conclusão:** a API da freelance, estruturada em camadas, com auth funcionando, que VOCÊ consegue explicar inteira num quadro branco

**Referência no roadmap original:** Módulos 21 (Design de APIs), 24 (Auth), 27 (Arquitetura/DDD — só 27.1 a 27.4), 12 (Testes — pirâmide e unit).

---

### Bloco 2 — Banco de Dados de Verdade (4-6 semanas)

> Você mesmo precisa ouvir isto: **este é o módulo que mais reprova "sênior" em entrevista** — e o que mais impressiona num júnior quando você manda bem. É alavancagem desproporcional.

- [ ] SQL além do CRUD: JOINs (todos os tipos), GROUP BY, HAVING
- [ ] Window functions básicas: `ROW_NUMBER`, `RANK` — ao menos reconhecer e usar
- [ ] CTEs (`WITH`) para queries legíveis
- [ ] Normalização: 1NF, 2NF, 3NF com exemplo real — e quando desnormalizar
- [ ] Índices: o que é um B-tree index, quando ajuda, por que não indexar tudo
- [ ] `EXPLAIN ANALYZE`: ler um plano de query e identificar um scan lento
- [ ] Transações e ACID na prática: o que acontece sem transação
- [ ] N+1 problem: como detectar e resolver (eager loading)
- [ ] **Prova de conclusão:** modelar o schema da freelance do zero, justificar cada relação e cada índice

**Referência no roadmap original:** Módulo 22 inteiro (é ouro), 40.4 (DB performance).

---

### Bloco 3 — React de Engenheiro (5-7 semanas)

> Sair de "monto componente" para "arquiteto estado". É aqui que a maioria dos apps frontend morre em caos.

#### 3.1 Fundamentos sólidos
- [ ] Hooks a fundo: `useState`, `useEffect` (e o array de dependências — fonte de 80% dos bugs)
- [ ] `useRef`, `useMemo`, `useCallback` — quando usar e quando é over-engineering
- [ ] Stale closures: o bug clássico de hooks. Entender de verdade
- [ ] Composição de componentes, lifting state up

#### 3.2 A categoria que separa nível
- [ ] As 4 categorias de estado: local, global, **server**, URL — onde cada uma vive
- [ ] **Server state com TanStack Query** (React Query): queries, mutations, cache, invalidação. Isto é o que o mercado usa. Prioridade alta.
- [ ] Estado global só quando necessário: Zustand (simples) antes de Redux
- [ ] Forms: React Hook Form + validação com Zod (mesma lib de validação do back = consistência)

#### 3.3 Profissionalismo
- [ ] Data fetching com loading/error states de verdade (não só happy path)
- [ ] Estrutura de pastas escalável (feature-based, não type-based)
- [ ] Acessibilidade básica: HTML semântico, navegação por teclado, contraste
- [ ] **Prova de conclusão:** frontend da freelance consumindo sua API NestJS, com server state bem gerenciado

**Referência no roadmap original:** Módulos 16 (Framework — 16.1, 16.2), 17 inteiro (Estado — crítico), 14.6 (Acessibilidade).

---

### Bloco 4 — Deploy e Observabilidade Básica (3-4 semanas)

> Um projeto que só roda no seu localhost não existe para um recrutador. Levar ao ar é o que transforma "estudei" em "construí e operei".

- [ ] Docker: escrever um Dockerfile para o back e um para o front
- [ ] Docker Compose: subir app + banco localmente com um comando
- [ ] Variáveis de ambiente e secrets (nunca commitar `.env`)
- [ ] Deploy real: Railway / Render / Fly.io (simples) ou uma VPS se quiser aprender mais
- [ ] CI básico com GitHub Actions: rodar lint + testes em cada push
- [ ] Logging estruturado: logs em JSON com um correlation ID
- [ ] **Prova de conclusão:** link público do projeto no ar + pipeline verde no GitHub

**Referência no roadmap original:** Módulos 29.3 (Docker), 33 (CI/CD — 33.1, 33.2), 34.2 (Logging).

---

### Bloco 5 — Prontidão para Entrevista (contínuo, do dia 1)

> Isto não é o último bloco. Roda em paralelo o tempo todo. Foi a falta disto — não a técnica — que te custou o Atlântico.

#### 5.1 Narrativa pessoal (resolve o "só falei de trabalho")
- [ ] Escrever **5 histórias** no formato: *o que escolhi fazer → por que escolhi → o que aprendi*
  - [ ] Por que peguei a freelance de Rails sem saber Rails
  - [ ] O segundo brain / sistema de estudo que construí
  - [ ] A decisão de stack na freelance paga (e como defendi NestJS)
  - [ ] Uma vez que travei num problema e como destravei
  - [ ] Por que busco ambientes mais difíceis em vez de esperar
- [ ] Praticar a **regra das 3 frases**: afirma o ponto → 1 detalhe → para. Treina nas reuniões da freelance.

#### 5.2 System design júnior (resolve o "congelo na arquitetura")
- [ ] Projetar no papel: encurtador de URL
- [ ] Projetar: um CRUD com auth e roles (tipo o que você já faz — mas desenhado antes)
- [ ] Projetar: um feed simples com paginação
- [ ] Praticar estimativas back-of-envelope básicas
- [ ] Para cada um: desenhar entidades, endpoints, fluxo de dados, onde cachear

#### 5.3 Fundamentos de entrevista (o mínimo, não LeetCode grind)
- [ ] Estruturas: array, hashmap, stack, queue — saber o custo de cada operação
- [ ] Padrões: two pointers, sliding window (cobrem muita questão júnior)
- [ ] ~30-40 problemas no LeetCode (easy/medium), entendendo o padrão, não decorando
- [ ] Saber explicar Big-O sem gaguejar

**Referência no roadmap original:** Módulos 43.4 (Apresentações), 41.3 (System designs), 09 + 10 (Estruturas e Algoritmos — só o essencial júnior).

---

## 🗓️ Como Isto Encaixa na Sua Semana (período de férias)

Lembrando seu bloco focado de **15:30–17:30** + sábado de manhã:

| Dia | Bloco focado (15:30–17:30) |
|-----|----------------------------|
| **Segunda** | Freelance paga (aplicando NestJS — Bloco 1/2) |
| **Terça** | Estudo de fundamento: arquitetura, system design, banco (o gap) |
| **Quarta** | Freelance paga (aplicando React — Bloco 3) |
| **Quinta** | Estudo de fundamento: TypeScript profundo, testes, ou narrativa de entrevista |
| **Sexta** | Freelance paga + deploy/CI (Bloco 4) |
| **Sábado (manhã)** | Freelance paga — fechar as 10h/semana |

> Terça e quinta são os dias da **base** — é onde você ataca arquitetura, banco e prontidão de entrevista. Exatamente os pontos que te custaram caro.

---

## 📊 Milestones — Curto, Médio, Longo

### Curto prazo (semanal — toda terça você revisa)
- [ ] Avancei pelo menos um item de Bloco esta semana
- [ ] Apliquei algo do estudo num código real da freelance
- [ ] Pratiquei a regra das 3 frases em uma reunião
- [ ] Atualizei meu progresso no Obsidian

### Médio prazo (trimestral)
- [ ] **Mês 1-2:** Bloco 0 e 1 sólidos. API da freelance estruturada por mim, explicável.
- [ ] **Mês 3-4:** Bloco 2 e 3. Banco modelado por mim + React com server state. Projeto no ar (Bloco 4).
- [ ] **Mês 4:** 5 histórias escritas, 3 system designs feitos. Começar a aplicar para vagas remotas.
- [ ] **Mês 5-6:** Entrevistando. Voltar ao Atlântico (a porta ficou aberta). Refinar com base em cada feedback.

### Longo prazo (1-2 anos)
- [ ] Vaga remota conquistada → destrava sono, energia, treino, foco (a mudança estrutural)
- [ ] Profundidade real em Node/NestJS + React provada em produção
- [ ] Só ENTÃO expandir: segunda linguagem, sistemas distribuídos, infra — puxando do roadmap de referência conforme o trabalho exigir
- [ ] O roadmap original de 60 módulos vira seu plano de carreira de Pleno → Sênior, agora com base real

---

## 🧭 Princípios de Estudo (cole na parede)

1. **O projeto é o currículo.** Se não está destravando algo real, é procrastinação disfarçada de produtividade.
2. **Consolidar antes de expandir.** Uma stack profunda > cinco stacks rasas. Mata o "master of none".
3. **Just-in-time, não just-in-case.** Fundamento de CS você revisita quando um bug exige — não antes.
4. **Critério de "concluído":** consigo explicar do zero, justificar o tradeoff e ensinar alguém. Não "assisti o vídeo".
5. **IA é acelerador, não muleta.** Você não aprende o que não luta para entender. Use pra tirar dúvida, não pra pensar por você.
6. **Soft skill é hard skill.** Saber se vender e explicar uma decisão vale tanto quanto saber tomá-la.

---

## 📚 Referência: Seu Roadmap Original (60 módulos)

Mantenha o documento original intacto em outra nota do Obsidian ([[roadmap-longo-prazo]]). Ele é sua **biblioteca de Pleno → Staff**. A regra:

> Quando um bloco de execução ou um projeto real te levar a um tema, você abre o módulo correspondente no roadmap original e aprofunda ali. O original responde "como vou fundo nisto"; este responde "no que eu toco agora e por quê".

**Mapa rápido de qual módulo original puxar:**
- Travou em arquitetura → Módulo 27
- Query lenta / modelagem → Módulo 22
- Estado caótico no front → Módulo 17
- Auth / segurança → Módulos 24, 25
- Vai colocar no ar → Módulos 29, 33, 34
- Mensageria (quando a freelance crescer) → Módulo 26
- Preparando entrevista mais sênior → Módulos 36, 41

---

*Este roadmap é vivo. Revise a cada trimestre. Ajuste conforme a realidade da freelance e do mercado. A meta não é completar o documento — é conquistar a vaga e construir a base que sustenta tudo depois.*

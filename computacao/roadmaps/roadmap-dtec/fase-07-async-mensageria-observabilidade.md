---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
fase: 7
titulo: "Assincronismo, Mensageria e Observabilidade"
inicio: 2026-12-14
fim: 2027-01-08
duracao_semanas: 4
status: nao-iniciado
pre_requisito: "[[fase-06-testes-e-qualidade]]"
---

# Fase 7 — Assincronismo, Mensageria e Observabilidade

> **Por que esta fase existe.** O ADR-002 §5 exige *"Coroutines para operações I/O intensivas"*. O ADR-001 §4 lista OpenTelemetry como padrão de observabilidade e Kafka no ecossistema. Esta é a fase que fecha a distância entre "API que funciona" e "serviço de produção".
>
> **Correção importante:** grande parte do conteúdo de Quarkus na internet usa **Mutiny** (`Uni`/`Multi`) para assincronismo. O ADR-002 escolheu **Coroutines**. Aprenda a reconhecer Mutiny — você vai encontrá-lo na documentação — mas escreva Coroutines.
>
> ⚠️ **4 semanas de calendário, 3 de conteúdo.** A quarta é folga planejada por causa do recesso. Não a use para adiantar.

---

## 🎯 Critério de conclusão

- [ ] Explicar o que é bloquear uma thread e por que isso limita throughput
- [ ] Explicar o event loop e por que bloqueá-lo é catastrófico
- [ ] Explicar a diferença entre Coroutines, Mutiny e Virtual Threads — e quando cada um
- [ ] Explicar o modelo do Kafka: tópico, partição, offset, consumer group
- [ ] Explicar por que "gravar no banco e publicar no Kafka" não é atômico, e o que resolve
- [ ] Explicar a diferença entre log, métrica e trace
- [ ] **Entregar o incremento do projeto** (ver Prática)

---

## ⏱️ Plano (~2h/dia, com folga de recesso)

| Dias | Datas | Foco |
|---|---|---|
| 1–2 | 14/12–15/12 | Modelos de concorrência: bloqueante vs não-bloqueante |
| 3–5 | 16/12–18/12 | ⭐⭐ Coroutines |
| 6–7 | 21/12–22/12 | Mutiny (reconhecer) e Virtual Threads (contrastar) |
| — | 23/12–01/01 | **Recesso** |
| 8–10 | 04/01–06/01 | ⭐ Kafka e SmallRye Reactive Messaging |
| 11–12 | 07/01–08/01 | ⭐ OpenTelemetry |
| 13–15 | folga | Prática |

---

## 📚 Parte 1 — Modelos de concorrência (Dias 1–2)

- [ ] O que é uma thread do SO e quanto ela custa (memória de stack, troca de contexto)
- [ ] O que significa "bloquear" uma thread — e por que I/O é o caso comum
- [ ] O modelo *thread-per-request* do Tomcat/Spring MVC clássico e seu teto
- [ ] O modelo de **event loop** (Netty/Vert.x) e por que ele escala com poucas threads
- [ ] ⭐ **Nunca bloqueie o event loop** — o que acontece se você fizer
- [ ] Quarkus REST: o mesmo endpoint pode rodar no event loop ou num worker pool
- [ ] `@Blocking` e `@NonBlocking` — quem decide e como
- [ ] Backpressure: o que é e por que sistemas reativos se preocupam com isso
- [ ] Por que uma API que fala com banco JDBC (bloqueante) tem um teto diferente de uma reativa

**Referências:**
- 📄 [Quarkus — Quarkus Reactive Architecture](https://quarkus.io/guides/quarkus-reactive-architecture) — ⭐ o mapa mental completo
- 📄 [Quarkus — Getting Started With Reactive](https://quarkus.io/guides/getting-started-reactive)
- 📄 [Quarkus — Duplicated context, context locals, asynchronous processing](https://quarkus.io/guides/duplicated-context) — denso, mas explica propagação de contexto
- 📄 [Quarkus — Vert.x Reference Guide](https://quarkus.io/guides/vertx-reference) — o motor por baixo
- 📄 [Eclipse Vert.x — Core Manual](https://vertx.io/docs/vertx-core/java/) — a fonte

---

## 📚 Parte 2 — Coroutines ⭐⭐ (Dias 3–5)

- [ ] O que é uma coroutine e por que ela **não** é uma thread
- [ ] `suspend fun` — o que a palavra-chave realmente faz (transformação em máquina de estados)
- [ ] Suspensão vs bloqueio — a distinção central
- [ ] `CoroutineScope`, `CoroutineContext`, `Job`
- [ ] **Structured concurrency** — por que uma coroutine filha não sobrevive à mãe
- [ ] `launch` vs `async`/`await`
- [ ] Dispatchers: `Default`, `IO`, `Unconfined` — e por que o Quarkus gerencia isso por você
- [ ] Cancelamento cooperativo
- [ ] Tratamento de exceção em coroutines (`CoroutineExceptionHandler`, `supervisorScope`)
- [ ] `withContext` e troca de dispatcher
- [ ] `Flow` — o equivalente a stream assíncrono
- [ ] ⭐ Coroutines no Quarkus: `suspend fun` direto no endpoint JAX-RS
- [ ] Testar código com coroutines (`runTest`, `kotlinx-coroutines-test`)

### O que muda no seu endpoint

```kotlin
@GET
@Path("/{id}/historico")
@RolesAllowed("ALUNO", "ADMIN")
suspend fun historico(@PathParam("id") id: Long): HistoricoResponse =
    buscarHistorico.executar(AlunoId(id)).toResponse()
```

O Quarkus reconhece `suspend` nativamente e cuida do dispatch. Você não precisa de `CoroutineScope` manual no adapter.

> ⚠️ **A armadilha:** marcar uma função como `suspend` **não** torna mágico o código bloqueante dentro dela. Se você chama JDBC (bloqueante) dentro de uma `suspend fun` rodando no event loop, você bloqueou o event loop assim mesmo. Entenda onde seu código realmente executa antes de decorar sintaxe.

**Referências:**
- 📄 [Kotlin — Coroutines guide](https://kotlinlang.org/docs/coroutines-guide.html) — ⭐ oficial, comece aqui
- 📄 [Kotlin — Coroutines basics](https://kotlinlang.org/docs/coroutines-basics.html)
- 📄 [Kotlin — Composing suspending functions](https://kotlinlang.org/docs/composing-suspending-functions.html)
- 📄 [Kotlin — Coroutine context and dispatchers](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html)
- 📄 [Kotlin — Asynchronous Flow](https://kotlinlang.org/docs/flow.html)
- 📄 [Kotlin — Coroutines overview](https://kotlinlang.org/docs/coroutines-overview.html)
- 📄 [Roman Elizarov — Structured concurrency](https://elizarov.medium.com/structured-concurrency-722d765aa952) — do autor das coroutines
- 📄 [Quarkus — Using Kotlin (seção de coroutines)](https://quarkus.io/guides/kotlin) — como o Quarkus integra `suspend`

---

## 📚 Parte 3 — Mutiny e Virtual Threads (Dias 6–7)

Você não vai **usar** Mutiny neste projeto, mas vai **encontrar** Mutiny em toda a documentação. Precisa saber ler.

- [ ] `Uni<T>` — um valor futuro (0 ou 1 item)
- [ ] `Multi<T>` — um fluxo (0..n itens)
- [ ] Ambos são **lazy**: sem alguém consumindo, nada executa
- [ ] Operadores básicos: `onItem()`, `onFailure()`, `transform`, `chain`
- [ ] Converter entre Mutiny e Coroutines (`awaitSuspending`)
- [ ] **Virtual Threads** (Java 21): a abordagem alternativa ao mesmo problema
- [ ] `@RunOnVirtualThread` no Quarkus
- [ ] ⭐ **Pinning**: por que `synchronized` em I/O anula o benefício da virtual thread
- [ ] Reler a "Nota Arquitetural sobre Virtual Threads" do **ADR-002** — agora ela vai fazer sentido completo

### Os três caminhos para o mesmo problema

| | Coroutines | Mutiny | Virtual Threads |
|---|---|---|---|
| Origem | Kotlin | Quarkus/SmallRye | JDK 21 |
| Como você escreve | Sequencial, com `suspend` | Encadeamento de operadores | Sequencial, como sempre |
| Curva | Média | Alta | Baixa |
| Escolha da DTec | ✅ ADR-002 | reconhecer | conhecer as pegadinhas |

**Referências:**
- 📄 [Quarkus — Mutiny: Async for mere mortals](https://quarkus.io/guides/mutiny-primer) — a introdução oficial
- 📄 [SmallRye Mutiny — Guides](https://smallrye.io/smallrye-mutiny/latest/) — a documentação completa
- 📄 [Quarkus — Virtual Thread support reference](https://quarkus.io/guides/virtual-threads) — ⭐ inclui a discussão de pinning
- 📄 [Quarkus — Use virtual threads in REST applications](https://quarkus.io/guides/rest-virtual-threads)
- 📄 [JEP 444 — Virtual Threads](https://openjdk.org/jeps/444) — a fonte primária

---

## 📚 Parte 4 — Kafka e mensageria ⭐ (Dias 8–10)

Você já tem o modelo mental de pub/sub do CryptoAlert (RabbitMQ). O que muda aqui é o modelo do Kafka e a API.

### Conceitos de Kafka

- [ ] **Tópico**, **partição**, **offset** — e por que ordem só é garantida dentro da partição
- [ ] **Consumer group** e como o paralelismo é limitado pelo número de partições
- [ ] Chave da mensagem e como ela determina a partição
- [ ] Retenção: por que Kafka é um log, não uma fila
- [ ] Semânticas de entrega: at-most-once, at-least-once, exactly-once
- [ ] Commit de offset: automático vs manual, e onde surge a duplicidade
- [ ] Idempotência no consumidor — por que é obrigatória com at-least-once
- [ ] **Dead Letter Topic** e o que fazer com mensagem que sempre falha
- [ ] Serialização: JSON vs Avro, e o papel do schema registry
- [ ] Kafka vs RabbitMQ — o que muda no modelo mental

### SmallRye Reactive Messaging

- [ ] Canais declarados em `application.properties`
- [ ] `@Incoming("canal")` — consumir
- [ ] `@Outgoing("canal")` — produzir
- [ ] `Emitter<T>` — produzir imperativamente
- [ ] Acknowledgement e as estratégias disponíveis
- [ ] Tratamento de falha: `fail`, `ignore`, `dead-letter-queue`
- [ ] Dev Services para Kafka — sobe sozinho, igual ao Postgres
- [ ] Testar mensageria com `InMemoryConnector`

### Ponte De-Para

| Spring | Quarkus |
|---|---|
| `@KafkaListener(topics = "x")` | `@Incoming("x")` |
| `KafkaTemplate.send(...)` | `@Outgoing("x")` ou `Emitter<T>` |
| `ProducerFactory` / `ConsumerFactory` | Configuração em `application.properties` |
| `@RetryableTopic` | `failure-strategy=dead-letter-queue` |
| Testcontainers Kafka manual | Dev Services automático |

### O problema de atomicidade

Seu caso de uso `MatricularAlunoService` grava no banco **e** publica `MatriculaRealizada`. Duas infraestruturas diferentes, duas transações diferentes.

- Se gravar der certo e publicar falhar → estado inconsistente silencioso
- Se publicar antes de commitar → consumidor pode ler um evento de algo que fez rollback

Resolução: **Outbox pattern**. O evento é gravado numa tabela `outbox` **na mesma transação** do dado, e um processo separado publica. Você reconheceu esse padrão na Fase 2; agora implemente uma versão simples.

**Referências:**
- 📄 [Quarkus — Getting Started with Quarkus Messaging and Apache Kafka](https://quarkus.io/guides/kafka-getting-started) — ⭐ comece aqui
- 📄 [Quarkus — Apache Kafka Reference Guide](https://quarkus.io/guides/kafka) — a referência completa
- 📄 [Quarkus — Quarkus Messaging Extensions](https://quarkus.io/guides/messaging) — visão geral
- 📄 [Quarkus — Dev Services for Kafka](https://quarkus.io/guides/kafka-dev-services)
- 📄 [Quarkus — Kafka Dev UI](https://quarkus.io/guides/kafka-dev-ui)
- 📄 [Apache Kafka — Documentation](https://kafka.apache.org/documentation/) — a fonte; leia "Design" e "Implementation"
- 📄 [Apache Kafka — Introduction](https://kafka.apache.org/intro) — o resumo conceitual
- 📄 [SmallRye Reactive Messaging](https://smallrye.io/smallrye-reactive-messaging/latest/) — a implementação
- 📄 [Microservices.io — Transactional Outbox](https://microservices.io/patterns/data/transactional-outbox.html) — o padrão
- 📄 [Debezium — Outbox Event Router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html) — como a indústria faz em escala

---

## 📚 Parte 5 — Observabilidade ⭐ (Dias 11–12)

- [ ] Os três pilares: **logs**, **métricas**, **traces** — o que cada um responde
- [ ] Por que log estruturado (JSON) importa quando você tem 20 pods
- [ ] **OpenTelemetry**: o padrão vendor-neutral (ADR-001 §4)
- [ ] Trace, span, span context, e como o contexto se propaga entre serviços
- [ ] Instrumentação automática vs manual
- [ ] `@WithSpan` e criar spans customizados
- [ ] Exporters: OTLP, e para onde os dados vão (Jaeger, Grafana Tempo)
- [ ] Métricas com Micrometer e o formato Prometheus
- [ ] Métricas que importam: latência (p50/p95/p99), taxa de erro, throughput, saturação
- [ ] Health checks revisitados: liveness vs readiness vs startup
- [ ] Correlation ID / trace ID no log — como amarrar log a trace
- [ ] Observability Dev Services (Grafana LGTM) — stack completa em um comando

**Referências:**
- 📄 [Quarkus — Observability in Quarkus](https://quarkus.io/guides/observability) — ⭐ o mapa
- 📄 [Quarkus — Using OpenTelemetry Tracing](https://quarkus.io/guides/opentelemetry-tracing)
- 📄 [Quarkus — Using OpenTelemetry Metrics](https://quarkus.io/guides/opentelemetry-metrics)
- 📄 [Quarkus — Using OpenTelemetry Logging](https://quarkus.io/guides/opentelemetry-logging)
- 📄 [Quarkus — Using OpenTelemetry (visão geral)](https://quarkus.io/guides/opentelemetry)
- 📄 [Quarkus — Observability Dev Services with Grafana OTel LGTM](https://quarkus.io/guides/observability-devservices-lgtm) — ⭐ stack completa sem configurar nada
- 📄 [Quarkus — Micrometer Metrics](https://quarkus.io/guides/telemetry-micrometer)
- 📄 [Quarkus — SmallRye Health](https://quarkus.io/guides/smallrye-health)
- 📄 [Quarkus — Logging configuration](https://quarkus.io/guides/logging)
- 📄 [OpenTelemetry — Documentation](https://opentelemetry.io/docs/) — o padrão
- 📄 [OpenTelemetry — Concepts](https://opentelemetry.io/docs/concepts/) — traces, spans, context
- 📄 [Google SRE Book — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) — os quatro sinais dourados

---

## 🛠️ Prática — Incremento do projeto

- [ ] Converter pelo menos dois endpoints de leitura para `suspend fun`
- [ ] Escrever um teste com `runTest` para o código com coroutines
- [ ] Medir: os endpoints `suspend` mudaram alguma coisa? **Documente o resultado, mesmo se for "nada"**
- [ ] Criar o evento de domínio `MatriculaRealizada` (você já modelou na Fase 2)
- [ ] Implementar `KafkaEventoPublisher` como adapter da porta `EventoPublisherPort`
- [ ] Adicionar `quarkus-messaging-kafka` e confirmar que o Dev Services sobe o broker
- [ ] Implementar um consumidor que reaja ao evento — sugestão: projeção de "disciplinas por aluno" numa tabela de leitura
- [ ] Implementar Outbox simples e explicar por que ele é necessário
- [ ] Configurar dead-letter para mensagens que falham repetidamente
- [ ] Testar mensageria com `InMemoryConnector`
- [ ] Adicionar `quarkus-opentelemetry` e ver o trace ponta a ponta
- [ ] Adicionar `@WithSpan` em pelo menos um caso de uso, com atributos úteis
- [ ] Configurar log estruturado em JSON no perfil `%prod`
- [ ] Colocar trace ID no formato de log
- [ ] Subir o Observability Dev Services e navegar no trace de uma matrícula

### A pergunta honesta desta fase

Se todos os endpoints do seu projeto batem em Postgres via JDBC (bloqueante), Coroutines vão te dar pouco ou nenhum ganho de throughput.

**Meça e diga a verdade no README.** "Implementei coroutines, medi, e o ganho foi marginal porque o gargalo é JDBC bloqueante" é uma frase que impressiona muito mais um avaliador sênior do que "usei coroutines porque é moderno". Engenharia é medir e defender, não adotar por moda.

---

## ✅ Critério de Pronto

1. Uma matrícula gera evento consumido por outro caminho de código
2. Você lida com falha no consumo sem perder mensagem
3. Um trace distribuído aparece cobrindo HTTP → caso de uso → banco → Kafka
4. Log de produção sai em JSON com trace ID
5. Você mediu o impacto das coroutines e registrou o resultado real
6. Você consegue explicar por que outbox existe e o que aconteceria sem ele

---

## 🔗 Referências consolidadas

| Tema | Link | Tipo |
|---|---|---|
| Quarkus Reactive Architecture | https://quarkus.io/guides/quarkus-reactive-architecture | Oficial ⭐ |
| Kotlin Coroutines Guide | https://kotlinlang.org/docs/coroutines-guide.html | Oficial ⭐ |
| Coroutines basics | https://kotlinlang.org/docs/coroutines-basics.html | Oficial |
| Asynchronous Flow | https://kotlinlang.org/docs/flow.html | Oficial |
| Structured concurrency (Elizarov) | https://elizarov.medium.com/structured-concurrency-722d765aa952 | Autor |
| Mutiny Primer | https://quarkus.io/guides/mutiny-primer | Oficial |
| SmallRye Mutiny | https://smallrye.io/smallrye-mutiny/latest/ | Oficial |
| Virtual Threads (Quarkus) | https://quarkus.io/guides/virtual-threads | Oficial |
| JEP 444 — Virtual Threads | https://openjdk.org/jeps/444 | Fonte primária |
| Kafka Getting Started (Quarkus) | https://quarkus.io/guides/kafka-getting-started | Oficial ⭐ |
| Kafka Reference (Quarkus) | https://quarkus.io/guides/kafka | Oficial |
| Dev Services for Kafka | https://quarkus.io/guides/kafka-dev-services | Oficial |
| Apache Kafka Docs | https://kafka.apache.org/documentation/ | Oficial |
| SmallRye Reactive Messaging | https://smallrye.io/smallrye-reactive-messaging/latest/ | Oficial |
| Transactional Outbox | https://microservices.io/patterns/data/transactional-outbox.html | Padrão |
| Observability in Quarkus | https://quarkus.io/guides/observability | Oficial ⭐ |
| OpenTelemetry Tracing | https://quarkus.io/guides/opentelemetry-tracing | Oficial |
| Observability Dev Services LGTM | https://quarkus.io/guides/observability-devservices-lgtm | Oficial ⭐ |
| OpenTelemetry Docs | https://opentelemetry.io/docs/ | Padrão |
| SRE — Monitoring Distributed Systems | https://sre.google/sre-book/monitoring-distributed-systems/ | Referência |

---

## Retrospectiva

*(preencher ao concluir)*

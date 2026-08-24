---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
fase: 4
titulo: "Persistência: JDBC, JPA, Hibernate, Panache e Flyway"
inicio: 2026-10-19
fim: 2026-11-06
duracao_semanas: 3
status: nao-iniciado
pre_requisito: "[[fase-03-quarkus-core]]"
---

# Fase 4 — Persistência: JDBC, JPA, Hibernate, Panache e Flyway

> **Por que esta fase existe.** Você usa Spring Data JPA há tempos, mas provavelmente sem nunca ter precisado saber o que é *persistence context*, *dirty checking* ou por que o N+1 acontece. O Spring Data esconde isso muito bem — até o dia em que uma query fica lenta e ninguém sabe explicar. Aqui a gente desce até o JDBC e sobe de volta.
>
> **Prova de fogo da arquitetura:** ao fim desta fase, `domain/`, `application/` e os testes da Fase 1 devem estar **byte a byte iguais**. Se mudarem, a arquitetura vazou.

---

## 🎯 Critério de conclusão

- [ ] Explicar a cadeia JDBC → JPA → Hibernate → Panache, dizendo o que cada camada acrescenta
- [ ] Explicar o que é *persistence context* e o que é *dirty checking*
- [ ] Explicar o problema N+1 e três formas de resolvê-lo
- [ ] Explicar por que lazy loading fora de transação estoura exceção
- [ ] Explicar o que o Dev Services faz e o que ele **não** faz em produção
- [ ] Explicar por que migrations versionadas substituem `hbm2ddl.auto`
- [ ] **Entregar o incremento do projeto** (ver Prática)

---

## ⏱️ Plano de 15 dias (~2h/dia)

| Dias | Datas | Foco |
|---|---|---|
| 1–2 | 19/10–20/10 | JDBC, DataSource, pool de conexões |
| 3–5 | 21/10–23/10 | ⭐⭐ JPA e Hibernate — os fundamentos que faltam |
| 6–7 | 26/10–27/10 | ⭐ Transações e JTA |
| 8–9 | 28/10–29/10 | ⭐ Panache |
| 10 | 30/10 | Dev Services para bancos |
| 11–12 | 03/11–04/11* | Flyway e migrations |
| 13–15 | 05/11–06/11 + folga | Prática: adapter de persistência |

\* 02/11 é feriado.

---

## 📚 Parte 1 — JDBC e a base de tudo (Dias 1–2)

Comece pelo chão. Tudo acima disso é abstração.

- [ ] O que é **JDBC** — a API padrão Java para falar com banco relacional
- [ ] `Connection`, `Statement`, `PreparedStatement`, `ResultSet`
- [ ] Por que `PreparedStatement` previne SQL injection
- [ ] O que é um **driver JDBC** e por que existe um por banco
- [ ] O que é um **DataSource** e por que não se abre conexão na mão
- [ ] **Pool de conexões**: por que abrir conexão é caro, e o que acontece quando o pool esgota
- [ ] **Agroal** — o pool do Quarkus (equivalente ao HikariCP do Spring Boot)
- [ ] Configurar datasource no Quarkus: `quarkus.datasource.*`
- [ ] Dimensionar `max-size` do pool e a relação com número de pods (isso volta na Fase 8)

**Referências:**
- 📄 [Quarkus — Configure data sources in Quarkus](https://quarkus.io/guides/datasource) — oficial, cobre JDBC e reativo
- 📄 [Oracle — JDBC Basics (Java Tutorials)](https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html) — a fonte primária
- 📄 [Agroal](https://agroal.github.io/) — o pool usado pelo Quarkus
- 📄 [Baeldung — Introduction to JDBC](https://www.baeldung.com/java-jdbc) — leitura mais leve

---

## 📚 Parte 2 — JPA e Hibernate ⭐⭐ (Dias 3–5)

**Esta é a parte mais densa do roadmap inteiro.** Não corra. É o conhecimento que separa quem usa ORM de quem entende ORM.

### Conceitos

- [ ] **Object-relational impedance mismatch** — por que objeto e tabela não se encaixam naturalmente
- [ ] O que é um **ORM** e o que ele promete resolver
- [ ] **JPA / Jakarta Persistence** = **especificação** (interface, contrato)
- [ ] **Hibernate** = **implementação** da especificação (e a de fato padrão)
- [ ] Por que essa distinção importa: `EntityManager` é JPA; `Session` é Hibernate

### Mapeamento

- [ ] `@Entity`, `@Table`, `@Id`, `@GeneratedValue` e as estratégias de geração
- [ ] `@Column` e mapeamento de tipos
- [ ] `@Embeddable` / `@Embedded` — **como mapear seus value objects**
- [ ] Relacionamentos: `@OneToMany`, `@ManyToOne`, `@OneToOne`, `@ManyToMany`
- [ ] `mappedBy` e o lado dono do relacionamento
- [ ] `@JoinColumn`, `@JoinTable`
- [ ] `CascadeType` — o que cada tipo propaga
- [ ] `orphanRemoval`

### O que ninguém te explicou

- [ ] ⭐ **Persistence Context** — o cache de primeiro nível, e o que ele realmente é
- [ ] ⭐ Ciclo de vida da entidade: *transient* → *managed* → *detached* → *removed*
- [ ] ⭐ **Dirty checking** — por que alterar um objeto gerenciado dispara UPDATE sem você chamar `save()`
- [ ] `flush()` e quando o Hibernate decide escrever no banco
- [ ] **Lazy vs Eager** loading e como o proxy funciona
- [ ] `LazyInitializationException` — por que acontece e por que ela é sintoma de vazamento de camada
- [ ] ⭐ **Problema N+1** — como reconhecer e três formas de resolver (`JOIN FETCH`, `@EntityGraph`, batch size)
- [ ] Cache de segundo nível — o que é e por que raramente você quer ligar sem medir antes
- [ ] **JPQL/HQL** vs SQL nativo vs Criteria API
- [ ] Ligar o log de SQL do Hibernate e **ler as queries geradas** — hábito obrigatório

### Por que `data class` não vira entidade

Retome o quadro da [[fase-01-kotlin-essencial]]. Agora você tem o vocabulário para entender a razão real:

O `equals()` gerado por `data class` compara **todos** os campos. Com entidades gerenciadas, isso quebra: dois objetos representando a mesma linha do banco — um com coleção lazy não carregada, outro com ela carregada — deixam de ser "iguais". Isso corrompe `Set<Entidade>` e comparações em teste de formas muito difíceis de depurar.

Convenção do projeto: **entidade JPA é classe normal, com `var`, e `equals`/`hashCode` baseados apenas no ID** (ou herdados de `Any`).

**Referências:**
- 📄 [Quarkus — Using Hibernate ORM and Jakarta Persistence](https://quarkus.io/guides/hibernate-orm) — oficial, o guia da stack
- 📄 [Hibernate ORM — User Guide](https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html) — **a referência definitiva**; use como consulta, não leitura linear
- 📄 [Hibernate — Introduction / Getting Started](https://docs.jboss.org/hibernate/orm/current/introduction/html_single/Hibernate_Introduction.html) — muito mais didático que o User Guide
- 📄 [Jakarta Persistence Specification](https://jakarta.ee/specifications/persistence/) — o contrato
- 📄 [Vlad Mihalcea — Blog](https://vladmihalcea.com/blog/) — a melhor fonte não-oficial do mundo sobre Hibernate; busque "N+1", "persistence context", "dirty checking"
- 📄 [Quarkus — Using transactions in Quarkus](https://quarkus.io/guides/transaction) — a ponte para a Parte 3
- 📄 [Baeldung — Hibernate Series](https://www.baeldung.com/hibernate-entitymanager) — para segunda perspectiva sobre `EntityManager`

> 💭 **Exercício obrigatório:** ligue `quarkus.hibernate-orm.log.sql=true`, faça uma listagem de disciplinas com professores, e **conte as queries**. Se aparecer mais de uma, você acabou de ver o N+1 nascer. Resolva e conte de novo.

---

## 📚 Parte 3 — Transações e JTA ⭐ (Dias 6–7)

- [ ] O que é uma transação e o que ACID garante
- [ ] Níveis de isolamento e os fenômenos que cada um previne (dirty read, non-repeatable read, phantom read)
- [ ] O que é **JTA** e o que é o **Narayana** (o gerenciador de transações do Quarkus)
- [ ] `@Transactional` (Jakarta) — e por que ele **não** é o `@Transactional` do Spring
- [ ] `TxType`: `REQUIRED`, `REQUIRES_NEW`, `MANDATORY`, `SUPPORTS`, `NOT_SUPPORTED`, `NEVER`
- [ ] Rollback: por que só `RuntimeException` faz rollback por padrão, e como mudar
- [ ] `QuarkusTransaction` — a API programática
- [ ] Onde a fronteira transacional deve ficar numa arquitetura hexagonal
- [ ] Bloqueio otimista (`@Version`) vs pessimista — **qual protege `INV-D1` de corrida?**

### A pergunta que decide a qualidade do seu projeto

`INV-M4` diz que matricular é atômico: cria a matrícula E incrementa `vagasOcupadas`. Agora imagine 200 alunos clicando "matricular" no mesmo segundo, na última vaga.

- Com transação e sem lock, quantas matrículas você acha que passam?
- `@Version` (otimista) resolve? Qual o custo em UX?
- `SELECT ... FOR UPDATE` (pessimista) resolve? Qual o custo em throughput?

**Isso é exatamente o cenário de pico de matrícula do ADR-001 §1.** Se você resolver e souber defender a escolha, você tem material para a defesa da Fase 9 e para qualquer entrevista técnica.

### Ponte De-Para

| Spring | Quarkus |
|---|---|
| `@Transactional` (org.springframework) | `@Transactional` (jakarta.transaction) |
| `propagation = REQUIRES_NEW` | `@Transactional(REQUIRES_NEW)` |
| `rollbackFor = Exception.class` | `@Transactional(rollbackOn = [Exception::class])` |
| `TransactionTemplate` | `QuarkusTransaction` |
| `PlatformTransactionManager` | Narayana (JTA) |

**Referências:**
- 📄 [Quarkus — Using transactions in Quarkus](https://quarkus.io/guides/transaction) — oficial
- 📄 [Jakarta Transactions Specification](https://jakarta.ee/specifications/transactions/)
- 📄 [PostgreSQL — Transaction Isolation](https://www.postgresql.org/docs/current/transaction-iso.html) — a doc do Postgres explica isolamento melhor que a maioria dos livros
- 📄 [Vlad Mihalcea — Optimistic vs Pessimistic Locking](https://vladmihalcea.com/optimistic-vs-pessimistic-locking/)

---

## 📚 Parte 4 — Panache ⭐ (Dias 8–9)

- [ ] O que o Panache acrescenta sobre o Hibernate
- [ ] **Active Record** (`PanacheEntity`) vs **Repository** (`PanacheRepository`)
- [ ] Por que este projeto usa **Repository** obrigatoriamente (hexagonal, ADR-001 §5)
- [ ] `PanacheRepository<T>` vs `PanacheRepositoryBase<T, ID>` — quando cada um
- [ ] ⭐ A variante **Kotlin** das extensions e por que ela existe
- [ ] Sintaxe de query abreviada: `find("campo", valor)`, `find("campo = ?1 and outro = ?2", a, b)`
- [ ] Parâmetros nomeados: `find("#buscaPorNome", Parameters.with("nome", n))`
- [ ] Paginação: `.page(Page.of(0, 20))`
- [ ] Projeção: `.project(MinhaProjecao::class.java)`
- [ ] Named queries e quando descer para `EntityManager`

### Corrigindo um mal-entendido comum

Panache **não limita** suas consultas. Ele apenas **não** usa derivação por nome de método como o Spring Data. Ele usa HQL abreviado:

```kotlin
// Spring Data:  findByNomeAndAtivoTrue(nome)
// Panache:      find("nome = ?1 and ativo = true", nome).list()
```

Menos mágico, mais explícito, e sem teto — você sempre pode descer para HQL completo ou `EntityManager`. Na prática o Panache é *menos* limitante que o Spring Data, porque não existe aquele momento em que a derivação por nome não dá conta e você precisa reescrever tudo com `@Query`.

O problema real do **Active Record** não é limitação de query. É **acoplamento**: a entidade passa a conhecer sua própria persistência. Com domínio grande e time distribuído isso gera "God entities", dificulta testar o domínio isoladamente e torna impossível trocar a estratégia de persistência.

### Ponte De-Para: Spring Data JPA → Panache

| Spring Data JPA | Panache |
|---|---|
| `interface X : JpaRepository<T, Long>` | `class X : PanacheRepositoryBase<T, Long>` |
| `findByNome(nome)` | `find("nome", nome).firstResult()` |
| `findByNomeAndAtivoTrue(n)` | `find("nome = ?1 and ativo = true", n).list()` |
| `@Query("select ...")` | `find("...")` ou `getEntityManager().createQuery(...)` |
| `Pageable` / `Page<T>` | `.page(Page.of(p, s))` |
| `save(entity)` | `persist(entity)` |
| `findById(id).orElse(null)` | `findById(id)` (já retorna nulo) |
| `deleteById(id)` | `deleteById(id)` |
| `count()` | `count()` |
| Interface, implementação gerada | Classe concreta, você escreve |

**Referências:**
- 📄 [Quarkus — Simplified Hibernate ORM with Panache](https://quarkus.io/guides/hibernate-orm-panache) — o guia base
- 📄 [Quarkus — Simplified Hibernate ORM with Panache and Kotlin](https://quarkus.io/guides/hibernate-orm-panache-kotlin) — ⭐ **leia este, não só o anterior**
- 📄 [Quarkus — Extension for Spring Data API](https://quarkus.io/guides/spring-data-jpa) — de novo, leia pelo **mapeamento** de conceitos
- 📄 [Quarkus — Simplified Hibernate with Quarkus Data Hibernate](https://quarkus.io/guides/quarkus-data-hibernate) — abordagem mais recente; vale conhecer para saber que existe

---

## 📚 Parte 5 — Dev Services para bancos (Dia 10)

O recurso que não tem equivalente no Spring Boot.

- [ ] Como o Dev Services detecta que não há datasource configurado
- [ ] Como ele sobe um container e injeta a configuração sozinho
- [ ] Testcontainers por baixo
- [ ] Por que ele roda em `dev` e `test`, e **nunca** em `prod`
- [ ] Fixar a imagem e a versão do banco para bater com produção
- [ ] Reutilização de container entre execuções
- [ ] Como desligar quando você quiser apontar para um banco local de verdade

**Referências:**
- 📄 [Quarkus — Dev Services for Databases](https://quarkus.io/guides/databases-dev-services) — oficial
- 📄 [Quarkus — Dev Services Overview](https://quarkus.io/guides/dev-services)
- 📄 [Quarkus — Compose Dev Services](https://quarkus.io/guides/compose-dev-services) — quando você precisa de mais controle
- 📄 [Testcontainers — Postgres Module](https://testcontainers.com/modules/postgresql/)

---

## 📚 Parte 6 — Flyway e migrations (Dias 11–12)

- [ ] Por que `hbm2ddl.auto=update` é aceitável em dev e **inaceitável** em produção
- [ ] O que é uma migration versionada e por que ela é imutável depois de aplicada
- [ ] Convenção de nomes: `V1__descricao.sql`, `V2__outra_coisa.sql`
- [ ] Repeatable migrations (`R__`)
- [ ] A tabela `flyway_schema_history` e o checksum
- [ ] `migrate-at-start` no Quarkus
- [ ] Baseline em banco que já existe
- [ ] Migrations **compatíveis com versão anterior** — pré-requisito para rolling update sem downtime (isso volta na Fase 8)
- [ ] Flyway vs Liquibase — por que escolher um

**Referências:**
- 📄 [Quarkus — Using Flyway](https://quarkus.io/guides/flyway) — oficial
- 📄 [Flyway — Documentation](https://documentation.red-gate.com/fd/flyway-documentation-138346877.html) — oficial do produto
- 📄 [Quarkus — Using Liquibase](https://quarkus.io/guides/liquibase) — a alternativa, para comparar
- 📄 [Martin Fowler — Evolutionary Database Design](https://martinfowler.com/articles/evodb.html) — o "porquê" conceitual

---

## 🛠️ Prática — Incremento do projeto (Dias 13–15)

Substitua os adapters in-memory por persistência real. **Sem tocar no núcleo.**

- [ ] Adicionar extensions: `quarkus-hibernate-orm-panache-kotlin`, `quarkus-jdbc-postgresql`, `quarkus-flyway`
- [ ] Criar as entidades JPA em `infrastructure/adapter/output/persistence/entity/` — **classe normal, não data class**
- [ ] Mapear os value objects com `@Embeddable` ou converter para tipo primitivo no mapper
- [ ] Modelar os relacionamentos e decidir conscientemente lazy/eager em cada um
- [ ] Escrever os mappers entidade ↔ domínio como extension functions
- [ ] Implementar os repositórios com `PanacheRepositoryBase`
- [ ] Implementar as portas de saída delegando para os repositórios Panache
- [ ] Escrever as migrations Flyway (`V1__schema_inicial.sql`, `V2__constraints.sql`)
- [ ] Adicionar constraints de unicidade no banco (matrícula, SIAPE, código de disciplina, email)
- [ ] Adicionar `@Transactional` na fronteira correta
- [ ] Resolver a corrida de `INV-M4` com locking — e **documentar a escolha**
- [ ] Ligar log de SQL e caçar N+1 em pelo menos uma listagem
- [ ] Confirmar que Dev Services sobe o Postgres sozinho no `quarkusDev`

### Checagem de vazamento

```bash
git diff --stat HEAD~1 -- src/main/kotlin/**/domain/ src/main/kotlin/**/application/
```

Deve retornar **vazio**. Se não retornar, você mudou o núcleo para acomodar a infraestrutura — o oposto do que a arquitetura pede. Descubra por quê antes de seguir.

---

## ✅ Critério de Pronto

1. Dados persistem entre restarts, em Postgres real
2. Flyway aplica as migrations no boot
3. Os testes da Fase 1 e Fase 2 continuam passando **sem alteração**
4. Uma operação que grava em duas tabelas faz rollback correto quando a segunda falha (teste isso de propósito)
5. Você resolveu a corrida da última vaga e sabe defender a estratégia escolhida
6. Você identificou e corrigiu pelo menos um N+1, contando as queries antes e depois

---

## 🔗 Referências consolidadas

| Tema | Link | Tipo |
|---|---|---|
| Hibernate ORM no Quarkus | https://quarkus.io/guides/hibernate-orm | Oficial ⭐ |
| Panache + Kotlin | https://quarkus.io/guides/hibernate-orm-panache-kotlin | Oficial ⭐ |
| Panache (base) | https://quarkus.io/guides/hibernate-orm-panache | Oficial |
| Datasources | https://quarkus.io/guides/datasource | Oficial |
| Transações | https://quarkus.io/guides/transaction | Oficial |
| Dev Services para bancos | https://quarkus.io/guides/databases-dev-services | Oficial |
| Flyway no Quarkus | https://quarkus.io/guides/flyway | Oficial |
| Hibernate — Introduction | https://docs.jboss.org/hibernate/orm/current/introduction/html_single/Hibernate_Introduction.html | Oficial ⭐ |
| Hibernate — User Guide | https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html | Oficial |
| Jakarta Persistence Spec | https://jakarta.ee/specifications/persistence/ | Padrão |
| Jakarta Transactions Spec | https://jakarta.ee/specifications/transactions/ | Padrão |
| Vlad Mihalcea (Hibernate) | https://vladmihalcea.com/blog/ | Complementar ⭐ |
| PostgreSQL — Isolation | https://www.postgresql.org/docs/current/transaction-iso.html | Oficial |
| Flyway Documentation | https://documentation.red-gate.com/fd/flyway-documentation-138346877.html | Oficial |
| Evolutionary Database Design | https://martinfowler.com/articles/evodb.html | Referência |
| Agroal (pool) | https://agroal.github.io/ | Oficial |
| Spring Data → Panache | https://quarkus.io/guides/spring-data-jpa | Oficial |

---

## Retrospectiva

*(preencher ao concluir)*

---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
fase: 2
titulo: Arquitetura Hexagonal e DDD Tático
inicio: 2026-09-14
fim: 2026-09-25
duracao_semanas: 2
status: nao-iniciado
pre_requisito: "[[fase-01-kotlin-essencial]]"
---
	
# Fase 2 — Arquitetura Hexagonal e DDD Tático

> **Por que esta fase existe.** O ADR-001 §5 exige *"foco em arquitetura hexagonal para garantir que o domínio permaneça testável de forma unitária sem o framework"*. Isso não é preferência estética — é o que permite que a Fase 4 troque o adapter de persistência sem tocar em uma linha de regra de negócio.
>
> **Regra da fase:** ainda sem Quarkus. Só estrutura, interfaces e um adapter em memória.

---

## 🎯 Critério de conclusão

- [ ] Desenhar o hexágono do Sistema Acadêmico em papel, sem consultar
- [ ] Explicar a diferença entre porta de entrada e porta de saída
- [ ] Explicar por que a inversão de dependência é o que faz o hexágono funcionar
- [ ] Diferenciar Entidade, Value Object e Agregado com exemplos do projeto
- [ ] Explicar por que existem duas classes `Disciplina` (domínio e entidade)
- [ ] Explicar o que um teste ArchUnit protege e por que ele vale mais que uma convenção no README
- [ ] **Entregar o incremento do projeto** (ver Prática)

---

## ⏱️ Plano de 10 dias (~2h/dia)

| Dias | Datas | Foco |
|---|---|---|
| 1–2 | 14/09–15/09 | Acoplamento, inversão de dependência, camadas |
| 3–4 | 16/09–17/09 | ⭐ Ports & Adapters (hexagonal) |
| 5–6 | 18/09, 21/09 | ⭐ DDD tático: entidade, VO, agregado, repositório |
| 7 | 22/09 | Casos de uso, comandos e o modelo anêmico |
| 8 | 23/09 | Eventos de domínio |
| 9 | 24/09 | ArchUnit e testes de arquitetura |
| 10 | 25/09 | Prática: reestruturar o projeto |

---

## 📚 Parte 1 — Acoplamento e inversão de dependência (Dias 1–2)

Antes de "hexagonal", o problema que ele resolve.

- [ ] O que é acoplamento e por que ele é o custo real de manutenção
- [ ] SOLID, com foco especial no **D** — Dependency Inversion Principle
- [ ] Diferença entre **inversão de dependência** (princípio) e **injeção de dependência** (técnica)
- [ ] Por que "depender de abstração" não é o mesmo que "criar uma interface para tudo"
- [ ] Camadas em Clean Architecture: entidades → casos de uso → adapters → frameworks
- [ ] A **regra de dependência**: as setas sempre apontam para dentro
- [ ] Por que "framework é detalhe" não é dogmatismo, e sim uma aposta sobre o que muda mais rápido

**Referências:**
- 📄 [The Clean Architecture — Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) — o texto original, curto
- 📄 [Baeldung — Dependency Inversion Principle](https://www.baeldung.com/java-dependency-inversion-principle) — o D do SOLID com exemplos Java
- 📄 [Martin Fowler — Inversion of Control Containers and the Dependency Injection pattern](https://martinfowler.com/articles/injection.html) — separa DI de IoC de forma definitiva
- 📄 [Kotlin — Interfaces](https://kotlinlang.org/docs/interfaces.html) — a mecânica na linguagem

---

## 📚 Parte 2 — Ports & Adapters ⭐ (Dias 3–4)

- [ ] A metáfora do hexágono: por quê seis lados (spoiler: o número não importa)
- [ ] **Porta de entrada** (*driving*): o que o mundo pode pedir ao sistema
- [ ] **Porta de saída** (*driven*): o que o sistema precisa do mundo
- [ ] Adapter primário vs adapter secundário
- [ ] Por que o REST controller é um adapter e não uma camada
- [ ] Por que a interface do repositório vive no **domínio**, e a implementação na infraestrutura
- [ ] Como testar o núcleo com adapters falsos (in-memory), sem mock framework
- [ ] Onde ficam DTOs, mappers e o custo de tradução entre camadas

### Ponte De-Para: como você organizava no Spring

| Padrão Spring típico | Hexagonal |
|---|---|
| `@RestController` → `@Service` → `@Repository` | Adapter in → Use case → Port out → Adapter out |
| `@Service` conhece `JpaRepository` | Use case conhece apenas a **interface** que ele mesmo define |
| Interface do repositório no pacote `repository` | Interface no **domínio**; implementação na infra |
| `@Entity` é o modelo de domínio | `@Entity` é adapter; domínio é classe separada |
| Testar service exige `@MockBean` do repositório | Testar use case exige só um `Map` em memória |
| Camadas empilhadas (fluxo de cima para baixo) | Núcleo no centro (setas apontam para dentro) |

**Referências:**
- 📄 [Alistair Cockburn — Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/) — o autor original do padrão
- 📄 [Netflix Tech Blog — Ready for changes with Hexagonal Architecture](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749) — caso real, ótimo para ver o padrão em escala
- 📄 [Baeldung — Hexagonal Architecture in Java](https://www.baeldung.com/hexagonal-architecture-ddd-spring) — implementação concreta, contexto Spring (útil pela ponte)
- 📄 [Quarkus — Introduction to CDI](https://quarkus.io/guides/cdi) — leia só a introdução; a injeção que vai ligar seus adapters vem daqui na Fase 3

---

## 📚 Parte 3 — DDD tático ⭐ (Dias 5–6)

Foco no **tático** (os blocos de construção). O estratégico (bounded contexts, context map) fica para depois — não cabe num projeto deste tamanho.

- [ ] **Entidade** — tem identidade que persiste através de mudanças de estado
- [ ] **Value Object** — definido pelos seus valores, imutável, sem identidade
- [ ] **Agregado** e **raiz de agregado** — a fronteira de consistência transacional
- [ ] Por que uma transação deve alterar **um** agregado por vez (e quando quebrar essa regra)
- [ ] **Invariante** — a regra que sempre precisa ser verdadeira
- [ ] **Repositório** — coleção de agregados, não DAO
- [ ] **Serviço de domínio** — quando a regra não pertence a nenhuma entidade
- [ ] **Modelo anêmico** — o antipadrão que você provavelmente vem praticando sem saber
- [ ] Linguagem ubíqua: por que o código diz `matricular` e não `save`

### Aplicando ao projeto

Antes de codar, responda por escrito em [[04-Anotacoes]]:

1. `Matricula` é uma entidade ou um value object? Por quê?
2. `Disciplina` e `Matricula` são o mesmo agregado ou agregados diferentes?
3. Se são diferentes, como `INV-M4` (matricular é atômico: cria matrícula E incrementa vagas) pode ser garantida?
4. `ValorNota` é entidade ou VO?
5. Onde vive a regra `INV-N1` (só o professor responsável lança nota)? Na entidade `Nota`, na `Disciplina`, ou no caso de uso?

> ⚠️ A pergunta 3 é a mais difícil e a mais valiosa. Ela força você a encarar a diferença entre pureza de DDD e transação real de banco. Não existe resposta única correta — existe trade-off que você precisa saber defender.

**Referências:**
- 📄 [Martin Fowler — DDD Aggregate](https://martinfowler.com/bliki/DDD_Aggregate.html) — definição curta e precisa
- 📄 [Martin Fowler — Anemic Domain Model](https://martinfowler.com/bliki/AnemicDomainModel.html) — leitura curta e desconfortável
- 📄 [Martin Fowler — Value Object](https://martinfowler.com/bliki/ValueObject.html)
- 📄 [Microsoft — Design a DDD-oriented microservice](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice) — exemplos em C#, mas a modelagem é agnóstica e muito bem explicada
- 📄 [DDD Reference — Eric Evans (PDF gratuito)](https://www.domainlanguage.com/ddd/reference/) — a referência condensada do autor

---

## 📚 Parte 4 — Casos de uso e comandos (Dia 7)

- [ ] Um caso de uso = uma operação de negócio, com uma porta de entrada
- [ ] **Command object** — por que `MatricularAlunoCommand` é melhor que 5 parâmetros soltos
- [ ] Por que o caso de uso retorna `sealed interface` e não lança exceção para fluxo esperado
- [ ] Exceção para o excepcional; tipo de retorno para o previsível
- [ ] Onde a transação começa e termina (isso vira `@Transactional` na Fase 4)
- [ ] O caso de uso **orquestra**; ele não contém a regra — a regra vive na entidade

### O padrão que você vai escrever

```kotlin
// domain/port/input/
interface MatricularAlunoUseCase {
    fun executar(comando: MatricularAlunoCommand): ResultadoMatricula
}

data class MatricularAlunoCommand(
    val alunoId: AlunoId,
    val disciplinaId: DisciplinaId,
    val semestre: Semestre
)

// application/usecase/ — sem anotação de framework ainda nesta fase
class MatricularAlunoService(
    private val alunos: AlunoRepositoryPort,
    private val disciplinas: DisciplinaRepositoryPort,
    private val matriculas: MatriculaRepositoryPort
) : MatricularAlunoUseCase {
    override fun executar(comando: MatricularAlunoCommand): ResultadoMatricula { /* você escreve */ }
}
```

**Referências:**
- 📄 [Martin Fowler — Command Query Separation](https://martinfowler.com/bliki/CommandQuerySeparation.html)
- 📄 [Kotlin — Sealed classes (use case scenarios)](https://kotlinlang.org/docs/sealed-classes.html) — a seção de cenários de uso é exatamente sobre modelar resultado
- 📄 [Baeldung — DTO Pattern](https://www.baeldung.com/java-dto-pattern) — por que traduzir entre camadas

---

## 📚 Parte 5 — Eventos de domínio (Dia 8)

Introdução conceitual. A implementação com Kafka é a Fase 7.

- [ ] O que é um evento de domínio e por que ele é nomeado no passado (`MatriculaRealizada`)
- [ ] Diferença entre evento de domínio e evento de integração
- [ ] Por que publicar evento desacopla efeito colateral da regra
- [ ] O problema da atomicidade: e se gravar no banco der certo e publicar der errado?
- [ ] **Outbox pattern** — só reconhecer agora, implementar na Fase 7

**Referências:**
- 📄 [Microsoft — Domain events: design and implementation](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation)
- 📄 [Microservices.io — Transactional Outbox](https://microservices.io/patterns/data/transactional-outbox.html) — só reconhecer
- 📄 [Quarkus — Quarkus Signals](https://quarkus.io/guides/signals) — como componentes se comunicam de forma desacoplada no Quarkus

---

## 📚 Parte 6 — ArchUnit e testes de arquitetura (Dia 9)

Uma convenção que não é testada é uma convenção que já foi quebrada.

- [ ] O que ArchUnit faz — testes JUnit sobre a estrutura do código
- [ ] Regras de camada: `domain` não pode depender de `infrastructure`
- [ ] Regras de import: nenhuma classe de `domain` importa `jakarta.*` ou `io.quarkus.*`
- [ ] Regras de nomenclatura: use cases terminam em `UseCase`, adapters em `Adapter`
- [ ] `ArchUnit` com Kotlin — cuidados com classes geradas pelo compilador

**Referências:**
- 📄 [ArchUnit — User Guide](https://www.archunit.org/userguide/html/000_Index.html) — oficial
- 📄 [ArchUnit — Getting Started](https://www.archunit.org/getting-started) — oficial, começa aqui
- 📄 [Baeldung — Introduction to ArchUnit](https://www.baeldung.com/java-archunit-intro)

---

## 🛠️ Prática — Incremento do projeto (Dia 10)

Reestruture o que você fez na Fase 1 na arquitetura alvo.

- [ ] Criar a estrutura de pacotes completa (ver [[Especificacao-Sistema-Academico]])
- [ ] Definir as **portas de saída**: `AlunoRepositoryPort`, `DisciplinaRepositoryPort`, `MatriculaRepositoryPort`, `NotaRepositoryPort`, `EventoPublisherPort`
- [ ] Definir as **portas de entrada**: `CriarDisciplinaUseCase`, `MatricularAlunoUseCase`, `LancarNotaUseCase`, `TrancarMatriculaUseCase`
- [ ] Definir os *command objects* de cada caso de uso
- [ ] Implementar os serviços de aplicação, orquestrando o domínio da Fase 1
- [ ] Implementar **adapters in-memory** (`Map<Long, X>`) para cada porta de saída
- [ ] Implementar um `EventoPublisherPort` in-memory que só acumula eventos numa lista
- [ ] Escrever testes de caso de uso usando **apenas** os adapters in-memory (sem MockK)
- [ ] Adicionar ArchUnit com no mínimo 3 regras
- [ ] Criar o diagrama do hexágono (Mermaid dentro do Obsidian funciona bem)

### Por que adapter in-memory e não banco de verdade

Porque o objetivo desta fase é **provar** que na Fase 4 você troca o adapter sem tocar no núcleo. Se você já começar com Postgres, nunca vai saber se o desacoplamento é real ou só teórico.

---

## ✅ Critério de Pronto

1. Os testes de caso de uso rodam sem framework e sem mock library
2. O teste ArchUnit passa e você **viu ele falhar** ao menos uma vez (crie um import proibido de propósito, rode, depois desfaça)
3. Você consegue desenhar o hexágono do projeto no quadro, de memória
4. Você tem resposta escrita para as 5 perguntas da Parte 3
5. Nenhuma classe em `domain/` ou `application/` tem anotação de framework

---

## 🔗 Referências consolidadas

| Tema | Link | Tipo |
|---|---|---|
| Hexagonal Architecture (original) | https://alistair.cockburn.us/hexagonal-architecture/ | Autor original |
| The Clean Architecture | https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html | Autor original |
| Hexagonal na Netflix | https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749 | Caso real |
| DDD Aggregate | https://martinfowler.com/bliki/DDD_Aggregate.html | Referência |
| Anemic Domain Model | https://martinfowler.com/bliki/AnemicDomainModel.html | Referência |
| Value Object | https://martinfowler.com/bliki/ValueObject.html | Referência |
| DDD Reference (Evans) | https://www.domainlanguage.com/ddd/reference/ | Autor original |
| Microsoft DDD microservice | https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/ddd-oriented-microservice | Oficial |
| Domain events | https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation | Oficial |
| DI vs IoC | https://martinfowler.com/articles/injection.html | Referência |
| ArchUnit User Guide | https://www.archunit.org/userguide/html/000_Index.html | Oficial |
| Hexagonal + DDD em Java | https://www.baeldung.com/hexagonal-architecture-ddd-spring | Complementar |

---

## Retrospectiva

*(preencher ao concluir)*

---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
fase: 6
titulo: Testes e Qualidade
inicio: 2026-11-30
fim: 2026-12-11
duracao_semanas: 2
status: nao-iniciado
pre_requisito: "[[fase-05-seguranca]]"
---

# Fase 6 — Testes e Qualidade

> **Por que esta fase existe.** Você vem escrevendo testes desde a Fase 1, mas de forma ad hoc. Aqui isso vira estratégia deliberada, com três níveis e critérios de quando usar cada um. O ADR-001 §5 exige `QuarkusTest` para integração **e** domínio testável unitariamente sem framework — as duas coisas, não uma ou outra.
>
> **O que um avaliador técnico olha primeiro num projeto:** se `build` roda verde do zero, e se os testes testam comportamento ou implementação. Esta fase cuida das duas.

---

## 🎯 Critério de conclusão

- [ ] Explicar a pirâmide de testes e por onde ela costuma ser invertida na prática
- [ ] Decidir, para qualquer teste novo, se ele é de nível 1, 2 ou 3 — e justificar
- [ ] Explicar a diferença entre `@QuarkusTest` e `@QuarkusIntegrationTest`
- [ ] Explicar por que cobertura alta não significa suíte boa
- [ ] Explicar por que testes que quebram ao refatorar sem mudar comportamento são um defeito
- [ ] **Entregar o incremento do projeto** (ver Prática)

---

## ⏱️ Plano de 10 dias (~2h/dia)

| Dias | Datas | Foco |
|---|---|---|
| 1–2 | 30/11–01/12 | Estratégia: pirâmide, o que testar |
| 3–4 | 02/12–03/12 | ⭐ Nível 1 — unitário sem framework |
| 5–6 | 04/12, 07/12 | ⭐ Nível 2 — `@QuarkusTest` e RestAssured |
| 7 | 08/12 | Nível 3 — `@QuarkusIntegrationTest` |
| 8 | 09/12 | Cobertura, mutação, qualidade estática |
| 9 | 10/12 | CI/CD |
| 10 | 11/12 | Prática: consolidar a suíte |

---

## 📚 Parte 1 — Estratégia de testes (Dias 1–2)

- [ ] A pirâmide: muitos unitários, alguns de integração, poucos ponta a ponta
- [ ] Por que a pirâmide costuma virar "ampulheta" ou "sorvete" na prática, e o custo disso
- [ ] Testar **comportamento** vs testar **implementação**
- [ ] Por que um teste que quebra quando você renomeia um método privado é um defeito
- [ ] Test double: dummy, stub, spy, mock, fake — as diferenças
- [ ] Por que os adapters in-memory da Fase 2 são **fakes**, e por que fake costuma ser melhor que mock
- [ ] Dado/Quando/Então: nomear teste como especificação executável
- [ ] Testes determinísticos: nada de `Instant.now()` solto, nada de ordem de execução
- [ ] O que **não** vale a pena testar (getters, mapeamento trivial, código de framework)

**Referências:**
- 📄 [Martin Fowler — The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) — a referência canônica
- 📄 [Martin Fowler — Test Double](https://martinfowler.com/bliki/TestDouble.html)
- 📄 [Martin Fowler — Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html)
- 📄 [Quarkus — Testing Your Application](https://quarkus.io/guides/getting-started-testing) — ⭐ o guia base da fase

---

## 📚 Parte 2 — Nível 1: unitário sem framework ⭐ (Dias 3–4)

O nível mais rápido e mais valioso. É o que o ADR-001 §5 chama de *"domínio testável de forma unitária sem o framework"*.

- [ ] JUnit 5: `@Test`, `@Nested`, `@DisplayName`, `@ParameterizedTest`, `@BeforeEach`
- [ ] `@ParameterizedTest` com `@CsvSource` / `@MethodSource` — testar muitos casos sem repetir código
- [ ] AssertJ e asserções fluentes
- [ ] Kotest — a alternativa idiomática Kotlin (avalie e decida; não é obrigatório)
- [ ] `assertThrows` e testar exceções de invariante
- [ ] `MockK` — a lib de mock idiomática para Kotlin (por que MockK e não Mockito)
- [ ] Quando usar MockK e quando usar seus fakes in-memory
- [ ] Testar `sealed interface` de resultado com `when` exaustivo
- [ ] Data builders / Object Mother para montar cenários sem poluir o teste

**Referências:**
- 📄 [JUnit 5 — User Guide](https://junit.org/junit5/docs/current/user-guide/) — oficial
- 📄 [AssertJ — Documentation](https://assertj.github.io/doc/) — oficial
- 📄 [MockK](https://mockk.io/) — oficial, mocking para Kotlin
- 📄 [Kotest](https://kotest.io/) — oficial, framework alternativo
- 📄 [Kotlin — Testing](https://kotlinlang.org/docs/jvm-test-using-junit.html) — o básico oficial

---

## 📚 Parte 3 — Nível 2: `@QuarkusTest` ⭐ (Dias 5–6)

- [ ] O que `@QuarkusTest` faz: sobe a aplicação real, com CDI, com Dev Services
- [ ] Por que o Dev Services provisiona Postgres e Keycloak também no teste
- [ ] `@TestProfile` — configuração específica de cenário
- [ ] `@QuarkusTestResource` — recursos externos customizados
- [ ] `@InjectMock` — substituir um bean CDI por mock
- [ ] `@InjectSpy`
- [ ] `@TestTransaction` — rollback automático ao fim do teste
- [ ] `@TestSecurity` — simular usuário autenticado com roles
- [ ] **RestAssured** — testar a API de fora, como um cliente real
- [ ] `given().when().then()` e a extensão Kotlin do RestAssured
- [ ] `QuarkusComponentTest` — testar um componente isolado sem subir tudo
- [ ] Isolamento entre testes: por que ordem de execução não pode importar

### Ponte De-Para

| Spring Boot Test | Quarkus |
|---|---|
| `@SpringBootTest` | `@QuarkusTest` |
| `@WebMvcTest` | `QuarkusComponentTest` (aproximado) |
| `@MockBean` | `@InjectMock` |
| `@SpyBean` | `@InjectSpy` |
| `@ActiveProfiles("test")` | `@TestProfile(MeuPerfil::class)` |
| `@Transactional` no teste (rollback) | `@TestTransaction` |
| `@WithMockUser` | `@TestSecurity` |
| `MockMvc` | RestAssured |
| Testcontainers configurado à mão | Dev Services automático |

**Referências:**
- 📄 [Quarkus — Testing Your Application](https://quarkus.io/guides/getting-started-testing) — ⭐ leia inteiro
- 📄 [Quarkus — Testing components](https://quarkus.io/guides/testing-components) — `QuarkusComponentTest`
- 📄 [Quarkus — Security Testing](https://quarkus.io/guides/security-testing) — `@TestSecurity`
- 📄 [Quarkus — Continuous Testing](https://quarkus.io/guides/continuous-testing) — testes rodando enquanto você digita
- 📄 [REST Assured — Usage Guide](https://rest-assured.io/) — oficial
- 📄 [Quarkus — Testing Spring-style Applications](https://quarkus.io/guides/spring-test) — de novo, pelo mapeamento

---

## 📚 Parte 4 — Nível 3: `@QuarkusIntegrationTest` (Dia 7)

- [ ] O que muda: roda contra o **artefato empacotado**, não contra o código
- [ ] Por que isso pega bugs que `@QuarkusTest` não pega (serialização, configuração de build time, reflection)
- [ ] Por que é o mesmo teste que valida o **binário nativo** na Fase 8
- [ ] Limitações: não dá para injetar beans nem mockar
- [ ] Onde encaixar no ciclo de build (`check` vs `verify`)

**Referências:**
- 📄 [Quarkus — Testing Your Application (Integration Testing)](https://quarkus.io/guides/getting-started-testing) — a seção de integração
- 📄 [Quarkus — Building a Native Executable (testes nativos)](https://quarkus.io/guides/building-native-image)

---

## 📚 Parte 5 — Cobertura e qualidade estática (Dia 8)

- [ ] JaCoCo no Quarkus e a pegadinha do bytecode transformado
- [ ] Por que **cobertura alta não significa suíte boa** — cobertura mede execução, não asserção
- [ ] Testes de mutação (PIT) — o que é e por que mede melhor
- [ ] ktlint: formatação, integrado ao build (ADR-002 §4)
- [ ] detekt: análise estática, complexidade ciclomática, code smells
- [ ] Quality gates: falhar o build quando cai abaixo de um limiar
- [ ] ArchUnit revisitado — adicionar regras que você descobriu que faltavam

**Referências:**
- 📄 [Quarkus — Measuring the coverage of your tests](https://quarkus.io/guides/tests-with-coverage) — oficial, cobre a pegadinha do JaCoCo
- 📄 [JaCoCo](https://www.eclemma.org/jacoco/) — oficial
- 📄 [ktlint](https://pinterest.github.io/ktlint/latest/) — oficial
- 📄 [detekt](https://detekt.dev/) — oficial
- 📄 [PIT Mutation Testing](https://pitest.org/) — para entender por que mutação mede melhor
- 📄 [ArchUnit — User Guide](https://www.archunit.org/userguide/html/000_Index.html)

---

## 📚 Parte 6 — CI/CD (Dia 9)

- [ ] O que uma pipeline de CI precisa garantir, no mínimo
- [ ] GitHub Actions: workflow, jobs, steps, matrix
- [ ] Cache de dependências do Gradle no CI
- [ ] Docker-in-Docker: como fazer Dev Services/Testcontainers funcionarem no runner
- [ ] Ordem dos gates: lint → build → teste unitário → teste de integração
- [ ] Por que a pipeline deve falhar rápido (fail fast)
- [ ] Publicar relatórios de teste e cobertura como artefato
- [ ] Preparar o terreno para build de imagem (Fase 8)

**Referências:**
- 📄 [GitHub Actions — Documentation](https://docs.github.com/en/actions) — oficial
- 📄 [GitHub Actions — Building and testing Java with Gradle](https://docs.github.com/en/actions/tutorials/build-and-test-code/java-with-gradle) — oficial
- 📄 [Gradle — Build Cache](https://docs.gradle.org/current/userguide/build_cache.html)
- 📄 [Testcontainers — Continuous Integration](https://java.testcontainers.org/supported_docker_environment/continuous_integration/dind_patterns/)

---

## 🛠️ Prática — Incremento do projeto (Dia 10)

- [ ] Organizar a suíte em três níveis explícitos, com pacotes ou tags separando
- [ ] **Nível 1** — domínio e casos de uso, sem framework, usando os fakes in-memory
- [ ] **Nível 2** — `@QuarkusTest` + RestAssured cobrindo cada linha da matriz de permissões
- [ ] **Nível 3** — `@QuarkusIntegrationTest` cobrindo o caminho feliz principal
- [ ] Adicionar `@ParameterizedTest` para os value objects (formatos válidos e inválidos)
- [ ] Adicionar teste de concorrência para `INV-M4` (a corrida da última vaga da Fase 4)
- [ ] Configurar JaCoCo e medir — **sem** perseguir número
- [ ] Configurar ktlint e detekt como gate do build
- [ ] Expandir as regras ArchUnit
- [ ] Criar a pipeline no GitHub Actions
- [ ] Adicionar badge de build no README
- [ ] Adicionar health checks (`quarkus-smallrye-health`) — `/q/health/live` e `/q/health/ready`

> 📌 **Guarde os caminhos dos health checks.** Eles voltam na Fase 8 como probes de liveness e readiness do Kubernetes. Essa é a costura entre as duas fases.

### Health check que vale a pena

Um readiness check que só retorna `UP` é inútil. O seu deve verificar que o datasource responde. Assim o Kubernetes só manda tráfego para o pod quando ele realmente consegue atender.

---

## ✅ Critério de Pronto

1. `./gradlew build` roda verde do zero, **sem nenhum serviço que você tenha subido manualmente**
2. A pipeline do GitHub Actions passa
3. Os testes de nível 1 rodam em menos de 5 segundos
4. Cada linha da matriz de permissões tem um teste correspondente
5. Você consegue apontar um teste da sua suíte e dizer por que ele é nível 1, 2 ou 3
6. Os health checks respondem e o readiness realmente verifica o banco

---

## 🔗 Referências consolidadas

| Tema | Link | Tipo |
|---|---|---|
| Testing Your Application | https://quarkus.io/guides/getting-started-testing | Oficial ⭐ |
| Testing components | https://quarkus.io/guides/testing-components | Oficial |
| Security Testing | https://quarkus.io/guides/security-testing | Oficial |
| Continuous Testing | https://quarkus.io/guides/continuous-testing | Oficial |
| Coverage | https://quarkus.io/guides/tests-with-coverage | Oficial |
| SmallRye Health | https://quarkus.io/guides/smallrye-health | Oficial |
| JUnit 5 User Guide | https://junit.org/junit5/docs/current/user-guide/ | Oficial |
| AssertJ | https://assertj.github.io/doc/ | Oficial |
| MockK | https://mockk.io/ | Oficial |
| Kotest | https://kotest.io/ | Oficial |
| REST Assured | https://rest-assured.io/ | Oficial |
| JaCoCo | https://www.eclemma.org/jacoco/ | Oficial |
| ktlint | https://pinterest.github.io/ktlint/latest/ | Oficial |
| detekt | https://detekt.dev/ | Oficial |
| ArchUnit | https://www.archunit.org/userguide/html/000_Index.html | Oficial |
| GitHub Actions | https://docs.github.com/en/actions | Oficial |
| Practical Test Pyramid | https://martinfowler.com/articles/practical-test-pyramid.html | Referência ⭐ |
| Mocks Aren't Stubs | https://martinfowler.com/articles/mocksArentStubs.html | Referência |

---

## Retrospectiva

*(preencher ao concluir)*

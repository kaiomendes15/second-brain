---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
fase: 0
titulo: Fundamentos da JVM, Gradle e Ferramental
inicio: 2026-08-24
fim: 2026-08-28
duracao_semanas: 1
status: nao-iniciado
pre_requisito: nenhum
---

# Fase 0 — Fundamentos da JVM, Gradle e Ferramental

> **Por que esta fase existe.** Você usou Maven com Spring Boot por anos sem nunca precisar entender o que um build tool realmente faz, porque o Spring Initializr resolvia tudo. Aqui a stack é Gradle Kotlin DSL, e o Quarkus tem uma fase de build própria (*augmentation*) que **não existe** no mundo Spring. Se o build for caixa-preta, os erros da Fase 3 vão parecer mágica negra.
>
> **Regra da fase:** nenhuma linha de lógica de negócio. Só ferramental.

---

## 🎯 Critério de conclusão

- [ ] Explicar, sem consultar, o que a JVM faz entre `.kt` e código executando
- [ ] Explicar o que é classpath e por que ele importa no Quarkus mais do que no Spring
- [ ] Escrever um `build.gradle.kts` do zero, sem copiar
- [ ] Explicar o que é um BOM e por que o Quarkus obriga o uso de um
- [ ] Explicar a diferença entre `implementation` e `api` no Gradle
- [ ] Explicar a diferença entre uma *extension* do Quarkus e um *starter* do Spring
- [ ] **Entregar o incremento do projeto** (ver Prática)

---

## ⏱️ Plano de 5 dias (~2h/dia)

| Dia | Data | Foco |
|---|---|---|
| 1 | 24/08 | JVM, JDK, bytecode, classpath |
| 2 | 25/08 | Gradle: modelo mental, ciclo de vida, Kotlin DSL |
| 3 | 26/08 | Dependências, BOM, versões, extension vs starter |
| 4 | 27/08 | Docker essencial + Quarkus CLI |
| 5 | 28/08 | Prática: criar o repositório e o build |

---

## 📚 Parte 1 — JVM, JDK e o ciclo de compilação (Dia 1)

O ponto aqui não é decorar. É que você saiba **onde** cada coisa acontece, porque o Quarkus move trabalho entre essas etapas.

- [ ] JDK vs JRE vs JVM — o que cada sigla contém
- [ ] O que é bytecode e por que ele permite Kotlin e Java coexistirem
- [ ] O que o JIT faz e por que uma JVM "esquenta" (isso volta na Fase 8, comparando com nativo)
- [ ] O que é classpath — a lista de lugares onde a JVM procura classes
- [ ] O que é *reflection* e por que ela custa memória
- [ ] O que é *class loading* e quando acontece
- [ ] Java 21 LTS: por que o ADR-002 menciona Virtual Threads, e por que a DTec ainda escolheu Kotlin

**Referências:**
- 📄 [Oracle — The Java Language Environment / Java Tutorials](https://docs.oracle.com/javase/tutorial/getStarted/intro/definition.html) — oficial, seco, mas correto
- 📄 [Baeldung — JVM, JRE and JDK](https://www.baeldung.com/jvm-vs-jre-vs-jdk) — mesma coisa, linguagem mais leve
- 📄 [Quarkus — Class Loading Reference](https://quarkus.io/guides/class-loading-reference) — leia só a introdução agora; volte na Fase 3
- 📄 [Kotlin — Kotlin for Java Developers / Overview](https://kotlinlang.org/docs/home.html) — porta de entrada oficial

> 💭 **Pergunta para responder em [[04-Anotacoes]]:** o Spring escaneia o classpath no `main()`. Se o classpath pode mudar entre uma execução e outra, o que isso permite ao Spring que o Quarkus abre mão?

---

## 📚 Parte 2 — Gradle: o modelo mental (Dia 2)

Vindo do Maven, o erro clássico é achar que o `build.gradle.kts` é um `pom.xml` com sintaxe diferente. Não é. O `pom.xml` é **declarativo** (você descreve o resultado). O Gradle é um **grafo de tarefas programável** (você descreve o processo, em código Kotlin de verdade).

- [ ] O que é um *task graph* e por que o Gradle é incremental
- [ ] Ciclo de vida do build: *initialization* → *configuration* → *execution*
- [ ] `settings.gradle.kts` vs `build.gradle.kts` — quem faz o quê
- [ ] O que é o Gradle Wrapper (`gradlew`) e por que **sempre** se commita ele
- [ ] Plugins: o que são e como `plugins { }` difere de `buildscript`
- [ ] Kotlin DSL vs Groovy DSL — por que Kotlin DSL dá autocomplete e type-check
- [ ] Tasks úteis: `build`, `test`, `clean`, `dependencies`, `tasks`
- [ ] Ler a saída de `./gradlew dependencies` e entender uma árvore de dependências

**Referências:**
- 📄 [Gradle — Getting Started](https://docs.gradle.org/current/userguide/getting_started_eng.html) — oficial
- 📄 [Gradle — Kotlin DSL Primer](https://docs.gradle.org/current/userguide/kotlin_dsl.html) — **leitura obrigatória**, é o DSL que você vai usar
- 📄 [Gradle — Build Lifecycle](https://docs.gradle.org/current/userguide/build_lifecycle.html)
- 📄 [Quarkus — Quarkus and Gradle](https://quarkus.io/guides/gradle-tooling) — como o Quarkus se pluga no Gradle
- 📄 [Quarkus — Quarkus and Maven](https://quarkus.io/guides/maven-tooling) — leia por contraste; a maior parte da internet ensina Quarkus com Maven

### Ponte De-Para: Maven → Gradle

| Maven | Gradle Kotlin DSL | Nota |
|---|---|---|
| `pom.xml` | `build.gradle.kts` | XML declarativo → código Kotlin |
| `<dependencies>` | `dependencies { }` | |
| `<scope>compile</scope>` | `implementation(...)` | Não vaza para consumidores |
| — | `api(...)` | Vaza para consumidores (não existe no Maven) |
| `<scope>test</scope>` | `testImplementation(...)` | |
| `<dependencyManagement>` | `enforcedPlatform(...)` | Onde entra o BOM do Quarkus |
| `mvn clean install` | `./gradlew clean build` | |
| `./mvnw` | `./gradlew` | Wrapper — mesma ideia |
| `mvn quarkus:dev` | `./gradlew quarkusDev` | **Decore este** |

---

## 📚 Parte 3 — Dependências, BOM e o conceito de Extension (Dia 3)

- [ ] O que é uma dependência transitiva e como conflitos de versão surgem
- [ ] O que é um **BOM** (Bill of Materials) e o problema que ele resolve
- [ ] `platform()` vs `enforcedPlatform()` no Gradle
- [ ] Por que o Quarkus exige `enforcedPlatform("io.quarkus.platform:quarkus-bom:...")`
- [ ] **Extension vs Starter** — a diferença conceitual (ver abaixo)
- [ ] Navegar o catálogo de extensions e entender por que ele é finito e curado
- [ ] Semantic versioning: o que muda em major, minor e patch

### O conceito que mais confunde vindo do Spring

Um **starter** do Spring Boot é essencialmente um POM agregador: ele traz um conjunto de dependências. Se você jogar um JAR qualquer no classpath, as autoconfigurations do Spring detectam e se configuram em runtime.

Uma **extension** do Quarkus é isso **mais** código que roda na fase de build. Ela ensina o processo de *augmentation* a lidar com aquela biblioteca, e ensina o GraalVM o que precisa ser incluído no binário nativo.

Consequência direta: **não existe "joguei a lib no classpath e ela se configurou"**. Por isso o catálogo de extensions é curado. Não é preguiça do projeto — é necessidade técnica.

**Referências:**
- 📄 [Quarkus — Extensions catalog](https://quarkus.io/extensions/) — navegue de verdade, veja o que existe
- 📄 [Quarkus — A maturity matrix for Quarkus extensions](https://quarkus.io/guides/extension-maturity-matrix) — explica os níveis do que uma extension faz
- 📄 [Quarkus — Platform](https://quarkus.io/guides/platform) — o que é o BOM do Quarkus
- 📄 [Quarkus — Extension Capabilities](https://quarkus.io/guides/capabilities)
- 📄 [Gradle — Platforms and BOMs](https://docs.gradle.org/current/userguide/platforms.html)

---

## 📚 Parte 4 — Docker essencial e Quarkus CLI (Dia 4)

Você já usa Docker no trabalho com Moodle, então aqui é revisão dirigida. O foco é o que o **Dev Services** vai exigir.

- [ ] Imagem vs container vs layer
- [ ] Por que o Docker precisa estar rodando para o Dev Services funcionar
- [ ] `docker ps`, `docker logs`, `docker rm` — o mínimo para depurar containers que o Quarkus subiu sozinho
- [ ] Testcontainers: o que é e por que o Dev Services é construído sobre ele
- [ ] Instalar o Quarkus CLI
- [ ] `quarkus create app --gradle-kotlin-dsl` — entender cada flag
- [ ] `quarkus ext list` e `quarkus ext add`

**Referências:**
- 📄 [Quarkus — Building Quarkus apps with the Quarkus CLI](https://quarkus.io/guides/cli-tooling) — oficial
- 📄 [Quarkus — Dev Services Overview](https://quarkus.io/guides/dev-services) — leia agora só para saber que existe
- 📄 [Quarkus — Using Podman with Quarkus](https://quarkus.io/guides/podman) — se você usar Podman em vez de Docker
- 📄 [Testcontainers — Docs](https://testcontainers.com/getting-started/) — o motor por trás do Dev Services
- 📄 [Quarkus — Quarkus Tools in your favorite IDE](https://quarkus.io/guides/ide-tooling)

---

## 🛠️ Prática — Incremento do projeto (Dia 5)

Objetivo: repositório vivo, build verde, ferramental configurado. **Zero lógica de negócio.**

- [ ] Criar o repositório `sistema-academico` no Git
- [ ] Gerar o projeto com o Quarkus CLI usando **Gradle Kotlin DSL** (não Maven, não Groovy)
- [ ] Abrir o `build.gradle.kts` gerado e **comentar cada bloco com suas palavras** — o que faz e por quê
- [ ] Configurar `kotlin("plugin.allopen")` e entender por que ele é necessário (dica: classes Kotlin são `final`; CDI precisa criar proxies)
- [ ] Adicionar **ktlint** e **detekt** ao build (exigência do ADR-002 §4)
- [ ] Rodar `./gradlew build` e ver verde
- [ ] Rodar `./gradlew quarkusDev` e abrir o Dev UI em `/q/dev` — só explore, não configure nada
- [ ] Rodar `./gradlew dependencies` e localizar de onde vem `kotlin-stdlib`
- [ ] Criar `.gitignore`, `README.md` inicial e definir a estratégia de branches (git flow)
- [ ] Commitar o `gradlew` e o `gradle/wrapper/`

### Esqueleto de referência do `build.gradle.kts`

Use como **conferência depois de escrever o seu**, não como ponto de partida.

```kotlin
plugins {
    kotlin("jvm") version "<versão do BOM>"
    kotlin("plugin.allopen") version "<mesma versão>"
    id("io.quarkus")
    id("org.jlleitschuh.gradle.ktlint")
    id("io.gitlab.arturbosch.detekt")
}

dependencies {
    implementation(enforcedPlatform("io.quarkus.platform:quarkus-bom:<versão>"))
    implementation("io.quarkus:quarkus-kotlin")
    testImplementation("io.quarkus:quarkus-junit5")
}

allOpen {
    annotation("jakarta.ws.rs.Path")
    annotation("jakarta.enterprise.context.ApplicationScoped")
    annotation("jakarta.persistence.Entity")
    annotation("io.quarkus.test.junit.QuarkusTest")
}

kotlin { compilerOptions { javaParameters = true } }
```

> ❓ **Investigue e anote:** por que `javaParameters = true`? (Dica: tem a ver com como o CDI e o JAX-RS descobrem nomes de parâmetros.)

---

## ✅ Critério de Pronto

Você só avança quando:

1. `./gradlew build` roda verde do zero em máquina limpa
2. `./gradlew quarkusDev` sobe e o Dev UI abre
3. ktlint e detekt rodam e você viu pelo menos um deles reclamar de algo
4. Você consegue explicar, apontando para o arquivo, **o que cada linha do seu `build.gradle.kts` faz**
5. Você consegue responder: *"por que uma extension do Quarkus não é só um POM agregador?"*

---

## 🔗 Referências consolidadas

| Tema | Link | Tipo |
|---|---|---|
| Gradle Kotlin DSL | https://docs.gradle.org/current/userguide/kotlin_dsl.html | Oficial |
| Gradle — Build Lifecycle | https://docs.gradle.org/current/userguide/build_lifecycle.html | Oficial |
| Gradle — Platforms/BOM | https://docs.gradle.org/current/userguide/platforms.html | Oficial |
| Quarkus + Gradle | https://quarkus.io/guides/gradle-tooling | Oficial |
| Quarkus CLI | https://quarkus.io/guides/cli-tooling | Oficial |
| Quarkus Platform (BOM) | https://quarkus.io/guides/platform | Oficial |
| Maturity matrix de extensions | https://quarkus.io/guides/extension-maturity-matrix | Oficial |
| Catálogo de extensions | https://quarkus.io/extensions/ | Oficial |
| Class Loading Reference | https://quarkus.io/guides/class-loading-reference | Oficial |
| Testcontainers | https://testcontainers.com/getting-started/ | Oficial |
| JVM/JRE/JDK | https://www.baeldung.com/jvm-vs-jre-vs-jdk | Complementar |
| Guias Quarkus em PT-BR | https://pt.quarkus.io/guides/ | Oficial (tradução) |

---

## Retrospectiva

*(preencher ao concluir)*

- Data real de conclusão:
- O que demorou mais do que o esperado:
- O que ficou raso e precisa revisita:

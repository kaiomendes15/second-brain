---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
fase: 1
titulo: Kotlin Essencial
inicio: 2026-08-31
fim: 2026-09-11
duracao_semanas: 2
status: nao-iniciado
pre_requisito: "[[fase-00-fundamentos-e-ferramental]]"
---

# Fase 1 — Kotlin Essencial

> **Por que esta fase existe.** Somar linguagem nova e framework novo ao mesmo tempo é a forma mais rápida de não aprender nenhum dos dois. Aqui a sintaxe precisa parar de exigir atenção consciente **antes** de o Quarkus entrar em cena.
>
> **Regra da fase:** nenhum import de framework. Nem Quarkus, nem Jakarta, nem Hibernate. Kotlin puro e JUnit.

---

## 🎯 Critério de conclusão

- [ ] Escrever uma função que trata ausência de valor **sem** `if (x != null)` e **sem** `!!`
- [ ] Explicar por que `String?` e `String` são tipos diferentes para o compilador
- [ ] Explicar por que `data class` **não** deve ser usada como entidade JPA
- [ ] Usar `sealed interface` + `when` exaustivo e explicar o que o compilador garante
- [ ] Escrever uma `value class` e explicar o custo em runtime
- [ ] Escolher conscientemente entre `let`, `apply`, `also`, `run` e `with`
- [ ] Explicar o que `by` delegation resolve e por que o ADR-002 §5 o exige
- [ ] **Entregar o incremento do projeto** (ver Prática)

---

## ⏱️ Plano de 10 dias (~2h/dia)

| Dias | Datas | Foco |
|---|---|---|
| 1–2 | 31/08–01/09 | Sintaxe básica, `val`/`var`, funções, `when` |
| 3–4 | 02/09–03/09 | ⭐ Null safety — o núcleo |
| 5 | 04/09 | Classes, `data class`, `object`, `companion` |
| 6 | 07/09* | ⭐ `sealed`, `enum`, `value class` |
| 7 | 08/09 | Extension functions, scope functions, delegation |
| 8 | 09/09 | Coleções e operações funcionais |
| 9 | 10/09 | Generics, interop com Java, coding conventions |
| 10 | 11/09 | Prática: modelo de domínio |

\* 07/09 é feriado. Use como folga ou adiante — sua escolha.

---

## 📚 Parte 1 — Sintaxe e fundamentos (Dias 1–2)

- [ ] `val` vs `var` — e por que `val` é o default mental
- [ ] Inferência de tipo e quando declarar explicitamente
- [ ] Funções: parâmetros nomeados, valores default, *single-expression functions*
- [ ] String templates (`"$nome tem ${idade} anos"`)
- [ ] `if` como **expressão** que retorna valor
- [ ] `when` como expressão — a substituição do `switch` e do `if/else if` encadeado
- [ ] Ranges e loops (`for (i in 1..10)`, `until`, `step`, `downTo`)
- [ ] Top-level functions — por que Kotlin não precisa de classes `Utils`
- [ ] Visibilidade: `public`, `private`, `protected`, **`internal`** (não existe em Java)

**Referências:**
- 📄 [Kotlin — Basic syntax](https://kotlinlang.org/docs/basic-syntax.html) — oficial, começa aqui
- 📄 [Kotlin — Control flow: if, when, for, while](https://kotlinlang.org/docs/control-flow.html)
- 📄 [Kotlin — Functions](https://kotlinlang.org/docs/functions.html)
- 📄 [Kotlin Playground](https://play.kotlinlang.org/) — rode tudo aqui, sem setup
- 📄 [Kotlin — Comparison to Java](https://kotlinlang.org/docs/comparison-to-java.html) — a ponte De-Para oficial

---

## 📚 Parte 2 — Null safety ⭐ (Dias 3–4)

**A página mais importante desta fase inteira.** O ADR-002 elegeu Kotlin principalmente por isso. Não corra.

- [ ] Tipos anuláveis vs não-anuláveis — a distinção no **sistema de tipos**
- [ ] Safe call `?.`
- [ ] Elvis `?:` — valor default e *early return*
- [ ] `!!` — o que ele realmente faz e por que é quase sempre erro de design
- [ ] Smart cast: por que depois de `if (x != null)` o compilador já sabe o tipo
- [ ] `let` com safe call: `x?.let { ... }`
- [ ] Encadeamento seguro em cadeias longas
- [ ] `lateinit` — quando usar e o `UninitializedPropertyAccessException`
- [ ] **Platform types** (`String!`) — o buraco na null safety quando você chama código Java
- [ ] Por que interop com Hibernate/JPA reintroduz nulos que o Kotlin não vê

**Referências:**
- 📄 [Kotlin — Null safety](https://kotlinlang.org/docs/null-safety.html) — **obrigatório, leia inteiro**
- 📄 [Kotlin — Calling Java from Kotlin (Null-safety and platform types)](https://kotlinlang.org/docs/java-interop.html) — a seção de platform types é crítica
- 📄 [Kotlin — Idioms](https://kotlinlang.org/docs/idioms.html) — como um kotlinista de verdade escreve

> 💭 **Anote em [[04-Anotacoes]]:** o ADR-002 promete "eliminação da maioria dos NPEs". *Maioria*, não todos. Onde exatamente o NPE ainda passa?

---

## 📚 Parte 3 — Classes e data classes (Dia 5)

- [ ] Construtor primário e `init { }`
- [ ] Propriedades vs campos — Kotlin gera getter/setter automaticamente
- [ ] Getters e setters customizados
- [ ] `object` — singleton nativo da linguagem
- [ ] `companion object` — o substituto do `static`
- [ ] `data class`: o que o compilador gera (`equals`, `hashCode`, `toString`, `copy`, `componentN`)
- [ ] `copy()` para atualização imutável
- [ ] Destructuring declarations
- [ ] `require()`, `check()`, `error()` — validação de invariante no construtor
- [ ] Por que toda classe Kotlin é `final` por padrão, e o que `open` faz
- [ ] **Por que `data class` é péssima como entidade JPA** (ver quadro abaixo)

### Quadro: o atrito `data class` × Hibernate

| O que o Hibernate exige | O que o Kotlin faz por padrão | Conflito |
|---|---|---|
| Construtor sem argumentos | Construtor primário com parâmetros obrigatórios | Quebra |
| Classe não-`final` (proxies de lazy loading) | Toda classe é `final` | Quebra |
| Campos mutáveis (dirty checking) | `val` é imutável | Quebra |
| ID nulo antes de ser gerado | Tipos não-nulos por padrão | Quebra |

Os plugins `kotlin-allopen` e `kotlin-noarg` resolvem os dois primeiros — e a extension `quarkus-kotlin` já os configura. **Mas o problema do `equals()` não tem plugin que resolva:** o `equals` gerado compara todos os campos, e isso quebra de forma sutil com entidades gerenciadas (dois objetos com o mesmo ID, um lazy-carregado, deixam de ser "iguais").

**Regra prática deste projeto:** `data class` para DTOs e para o modelo de domínio; classe normal com `var` para entidade JPA.

**Referências:**
- 📄 [Kotlin — Classes](https://kotlinlang.org/docs/classes.html)
- 📄 [Kotlin — Data classes](https://kotlinlang.org/docs/data-classes.html)
- 📄 [Kotlin — Object declarations and expressions](https://kotlinlang.org/docs/object-declarations.html)
- 📄 [Kotlin — Inheritance](https://kotlinlang.org/docs/inheritance.html)
- 📄 [Kotlin — All-open compiler plugin](https://kotlinlang.org/docs/all-open-plugin.html) — por que ele existe
- 📄 [Kotlin — No-arg compiler plugin](https://kotlinlang.org/docs/no-arg-plugin.html)

---

## 📚 Parte 4 — Sealed, enum e value class ⭐ (Dia 6)

Este é o dia que mais muda como você modela domínio.

- [ ] `enum class` com propriedades e métodos
- [ ] `sealed class` vs `sealed interface` — hierarquia fechada e conhecida em tempo de compilação
- [ ] `when` **exaustivo** sobre sealed — o compilador te obriga a tratar todos os casos
- [ ] `data object` (para casos sem dados)
- [ ] `value class` / `@JvmInline` — tipagem forte sem custo de alocação
- [ ] Por que `Matricula(val valor: String)` mata a classe de bug de passar `String` no argumento errado
- [ ] `Result<T>` da stdlib vs sealed hierarchy própria — trade-offs

### Exemplo do padrão que você vai usar no domínio

```kotlin
@JvmInline
value class CodigoDisciplina(val valor: String) {
    init { require(valor.matches(Regex("[A-Z]{3}\\d{4}"))) { "Código inválido: $valor" } }
}

sealed interface ResultadoMatricula {
    data class Sucesso(val matricula: Matricula) : ResultadoMatricula
    data object SemVagas : ResultadoMatricula
    data class JaMatriculado(val disciplina: CodigoDisciplina) : ResultadoMatricula
    data object LimiteSemestralExcedido : ResultadoMatricula
}
```

Com `when` exaustivo sobre `ResultadoMatricula`, **adicionar um novo caso quebra a compilação** em todo lugar que precisa tratá-lo. Não existe equivalente em Java 11.

**Referências:**
- 📄 [Kotlin — Sealed classes and interfaces](https://kotlinlang.org/docs/sealed-classes.html)
- 📄 [Kotlin — Inline value classes](https://kotlinlang.org/docs/inline-classes.html)
- 📄 [Kotlin — Enum classes](https://kotlinlang.org/docs/enum-classes.html)
- 📄 [Kotlin — Type checks and casts](https://kotlinlang.org/docs/typecasts.html)

---

## 📚 Parte 5 — Extensions, scope functions e delegation (Dia 7)

- [ ] Extension functions — como funcionam (são estáticas, resolvidas no tipo declarado)
- [ ] Extension properties
- [ ] Quando extension function é boa ideia e quando vira gambiarra
- [ ] As cinco scope functions: `let`, `run`, `with`, `apply`, `also`
- [ ] A tabela de decisão: o que cada uma **retorna** e como referencia o objeto (`it` vs `this`)
- [ ] **`by` delegation** — delegação de interface para composição sem herança (ADR-002 §5)
- [ ] Delegated properties: `by lazy`, `by Delegates.observable`

### Ponte De-Para: composição

| Java/Spring | Kotlin |
|---|---|
| Classe `XxxUtils` com métodos estáticos | Extension function no tipo alvo |
| Wrapper class delegando manualmente cada método | `class A(b: B) : B by b` |
| Lombok `@Delegate` | `by` nativo da linguagem |
| Campo inicializado no `@PostConstruct` | `by lazy { }` |

**Referências:**
- 📄 [Kotlin — Extensions](https://kotlinlang.org/docs/extensions.html)
- 📄 [Kotlin — Scope functions](https://kotlinlang.org/docs/scope-functions.html) — tem uma tabela de escolha; **cole ela na sua nota**
- 📄 [Kotlin — Delegation](https://kotlinlang.org/docs/delegation.html)
- 📄 [Kotlin — Delegated properties](https://kotlinlang.org/docs/delegated-properties.html)

---

## 📚 Parte 6 — Coleções e estilo funcional (Dia 8)

Você já usa Stream API do Java. Aqui é sobretudo tradução — mas com diferenças que importam.

- [ ] `List` vs `MutableList` — imutabilidade na interface (e por que não é imutabilidade real)
- [ ] `listOf`, `mutableListOf`, `mapOf`, `setOf`
- [ ] `map`, `filter`, `flatMap`, `reduce`, `fold`
- [ ] `groupBy`, `associateBy`, `partition`, `sumOf`
- [ ] `first`, `firstOrNull`, `find`, `any`, `all`, `none`
- [ ] `Sequence` — o equivalente lazy, e quando ele vale a pena
- [ ] Por que Kotlin **não** precisa de `.stream()` e `.collect()`

### Ponte De-Para: Stream API

| Java Stream | Kotlin |
|---|---|
| `list.stream().filter(...).collect(toList())` | `list.filter { ... }` |
| `.map(...)` | `.map { ... }` |
| `.findFirst().orElse(null)` | `.firstOrNull()` |
| `Collectors.groupingBy(...)` | `.groupBy { ... }` |
| `Optional<T>` | `T?` (o próprio sistema de tipos) |
| Stream lazy por padrão | `Sequence` (List é eager) |

**Referências:**
- 📄 [Kotlin — Collections overview](https://kotlinlang.org/docs/collections-overview.html)
- 📄 [Kotlin — Collection operations overview](https://kotlinlang.org/docs/collection-operations.html)
- 📄 [Kotlin — Sequences](https://kotlinlang.org/docs/sequences.html)
- 📄 [Kotlin Standard Library API](https://kotlinlang.org/api/core/kotlin-stdlib/) — referência de consulta

---

## 📚 Parte 7 — Generics, interop e convenções (Dia 9)

- [ ] Generics básicos: `class Caixa<T>`
- [ ] `in` / `out` — variância declarada no site de declaração (diferente do Java)
- [ ] `reified` type parameters e `inline fun`
- [ ] Chamar Java a partir de Kotlin: platform types, `@Nullable`/`@NotNull`
- [ ] Chamar Kotlin a partir de Java: `@JvmStatic`, `@JvmOverloads`, `@JvmName`
- [ ] Coding conventions oficiais
- [ ] Configurar ktlint e detekt para reclamarem do seu código de propósito

**Referências:**
- 📄 [Kotlin — Generics: in, out, where](https://kotlinlang.org/docs/generics.html)
- 📄 [Kotlin — Calling Java from Kotlin](https://kotlinlang.org/docs/java-interop.html)
- 📄 [Kotlin — Calling Kotlin from Java](https://kotlinlang.org/docs/java-to-kotlin-interop.html)
- 📄 [Kotlin — Coding conventions](https://kotlinlang.org/docs/coding-conventions.html) — oficial
- 📄 [ktlint](https://pinterest.github.io/ktlint/latest/) — o linter exigido pelo ADR-002
- 📄 [detekt](https://detekt.dev/) — a análise estática exigida pelo ADR-002

---

## 🛠️ Prática — Incremento do projeto (Dia 10)

Modele o domínio do [[Especificacao-Sistema-Academico|Sistema Acadêmico]] em **Kotlin puro**. Sem Quarkus. Sem JPA. Sem anotação de framework nenhuma.

- [ ] Criar o pacote `domain/model/` e `domain/model/vo/`
- [ ] Implementar os value objects como `value class` com validação no `init`:
      `Matricula`, `SIAPE`, `Email`, `CodigoDisciplina`, `Semestre`, `ValorNota`
- [ ] Implementar `Aluno`, `Professor`, `Disciplina`, `Matricula`, `Nota` como `data class`
- [ ] Implementar as invariantes `INV-D1`, `INV-D2`, `INV-M1`, `INV-M2`, `INV-M3` com `require`/`check`
- [ ] Criar `sealed interface ResultadoMatricula` e `ResultadoLancamentoNota`
- [ ] Criar as exceções de domínio em `domain/exception/`
- [ ] Escrever testes JUnit 5 cobrindo **cada invariante**, incluindo os casos de falha
- [ ] Garantir que **nenhum** arquivo de `domain/` tenha `import` de framework
- [ ] Rodar `./gradlew test` e cronometrar

### O que deve doer (e isso é bom)

- Modelar `vagasOcupadas` com `data class` imutável força você a usar `copy()` e devolver uma nova `Disciplina`. Isso é DDD correto e vai parecer estranho vindo de entidades JPA mutáveis.
- Você vai querer colocar a busca no banco dentro da entidade. **Não coloque.** Isso é Fase 2.

---

## ✅ Critério de Pronto

1. `./gradlew test` roda verde em **menos de 2 segundos**
2. Existe um teste chamando algo como "matricular em disciplina lotada deve falhar" e ele passa **sem Quarkus, sem Docker, sem banco**
3. `grep -r "import io.quarkus\|import jakarta" src/main/kotlin/**/domain/` retorna **vazio**
4. Você consegue explicar por que `Disciplina` é `data class` mas `DisciplinaEntity` (que ainda não existe) não vai ser
5. Você escreveu pelo menos um `when` exaustivo sobre `sealed interface`

---

## 🔗 Referências consolidadas

| Tema | Link | Tipo |
|---|---|---|
| Documentação Kotlin (home) | https://kotlinlang.org/docs/home.html | Oficial |
| Null safety | https://kotlinlang.org/docs/null-safety.html | Oficial ⭐ |
| Data classes | https://kotlinlang.org/docs/data-classes.html | Oficial |
| Sealed classes | https://kotlinlang.org/docs/sealed-classes.html | Oficial |
| Inline value classes | https://kotlinlang.org/docs/inline-classes.html | Oficial |
| Extensions | https://kotlinlang.org/docs/extensions.html | Oficial |
| Scope functions | https://kotlinlang.org/docs/scope-functions.html | Oficial |
| Delegation | https://kotlinlang.org/docs/delegation.html | Oficial |
| Generics | https://kotlinlang.org/docs/generics.html | Oficial |
| Java interop | https://kotlinlang.org/docs/java-interop.html | Oficial |
| Coding conventions | https://kotlinlang.org/docs/coding-conventions.html | Oficial |
| Comparação com Java | https://kotlinlang.org/docs/comparison-to-java.html | Oficial |
| Idioms | https://kotlinlang.org/docs/idioms.html | Oficial |
| all-open plugin | https://kotlinlang.org/docs/all-open-plugin.html | Oficial |
| Playground | https://play.kotlinlang.org/ | Oficial |
| ktlint | https://pinterest.github.io/ktlint/latest/ | Oficial |
| detekt | https://detekt.dev/ | Oficial |
| Quarkus — Using Kotlin | https://quarkus.io/guides/kotlin | Oficial |

---

## Retrospectiva

*(preencher ao concluir)*

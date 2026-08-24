---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
fase: 3
titulo: "Quarkus Core: Build Time, CDI, REST e Config"
inicio: 2026-09-28
fim: 2026-10-16
duracao_semanas: 3
status: nao-iniciado
pre_requisito: "[[fase-02-arquitetura-hexagonal-ddd]]"
---

# Fase 3 — Quarkus Core: Build Time, CDI, REST e Config

> **Por que esta fase existe.** É aqui que o Quarkus entra. E é aqui que a documentação oficial parece hostil — porque ela pressupõe modelos mentais que o Spring nunca exigiu de você. A Parte 1 desta fase é o modelo mental que falta. Sem ele, todo o resto vira decoreba de anotação.
>
> **Regra da fase:** o núcleo continua intocado. Você só adiciona um adapter de entrada e liga a injeção de dependência. Se você precisar mudar algo em `domain/`, pare e investigue — sua arquitetura vazou.

---

## 🎯 Critério de conclusão

- [ ] Explicar o que é *augmentation* e o que ele faz que o Spring faz no `main()`
- [ ] Explicar por que Build Time vs Run Time é uma decisão de **arquitetura**, não de performance
- [ ] Explicar o que acontece se você chamar `Class.forName` num binário nativo
- [ ] Explicar o que é *bean removal* e que bug sutil ele causa
- [ ] Traduzir qualquer controller Spring MVC para JAX-RS sem consultar
- [ ] Explicar o que é MicroProfile e por que o Quarkus se apoia nele
- [ ] **Entregar o incremento do projeto** (ver Prática)

---

## ⏱️ Plano de 15 dias (~2h/dia)

| Dias | Datas | Foco |
|---|---|---|
| 1–3 | 28/09–30/09 | ⭐⭐ Build Time vs Run Time — o divisor de águas |
| 4–6 | 01/10–05/10 | ⭐ CDI / ArC — injeção de dependência |
| 7–9 | 06/10–08/10 | ⭐ Jakarta REST (JAX-RS) e serialização |
| 10–11 | 09/10, 13/10* | Configuração e perfis |
| 12 | 14/10 | Validação e tratamento de erro |
| 13 | 15/10 | Dev Mode, Dev UI, OpenAPI |
| 14–15 | 16/10 + folga | Prática: adapter REST |

\* 12/10 é feriado.

---

## 📚 Parte 1 — Build Time vs Run Time ⭐⭐ (Dias 1–3)

**Se você entender só uma coisa desta fase inteira, entenda esta.**

### O contraste

**Como o Spring Boot arranca.** Você roda `java -jar app.jar`. No `main()`, o Spring varre o classpath procurando classes anotadas, lê essas anotações por *reflection*, avalia centenas de `@ConditionalOnClass` para decidir quais autoconfigurations ligar, monta proxies dinâmicos, e só então o app responde. Isso leva de 3 a 30 segundos e consome memória permanentemente — os metadados de reflection ficam vivos no heap.

**Como o Quarkus arranca.** Todo esse trabalho acontece no `./gradlew build`, numa fase chamada **augmentation**. O resultado é bytecode com as decisões já tomadas e escritas. Em runtime, o app só executa.

### Por que isso é arquitetura e não otimização

O Spring nasceu para servidores de aplicação: um processo grande, longo, que sobe uma vez por semana. Trinta segundos de boot diluídos em sete dias de uptime são irrelevantes.

Kubernetes inverteu isso. Pods são efêmeros. O autoscaler cria e destrói réplicas o tempo todo. Deploy acontece várias vezes por dia. Nesse mundo, **boot lento e RSS alto são custo direto em nós e em dinheiro** — e boot lento significa que o autoscaler não consegue reagir a um pico de tráfego.

É exatamente o cenário que o **ADR-001 §1** descreve: *"janelas de tráfego intenso da Unifor, como os períodos de matrícula, nos quais os serviços precisam escalar de forma rápida e elástica"*. Releia esse parágrafo agora que você tem o vocabulário.

### Checklist

- [ ] O que é a fase de *augmentation* e quando ela roda
- [ ] Que trabalho exatamente é movido do runtime para o build
- [ ] Por que isso reduz RSS (memória residente), não só tempo de boot
- [ ] O que é *closed-world analysis* do GraalVM
- [ ] Por que "o que não foi descoberto no build não existe no binário"
- [ ] `@RegisterForReflection` — o que é e quando você precisa
- [ ] Por que adicionar um JAR ao classpath de um projeto já compilado **não faz nada**
- [ ] Por que o catálogo de extensions é finito e curado
- [ ] Recorded bytecode e o que é um *build step*
- [ ] Class loading no Quarkus: por que o dev mode tem classloader diferente da produção

**Referências:**
- 📄 [Quarkus — Writing Your Own Extension](https://quarkus.io/guides/writing-extensions) — leia a **introdução**, que explica o modelo de build melhor que qualquer outra página
- 📄 [Quarkus — Class Loading Reference](https://quarkus.io/guides/class-loading-reference) — agora leia inteiro
- 📄 [Quarkus — Building a Native Executable](https://quarkus.io/guides/building-native-image) — leia a parte conceitual; o hands-on é a Fase 8
- 📄 [Quarkus — Native Reference Guide](https://quarkus.io/guides/native-reference) — a seção sobre reflection é o núcleo do assunto
- 📄 [Quarkus — Tips for writing native applications](https://quarkus.io/guides/writing-native-applications-tips) — o catálogo de coisas que quebram e por quê
- 📄 [Quarkus — Container First](https://quarkus.io/container-first) — a justificativa de design, na voz do projeto
- 📄 [Quarkus — Re-augment a Quarkus Application](https://quarkus.io/guides/reaugmentation) — mostra a fronteira build/run de forma muito concreta
- 📄 [Quarkus — How dev mode differs from a production application](https://quarkus.io/guides/dev-mode-differences)

> 💭 **Anote em [[04-Anotacoes]]:** faça uma lista de três coisas que o Spring consegue fazer *porque* decide em runtime, e que o Quarkus abre mão. Saber o que você perdeu é parte de entender o trade-off.

---

## 📚 Parte 2 — CDI e ArC ⭐ (Dias 4–6)

O Quarkus não tem um container de DI proprietário. Ele implementa **Jakarta CDI** — um padrão — através do ArC, sua implementação otimizada para build time.

- [ ] O que é CDI e o que é o ArC
- [ ] Por que padrão Jakarta em vez de container próprio (ver ADR-001: "Standards")
- [ ] `@ApplicationScoped`, `@Singleton`, `@RequestScoped`, `@Dependent` — o que cada escopo significa
- [ ] Diferença entre `@ApplicationScoped` e `@Singleton` (proxy vs instância direta)
- [ ] `@Inject` — e por que injeção por construtor é preferível
- [ ] Injeção por construtor em Kotlin dispensa `@Inject` quando há um só construtor
- [ ] `@Produces` — criando beans a partir de método
- [ ] Qualificadores (`@Named`, qualificadores customizados) — quando há mais de uma implementação
- [ ] `@Alternative` e `@Priority`
- [ ] Interceptors — o equivalente conceitual ao AOP do Spring
- [ ] Eventos CDI: `Event<T>` e `@Observes`
- [ ] `@Observes StartupEvent` / `ShutdownEvent` — ciclo de vida da aplicação
- [ ] ⭐ **Bean removal** — beans não referenciados são descartados no build
- [ ] `@Unremovable` e `quarkus.arc.remove-unused-beans`
- [ ] Por que classes Kotlin `final` quebram CDI, e o que o `allopen` resolve

### O bug sutil do bean removal

O ArC descarta beans que ninguém referencia, para economizar memória e tamanho de binário. Ele é razoavelmente esperto: preserva beans com `@Scheduled`, observers de `StartupEvent`, e endpoints REST.

O bug aparece quando o bean só é alcançado de forma **que o compilador não consegue enxergar** — lookup programático via `CDI.current().select(...)`, ou um `@Produces` cujo tipo ninguém injeta explicitamente. O bean some no build e você recebe um erro em runtime que não faz sentido nenhum.

Antídoto: `@Unremovable`. Durante o aprendizado, `quarkus.arc.remove-unused-beans=none` no `application.properties` também vale — é um trade-off consciente de memória por previsibilidade.

### Ponte De-Para: Spring IoC → CDI

| Spring | Quarkus (CDI/ArC) | Nota |
|---|---|---|
| `@Component` / `@Service` / `@Repository` | `@ApplicationScoped` | Escopo é explícito, não implícito |
| `@Autowired` | `@Inject` | Prefira construtor em ambos |
| `@Bean` em `@Configuration` | `@Produces` | |
| `@Qualifier("nome")` | `@Named("nome")` ou qualificador próprio | |
| `@Primary` | `@Alternative` + `@Priority` | Semântica diferente, leia com atenção |
| `@Scope("prototype")` | `@Dependent` | |
| `@Scope("request")` | `@RequestScoped` | |
| `@PostConstruct` | `@PostConstruct` (Jakarta) | Igual |
| `ApplicationListener<ContextRefreshedEvent>` | `@Observes StartupEvent` | |
| `@Async` | `@Blocking` / Coroutines | Modelo diferente (Fase 7) |
| Bean sempre existe se anotado | **Pode ser removido no build** | ⚠️ A diferença que mais surpreende |
| AOP com proxies em runtime | Interceptors gerados no build | |

**Referências:**
- 📄 [Quarkus — Introduction to Contexts and Dependency Injection (CDI)](https://quarkus.io/guides/cdi) — **comece aqui**
- 📄 [Quarkus — Contexts and Dependency Injection (reference)](https://quarkus.io/guides/cdi-reference) — o aprofundamento, incluindo bean removal
- 📄 [Jakarta CDI 4.1 Specification](https://jakarta.ee/specifications/cdi/4.1/) — o padrão, para quando a doc do Quarkus for ambígua
- 📄 [Quarkus — Application Initialization and Termination](https://quarkus.io/guides/lifecycle) — `StartupEvent` e afins
- 📄 [Quarkus — Quarkus Extension for Spring DI API](https://quarkus.io/guides/spring-di) — a camada de compatibilidade; leia para **entender o mapeamento**, não para usar
- 📄 [Quarkus — Using Kotlin](https://quarkus.io/guides/kotlin) — as pegadinhas específicas de Kotlin com CDI

---

## 📚 Parte 3 — Jakarta REST (JAX-RS) e serialização ⭐ (Dias 7–9)

- [ ] O que é JAX-RS / Jakarta REST e por que é um padrão, não uma invenção do Quarkus
- [ ] O que é **MicroProfile** e o que ele acrescenta ao Jakarta EE
- [ ] `@Path`, `@GET`, `@POST`, `@PUT`, `@DELETE`, `@PATCH`
- [ ] `@PathParam`, `@QueryParam`, `@HeaderParam`, `@FormParam`
- [ ] Corpo da requisição: parâmetro sem anotação
- [ ] `@Produces` / `@Consumes` e negociação de conteúdo
- [ ] `Response` vs retornar o tipo direto — quando cada um
- [ ] Códigos de status: qual usar para criação, ausência, conflito de invariante
- [ ] `ExceptionMapper<T>` — o `@ControllerAdvice` do mundo Jakarta
- [ ] Quarkus REST (antigo RESTEasy Reactive) vs RESTEasy Classic — qual usar hoje e por quê
- [ ] `@Blocking` e `@NonBlocking` — só reconhecer agora, aprofunda na Fase 7
- [ ] Serialização com Jackson e o `KotlinModule`
- [ ] Por que `data class` + Jackson pode falhar em nativo (e como resolver)

### Ponte De-Para: Spring MVC → Jakarta REST

| Spring MVC | Jakarta REST | Nota |
|---|---|---|
| `@RestController` | `@Path("/recurso")` | |
| `@RequestMapping(method = GET)` | `@GET` + `@Path` | Verbo e rota separados |
| `@GetMapping("/{id}")` | `@GET @Path("/{id}")` | |
| `@PathVariable("id")` | `@PathParam("id")` | |
| `@RequestParam` | `@QueryParam` | |
| `@RequestHeader` | `@HeaderParam` | |
| `@RequestBody Dto dto` | `dto: Dto` (sem anotação) | Implícito |
| `ResponseEntity<T>` | `Response` | |
| `@ResponseStatus(CREATED)` | `Response.status(201).build()` | |
| `@ControllerAdvice` + `@ExceptionHandler` | `ExceptionMapper<T>` | |
| `produces = "application/json"` | `@Produces(MediaType.APPLICATION_JSON)` | |
| `HandlerInterceptor` | `ContainerRequestFilter` | |

**Referências:**
- 📄 [Quarkus — Writing REST Services with Quarkus REST](https://quarkus.io/guides/rest) — **o guia principal**
- 📄 [Quarkus — Writing JSON REST Services](https://quarkus.io/guides/rest-json)
- 📄 [Quarkus — Creating Your First Application](https://quarkus.io/guides/getting-started) — faça o tutorial inteiro, mesmo parecendo básico
- 📄 [Quarkus — Migrating to Quarkus REST](https://quarkus.io/guides/rest-migration) — explica bem a diferença entre as duas gerações
- 📄 [Jakarta RESTful Web Services Specification](https://jakarta.ee/specifications/restful-ws/) — o padrão
- 📄 [Eclipse MicroProfile](https://microprofile.io/) — o guarda-chuva de specs que o Quarkus implementa
- 📄 [Quarkus — Quarkus Extension for Spring Web API](https://quarkus.io/guides/spring-web) — de novo: leia pelo **mapeamento**, não para usar
- 📄 [Quarkus — HTTP Reference](https://quarkus.io/guides/http-reference)

---

## 📚 Parte 4 — Configuração e perfis (Dias 10–11)

- [ ] SmallRye Config e a spec MicroProfile Config
- [ ] `application.properties` — a fonte padrão
- [ ] `@ConfigProperty` — o `@Value` do Quarkus
- [ ] `@ConfigMapping` — agrupar propriedades em objeto tipado (o `@ConfigurationProperties`)
- [ ] Ordem de precedência das fontes de configuração
- [ ] Perfis: `%dev.`, `%test.`, `%prod.` **no mesmo arquivo**
- [ ] Variáveis de ambiente e a convenção de nomes (`QUARKUS_DATASOURCE_USERNAME`)
- [ ] ⭐ Propriedades **fixadas em build time** vs propriedades de runtime — e o erro que aparece quando você tenta mudar uma de build time em runtime
- [ ] Segredos em configuração
- [ ] YAML: por que precisa da extension `quarkus-config-yaml`

### A pegadinha que só existe no Quarkus

Algumas propriedades são **gravadas durante o augmentation** e não podem ser alteradas em runtime. Por exemplo, o driver JDBC. Se você tentar trocar de banco via variável de ambiente num JAR já construído, ou nada acontece ou você recebe um erro obscuro.

Isso é consequência direta da Parte 1. Guarde a conexão mental: **build time engessa em troca de velocidade**.

### Ponte De-Para

| Spring Boot | Quarkus |
|---|---|
| `application.yml` | `application.properties` (YAML via extension) |
| `@Value("${chave}")` | `@ConfigProperty(name = "chave")` |
| `@ConfigurationProperties` | `@ConfigMapping` |
| `application-dev.yml` | `%dev.` no mesmo arquivo |
| `spring.profiles.active` | `quarkus.profile` |
| Tudo alterável em runtime | ⚠️ Algumas fixadas em build time |

**Referências:**
- 📄 [Quarkus — Configuring Your Application](https://quarkus.io/guides/config)
- 📄 [Quarkus — Configuration Reference Guide](https://quarkus.io/guides/config-reference) — precedência e perfis
- 📄 [Quarkus — Mapping configuration to objects](https://quarkus.io/guides/config-mappings)
- 📄 [Quarkus — YAML configuration](https://quarkus.io/guides/config-yaml)
- 📄 [Quarkus — Secrets in Configuration](https://quarkus.io/guides/config-secrets)
- 📄 [SmallRye Config](https://smallrye.io/smallrye-config/) — a implementação por baixo

---

## 📚 Parte 5 — Validação e tratamento de erro (Dia 12)

- [ ] Jakarta Bean Validation: `@NotNull`, `@NotBlank`, `@Size`, `@Min`, `@Email`, `@Pattern`
- [ ] `@Valid` no parâmetro do endpoint
- [ ] Validação em `data class` Kotlin — onde a anotação precisa ficar (`@field:NotBlank`)
- [ ] Constraints customizadas
- [ ] `ExceptionMapper` para `ConstraintViolationException`
- [ ] **Onde validar o quê**: formato no DTO, invariante no domínio
- [ ] Um formato de erro consistente para toda a API (considere RFC 7807 / Problem Details)

> ⚠️ **A pegadinha Kotlin:** em `data class`, uma anotação sem prefixo pode ir parar no parâmetro do construtor em vez de no campo, e o validador não a enxerga. Use `@field:NotBlank`. Essa é uma das coisas que faz a pessoa perder duas horas.

**Referências:**
- 📄 [Quarkus — Validation with Hibernate Validator](https://quarkus.io/guides/validation)
- 📄 [Jakarta Bean Validation Specification](https://jakarta.ee/specifications/bean-validation/)
- 📄 [Kotlin — Annotations (use-site targets)](https://kotlinlang.org/docs/annotations.html) — a seção de *use-site targets* explica o `@field:`
- 📄 [RFC 7807 — Problem Details for HTTP APIs](https://datatracker.ietf.org/doc/html/rfc7807)

---

## 📚 Parte 6 — Dev Mode, Dev UI e OpenAPI (Dia 13)

- [ ] `./gradlew quarkusDev` — live reload de verdade (recompila na requisição)
- [ ] Continuous Testing — testes rodando enquanto você digita
- [ ] Dev UI em `/q/dev` — explore extension por extension
- [ ] Dev Services: o que já está funcionando sem você configurar
- [ ] OpenAPI automático e Swagger UI
- [ ] Customizar o descritor OpenAPI com anotações MicroProfile

**Referências:**
- 📄 [Quarkus — Your second Quarkus application (Dev Services)](https://quarkus.io/guides/getting-started-dev-services)
- 📄 [Quarkus — Dev UI](https://quarkus.io/guides/dev-ui)
- 📄 [Quarkus — Continuous Testing](https://quarkus.io/guides/continuous-testing)
- 📄 [Quarkus — Using OpenAPI and Swagger UI](https://quarkus.io/guides/openapi-swaggerui)
- 📄 [Quarkus — Developer Joy](https://quarkus.io/developer-joy) — a visão do projeto sobre o loop de desenvolvimento

---

## 🛠️ Prática — Incremento do projeto (Dias 14–15)

Adicione o **adapter de entrada REST** sobre o núcleo da Fase 2. Os adapters in-memory continuam sendo a persistência.

- [ ] Adicionar as extensions: `quarkus-rest-jackson`, `quarkus-hibernate-validator`, `quarkus-smallrye-openapi`
- [ ] Anotar os serviços de aplicação com `@ApplicationScoped`
- [ ] Anotar os adapters in-memory com `@ApplicationScoped`
- [ ] Criar `DisciplinaResource`, `AlunoResource`, `ProfessorResource`, `MatriculaResource`, `NotaResource`
- [ ] Criar os DTOs de request e response como `data class` (ADR-002 §5)
- [ ] Criar mappers DTO ↔ domínio como extension functions
- [ ] Aplicar Bean Validation nos DTOs de request (atenção ao `@field:`)
- [ ] Criar `ExceptionMapper` para as exceções de domínio, com códigos HTTP corretos
- [ ] Mapear cada caso de `sealed interface ResultadoMatricula` para um status HTTP
- [ ] Configurar perfis `%dev` e `%test`
- [ ] Expor a OpenAPI e conferir no Swagger UI
- [ ] Alterar um endpoint com o `quarkusDev` no ar e confirmar o live reload

### A pergunta de arquitetura desta prática

Onde você converte `ResultadoMatricula.SemVagas` em `409 Conflict`?

- No caso de uso? Então o domínio conhece HTTP. **Errado.**
- No `Resource`? Correto — traduzir domínio para protocolo é exatamente o trabalho de um adapter.

Se você acertar isso sem hesitar, entendeu hexagonal.

---

## ✅ Critério de Pronto

1. CRUD completo respondendo, sobre adapters in-memory
2. Validação retorna **400** com corpo útil; violação de invariante retorna **409**
3. Você alterou código com o servidor no ar e viu o reload
4. Swagger UI mostra a API inteira, documentada
5. **`domain/` e `application/` não mudaram nesta fase** — confira no `git diff`
6. Você consegue explicar, sem consultar, o que o augmentation fez com suas anotações

---

## 🔗 Referências consolidadas

| Tema | Link | Tipo |
|---|---|---|
| Escrevendo extensions (modelo de build) | https://quarkus.io/guides/writing-extensions | Oficial ⭐ |
| Class Loading Reference | https://quarkus.io/guides/class-loading-reference | Oficial |
| Native Reference (reflection) | https://quarkus.io/guides/native-reference | Oficial |
| Tips for native applications | https://quarkus.io/guides/writing-native-applications-tips | Oficial |
| Introduction to CDI | https://quarkus.io/guides/cdi | Oficial ⭐ |
| CDI Reference (bean removal) | https://quarkus.io/guides/cdi-reference | Oficial ⭐ |
| Jakarta CDI 4.1 Spec | https://jakarta.ee/specifications/cdi/4.1/ | Padrão |
| Quarkus REST | https://quarkus.io/guides/rest | Oficial ⭐ |
| Writing JSON REST Services | https://quarkus.io/guides/rest-json | Oficial |
| Getting Started | https://quarkus.io/guides/getting-started | Oficial |
| Jakarta REST Spec | https://jakarta.ee/specifications/restful-ws/ | Padrão |
| MicroProfile | https://microprofile.io/ | Padrão |
| Configuring Your Application | https://quarkus.io/guides/config | Oficial |
| Config Reference | https://quarkus.io/guides/config-reference | Oficial |
| Config Mappings | https://quarkus.io/guides/config-mappings | Oficial |
| Validation | https://quarkus.io/guides/validation | Oficial |
| OpenAPI e Swagger UI | https://quarkus.io/guides/openapi-swaggerui | Oficial |
| Dev UI | https://quarkus.io/guides/dev-ui | Oficial |
| Continuous Testing | https://quarkus.io/guides/continuous-testing | Oficial |
| Spring DI → CDI (mapeamento) | https://quarkus.io/guides/spring-di | Oficial |
| Spring Web → JAX-RS (mapeamento) | https://quarkus.io/guides/spring-web | Oficial |
| Migrar do Spring para Quarkus | https://quarkus.io/spring/migrate/ | Oficial |

---

## Retrospectiva

*(preencher ao concluir)*

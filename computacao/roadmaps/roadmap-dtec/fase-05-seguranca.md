---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
fase: 5
titulo: "Segurança: OAuth2, OIDC, Keycloak e RBAC"
inicio: 2026-11-09
fim: 2026-11-27
duracao_semanas: 3
status: nao-iniciado
pre_requisito: "[[fase-04-persistencia]]"
---

# Fase 5 — Segurança: OAuth2, OIDC, Keycloak e RBAC

> **Por que esta fase é a mais valiosa para a sua efetivação.** O enunciado do teste pede "cadastro e definição de roles". A maioria dos candidatos resolve com uma tabela `usuario_role` e um filtro caseiro. Você vai resolver com **OIDC + Keycloak** — que é exatamente o que o ADR-001 §2 lista no ecossistema da DTec.
>
> E o custo de setup é quase zero: o **Dev Services sobe um Keycloak em container automaticamente**.

---

## 🎯 Critério de conclusão

- [ ] Explicar a diferença entre autenticação e autorização com exemplos do projeto
- [ ] Explicar os quatro papéis do OAuth2 e o fluxo Authorization Code passo a passo
- [ ] Explicar o que o OIDC acrescenta ao OAuth2
- [ ] Abrir um JWT e explicar cada parte, incluindo por que a assinatura importa
- [ ] Explicar por que o resource server **não** consulta o Keycloak a cada requisição
- [ ] ⭐ Explicar a diferença entre autorização por **role** e por **ownership**, e onde cada uma vive
- [ ] **Entregar o incremento do projeto** (ver Prática)

---

## ⏱️ Plano de 15 dias (~2h/dia)

| Dias | Datas | Foco |
|---|---|---|
| 1–2 | 09/11–10/11 | Fundamentos: authn vs authz, ameaças |
| 3–5 | 11/11–13/11 | ⭐⭐ OAuth2 e OIDC |
| 6–7 | 16/11–17/11 | ⭐ JWT |
| 8–9 | 18/11–19/11* | Keycloak: realms, clients, roles |
| 10–11 | 23/11–24/11 | ⭐ Quarkus Security e OIDC |
| 12 | 25/11 | ⭐ Role vs Ownership |
| 13–15 | 26/11–27/11 + folga | Prática |

\* 20/11 é feriado.

---

## 📚 Parte 1 — Fundamentos (Dias 1–2)

- [ ] **Autenticação** (quem é você) vs **Autorização** (o que você pode)
- [ ] Session-based vs token-based — e por que token vence em arquitetura distribuída
- [ ] Por que sessão em memória quebra quando você tem 5 pods (conexão com a Fase 8)
- [ ] Stateless: por que o servidor não guarda estado de sessão
- [ ] RBAC (Role-Based) vs ABAC (Attribute-Based)
- [ ] Princípio do menor privilégio
- [ ] O que é um **resource server**, um **client** e um **authorization server**
- [ ] OWASP Top 10 — leitura de reconhecimento, com foco em Broken Access Control

**Referências:**
- 📄 [Quarkus — Quarkus Security overview](https://quarkus.io/guides/security-overview) — comece aqui
- 📄 [Quarkus — Quarkus Security architecture](https://quarkus.io/guides/security-architecture)
- 📄 [Quarkus — Authentication mechanisms in Quarkus](https://quarkus.io/guides/security-authentication-mechanisms)
- 📄 [OWASP Top 10](https://owasp.org/www-project-top-ten/) — leitura de reconhecimento

---

## 📚 Parte 2 — OAuth2 e OpenID Connect ⭐⭐ (Dias 3–5)

- [ ] Os quatro papéis: resource owner, client, authorization server, resource server
- [ ] **Authorization Code Flow** — o fluxo padrão para aplicações web, passo a passo
- [ ] **PKCE** e por que ele virou obrigatório
- [ ] Client Credentials Flow — comunicação máquina a máquina
- [ ] Por que **Implicit** e **Password Grant** foram depreciados
- [ ] Access token vs Refresh token vs ID token
- [ ] Escopos (`scope`) vs papéis (`roles`) — **não são a mesma coisa**
- [ ] O que o **OIDC** adiciona ao OAuth2 (camada de identidade: quem é o usuário)
- [ ] O documento de descoberta: `/.well-known/openid-configuration`
- [ ] **JWKS** — como o resource server obtém a chave pública para validar assinatura
- [ ] **Bearer token authentication** — o modo que a sua API vai usar

### O ponto que costuma confundir

Sua API **não** é um "login". Ela é um **resource server**. Ela não faz login, não redireciona, não guarda senha. Ela recebe um token pronto no header `Authorization: Bearer ...`, valida a assinatura com a chave pública do Keycloak (baixada uma vez e cacheada), lê as claims e decide.

Isso significa que **ela não consulta o Keycloak a cada requisição**. Se estivesse consultando, o Keycloak seria um ponto único de falha e um gargalo. Entender isso é o que separa quem copiou tutorial de quem entendeu o protocolo.

**Referências:**
- 📄 [Quarkus — OpenID Connect (OIDC) Bearer token authentication](https://quarkus.io/guides/security-oidc-bearer-token-authentication) — ⭐ **o conceito que você vai usar**
- 📄 [Quarkus — OpenID Connect authorization code flow mechanism](https://quarkus.io/guides/security-oidc-code-flow-authentication) — o outro modo; leia para contrastar
- 📄 [OAuth 2.0 — site oficial](https://oauth.net/2/) — mapa das RFCs
- 📄 [RFC 6749 — The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749) — a especificação
- 📄 [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) — a especificação do OIDC
- 📄 [OAuth 2.0 Simplified — Aaron Parecki](https://www.oauth.com/) — a explicação mais legível que existe, por um dos autores das specs
- 📄 [Quarkus — Identity providers](https://quarkus.io/guides/security-identity-providers)

---

## 📚 Parte 3 — JWT ⭐ (Dias 6–7)

- [ ] Estrutura: header `.` payload `.` signature
- [ ] Por que é Base64URL e **não** criptografia — o payload é legível por qualquer um
- [ ] Claims registradas: `iss`, `sub`, `aud`, `exp`, `iat`, `nbf`, `jti`
- [ ] Claims customizadas e onde o Keycloak coloca as roles (`realm_access.roles`, `resource_access`)
- [ ] Assinatura: HMAC (simétrica) vs RSA/EC (assimétrica) — e por que assimétrica em microsserviços
- [ ] Validação: assinatura, `exp`, `iss`, `aud` — **todas obrigatórias**
- [ ] Por que "só decodificar sem validar" é a vulnerabilidade clássica
- [ ] Expiração curta + refresh token: o trade-off entre segurança e UX
- [ ] Por que revogar JWT é difícil, e as estratégias existentes
- [ ] Token propagation entre serviços

**Referências:**
- 📄 [Quarkus — Using JWT RBAC](https://quarkus.io/guides/security-jwt) — SmallRye JWT
- 📄 [Quarkus — Build, sign, and encrypt JSON Web Tokens](https://quarkus.io/guides/security-jwt-build) — ótimo para gerar tokens de teste
- 📄 [RFC 7519 — JSON Web Token](https://datatracker.ietf.org/doc/html/rfc7519) — a especificação
- 📄 [jwt.io](https://jwt.io/) — cole um token e veja as partes; use durante toda a fase
- 📄 [Quarkus — OpenID Connect (OIDC) and OAuth2 client and filters](https://quarkus.io/guides/security-openid-connect-client-reference) — propagação de token

---

## 📚 Parte 4 — Keycloak (Dias 8–9)

- [ ] O que é um **realm** e por que ele isola tenants
- [ ] O que é um **client** e a diferença entre público e confidencial
- [ ] **Realm roles** vs **client roles** — e qual usar no seu caso
- [ ] Composite roles
- [ ] Users, groups e como roles são atribuídas
- [ ] Mappers de protocolo — como colocar uma claim customizada no token
- [ ] ⭐ Como colocar o `alunoId`/`professorId` do **seu** domínio dentro do token (isso é essencial para ownership)
- [ ] Exportar e versionar o realm em JSON (`realm-export.json`) — reprodutibilidade
- [ ] Admin Console: navegar e entender o que cada tela faz
- [ ] Keycloak Admin Client — automatizar criação de usuário no cadastro

### Decisão de design que você precisa tomar

Quando o ADMIN cadastra um aluno, duas coisas precisam acontecer: criar o `Aluno` no seu banco **e** criar o usuário no Keycloak com a role `ALUNO`.

- Faz as duas na mesma operação? E se a segunda falhar?
- O `Aluno` do seu domínio guarda o `subject` (`sub`) do Keycloak, ou o Keycloak guarda o `alunoId` como atributo?
- Quem é a fonte da verdade sobre "quem é aluno"?

Não existe resposta única. Existe trade-off que você precisa **escolher e documentar** — e isso vira uma seção do seu ADR na Fase 9.

**Referências:**
- 📄 [Keycloak — Server Administration Guide](https://www.keycloak.org/docs/latest/server_admin/index.html) — oficial; foque em Realms, Clients, Roles, Users
- 📄 [Keycloak — Documentation (índice)](https://www.keycloak.org/documentation)
- 📄 [Keycloak — Getting Started](https://www.keycloak.org/getting-started/getting-started-docker)
- 📄 [Quarkus — Dev Services and Dev UI for OpenID Connect (OIDC)](https://quarkus.io/guides/security-openid-connect-dev-services) — ⭐ como o Keycloak sobe sozinho
- 📄 [Quarkus — Using Keycloak Admin Client](https://quarkus.io/guides/security-keycloak-admin-client) — para o cadastro programático
- 📄 [Quarkus — Using OIDC and Keycloak to centralize authorization](https://quarkus.io/guides/security-keycloak-authorization) — Keycloak Authorization Services; avalie se vale a complexidade

---

## 📚 Parte 5 — Quarkus Security na prática ⭐ (Dias 10–11)

- [ ] A extension `quarkus-oidc` e a configuração mínima
- [ ] `@Authenticated` — exige token válido, sem exigir role
- [ ] `@RolesAllowed("ADMIN")` — Jakarta, padrão, não proprietário
- [ ] `@PermitAll` e `@DenyAll`
- [ ] `SecurityIdentity` — como ler o usuário autenticado
- [ ] `JsonWebToken` injetável — ler claims customizadas
- [ ] Autorização por configuração: `quarkus.http.auth.permission.*`
- [ ] Anotação vs configuração: qual usar quando
- [ ] **Proactive authentication** — o comportamento padrão e quando desligar
- [ ] CORS (a Fase 8 vai precisar)
- [ ] Testes de segurança: `@TestSecurity`, tokens de teste

### Ponte De-Para: Spring Security → Quarkus Security

| Spring Security | Quarkus |
|---|---|
| `@PreAuthorize("hasRole('ADMIN')")` | `@RolesAllowed("ADMIN")` |
| `@Secured("ROLE_ADMIN")` | `@RolesAllowed("ADMIN")` |
| `SecurityContextHolder.getContext()` | `@Inject SecurityIdentity` |
| `Authentication.getPrincipal()` | `securityIdentity.principal` |
| `@AuthenticationPrincipal Jwt jwt` | `@Inject JsonWebToken` |
| `WebSecurityConfigurerAdapter` / `SecurityFilterChain` | `quarkus.http.auth.permission.*` |
| `spring.security.oauth2.resourceserver.jwt.issuer-uri` | `quarkus.oidc.auth-server-url` |
| `@WithMockUser` | `@TestSecurity` |
| Cadeia de filtros programática | Configuração declarativa |

**Referências:**
- 📄 [Quarkus — Authorization of web endpoints](https://quarkus.io/guides/security-authorize-web-endpoints-reference) — ⭐ a referência de autorização
- 📄 [Quarkus — Protect a service application by using OIDC Bearer token authentication](https://quarkus.io/guides/security-oidc-bearer-token-authentication-tutorial) — ⭐ **faça este tutorial inteiro**
- 📄 [Quarkus — Proactive authentication](https://quarkus.io/guides/security-proactive-authentication)
- 📄 [Quarkus — Security Testing](https://quarkus.io/guides/security-testing) — `@TestSecurity`
- 📄 [Quarkus — Cross-Origin Resource Sharing (CORS)](https://quarkus.io/guides/security-cors)
- 📄 [Quarkus — OIDC configuration properties](https://quarkus.io/guides/security-oidc-configuration-properties-reference) — referência de consulta
- 📄 [Quarkus — Spring Security compatibility layer](https://quarkus.io/guides/spring-security) — leia pelo mapeamento

---

## 📚 Parte 6 — Role vs Ownership ⭐ (Dia 12)

**O conceito mais sofisticado deste roadmap. É o que vai diferenciar seu projeto.**

Compare as duas frases:

- *"Professor pode lançar nota."* → é **role**. Resolve com `@RolesAllowed("PROFESSOR")`.
- *"Professor pode lançar nota **na disciplina dele**."* → é **ownership**. É regra de negócio.

A segunda **não pode** virar anotação, porque:
1. A anotação não tem acesso ao estado do domínio (qual disciplina, quem é o responsável)
2. Se virasse anotação, o domínio ficaria acoplado ao mecanismo de segurança HTTP
3. Você não conseguiria testar essa regra sem subir a stack de segurança inteira

### Onde cada checagem vive

```kotlin
// ADAPTER — checagem de role e extração de identidade
@Path("/notas")
class NotaResource(
    private val lancarNota: LancarNotaUseCase,
    private val identity: SecurityIdentity,
    private val jwt: JsonWebToken
) {
    @POST
    @RolesAllowed("PROFESSOR")        // ← role: barreira de protocolo
    fun lancar(@Valid req: LancarNotaRequest): Response {
        val professorId = ProfessorId(jwt.getClaim<String>("professor_id").toLong())
        val resultado = lancarNota.executar(req.toCommand(professorId))
        return resultado.toResponse()  // ← traduz domínio para HTTP
    }
}

// CASO DE USO — checagem de ownership, sem saber que HTTP existe
class LancarNotaService(
    private val disciplinas: DisciplinaRepositoryPort,
    private val matriculas: MatriculaRepositoryPort
) : LancarNotaUseCase {

    override fun executar(cmd: LancarNotaCommand): ResultadoLancamento {
        val matricula = matriculas.buscarPorId(cmd.matriculaId)
            ?: return ResultadoLancamento.MatriculaInexistente
        val disciplina = disciplinas.buscarPorId(matricula.disciplinaId)
            ?: return ResultadoLancamento.DisciplinaInexistente

        // INV-N1 — regra de negócio, não regra de HTTP
        if (disciplina.professorResponsavelId != cmd.professorId) {
            return ResultadoLancamento.NaoAutorizado
        }
        // ...
    }
}
```

Repare: o `SecurityIdentity` fica **só** no adapter. O caso de uso recebe um `ProfessorId` — um tipo do seu domínio. Ele nunca importa nada de `io.quarkus.security`.

- [ ] Implementar o padrão acima para `INV-N1`
- [ ] Implementar para "aluno só se matricula a si mesmo"
- [ ] Implementar para "aluno só vê as próprias notas"
- [ ] Escrever um teste unitário de ownership que **não** sobe Quarkus
- [ ] Decidir qual status HTTP o `NaoAutorizado` do domínio vira: **403** ou **404**? (Dica: 404 não vaza a existência do recurso)

---

## 🛠️ Prática — Incremento do projeto (Dias 13–15)

- [ ] Adicionar `quarkus-oidc` e configurar
- [ ] Confirmar que o Dev Services sobe o Keycloak sozinho
- [ ] Criar o realm `sistema-academico` com as roles `ADMIN`, `PROFESSOR`, `ALUNO`
- [ ] Criar um mapper de protocolo que injeta `aluno_id` / `professor_id` no token
- [ ] Exportar o realm para `src/main/resources/realm-export.json` e versionar no Git
- [ ] Aplicar `@RolesAllowed` em **todos** os endpoints, conforme a matriz da [[Especificacao-Sistema-Academico]]
- [ ] Implementar as três regras de ownership nos casos de uso
- [ ] Implementar o cadastro de usuário integrado ao Keycloak (Admin Client) e documentar o trade-off transacional
- [ ] Escrever testes com `@TestSecurity` para cada linha da matriz de permissões
- [ ] Escrever teste que confirma **403** para PROFESSOR lançando nota em disciplina de outro
- [ ] Configurar CORS para `%dev`
- [ ] Garantir que nenhum endpoint ficou sem anotação de segurança (inclusive os que você esqueceu)

---

## ✅ Critério de Pronto

1. ALUNO recebe 403 ao tentar criar disciplina
2. PROFESSOR recebe 403 ao tentar lançar nota em disciplina de **outro** professor
3. ALUNO não consegue ver notas de outro aluno
4. Todos os casos acima cobertos por teste automatizado
5. O realm está versionado — outra pessoa clona o repo e sobe tudo igual
6. Nenhuma classe em `domain/` ou `application/` importa `io.quarkus.security` ou `jakarta.annotation.security`
7. Você consegue explicar por que a API não consulta o Keycloak a cada requisição

---

## 🔗 Referências consolidadas

| Tema | Link | Tipo |
|---|---|---|
| Quarkus Security overview | https://quarkus.io/guides/security-overview | Oficial |
| Security architecture | https://quarkus.io/guides/security-architecture | Oficial |
| OIDC Bearer token (conceito) | https://quarkus.io/guides/security-oidc-bearer-token-authentication | Oficial ⭐ |
| OIDC Bearer token (tutorial) | https://quarkus.io/guides/security-oidc-bearer-token-authentication-tutorial | Oficial ⭐ |
| Authorization of web endpoints | https://quarkus.io/guides/security-authorize-web-endpoints-reference | Oficial ⭐ |
| Dev Services para OIDC | https://quarkus.io/guides/security-openid-connect-dev-services | Oficial |
| Keycloak Admin Client | https://quarkus.io/guides/security-keycloak-admin-client | Oficial |
| Keycloak Authorization Services | https://quarkus.io/guides/security-keycloak-authorization | Oficial |
| Security Testing | https://quarkus.io/guides/security-testing | Oficial |
| JWT RBAC | https://quarkus.io/guides/security-jwt | Oficial |
| Keycloak Server Admin Guide | https://www.keycloak.org/docs/latest/server_admin/index.html | Oficial ⭐ |
| Keycloak Getting Started | https://www.keycloak.org/getting-started/getting-started-docker | Oficial |
| OAuth 2.0 (mapa das RFCs) | https://oauth.net/2/ | Padrão |
| RFC 6749 (OAuth2) | https://datatracker.ietf.org/doc/html/rfc6749 | Padrão |
| RFC 7519 (JWT) | https://datatracker.ietf.org/doc/html/rfc7519 | Padrão |
| OpenID Connect Core | https://openid.net/specs/openid-connect-core-1_0.html | Padrão |
| OAuth 2.0 Simplified | https://www.oauth.com/ | Complementar ⭐ |
| jwt.io | https://jwt.io/ | Ferramenta |
| OWASP Top 10 | https://owasp.org/www-project-top-ten/ | Referência |

---

## Retrospectiva

*(preencher ao concluir)*

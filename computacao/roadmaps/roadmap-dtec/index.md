---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
---

> ⚠️ **Referência intocável.** A IA lê este documento para orientar, mas **nunca o edita**.
> O progresso vivo fica em [[estado-dtec]].

# 🎯 Roadmap DTec — Kotlin, Quarkus e Arquitetura para Efetivação Júnior

> Trilha de estudo dirigida pelo **emprego atual** (DTec), guiada pelas decisões arquiteturais
> registradas em ADR-001 e ADR-002. Objetivo: alcançar nível júnior sólido na stack
> Kotlin + Quarkus + Arquitetura Hexagonal, com um projeto-prova (`sistema-academico`)
> evoluindo fase a fase até a defesa final (Fase 9).

---

## ⚠️ Relação com o outro roadmap de execução

Este cofre já mantém [[computacao/roadmaps/roadmap-curto-prazo/index]], cuja regra de ouro é
"o projeto é o currículo" rumo à **freelance paga (NestJS + React)** e à vaga remota. Este roadmap
DTec é uma trilha **paralela**, motivada pelo emprego atual, não um substituto daquele.

As duas trilhas competem pelo mesmo tempo de estudo na semana. Elas têm progresso e estado
rastreados **separadamente** ([[estado]] para a trilha freelance, [[estado-dtec]] para esta),
mas a divisão real de dias/horários entre as duas ainda não foi decidida — ver aviso em
[[estado-dtec]].

---

## 🗺️ Fases

| Fase | Tema | Duração | Status |
|------|------|---------|--------|
| 0 | [[fase-00-fundamentos-e-ferramental\|Fundamentos da JVM, Gradle e Ferramental]] | 1 sem. | ⬜ Não iniciado |
| 1 | [[fase-01-kotlin-essencial\|Kotlin Essencial]] | 2 sem. | ⬜ Não iniciado |
| 2 | [[fase-02-arquitetura-hexagonal-ddd\|Arquitetura Hexagonal e DDD Tático]] | 2 sem. | ⬜ Não iniciado |
| 3 | [[fase-03-quarkus-core\|Quarkus Core: Build Time, CDI, REST e Config]] | 3 sem. | ⬜ Não iniciado |
| 4 | [[fase-04-persistencia\|Persistência: JDBC, JPA, Hibernate, Panache e Flyway]] | 3 sem. | ⬜ Não iniciado |
| 5 | [[fase-05-seguranca\|Segurança: OAuth2, OIDC, Keycloak e RBAC]] | 3 sem. | ⬜ Não iniciado |
| 6 | [[fase-06-testes-e-qualidade\|Testes e Qualidade]] | 2 sem. | ⬜ Não iniciado |
| 7 | [[fase-07-async-mensageria-observabilidade\|Assincronismo, Mensageria e Observabilidade]] | 4 sem. | ⬜ Não iniciado |
| 8 | [[fase-08-container-kubernetes-knative\|Container, Kubernetes, Knative e Nativo]] | 4 sem. | ⬜ Não iniciado |
| 9 | [[fase-09-entrega-e-defesa\|Entrega e Defesa]] | 2 sem. | ⬜ Não iniciado |

Cada fase segue pré-requisito sequencial (ver campo `pre_requisito` no frontmatter de cada arquivo)
e mantém, dentro do próprio arquivo, critério de conclusão, plano diário, referências e prática
com o projeto `sistema-academico`.

---

## Referências arquiteturais

As fases citam constantemente **ADR-001** e **ADR-002** — decisões arquiteturais da stack DTec
(hexagonal, Kotlin, Coroutines, OIDC/Keycloak, OpenTelemetry). Esses ADRs vivem fora deste cofre
(documento da empresa); as fases assumem que você tem acesso a eles.

---

*Roadmap semeado em 2026-08-21. Progresso vivo em [[estado-dtec]].*

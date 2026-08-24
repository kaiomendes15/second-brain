---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
fase: 9
titulo: Entrega e Defesa
inicio: 2027-02-08
fim: 2027-02-19
duracao_semanas: 2
status: nao-iniciado
pre_requisito: "[[fase-08-container-kubernetes-knative]]"
---

# Fase 9 — Entrega e Defesa

> **Por que esta fase existe.** Um candidato que entrega código é normal. Um que entrega código **e** documenta a decisão arquitetural no formato institucional da casa já está operando como membro do time.
>
> Você tem o template (ADR-001, ADR-002, ADR-004) e dois exemplos bem escritos. Use.

⚠️ Carnaval cai em 08–09/02/2027. Trate como folga já prevista.

---

## 🎯 Critério de conclusão

- [ ] Escrever um ADR completo no formato da DTec
- [ ] README que responde às perguntas do avaliador antes que ele as faça
- [ ] Passar por uma simulação de defesa sem gaguejar em nenhuma decisão

---

## 🛠️ Parte 1 — ADR-000: Estrutura do Sistema Acadêmico

Escreva no formato exato dos ADRs da casa. Seções obrigatórias:

- [ ] **1. Contexto e Problema** — o que o teste pedia e que problemas a solução ingênua teria
- [ ] **2. Opções Consideradas** — pelo menos três, com prós e contras honestos:
      - Opção A: CRUD em camadas com Panache Active Record
      - Opção B: Camadas com Repository, entidade JPA como modelo
      - Opção C: Hexagonal com domínio separado da entidade (o que você fez)
- [ ] **3. Decisão Selecionada** — e por quê, referenciando ADR-001 e ADR-002
- [ ] **4. Consequências e Impacto** — ganhos, custos, riscos, mitigações
- [ ] **5. Notas de Implementação e Validação** — estratégia de teste, padrão de persistência
- [ ] **6. Histórico e Revisões**

### As decisões que precisam estar documentadas

Cada uma destas você tomou durante o roadmap. Todas precisam estar no ADR com a justificativa:

- [ ] Por que duas classes `Disciplina` (domínio e entidade JPA)
- [ ] Por que Repository e não Active Record
- [ ] Por que `data class` para DTO e domínio, mas classe normal para entidade
- [ ] Qual estratégia de lock para a corrida da última vaga, e o trade-off (Fase 4)
- [ ] Onde ficou a fronteira transacional
- [ ] Por que ownership no caso de uso e role na anotação (Fase 5)
- [ ] Se `NaoAutorizado` vira 403 ou 404, e por quê
- [ ] Quem é a fonte da verdade sobre identidade: seu banco ou o Keycloak (Fase 5)
- [ ] Estratégia de migration em cluster: `migrate-at-start` ou Job (Fase 8)
- [ ] Por que JVM e não nativo — **com os seus números** (Fase 8)
- [ ] Se coroutines deram ganho real, medido (Fase 7)

> 💡 **Documente inclusive as decisões que deram errado.** Um ADR que só tem acerto parece propaganda. Um que registra "consideramos X, tentamos, e o custo não compensou" parece engenharia.

**Referências:**
- 📄 [Michael Nygard — Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) — o texto que originou o formato ADR
- 📄 [adr.github.io — Architectural Decision Records](https://adr.github.io/) — coletânea de templates e práticas
- 📄 [ThoughtWorks Technology Radar — Lightweight ADR](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
- 📄 Os próprios ADR-001, ADR-002 e ADR-004 da DTec — **o formato que importa é esse**

---

## 🛠️ Parte 2 — README

O README precisa responder, na ordem, o que um avaliador quer saber:

- [ ] **O que é** — uma frase, sem jargão
- [ ] **Como rodar** — `git clone` até API respondendo, em no máximo três comandos
- [ ] **Stack e por quê** — versões e a razão de cada escolha
- [ ] **Arquitetura** — o diagrama do hexágono e a regra de dependência
- [ ] **Por que o domínio não conhece o Hibernate** — a pergunta que o avaliador vai fazer
- [ ] **Por que ownership de disciplina não virou anotação** — idem
- [ ] **Como rodar os testes** e quanto tempo cada nível leva
- [ ] **Números medidos** — boot, RSS, JVM vs nativo
- [ ] **Decisões e trade-offs** — link para o ADR-000
- [ ] **O que ficou de fora e por quê** — honestidade vale mais que escopo inflado
- [ ] Badge de build da pipeline

### O teste do README

Peça para alguém que **não** trabalhou no projeto clonar e rodar seguindo só o README. Se travar em algum ponto, o README falhou. Não explique verbalmente — corrija o texto.

---

## 🛠️ Parte 3 — Simulação de defesa

Prepare resposta de 2 a 3 minutos para cada uma. Fale em voz alta. Grave-se se conseguir.

### Sobre arquitetura
1. Por que você separou domínio de entidade JPA? Não é boilerplate desnecessário para um projeto deste tamanho?
2. Se eu pedisse para trocar Postgres por MongoDB, o que muda no seu código?
3. Onde você colocaria uma regra nova de negócio e por quê?
4. Qual parte da sua arquitetura você acha exagerada para o escopo?

### Sobre Quarkus
5. O que o Quarkus faz no build que o Spring faz no boot?
6. Por que isso importa em Kubernetes?
7. O que é bean removal e que bug ele pode causar?
8. Por que você não usou nativo?

### Sobre Kotlin
9. Por que `data class` para DTO mas não para entidade?
10. O que uma `value class` te deu que uma `String` não daria?
11. Coroutines deram ganho real no seu caso? Prove.

### Sobre persistência
12. Como você garantiu que dois alunos não pegam a mesma última vaga?
13. Que trade-off essa escolha traz?
14. Você teve N+1 em algum lugar? Como descobriu?

### Sobre segurança
15. Sua API consulta o Keycloak a cada requisição? Por quê não?
16. Onde está a regra "professor só lança nota na disciplina dele" e por quê ali?
17. Como você testaria essa regra sem subir a stack de segurança?

### As perguntas difíceis (prepare-se de verdade)
18. **Se eu discordasse da sua escolha de hexagonal, o que você responderia?**
19. **O que você faria diferente se recomeçasse hoje?**
20. **Qual foi a parte mais difícil e como você destravou?**

> 💡 As três últimas valem mais que as dezessete anteriores. Elas medem maturidade, não conhecimento. Um candidato que defende sua escolha com convicção **e** reconhece onde ela custa caro é um candidato sênior em formação.

---

## 🛠️ Parte 4 — Fechamento do vault

- [ ] Preencher a Retrospectiva de todas as fases
- [ ] Consolidar as notas de `04-Anotacoes/` — apagar as redundantes, refinar as boas
- [ ] Atualizar [[Biblioteca-de-Links]] com o que você descobriu no caminho
- [ ] Listar o que ficou de fora e virou um roadmap futuro:
      - DDD estratégico (bounded contexts, context mapping)
      - CQRS e event sourcing
      - Saga / coreografia entre serviços
      - Service mesh
      - Performance tuning e profiling de verdade
      - Hibernate Reactive (se o time migrar para reativo)
- [ ] Escrever uma nota de meia página: **"o que eu não sabia em agosto de 2026"**

---

## ✅ Critério de Pronto

1. O ADR-000 está escrito e passaria numa revisão do comitê de arquitetura
2. Alguém de fora clonou, rodou e não travou
3. Você respondeu às 20 perguntas em voz alta, sem consultar
4. Você consegue explicar cada decisão do projeto sem dizer "porque o tutorial fazia assim"

---

## 🔗 Referências

| Tema | Link | Tipo |
|---|---|---|
| Documenting Architecture Decisions | https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions | Origem do formato |
| ADR — templates e práticas | https://adr.github.io/ | Referência |
| Lightweight ADR (ThoughtWorks) | https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records | Referência |
| Guia de estilo de documentação Quarkus | https://quarkus.io/guides/doc-reference | Oficial |

---

## Retrospectiva final

*(preencher ao concluir)*

- Data real de conclusão:
- Quanto o cronograma real diferiu do previsto:
- A fase mais difícil foi:
- A fase mais subestimada foi:
- O que eu levaria para o próximo roadmap:

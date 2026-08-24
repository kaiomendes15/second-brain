---
tipo: nota
area: computacao
tags: [roadmap, carreira, dtec, referencia]
atualizado: 2026-08-21
fase: 8
titulo: "Container, Kubernetes, Knative e Nativo"
inicio: 2027-01-11
fim: 2027-02-05
duracao_semanas: 4
status: nao-iniciado
pre_requisito: "[[fase-07-async-mensageria-observabilidade]]"
---

# Fase 8 — Container, Kubernetes, Knative e Nativo

> **Por que esta fase existe.** Todo o argumento do ADR-001 termina aqui: *"Viabilização do scale-to-zero para serviços sazonais"* e *"resposta elástica a picos de carga com menor custo de infraestrutura"*. Até agora você tem um serviço bem construído. Aqui ele vira um serviço que roda onde a DTec roda.
>
> **Decisão que o ADR já tomou por você:** imagens **JVM por padrão**, nativo apenas onde cold start é crítico. Você vai compilar nativo mesmo assim — mas como experimento medido, não como objetivo.

---

## 🎯 Critério de conclusão

- [ ] Explicar o que é uma imagem OCI, camadas e por que a ordem das camadas importa
- [ ] Explicar por que a JVM precisa de configuração especial dentro de container
- [ ] Explicar a diferença entre liveness, readiness e startup probe, com o custo de errar cada uma
- [ ] Explicar requests vs limits e o que acontece quando cada um é excedido
- [ ] Explicar o que Knative acrescenta ao Kubernetes
- [ ] Apresentar números medidos de JVM vs nativo e defender a escolha
- [ ] **Entregar o incremento do projeto** (ver Prática)

---

## ⏱️ Plano de 20 dias (~2h/dia)

| Dias | Datas | Foco |
|---|---|---|
| 1–3 | 11/01–13/01 | Containers e imagens |
| 4–8 | 14/01–20/01 | ⭐⭐ Kubernetes fundamentos |
| 9–11 | 21/01–23/01 | ⭐ Quarkus + Kubernetes |
| 12–14 | 26/01–28/01 | ⭐ GraalVM nativo |
| 15–17 | 29/01, 01/02–02/02 | ⭐ Knative e scale-to-zero |
| 18–20 | 03/02–05/02 | Prática: deploy completo |

---

## 📚 Parte 1 — Containers e imagens (Dias 1–3)

- [ ] O que é uma imagem OCI e o que é um container em execução
- [ ] Camadas: como funcionam, cache, e por que ordenar do menos ao mais volátil
- [ ] Dockerfile: `FROM`, `COPY`, `RUN`, `ENTRYPOINT`, `CMD`, `USER`
- [ ] Multi-stage build e por que ele reduz tamanho e superfície de ataque
- [ ] Imagens base: `ubi9-openjdk-21`, distroless, alpine — trade-offs
- [ ] Por que **não** rodar como root
- [ ] ⭐ **Jib**: build de imagem sem Dockerfile e sem daemon Docker
- [ ] Os quatro modos do `quarkus-container-image-*`: jib, docker, podman, openshift
- [ ] ⭐ **JVM dentro de container**: por que `-XX:MaxRAMPercentage` importa e o que acontece sem ele
- [ ] Fast-jar layout do Quarkus e por que ele é bom para cache de camadas
- [ ] AppCDS — o meio-termo entre JVM padrão e nativo
- [ ] Scan de vulnerabilidade da imagem

### A pegadinha da JVM em container

Antes do JDK 10, a JVM lia a memória do **host**, não do cgroup do container. Se o pod tem limite de 512Mi mas o nó tem 64Gi, a JVM dimensionava o heap para 64Gi e o pod era morto por OOM.

Hoje a JVM é *container-aware*, mas o padrão ainda pode não ser o que você quer. `-XX:MaxRAMPercentage=75` é o ajuste que costuma fazer sentido. Isso conecta direto com o `limits.memory` que você vai definir na Parte 2.

**Referências:**
- 📄 [Quarkus — Container Images](https://quarkus.io/guides/container-image) — ⭐ oficial
- 📄 [Quarkus — Quarkus Base Runtime Image](https://quarkus.io/guides/quarkus-runtime-base-image)
- 📄 [Quarkus — Ahead-of-Time (AOT) Caching](https://quarkus.io/guides/aot) — AppCDS
- 📄 [Quarkus — Measuring Performance](https://quarkus.io/guides/performance-measure) — ⭐ **como medir RSS corretamente**; leia antes de comparar qualquer coisa
- 📄 [Jib — Documentation](https://github.com/GoogleContainerTools/jib) — oficial
- 📄 [Docker — Dockerfile reference](https://docs.docker.com/reference/dockerfile/) — oficial
- 📄 [Docker — Build best practices](https://docs.docker.com/build/building/best-practices/) — oficial
- 📄 [Red Hat UBI — OpenJDK images](https://catalog.redhat.com/software/containers/ubi9/openjdk-21/) — as imagens base do Quarkus

---

## 📚 Parte 2 — Kubernetes fundamentos ⭐⭐ (Dias 4–8)

Sem pressa aqui. É a fase mais larga do roadmap.

### Arquitetura

- [ ] O que é um cluster: control plane e nodes
- [ ] API server, scheduler, controller manager, etcd, kubelet
- [ ] O modelo **declarativo**: você descreve o estado desejado, o cluster converge
- [ ] Reconciliation loop — o conceito que explica quase tudo no K8s

### Objetos

- [ ] **Pod** — a unidade mínima; por que quase nunca se cria pod direto
- [ ] **ReplicaSet** e **Deployment**
- [ ] **Service** — ClusterIP, NodePort, LoadBalancer
- [ ] **Ingress** e roteamento HTTP
- [ ] **ConfigMap** e **Secret** — e por que Secret não é criptografia
- [ ] **Namespace**
- [ ] **ServiceAccount**, RBAC do cluster
- [ ] `Job` e `CronJob` — onde suas migrations poderiam morar

### Operação

- [ ] ⭐ **Probes**: liveness, readiness, startup — o que cada uma faz e o custo de errar
- [ ] ⭐ **Requests vs limits**: scheduling vs throttling; o que acontece ao estourar CPU vs memória
- [ ] QoS classes: Guaranteed, Burstable, BestEffort
- [ ] **Rolling update**, `maxSurge`, `maxUnavailable`
- [ ] Graceful shutdown e `terminationGracePeriodSeconds`
- [ ] `preStop` hook e por que ele evita erro 502 durante o deploy
- [ ] **HPA** — autoscaling horizontal por métrica
- [ ] `kubectl`: `get`, `describe`, `logs`, `exec`, `port-forward`, `apply`, `rollout`
- [ ] Subir um cluster local: **kind** ou **minikube**

### O erro clássico de probe

Apontar **liveness** para um endpoint que verifica o banco. Se o banco cair por 30 segundos, o Kubernetes conclui que **todos** os pods estão quebrados e reinicia todos eles — transformando uma indisponibilidade parcial em um apagão total.

Regra: **liveness** verifica se o processo está vivo (só o processo). **Readiness** verifica se ele consegue atender agora (aí sim, dependências). Você configurou os dois na [[fase-06-testes-e-qualidade]]; agora ligue cada um no lugar certo.

**Referências:**
- 📄 [Kubernetes — Concepts](https://kubernetes.io/docs/concepts/) — ⭐ oficial, comece aqui
- 📄 [Kubernetes — Pods](https://kubernetes.io/docs/concepts/workloads/pods/)
- 📄 [Kubernetes — Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- 📄 [Kubernetes — Service](https://kubernetes.io/docs/concepts/services-networking/service/)
- 📄 [Kubernetes — Configure Liveness, Readiness and Startup Probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) — ⭐
- 📄 [Kubernetes — Resource Management for Pods and Containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) — ⭐
- 📄 [Kubernetes — Horizontal Pod Autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)
- 📄 [Kubernetes — ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/)
- 📄 [Kubernetes — Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
- 📄 [Kubernetes — kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/quick-reference/) — imprima
- 📄 [kind — Quick Start](https://kind.sigs.k8s.io/docs/user/quick-start/) — cluster local
- 📄 [minikube — Get Started](https://minikube.sigs.k8s.io/docs/start/) — alternativa

---

## 📚 Parte 3 — Quarkus + Kubernetes ⭐ (Dias 9–11)

- [ ] A extension `quarkus-kubernetes` e a geração automática de manifests
- [ ] Propriedades `quarkus.kubernetes.*` — probes, recursos, labels, env
- [ ] Manifests gerados em `build/kubernetes/`
- [ ] `quarkus.kubernetes.deploy=true` — build, push e apply em um comando
- [ ] `quarkus-kubernetes-config` — ler ConfigMap e Secret como fonte de configuração
- [ ] Ligar os health checks da Fase 6 nas probes
- [ ] Dimensionar requests e limits **usando o RSS que você mediu na Parte 1**
- [ ] `quarkus-kubernetes-client` — quando você precisa falar com a API do cluster
- [ ] Dev Services para Kubernetes
- [ ] Estratégia de migration em Kubernetes: `migrate-at-start` vs Job de init

### A decisão sobre migrations

Com 5 réplicas subindo ao mesmo tempo e `flyway.migrate-at-start=true`, cinco pods tentam migrar simultaneamente. O Flyway tem lock, então funciona — mas quatro pods ficam esperando para subir.

Alternativas: um `Job` ou `initContainer` que roda a migration antes do rollout. Escolha, e **documente** — vira seção do ADR na Fase 9.

**Referências:**
- 📄 [Quarkus — Kubernetes extension](https://quarkus.io/guides/deploying-to-kubernetes) — ⭐ oficial
- 📄 [Quarkus — Kubernetes Config](https://quarkus.io/guides/kubernetes-config) — ConfigMaps como fonte
- 📄 [Quarkus — Kubernetes Client](https://quarkus.io/guides/kubernetes-client)
- 📄 [Quarkus — Dev Services for Kubernetes](https://quarkus.io/guides/kubernetes-dev-services)
- 📄 [Quarkus — SmallRye Health](https://quarkus.io/guides/smallrye-health) — a integração com probes
- 📄 [Quarkus — Initialization tasks](https://quarkus.io/guides/init-tasks) — migrations como Job
- 📄 [Quarkus — Kubernetes Native](https://quarkus.io/kubernetes-native) — a visão do projeto

---

## 📚 Parte 4 — GraalVM nativo ⭐ (Dias 12–14)

Aqui a teoria da [[fase-03-quarkus-core]] vira dor concreta. **Isso é intencional.**

- [ ] O que é AOT (Ahead-Of-Time) compilation
- [ ] **Closed-world assumption** — revisitando com consequências práticas
- [ ] GraalVM Native Image vs Mandrel (a distribuição da Red Hat)
- [ ] O que quebra em nativo: reflection dinâmica, proxies dinâmicos, JNI, recursos no classpath, serialização
- [ ] `@RegisterForReflection` e os arquivos de configuração do GraalVM
- [ ] Inicialização em build time vs runtime de classes
- [ ] Build nativo em container (não precisa de GraalVM instalado)
- [ ] Por que o build demora minutos e consome muita RAM
- [ ] `@QuarkusIntegrationTest` rodando contra o binário nativo
- [ ] ⭐ Trade-off honesto: nativo tem **pico de throughput menor** que a JVM depois do JIT aquecer

### O experimento medido

Compile as três variantes e preencha esta tabela com **números seus**:

| Variante | Tempo de build | Boot (ms) | RSS após boot | RSS sob carga | Throughput (req/s) |
|---|---|---|---|---|---|
| JVM padrão | | | | | |
| JVM + AppCDS | | | | | |
| Nativo | | | | | |

Depois responda: **qual você levaria para produção e por quê?**

O ADR-001 já respondeu (JVM por padrão), mas ter os números **seus** e concordar por convicção é diferente de obedecer. E é isso que você vai defender na Fase 9.

> ⚠️ Prepare-se para o primeiro build nativo falhar. Provavelmente por reflection em serialização Jackson de `data class`. **Esse erro é o objetivo pedagógico da parte.** Resolva-o entendendo a causa, não copiando a anotação de um Stack Overflow.

**Referências:**
- 📄 [Quarkus — Building a Native Executable](https://quarkus.io/guides/building-native-image) — ⭐ oficial
- 📄 [Quarkus — Native Reference Guide](https://quarkus.io/guides/native-reference) — ⭐ a referência profunda
- 📄 [Quarkus — Tips for writing native applications](https://quarkus.io/guides/writing-native-applications-tips) — o catálogo de armadilhas
- 📄 [Quarkus — Measuring Performance](https://quarkus.io/guides/performance-measure) — **use este método**, não `top`
- 📄 [Quarkus — Using SSL With Native Executables](https://quarkus.io/guides/native-and-ssl)
- 📄 [Quarkus — Using Kotlin (nativo + Jackson)](https://quarkus.io/guides/kotlin) — a seção sobre erros de serialização em nativo
- 📄 [GraalVM — Native Image](https://www.graalvm.org/latest/reference-manual/native-image/) — a fonte
- 📄 [GraalVM — Reachability Metadata](https://www.graalvm.org/latest/reference-manual/native-image/metadata/) — por que reflection precisa ser declarada
- 📄 [Mandrel](https://github.com/graalvm/mandrel) — a distribuição usada pelo Quarkus
- 📄 [Quarkus — Performance](https://quarkus.io/performance) — os números que o projeto divulga

---

## 📚 Parte 5 — Knative e scale-to-zero ⭐ (Dias 15–17)

O alvo final do ADR-001.

- [ ] O que Knative acrescenta ao Kubernetes
- [ ] **Knative Serving**: Service, Configuration, Revision, Route
- [ ] Revisions e traffic splitting (canary, blue-green)
- [ ] **KPA** (Knative Pod Autoscaler) vs HPA — por que KPA escala por concorrência
- [ ] ⭐ **Scale-to-zero**: como funciona, e o papel do *activator*
- [ ] **Cold start**: por que ele é o preço do scale-to-zero, e por que o Quarkus reduz esse preço
- [ ] `min-scale` e `max-scale` — quando desligar o scale-to-zero
- [ ] `autoscaling.knative.dev/target` — concorrência alvo por pod
- [ ] Knative Eventing — só reconhecer
- [ ] Instalar Knative no cluster local

### Fechando o ciclo do roadmap inteiro

Este é o momento em que tudo se conecta:

1. O Quarkus decide no **build time** (Fase 3) → boot em dezenas de ms
2. Boot rápido torna **scale-to-zero viável** (aqui)
3. Scale-to-zero corta custo de serviços sazonais (ADR-001 §1: períodos de matrícula)
4. E o serviço sazonal do exemplo é... **matrícula acadêmica**, exatamente o que você construiu

Quando você vir o pod escalar de zero e responder rápido, a teoria da Fase 3 deixa de ser abstração.

**Referências:**
- 📄 [Knative — Documentation](https://knative.dev/docs/) — ⭐ oficial
- 📄 [Knative — Getting Started with Knative Serving](https://knative.dev/docs/getting-started/) — comece aqui
- 📄 [Knative — Autoscaling (About)](https://knative.dev/docs/serving/autoscaling/) — ⭐
- 📄 [Knative — Configuring scale to zero](https://knative.dev/docs/serving/autoscaling/scale-to-zero/) — ⭐
- 📄 [Knative — Configuring scale bounds](https://knative.dev/docs/serving/autoscaling/scale-bounds/)
- 📄 [Knative — Autoscale sample walkthrough](https://knative.dev/docs/serving/autoscaling/autoscale-go/) — o exemplo é em Go, mas o comportamento é o mesmo
- 📄 [Quarkus — Funqy Knative Events Binding](https://quarkus.io/guides/funqy-knative-events) — se quiser explorar Eventing

---

## 🛠️ Prática — Incremento do projeto (Dias 18–20)

- [ ] Adicionar `quarkus-container-image-jib` e gerar a imagem JVM
- [ ] Rodar a imagem localmente e conferir que tudo funciona
- [ ] Ajustar `-XX:MaxRAMPercentage` e medir a diferença
- [ ] Adicionar `quarkus-kubernetes` e gerar os manifests
- [ ] Ligar liveness em `/q/health/live` e readiness em `/q/health/ready`
- [ ] Definir requests e limits com base no RSS **medido**, não chutado
- [ ] Subir cluster local (kind) e fazer o deploy
- [ ] Adicionar `quarkus-kubernetes-config` e mover configuração para ConfigMap/Secret
- [ ] Decidir e implementar a estratégia de migration em cluster
- [ ] Fazer um rolling update e **provar** que nenhuma requisição caiu (rode carga durante o deploy)
- [ ] Configurar `preStop` e graceful shutdown
- [ ] Compilar nativo, resolver o primeiro erro, e **anotar a causa raiz**
- [ ] Preencher a tabela comparativa das três variantes
- [ ] Instalar Knative e converter o Deployment em Knative Service
- [ ] Observar scale-to-zero acontecer e cronometrar o cold start
- [ ] Rodar carga e observar a escala subir

---

## ✅ Critério de Pronto

1. O serviço roda em cluster (kind ou minikube) com Postgres e Keycloak acompanhando
2. Rolling update acontece sem derrubar nenhuma requisição — **medido**, não presumido
3. Você tem a tabela JVM vs AppCDS vs Nativo preenchida com números seus
4. Você consegue defender a escolha JVM sem citar o ADR — usando os seus números
5. Você viu scale-to-zero acontecer e sabe quanto custa o cold start no seu caso
6. Configuração vem de ConfigMap/Secret; nada sensível na imagem

---

## 🔗 Referências consolidadas

| Tema | Link | Tipo |
|---|---|---|
| Container Images (Quarkus) | https://quarkus.io/guides/container-image | Oficial ⭐ |
| Measuring Performance | https://quarkus.io/guides/performance-measure | Oficial ⭐ |
| Kubernetes extension | https://quarkus.io/guides/deploying-to-kubernetes | Oficial ⭐ |
| Kubernetes Config | https://quarkus.io/guides/kubernetes-config | Oficial |
| Building a Native Executable | https://quarkus.io/guides/building-native-image | Oficial ⭐ |
| Native Reference Guide | https://quarkus.io/guides/native-reference | Oficial ⭐ |
| Tips for native applications | https://quarkus.io/guides/writing-native-applications-tips | Oficial |
| AOT Caching (AppCDS) | https://quarkus.io/guides/aot | Oficial |
| Initialization tasks | https://quarkus.io/guides/init-tasks | Oficial |
| Kubernetes Concepts | https://kubernetes.io/docs/concepts/ | Oficial ⭐ |
| Probes | https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/ | Oficial ⭐ |
| Resource Management | https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ | Oficial ⭐ |
| Deployments | https://kubernetes.io/docs/concepts/workloads/controllers/deployment/ | Oficial |
| HPA | https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/ | Oficial |
| kubectl cheat sheet | https://kubernetes.io/docs/reference/kubectl/quick-reference/ | Oficial |
| kind | https://kind.sigs.k8s.io/docs/user/quick-start/ | Oficial |
| Knative Docs | https://knative.dev/docs/ | Oficial ⭐ |
| Knative Autoscaling | https://knative.dev/docs/serving/autoscaling/ | Oficial ⭐ |
| Knative scale-to-zero | https://knative.dev/docs/serving/autoscaling/scale-to-zero/ | Oficial ⭐ |
| GraalVM Native Image | https://www.graalvm.org/latest/reference-manual/native-image/ | Oficial |
| GraalVM Reachability Metadata | https://www.graalvm.org/latest/reference-manual/native-image/metadata/ | Oficial |
| Jib | https://github.com/GoogleContainerTools/jib | Oficial |
| Docker build best practices | https://docs.docker.com/build/building/best-practices/ | Oficial |

---

## Retrospectiva

*(preencher ao concluir)*

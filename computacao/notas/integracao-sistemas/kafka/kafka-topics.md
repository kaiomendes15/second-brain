---
tipo: conceito
area: computacao
tags: [integracao-sistemas, kafka, mensageria]
atualizado: 2026-08-25
fonte_url: kafka.apache.org/43/getting-started/introduction/
---

# Kafka — Topics

Events são organizados e armazenados em **Topics** ([[integracao-sistemas-publish-subscribe]]).

Tópicos são sempre multi-producers e multi-subscribers. Um tópico pode possuir zero, um, ou vários producers que escrevem eventos nele. Assim como zero, um, ou vários consumers que consomem esses eventos.

Eventos não são deletados após o consumo. Deve-se definir por quanto tempo um evento será retido em uma config per-topic.

Tópicos são [[kafka-particionamento|particionados]], significando que um tópico pode estar espalhado por vários "buckets" localizados em brokers diferentes.

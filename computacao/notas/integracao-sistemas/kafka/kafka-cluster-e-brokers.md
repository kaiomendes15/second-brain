---
tipo: conceito
area: computacao
tags: [integracao-sistemas, kafka, mensageria]
atualizado: 2026-08-25
fonte_url: kafka.apache.org/43/getting-started/introduction/
---

# Kafka — Cluster e Brokers

Kafka roda em **clusters** de um ou mais servidores que podem estar espalhados por múltiplos datacenteres ou clouds.

Alguns desses servidores formam a **storage layer**, chamada de **broker**, uma camada de armazenamento em comum entre os servidores que estão clusterizados.

Em resumo, **Kafka Servers** são brokers que armazenam dados. (Outros servidores executam o [[kafka-connect|Kafka Connect]] para integração com sistemas existentes.)

---
tipo: conceito
area: computacao
tags: [integracao-sistemas, kafka, mensageria]
atualizado: 2026-08-25
fonte_url: kafka.apache.org/43/getting-started/introduction/
---

# Kafka — Particionamento

Esse particionamento de [[kafka-topics|tópicos]] é importante para a escalabilidade pois ele permite que aplicações client tanto leiam quanto escrevam dados de/para vários brokers ao mesmo tempo.

Quando um evento é publicado em um tópico, ele é adicionado à uma das partições daquele tópico. Eventos com a mesma event key são escritos na mesma partição, e o Kafka garante que qualquer consumer de uma determinada partição de um tópico sempre vai ler os eventos presente na exata mesma ordem que eles foram adicionados (ou seja, uma fila).

![[kafka-particionamento-exemplo.png]]
> Figure: This example topic has four partitions P1-P4. Two different producer clients are publishing, independently from each other, new events to the topic by writing events over the network to the topic's partitions. Events with the same key (denoted by their color in the figure) are written to the same partition. Note that both producers can write to the same partition if appropriate.

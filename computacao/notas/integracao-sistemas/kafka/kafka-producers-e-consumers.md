---
tipo: conceito
area: computacao
tags: [integracao-sistemas, kafka, mensageria]
atualizado: 2026-08-25
fonte_url: kafka.apache.org/43/getting-started/introduction/
---

# Kafka — Producers e Consumers

No Kafka, [[integracao-sistemas-producer|producers]] e [[integracao-sistemas-consumer|consumers]] são completamente desacoplados e agnósticos entre si, o que é o fator principal para alcançar a alta escalabilidade que o Kafka é reconhecido.

Producers nunca precisam esperar pelos Consumers. O Kafka provê várias garantias, como a capacidade de processar eventos exatamente uma única vez.

---
tipo: conceito
area: computacao
tags: [integracao-sistemas, mensageria]
atualizado: 2026-08-24
---

# Integração de Sistemas — Point to Point

Padrão utilizado em filas de comunicação um para um. Cada mensagem na fila é enviada para apenas um [[integracao-sistemas-consumer|consumer]] e apenas uma única vez. Tanto o [[integracao-sistemas-producer|sender]] quanto o receiver precisam da garantia de que a mensagem será enviada apenas uma única vez.

Um dos dois padrões de distribuição de mensagens de um [[integracao-sistemas-message-broker|Message Broker]], junto do [[integracao-sistemas-publish-subscribe|publish/subscribe]].

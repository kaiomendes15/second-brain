---
tipo: conceito
area: computacao
tags: [integracao-sistemas, mensageria]
atualizado: 2026-08-24
---

# Integração de Sistemas — Publish/Subscribe

Padrão utilizado em filas de comunicação um para muitos. O [[integracao-sistemas-producer|producer]] de cada mensagem publica ela em um tópico, e múltiplos [[integracao-sistemas-consumer|consumers]] que estão escritos nesse tópico específico podem receber essa mensagem. Todas as mensagens publicadas em um tópico podem ser consumidas por todos os consumidores escritos nesse tópico.

Um dos dois padrões de distribuição de mensagens de um [[integracao-sistemas-message-broker|Message Broker]], junto do [[integracao-sistemas-point-to-point|point to point]].

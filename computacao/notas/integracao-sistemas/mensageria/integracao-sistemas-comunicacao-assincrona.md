---
tipo: conceito
area: computacao
tags: [integracao-sistemas, mensageria]
atualizado: 2026-08-24
---

# Integração de Sistemas — Comunicação Assíncrona

Comunicação Assíncrona se refere à forma em que as aplicações que utilizam do [[integracao-sistemas-message-broker|Message Broker]] interagem entre si. Ela permite que sistemas continuem funcionando normalmente, apesar de outra aplicação da integração estar fora.

O fato da mensageria ser assíncrona garante com que as mensagens serão consumidas na ordem correta que elas foram enviadas para o consumidor, sem com que a minha aplicação fique travada esperando com que esse consumidor de fato consuma essas mensagens.

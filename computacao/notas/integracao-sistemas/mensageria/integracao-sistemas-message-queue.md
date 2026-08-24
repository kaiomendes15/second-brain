---
tipo: conceito
area: computacao
tags: [integracao-sistemas, mensageria]
atualizado: 2026-08-24
---

# Integração de Sistemas — Message Queue

Para providenciar uma estrutura confiável, armazenar as mensagens e garantir a sua entrega quando os receivers estiverem ativos, os [[integracao-sistemas-message-broker|message brokers]] utilizam de um componente chamado **Message Queue**.

O Message Queue é um componente que utiliza da estrutura de dados **Fila** para armazenar as mensagens no broker até que a aplicação consumidora as consuma de fato. Em uma fila de mensagens, as mensagens são armazenadas na mesma sequência que foram emitidas até o momento que são consumidas pelos receptores.

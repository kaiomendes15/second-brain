---
tipo: conceito
area: computacao
tags: [integracao-sistemas, mensageria]
atualizado: 2026-08-24
---

# Integração de Sistemas — Message Broker

Software modular que contém soluções de middleware orientado à mensagens (MOM). Esse tipo de middleware disponibiliza aos desenvolvedores formas de gerenciar o fluxo de dados entre dois componentes de aplicações.

São intermediários entre duas aplicações, permitindo com que **[[integracao-sistemas-producer|Senders]]** (quem envia a mensagem) mandem mensagem sem saber onde os **[[integracao-sistemas-consumer|Receivers]]** (quem recebe) estão, se eles estão ativos ou não, e quantos receivers têm.

Os message brokers facilitam o desacoplamento entre serviços. Em uma API Rest normal, uma aplicação estaria dependente da outra. Se a outra aplicação caísse, nosso serviço não funcionaria como deveria, precisando reenviar a requisição após a outra aplicação voltar.

## Componentes de um Message Broker

![[integracao-sistemas-mensageria-componentes.png]]

> ***Fluxo:** Aplicação A gera um evento/mensagem e, por meio do protocolo [[integracao-sistemas-amqp|AMQP]] utilizado, envia a mensagem para o Message Broker. O broker enfileira as mensagens na ordem que elas foram chegando e às armazena até o momento em que a Aplicação B consuma esses eventos.*

Traduzindo a imagem acima, podemos identificar que um Message Broker é composto por:

- **[[integracao-sistemas-event|Event]]:** um evento é a mensagem em si. Pode ser um JSON, XML ou qualquer tipo de formato em bytes.
- **[[integracao-sistemas-producer|Producer]]:** é a aplicação que envia uma mensagem para uma queue do Message Broker.
- **[[integracao-sistemas-message-queue|Queue]]:** é uma fila que recebe as mensagens geradas por um producer. As mensagens ficarão dentro da fila até que alguma aplicação consumidora (consumer) retire a mensagem da fila.
- **[[integracao-sistemas-consumer|Consumer]]:** é a aplicação que consumirá as mensagens que estão presentes na fila.
- **[[integracao-sistemas-exchange|Exchange]]:** você não viu nada sobre exchange na imagem, mas tenha certeza que isso é muito importante e que de certa forma ela está lá. Nesse momento, você apenas tem que entender que o exchange é apenas um roteador. Fará sentido mais adiante, nos exemplos que este artigo apresentará. Só para adiantar, há quatro tipos de exchanges sendo elas direct, fanout, topic e headers, cada uma delas possui sua importância e definição de funcionamento. Criaremos exemplos práticos, para melhor compreender.
- **[[integracao-sistemas-amqp|AMQP]]:** Advanced Message Queuing Protocol, é um protocolo específico para comunicação baseada em mensagens.

Brokers possuem dois padrões de distribuição de mensagens: **[[integracao-sistemas-point-to-point|point to point]]** e **[[integracao-sistemas-publish-subscribe|publish/subscribe]]**.

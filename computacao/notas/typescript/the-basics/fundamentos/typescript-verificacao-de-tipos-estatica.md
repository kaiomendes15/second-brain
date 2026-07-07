---
tipo: conceito
area: computacao
tags: [typescript, tipagem, static-type-checking, tipagem-estatica, javascript]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — Verificação de Tipos Estática

## O problema no JavaScript

No JavaScript, a tipagem é **dinâmica**: o tipo de um valor só é conhecido em tempo de execução. Isso significa que erros de tipo só aparecem quando o código já está rodando.

```js
const message = "Hello World!";
message(); // TypeError: message is not a function
```

O JavaScript detecta o erro apenas ao executar a linha. Não há como saber antes.

## A solução: tipagem estática

Um **sistema de tipos estático** descreve as formas e comportamentos dos valores *antes* do programa rodar. O TypeScript usa essas informações para identificar problemas ainda na fase de escrita do código.

```ts
const message = "hello!";
message();
// Erro: This expression is not callable.
//       Type 'String' has no call signatures.
```

O erro é reportado **sem precisar executar o código**.

![[typescript-static-type-checking-exemplo.png]]

## Relação com outros conceitos

- O mecanismo de detecção é o [[typescript-compilador-tsc]], que analisa o código antes de emitir JavaScript.
- Além de erros óbvios, o TypeScript também captura [[typescript-non-exception-failures]] — comportamentos silenciosos do JS que também são bugs.
- A precisão da verificação depende do nível de [[typescript-modo-strict]] configurado.

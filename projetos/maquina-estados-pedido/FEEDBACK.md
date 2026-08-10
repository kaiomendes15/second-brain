---
tipo: nota
area: projetos
tags: [typescript, discriminated-unions, narrowing, projeto-prova, feedback]
atualizado: 2026-08-10
---

# Feedback — Máquina de Estados de Pedido

Avaliação da implementação em relação aos requisitos definidos em [[README]].

## Requisito 1 — Modelagem de tipos: atendido

Cada variante (`PedidoPago`, `PedidoEmAndamento`, `PedidoExpirado`, `PedidoCancelado`, `PedidoEntregue`) declara `status` como literal próprio, não mais herdado como `Status` genérico da base. Isso é o que faz o discriminated union funcionar de verdade. Bônus: `PedidoEmAndamento` foi adicionado, totalizando 5 estados, acima do mínimo de 4 pedido pelo README.

## Requisito 2 — Eventos: atendido

`Evento` é uma union discriminada por `tipo`, cada variante carregando só os dados que fazem sentido para aquele evento.

## Requisito 3 — Função de transição: atendido, com uma ressalva

`transicionar` recebe `Pedido` (não mais `PedidoBase`) e faz switch duplo: estado externo → evento interno. Transições inválidas por estado (`cancelado`/`entregue` são terminais, lançam erro direto) e por combinação estado×evento (`default` do switch interno) estão cobertas com mensagens específicas.

Ponto negativo: os `as PedidoX` continuam presentes em todas as 6 branches de retorno, e o requisito é explícito — "não use `as` para forçar tipo em nenhum momento". Testado: removendo todos os 6 casts, `tsc --noEmit` compila limpo do mesmo jeito — eles não fazem nada além de mascarar a garantia que o TS já dá sozinho, sobra da implementação antiga.

## Requisito 4 — Exhaustiveness check: atendido

O `default: { const _exhaustiveCheck: never = pedido; ... }` no switch externo compila corretamente. Os switches internos (por evento, dentro de cada estado) usam `default: throw`, não `never` — correto, porque nem todo evento é válido em todo estado; usar `never` ali seria incorreto.

## Requisito 5 — Type guard customizado: atendido

`ehPago` implementado com a assinatura sugerida pelo README (`Extract<Pedido, {status: "pago"}>`) e usado em `verificarValorPago`, que só faz sentido para pedidos pagos.

## Requisito 6 — Qualidade/config: atendido

`strict: true`, zero `any`, compila e roda sem erros. O runner em `src/index.ts` demonstra várias transições válidas por estado diferente (pago→entregue, expirado→cancelado, emAndamento→pago/expirado/cancelado) e duas transições inválidas (cancelado→cancelar, entregue→entregar) capturadas com `try/catch`, imprimindo a mensagem de erro em vez de deixar a exceção estourar.

## Critério de "pronto" do README: atingido

O switch externo sobre `pedido.status` é genuinamente exaustivo: adicionar um estado novo à union quebra o `never` até o estado ser tratado tanto no switch de pedido quanto, dentro dele, nas decisões de quais eventos são válidos.

## Nota: 88/100

O núcleo do exercício — discriminated union real, narrowing duplo, exhaustiveness, type guard, tratamento explícito de transição inválida — está todo lá e funcionando, incluindo um caso extra (`emAndamento`) que não era exigido. O desconto vem de um requisito explícito e fácil de checar (zero `as`) que ainda não foi cumprido, apesar de já não ser mais necessário tecnicamente — é literalmente remover 6 trechos de código morto. Corrigindo isso, a entrega bate o critério de "pronto" do README ponto a ponto.

### Histórico da avaliação

Esta é a segunda rodada de feedback. Na primeira (antes das correções), a nota foi 35/100: `status` não era um discriminante real (herdado como tipo genérico da base), `transicionar` recebia `PedidoBase` sem nenhuma validação de estado atual, os `as` mascaravam essa falta de tipagem, e não havia type guard nem casos de transição inválida sendo exercitados.

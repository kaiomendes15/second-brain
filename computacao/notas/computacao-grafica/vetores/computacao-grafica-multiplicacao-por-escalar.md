---
tipo: conceito
area: computacao
tags: [computacao-grafica, animacao, algebra-linear]
atualizado: 2026-08-17
fonte_url: https://www.3blue1brown.com/lessons/vectors/
---

# Computação Gráfica — Multiplicação por Escalar

A outra operação fundamental sobre vetores, além da [[computacao-grafica-soma-de-vetores|soma]], é a multiplicação por um número.

- Multiplicar um vetor por 2 estica esse vetor, deixando-o duas vezes mais comprido do que era.
- Multiplicar um vetor por 1/3 o encolhe, deixando-o com um terço do comprimento original.
- Multiplicar um vetor por um número negativo, como -1.5, faz o vetor virar de direção (flip) e depois esticar por um fator de 1.5.

Esse processo de esticar, encolher e às vezes inverter a direção é chamado de "*scaling*" (escalonamento). Qualquer número que atua assim sobre um vetor — como 2, 1/3 ou -1.5 — é chamado de "*escalar*". Ao longo da álgebra linear, uma das principais funções dos números é escalar vetores, por isso é comum usar "escalar" como sinônimo de "número".

Numericamente, esticar um vetor por um fator de 2 corresponde a multiplicar cada uma de suas [[computacao-grafica-sistema-de-coordenadas|coordenadas]] por 2. Ou seja, na concepção de vetores como listas de números, multiplicar um vetor por um escalar significa multiplicar cada um de seus componentes por esse escalar.

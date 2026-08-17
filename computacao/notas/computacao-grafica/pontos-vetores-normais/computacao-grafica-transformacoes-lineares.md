---
tipo: conceito
area: computacao
tags: [computacao-grafica, algebra-linear]
atualizado: 2026-08-17
fonte_url: https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/points-vectors-and-normals.html
---

# Computação Gráfica — Transformações Lineares (Translação e Rotação)

Transformações lineares, como **translação** e **rotação**, simplificam a manipulação de [[computacao-grafica-pontos-vs-vetores|pontos e vetores]] no espaço tridimensional em computação gráfica (CG).

## Translação

Translação é a operação fundamental que move pontos para diferentes localizações no espaço. Traduzir um ponto significa deslocar sua posição de um lugar para outro sem alterar sua orientação ou tamanho — é como pegar um objeto e colocá-lo em outro lugar.

Translação **não** se aplica a vetores da mesma forma, porque a essência de um vetor está em sua direção e magnitude, não em sua posição inicial. Assim, mover um vetor sem alterar sua direção ou comprimento significa que ele continua sendo o mesmo vetor, independentemente de onde esteja posicionado no espaço.

## Rotação

Para vetores, a transformação relevante é a **rotação**. Rotacionar um vetor muda sua direção mantendo constantes seu ponto de partida e magnitude — é como girar uma flecha em torno de um ponto no espaço: a flecha aponta para uma nova direção, mas seu comprimento e ponto de partida permanecem inalterados.

Representação simplificada dessas operações:

- Transformação de ponto: $P \rightarrow \text{Translate} \rightarrow P_{T}$
- Transformação de vetor: $V \rightarrow \text{Rotate} \rightarrow V_{T}$

O subscrito $T$ denota a versão "transformada" do ponto ou vetor original.

Normais, apesar de terem direção e magnitude como vetores, são tratadas de forma diferente quanto a transformações — veja [[computacao-grafica-normais|normais]].

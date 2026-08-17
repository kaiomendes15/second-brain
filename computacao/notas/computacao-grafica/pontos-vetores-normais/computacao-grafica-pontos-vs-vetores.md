---
tipo: conceito
area: computacao
tags: [computacao-grafica, algebra-linear]
atualizado: 2026-08-17
fonte_url: https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/points-vectors-and-normals.html
---

# Computação Gráfica — Pontos vs. Vetores

Em computação gráfica, os conceitos de **ponto** e **vetor** têm papéis fundamentais e distintos dentro de um espaço tridimensional.

Um **ponto** é essencialmente uma localização específica no espaço tridimensional. Ele marca uma posição precisa, sem indicar direção ou magnitude — é como apontar um lugar num mapa, onde o interesse está na localização em si, não na direção ou distância a partir de outro ponto.

Já um **vetor** representa tanto uma direção quanto uma magnitude (ou tamanho) dentro do mesmo espaço tridimensional. Vetores podem ser visualizados como flechas que apontam de uma localização para outra, indicando a direção do deslocamento do ponto inicial (origem) até o ponto final, junto com a distância entre esses dois pontos.

A representação de pontos e vetores tridimensionais usa a notação de [[computacao-grafica-interpretacoes-de-vetores|tupla]] introduzida anteriormente:

$$
V = \left(x , y , z\right)
$$

onde x, y e z são números reais que definem a direção e magnitude do vetor no espaço.

É importante notar que a interpretação de vetores e pontos pode variar bastante entre diferentes campos científicos. Matemáticos e físicos, por exemplo, costumam adotar uma visão mais generalizada, em que um vetor pode ter um número arbitrário — ou até infinito — de elementos, muito além do escopo tridimensional comumente usado em computação gráfica.

Para certas operações matemáticas, como multiplicação de matrizes, é conveniente introduzir um quarto elemento à notação de ponto, resultando nas [[computacao-grafica-coordenadas-homogeneas|coordenadas homogêneas]].

---
tipo: conceito
area: computacao
tags: [computacao-grafica, animacao, algebra-linear]
atualizado: 2026-08-17
fonte_url: https://www.3blue1brown.com/lessons/vectors/
---

# Computação Gráfica — Sistema de Coordenadas

Focando em duas dimensões, um sistema de coordenadas tem uma linha horizontal, chamada *eixo x*, e uma linha vertical, chamada *eixo y*. O ponto onde elas se cruzam é a *origem*, que deve ser pensada como o centro do espaço e a raiz de todos os [[computacao-grafica-interpretacoes-de-vetores|vetores]].

Depois de escolher uma distância arbitrária para representar um comprimento, marcam-se traços em cada eixo espaçados por essa distância. Quando se quer transmitir a ideia do espaço 2D como um todo, esses traços se estendem formando linhas de grade.

## Vetor como flecha na origem

O pensamento padrão ao introduzir um vetor é imaginar uma flecha dentro de um sistema de coordenadas, com a cauda posicionada na origem.

As coordenadas de um vetor são um par de números que dão instruções de como ir da cauda desse vetor (na origem) até sua ponta:
- O primeiro número diz quanto andar ao longo do eixo x (positivo = direita, negativo = esquerda).
- O segundo número diz quanto andar em paralelo ao eixo y (positivo = para cima, negativo = para baixo).

Para distinguir vetores de pontos, a convenção é escrever esse par de números verticalmente, entre colchetes. Todo par de números dá um e apenas um vetor, e todo vetor está associado a um e apenas um par de números.

## Extensão para três dimensões

Em três dimensões, adiciona-se um terceiro eixo, o *eixo z*, perpendicular tanto ao eixo x quanto ao eixo y. Nesse caso, cada vetor é associado a uma tripla ordenada de números: o primeiro número indica o deslocamento ao longo do eixo x, o segundo ao longo do eixo y, e o terceiro ao longo do eixo z.

Toda tripla de números dá um único vetor no espaço, e todo vetor no espaço dá exatamente uma tripla de números.

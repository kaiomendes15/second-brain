---
tipo: conceito
area: computacao
tags: [computacao-grafica, animacao, algebra-linear]
atualizado: 2026-08-17
fonte_url: https://www.3blue1brown.com/lessons/vectors/
---

# Computação Gráfica — Soma de Vetores

A soma de vetores, junto com a [[computacao-grafica-multiplicacao-por-escalar|multiplicação por escalar]], está no centro de todo tópico de álgebra linear.

## Interpretação geométrica (tip-to-tail)

Dados dois vetores — um apontando para cima e um pouco à direita, outro apontando para a direita e um pouco para baixo — para somá-los, move-se o segundo vetor de modo que sua cauda fique sobre a ponta do primeiro. O vetor desenhado da cauda do primeiro até onde a ponta do segundo agora está é a soma dos dois.

Cada vetor representa um movimento: um passo com certa distância e direção. Se você dá um passo ao longo do primeiro vetor e depois um passo na direção e distância do segundo, o efeito total é o mesmo que se movesse ao longo da soma dos dois vetores.

Essa é uma extensão de como pensamos a soma de números em uma reta numérica: somar 2 + 5 é pensar em dar 2 passos à direita, seguidos de mais 5 passos à direita — o efeito total é o mesmo que dar 7 passos à direita direto.

## Cálculo numérico (por componentes)

Considerando as [[computacao-grafica-sistema-de-coordenadas|coordenadas]] de dois vetores, a soma tip-to-tail corresponde a um caminho de quatro passos da cauda do primeiro até a ponta do segundo: andar para a direita, depois para cima, depois para a direita, depois para baixo. Reorganizando esses passos para fazer primeiro todo o movimento horizontal e depois todo o vertical, obtém-se a coordenada x e y do vetor soma.

Em geral, para somar dois vetores na concepção de "lista de números", basta combinar os termos correspondentes e somá-los.

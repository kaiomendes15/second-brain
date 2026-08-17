---
tipo: conceito
area: computacao
tags: [computacao-grafica, animacao, algebra-linear]
atualizado: 2026-08-17
fonte_url:
  - https://www.3blue1brown.com/lessons/vectors/
  - https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/points-vectors-and-normals.html
---

# Computação Gráfica — Interpretações de Vetores

> A introdução de números como coordenadas é um ato de violência.
> — Hermann Weyl

O bloco fundamental da álgebra linear é o vetor. Existem três interpretações distintas — mas relacionadas — do que é um vetor: a perspectiva da física, a da ciência da computação e a da matemática.

## Perspectiva da Física

Vetores são flechas apontando no espaço. O que define um vetor dado é seu comprimento e a direção para onde aponta — enquanto esses dois fatos permanecerem os mesmos, o vetor pode ser movido livremente e continua sendo o mesmo vetor.

Vetores que vivem em um plano são bidimensionais; os que estão no espaço mais amplo em que vivemos são tridimensionais.

## Perspectiva da Ciência da Computação

Vetores são listas ordenadas de números. Por exemplo, ao modelar dados sobre preços de casas considerando apenas metragem quadrada e preço, cada casa pode ser modelada como um par de números: o primeiro indicando metragem, o segundo indicando preço.

A ordem importa: isso seria modelar casas como vetores bidimensionais, onde "vetor" é basicamente uma palavra chique para "lista", e o que o torna bidimensional é o fato de seu comprimento ser dois.

Formalizando essa ideia, um vetor pode ser pensado como um array ou sequência de números, de tamanho variável, que matemáticos costumam chamar de tupla. Ao especificar o tamanho de um vetor, usa-se o termo "n-tupla", onde "n" indica a quantidade de elementos do vetor. Por exemplo, um vetor com seis elementos seria representado como:

$$
V = \left(a , b , c , d , e , f\right)
$$

onde cada um de a, b, c, d, e, f representa números reais (como 1, 3, 4.56, -11, -13.08, 0, etc.).

O propósito de organizar esses números em um vetor é transmitir um valor ou conceito específico que tem significado no contexto do problema. No campo da computação gráfica (CG), vetores desempenham um papel fundamental pois podem denotar posições ou direções no espaço — veja [[computacao-grafica-pontos-vs-vetores|pontos vs. vetores]]. Além disso, vetores estão sujeitos a transformações — um conjunto de operações poderosas e concisas que alteram seus valores, chamadas de [[computacao-grafica-transformacoes-lineares|transformações lineares]].

## Perspectiva do Matemático

O matemático generaliza as duas visões anteriores, dizendo essencialmente que um vetor pode ser qualquer coisa para a qual exista uma noção sensata de somar dois vetores e de multiplicar um vetor por um número — as operações de [[computacao-grafica-soma-de-vetores|soma]] e [[computacao-grafica-multiplicacao-por-escalar|multiplicação por escalar]].

Essa visão é bastante abstrata; é saudável ignorá-la até mais tarde, favorecendo um cenário mais concreto no meio tempo. A razão de trazê-la à tona aqui é que ela sugere que as ideias de soma de vetores e multiplicação por números vão desempenhar um papel importante ao longo de todos os tópicos seguintes.

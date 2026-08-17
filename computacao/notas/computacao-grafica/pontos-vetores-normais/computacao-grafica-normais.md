---
tipo: conceito
area: computacao
tags: [computacao-grafica, algebra-linear]
atualizado: 2026-08-17
fonte_url: https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/points-vectors-and-normals.html
---

# Computação Gráfica — Normais

Em computação gráfica e geometria, o conceito de **normal** é crucial para definir a orientação de uma superfície em um ponto específico. Uma **normal de superfície** em um ponto P é essencialmente um vetor perpendicular ao plano tangente naquele ponto — ou seja, aponta diretamente para fora da superfície, indicando sua orientação no espaço tridimensional.

Normais são indispensáveis no processo de *shading*, técnica usada para determinar o brilho e a cor de superfícies em uma cena com base nas fontes de luz presentes. Ao entender a orientação de uma superfície através de suas normais, algoritmos de CG conseguem simular com precisão os efeitos de iluminação em diferentes partes de um objeto, contribuindo para o realismo e a profundidade da cena renderizada.

É importante notar que normais, apesar de terem direção e magnitude como [[computacao-grafica-pontos-vs-vetores|vetores]], são tratadas de forma diferente em termos de [[computacao-grafica-transformacoes-lineares|transformações]]. Isso ocorre porque a forma como normais interagem com luz e sombra depende de sua orientação em relação às fontes de luz, não apenas de sua posição no espaço. Como resultado, transformar normais exige um cuidado especial para manter os efeitos de iluminação corretos na superfície de um objeto depois que ele foi movido ou alterado na cena.

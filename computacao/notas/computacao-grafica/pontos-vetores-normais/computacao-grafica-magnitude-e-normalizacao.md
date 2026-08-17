---
tipo: conceito
area: computacao
tags: [computacao-grafica, algebra-linear]
atualizado: 2026-08-17
fonte_url: https://www.scratchapixel.com/lessons/mathematics-physics-for-computer-graphics/geometry/points-vectors-and-normals.html
---

# Computação Gráfica — Magnitude e Normalização de Vetores

A **magnitude** (ou comprimento) de um vetor é crítica em CG porque determina o quanto ele se estende em uma dada direção.

Um vetor é considerado **normalizado** quando seu comprimento é exatamente 1 — mantendo sua direção, mas escalando sua magnitude para um comprimento unitário. Normalização é um requisito comum em CG para simplificar cálculos e garantir consistência entre diferentes operações.

Ainda assim, há cenários em que manter o comprimento original de um vetor é benéfico, como quando o vetor representa uma distância específica entre dois pontos (por exemplo, do ponto A ao ponto B), fornecendo tanto a direção quanto a medida de separação entre eles.

Normalizar vetores pode, às vezes, ser um processo delicado, levando a erros se não for feito corretamente. Por isso, é essencial estar sempre atento a se um vetor deve ou não ser normalizado, de acordo com seu uso pretendido. Questionar o status de normalização de um vetor a cada uso ajuda a evitar armadilhas comuns e garante que as operações de CG produzam o resultado desejado.

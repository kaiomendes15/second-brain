---
tags:
  - apresentacao
  - type-manipulation
---
[APRESENTACAO DA EQUIPE, NOMES E ETC.]

Pergunta que abre o seminario: qual os cálculos que são feitos por baixo dos panos para que essas animações possam ocorrer?

Em resumo, são duas: Soma e subtração de vetores. E é basicamente isso que vamos estar apresentando aqui para vocês, vamos mostrar que praticamente tudo que se mexe na tela sai dessas duas operações.

---
## **Ponto x Vetor**
Antes de entrarmos nas operações propriamente ditas, vale a pena separar dois conceitos que fundamentam as animações e a álgebra linear:

### **Ponto**
é uma localização específica no espaço tridimensional. Ele marca uma posição precisa, sem indicar direção ou magnitude.

### **Vetor**
Existem 3 interpretações distintas, porém que se relacionam, do que é um vetor:
- **Perspectiva da Física**: Vetores são setas apontando no espaço, o que define um vetor é seu comprimento e a direção para onde ele está apontando.
- **Perspectiva da Ciência da Computação**: Vetores são listas ordenadas de números. O propósito de organizar números em um vetor é transmitir um valor ou conceito específico que tem significado no contexto de um determinado problema.
- **Perspectiva da Matemática**: Generaliza as duas visões anteriores, um vetor pode ser qualquer coisa que existe uma noção de soma entre dois vetores e de multiplicação entre um vetor e um número.

Qual dessas interpretações é considerada na **Computação Gráfica**?
- Todas as 3 intepretações relacionadas. 
- Na CG, vetores desempenham um papel fundamental pois denotam posições ou direções no espaço (Física), são representados, à nível de código, como listas (Ciência da Computação) e podem passar por soma entre vetores e multiplicação por escalar (Matemática).

---
## Transformações Lineares

Além disso, pontos e vetores estão sujeitos a um conjunto de operações que alteram seus valores chamadas de **Transformações Lineares**.
### Translação:

- **Em pontos**: Move pontos para diferentes localizações  no espaço. Fazer a translação de um ponto significa deslocar sua posição de um lugar para outro.
- **Em vetores**: Não se aplica da mesma forma em vetores. A essência de um vetor está em sua direção e magnitude, não em sua posição inicial. Assim, mover um vetor sem alterar sua direção ou comprimento significa que ele continua sendo o mesmo vetor, independente de onde esteja no espaço.

### Rotação:

- **Em pontos**: Não se aplica, visto que não possui direção e nem magnitude.
- **Em vetores**: Rotacionar um vetor significa mudar sua direção mantendo seu ponto de partida e magnitude. É como girar uma flecha em torno de um ponto no espaço, mantendo o seu ponto de partida.

## Operações sobre Vetores

### Soma:

Dado dois vetores (mostrar exemplo), para soma-los, move-se o segundo vetor de modo que sua cauda fique sobre a ponta do primeiro vetor. O vetor desenhado da cauda do primeiro até onde a ponta do segundo agora está é a soma dos dois.

Em geral, para somar dois vetores na concepção de "lista de números", basta combinar os termos correspondentes e soma-los.

### Multiplicação por Escalar:

Na concepção de "lista de números", estamos basicamente multiplicando os valores presentes na lista.

Na visão espacial:
- Multiplicar um vetor por 2 estica esse vetor, deixando-o duas vezes mais comprido do que era.
- Multiplicar um vetor por 1/3 o encolhe, deixando-o com um terço do comprimento original.
- Multiplicar um vetor por um número negativo, como -1.5, faz o vetor virar de direção (flip) e depois esticar por um fator de 1.5.
Esse processo de esticar, encolher e às vezes inverter a direção é chamado de "*scaling*" (escalonamento). Qualquer número que atua assim sobre um vetor — como 2, 1/3 ou -1.5 — é chamado de "*escalar*"

## Operações válidas Ponto-Vetores:
- **Ponto + Vetor = Ponto**: 
	- Eu tenho uma posição, aplico um deslocamento, chego numa nova posição. É basicamente mover o ponto.
- **Ponto - Ponto = Vetor**:  
	- A diferença entre duas posições é o caminho de um ponto ao outro.
- **Ponto + Ponto => não existe**:
	- Somar as coordenadas de dois pontos, o resultado muda dependendo de onde eu resolvi colocar a origem do meu sistema.
	- A subtração origina um vetor pois o mesmo vetor pode ser representado independente da sua posição no espaço.

## Em resumo: Somar move, subtrair relaciona.






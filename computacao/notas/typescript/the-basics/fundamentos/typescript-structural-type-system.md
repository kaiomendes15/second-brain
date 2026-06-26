---
tipo: conceito
area: computacao
tags:
  - typescript
  - tipagem
  - structural-typing
  - duck-typing
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
---

# TypeScript — Structural Type System

Em TypeScript, a verificação de tipagem foca no **formato** que o valor possui. Isso se chama *"Duck Typing"* ou *"Structural Typing"*.

Em um sistema com structural typing, se dois objetos têm o mesmo formato, então ambos são considerados do mesmo **tipo**.

```typescript
interface Point {
	x: number;
	y: number;
}

function logPoint(p: Point) {
	console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };

logPoint(point);
```

A variável `point` nunca foi declarada para ser do tipo `Point`. No entanto, na verificação de tipagem, TypeScript compara a forma da variável com a forma da interface/tipo. Como eles possuem o mesmo formato, o código passa.

A "correspondência de tipos" requer que apenas um **subconjunto** dos atributos da variável corresponda ao tipo:

```typescript
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
logPoint(color); // Erro: faltam as propriedades x e y
```

## Forma de Classes e Objetos

Não há diferença em como Classes e Objetos se adaptam às formas:

```typescript
class VirtualPoint {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
```

Se o objeto ou a classe possui todas as propriedades necessárias, TypeScript vai considerar que os tipos combinam, independente dos detalhes de implementação.

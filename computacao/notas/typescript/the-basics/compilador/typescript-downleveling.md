---
tipo: conceito
area: computacao
tags: [typescript, downleveling, ecmascript, target, compilacao, compatibilidade]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — Downleveling

Downleveling é o processo de reescrever código de uma versão mais nova do ECMAScript para uma mais antiga, garantindo compatibilidade com ambientes que não suportam as features mais recentes.

## Exemplo

Template string (ES2015+):
```js
`Hello ${person}, today is ${date.toDateString()}!`
```

Após downleveling para ES5:
```js
"Hello ".concat(person, ", today is ").concat(date.toDateString(), "!");
```

## Target padrão

Por padrão, o [[typescript-compilador-tsc]] compila para **ES5** — uma versão muito antiga, com ampla compatibilidade.

## Como mudar o target

```sh
tsc --target es2015 hello.ts
```

Ou no `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "es2015"
  }
}
```

## Recomendação prática

A grande maioria dos browsers modernos suporta ES2015+. A menos que você precise suportar browsers antigos, é seguro usar `es2015` ou superior como target.

## Relação com outros conceitos

- O downleveling é uma transformação de **sintaxe**. Já a remoção de tipos é separada — veja [[typescript-tipos-apagados]].

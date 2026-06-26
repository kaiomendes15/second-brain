---
tipo: conceito
area: computacao
tags: [typescript, strict-mode, tsconfig, strictness, configuracao]
atualizado: 2026-06-24
fonte_url: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
---

# TypeScript — Strict Mode

O TypeScript oferece um conjunto de flags de rigor que controlam **o quão exigente o type-checker será**. Pense como um dial: quanto mais alto, mais o TypeScript verifica.

## Por padrão, o TypeScript é permissivo

No modo padrão:
- Tipos são opcionais.
- Inferência assume os tipos mais amplos possíveis.
- `null` e `undefined` podem ser atribuídos a qualquer tipo.

Isso é útil para migração gradual de projetos JavaScript, mas deixa muitos bugs passarem.

## Habilitando strict mode

Via CLI:
```sh
tsc --strict
```

Via `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

A flag `strict` habilita **todas** as verificações de rigor de uma vez. Você também pode habilitá-las individualmente.

## Principais flags do strict mode

- [[typescript-no-implicit-any]] — proíbe o tipo `any` implícito.
- [[typescript-strict-null-checks]] — torna `null` e `undefined` tipos distintos, forçando tratamento explícito.

## Recomendação

Novos projetos devem sempre habilitar `strict: true`. O custo inicial é maior, mas a qualidade do código e a precisão do tooling compensam a longo prazo.

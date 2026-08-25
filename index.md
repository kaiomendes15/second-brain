---
tipo: indice
atualizado: 2026-08-21
---

# Índice do Cofre

Mapa de tudo que existe aqui, por área. Atualizado a cada arquivamento.
Para responder perguntas, comece por este arquivo, depois abra as páginas relevantes.

## Computação & Carreira

- [[computacao/roadmaps/roadmap-curto-prazo/index]] — plano de execução de 6 meses (Bloco 0→5) rumo à vaga remota. *Referência intocável.*
- [[roadmap-longo-prazo]] — roadmap de 60 módulos, Júnior → Staff. *Referência intocável.*
- [[computacao/roadmaps/roadmap-dtec/index]] — trilha Kotlin/Quarkus/Arquitetura Hexagonal, motivada pelo emprego atual (DTec). *Referência intocável.*
- [[estado]] — trilha freelance/vaga remota: onde estou agora / próximos passos. *Mantido pela IA.*
- [[estado-dtec]] — trilha DTec: onde estou agora / próximos passos. *Mantido pela IA.*

### Notas de CS

- [[typescript-structural-type-system]] — conceito de Structural Typing (Duck Typing) no TypeScript.

#### Integração de Sistemas — Mensageria

- [[computacao/notas/integracao-sistemas/mensageria/guide|Guia de Leitura — Mensageria]] — ordem de leitura sugerida entre as notas abaixo.
- [[integracao-sistemas-mensageria]] — comunicação assíncrona/indireta entre sistemas via message broker.
- [[integracao-sistemas-message-broker]] — middleware MOM que desacopla producers e receivers; componentes do fluxo.
- [[integracao-sistemas-message-queue]] — estrutura de fila que armazena mensagens até o consumo.
- [[integracao-sistemas-comunicacao-assincrona]] — sistemas seguem funcionando mesmo com outra aplicação da integração fora do ar.
- [[integracao-sistemas-event]] — a mensagem em si (JSON, XML, bytes).
- [[integracao-sistemas-producer]] — aplicação que envia mensagens para uma queue.
- [[integracao-sistemas-consumer]] — aplicação que consome mensagens da fila.
- [[integracao-sistemas-exchange]] — roteador de mensagens (direct, fanout, topic, headers).
- [[integracao-sistemas-amqp]] — Advanced Message Queuing Protocol.
- [[integracao-sistemas-point-to-point]] — modelo de distribuição um-para-um, entrega única garantida.
- [[integracao-sistemas-publish-subscribe]] — modelo de distribuição um-para-muitos via tópicos.

#### Integração de Sistemas — Apache Kafka

- [[computacao/notas/integracao-sistemas/kafka/guide|Guia de Leitura — Apache Kafka]] — ordem de leitura sugerida entre as notas abaixo.
- [[kafka-visao-geral]] — o que é o Apache Kafka: servers e clients sobre protocolo TCP.
- [[kafka-cluster-e-brokers]] — clusters de servidores e a storage layer (broker).
- [[kafka-connect]] — servidores que importam/exportam dados para integrar Kafka com sistemas existentes.
- [[kafka-clients]] — aplicações que leem, escrevem e processam fluxos de eventos.
- [[kafka-producers-e-consumers]] — desacoplamento entre producers e consumers e garantias do Kafka.
- [[kafka-topics]] — organização de eventos em tópicos: multi-producer/subscriber e retenção.
- [[kafka-particionamento]] — particionamento de tópicos, event key e ordenação garantida por partição.

#### Java — Class Loaders

- [[java-classloader-definicao]] — o que é um class loader, suas funções e os três tipos embutidos (bootstrap, platform, system).
- [[java-classloader-modelo-de-delegacao]] — como a JVM localiza e carrega uma classe via busca ordenada (delegation model).

#### Computação Gráfica — Vetores

- [[computacao-grafica-interpretacoes-de-vetores]] — as três perspectivas (física, CS, matemática) sobre o que é um vetor, incluindo a notação de n-tupla.
- [[computacao-grafica-sistema-de-coordenadas]] — eixos, origem, coordenadas de um vetor em 2D/3D.
- [[computacao-grafica-soma-de-vetores]] — soma tip-to-tail e soma por componentes.
- [[computacao-grafica-multiplicacao-por-escalar]] — scaling: esticar, encolher, inverter um vetor.

#### Computação Gráfica — Pontos, Vetores e Normais

- [[computacao-grafica-pontos-vs-vetores]] — diferença entre ponto (posição) e vetor (direção + magnitude).
- [[computacao-grafica-coordenadas-homogeneas]] — pontos homogêneos (x, y, z, w).
- [[computacao-grafica-transformacoes-lineares]] — translação (pontos) vs. rotação (vetores).
- [[computacao-grafica-magnitude-e-normalizacao]] — comprimento de um vetor e normalização.
- [[computacao-grafica-normais]] — normal de superfície e seu papel em shading.

#### TypeScript — The Basics

- [[typescript-verificacao-de-tipos-estatica]] — o problema da tipagem dinâmica no JS e como o static type checking resolve.
- [[typescript-non-exception-failures]] — erros silenciosos do JavaScript que o TypeScript detecta (typos, lógica inalcançável, etc.).
- [[typescript-tooling]] — como o type-checker alimenta autocomplete, quick fixes e navegação no editor.
- [[typescript-compilador-tsc]] — instalação e uso do compilador `tsc`.
- [[typescript-emissao-com-erros]] — por que o `tsc` emite `.js` mesmo com erros e como bloquear isso.
- [[typescript-anotacoes-de-tipo-explicitas]] — sintaxe e quando usar type annotations explícitas.
- [[typescript-inferencia-de-tipos]] — TypeScript deduz tipos automaticamente; quando omitir annotations.
- [[typescript-tipos-apagados]] — type annotations são removidas na compilação e não afetam o runtime.
- [[typescript-downleveling]] — compilação para versões antigas do ECMAScript via flag `--target`.
- [[typescript-modo-strict]] — o dial de rigor do TypeScript e a flag `strict`.
- [[typescript-no-implicit-any]] — flag que proíbe o tipo `any` inferido implicitamente.
- [[typescript-strict-null-checks]] — flag que torna `null` e `undefined` tipos distintos.

#### TypeScript — Everyday Types

- [[typescript-primitivos]] — os três primitivos: string, number e boolean; regra de usar minúsculo.
- [[typescript-arrays]] — sintaxe `number[]` vs `Array<T>`; nota sobre Tuples.
- [[typescript-tipo-any]] — o tipo `any`: desabilita type-checking; quando e quando não usar.
- [[typescript-anotacoes-em-funcoes]] — type annotations em parâmetros, retorno e `Promise<T>`.
- [[typescript-contextual-typing]] — inferência automática de tipos em funções anônimas pelo contexto.
- [[typescript-object-types]] — object types inline: sintaxe, separadores e tipo padrão `any`.
- [[typescript-optional-properties]] — propriedades opcionais com `?` e checagem de `undefined`.
- [[typescript-union-types]] — combinação de tipos com `|`; restrições de operações.
- [[typescript-narrowing]] — narrowing com `typeof` e `Array.isArray` para tratar union types.
- [[typescript-type-aliases]] — keyword `type` para nomear e reutilizar tipos.
- [[typescript-interfaces]] — keyword `interface` para declarar object types nomeados.
- [[typescript-type-aliases-vs-interfaces]] — diferenças, extensão, merging e heurística de uso.
- [[typescript-type-assertions]] — keyword `as` e angle-bracket para assertar tipos.
- [[typescript-literal-types]] — valores específicos como tipos; string, number e boolean literals.
- [[typescript-literal-inference]] — inferência de tipo geral em objetos; como contornar com `as const`.
- [[typescript-null-undefined]] — comportamento de `null` e `undefined` com e sem `strictNullChecks`.
- [[typescript-non-null-assertion]] — operador `!` para remover `null`/`undefined` sem checagem explícita.
- [[typescript-enums]] — constantes nomeadas com `enum`; adição de runtime ao JavaScript.

#### TypeScript — More on Functions

- [[typescript-function-type-expressions]] — sintaxe `(a: T) => U` pra tipar funções.
- [[typescript-call-signatures]] — call signatures: funções callable com propriedades.
- [[typescript-construct-signatures]] — construct signatures: tipar funções chamadas com `new`.
- [[typescript-generic-functions]] — generics em funções: type parameter e inferência.
- [[typescript-generic-constraints]] — constraints (`extends`) e o erro de "working with constrained values".
- [[typescript-especificar-type-arguments]] — especificar type arguments manualmente quando a inferência falha.
- [[typescript-boas-praticas-generics]] — diretrizes: push type parameters down, menos parâmetros, aparecer 2x.
- [[typescript-optional-parameters]] — parâmetros opcionais, defaults e a pegadinha em callbacks.
- [[typescript-function-overloads]] — overload signatures vs implementation signature; quando evitar overloads.
- [[typescript-this-em-funcoes]] — declarar o tipo de `this` como parâmetro sintático.
- [[typescript-outros-tipos-de-retorno]] — `void`, `object`, `unknown`, `never` e o tipo global `Function`.
- [[typescript-rest-parameters-e-arguments]] — rest parameters (`...m: number[]`) e rest arguments (spread).
- [[typescript-parameter-destructuring]] — destructuring de parâmetros com tipo anotado após o padrão.
- [[typescript-assignabilidade-de-void]] — por que funções que retornam algo são atribuíveis a `() => void`.

#### TypeScript — Object Types

- [[typescript-optional-properties-em-objetos]] — marcar propriedades como opcionais com `?` em object types e defaults por destructuring.
- [[typescript-readonly-properties]] — modificador `readonly` em propriedades: o que garante (e o que não garante).
- [[typescript-index-signatures]] — index signatures (`[index: T]: U`), tipos permitidos e variante `readonly`.
- [[typescript-excess-property-checks]] — checagem de propriedades excedentes em object literals e como contorná-la.
- [[typescript-extending-types]] — `interface extends`, inclusive extensão múltipla.
- [[typescript-intersection-types]] — combinar object types com o operador `&`.
- [[typescript-interface-extends-vs-intersection]] — diferença de tratamento de conflitos entre `extends` e `&`.
- [[typescript-generic-object-types]] — object types genéricos (`interface Box<Type>`).
- [[typescript-array-type]] — `Array<T>` como tipo genérico embutido.
- [[typescript-readonlyarray-type]] — `ReadonlyArray<T>` e a sintaxe `readonly T[]`.
- [[typescript-tuple-types]] — tuplas: elementos fixos, opcionais e rest elements.
- [[typescript-readonly-tuple-types]] — tuplas `readonly` e inferência via `as const`.

#### TypeScript — Type Manipulation

- [[typescript-conditional-types]] — sintaxe `T extends U ? X : Y` e uso com generics para evitar overloads.
- [[typescript-conditional-type-constraints]] — constranger o branch verdadeiro de um conditional type pelo tipo comparado.
- [[typescript-infer-keyword]] — keyword `infer` para extrair tipos dentro de conditional types.
- [[typescript-distributive-conditional-types]] — conditional types se distribuem sobre union types; como evitar com colchetes.
- [[typescript-mapped-types]] — construir um tipo iterando as chaves de outro com `[Property in keyof Type]`.
- [[typescript-mapping-modifiers]] — modificadores `readonly`/`?` e prefixos `+`/`-` em mapped types.
- [[typescript-key-remapping-via-as]] — remapear chaves em mapped types com a cláusula `as`.

#### TypeScript — Utility Types

- [[typescript-partial]] — `Partial<Type>`: todas as propriedades como opcionais.
- [[typescript-required]] — `Required<Type>`: todas as propriedades como obrigatórias.
- [[typescript-readonly-utility]] — `Readonly<Type>`: todas as propriedades como `readonly`.
- [[typescript-record]] — `Record<Keys, Type>`: constrói um object type a partir de chaves e valor.
- [[typescript-pick]] — `Pick<Type, Keys>`: seleciona um subconjunto de propriedades.
- [[typescript-omit]] — `Omit<Type, Keys>`: remove um subconjunto de propriedades.
- [[typescript-exclude]] — `Exclude<UnionType, ExcludedMembers>`: remove membros de uma union.
- [[typescript-extract]] — `Extract<Type, Union>`: extrai membros atribuíveis de uma union.
- [[typescript-nonnullable]] — `NonNullable<Type>`: remove `null` e `undefined` de um tipo.
- [[typescript-parameters]] — `Parameters<Type>`: tupla dos parâmetros de uma função.
- [[typescript-constructorparameters]] — `ConstructorParameters<Type>`: tupla dos parâmetros de um construtor.
- [[typescript-returntype]] — `ReturnType<Type>`: tipo de retorno de uma função.
- [[typescript-instancetype]] — `InstanceType<Type>`: tipo de instância de uma função construtora.
- [[typescript-noinfer]] — `NoInfer<Type>`: bloqueia inferência de generics num parâmetro.
- [[typescript-thisparametertype]] — `ThisParameterType<Type>`: extrai o tipo do parâmetro `this`.
- [[typescript-omitthisparameter]] — `OmitThisParameter<Type>`: remove o parâmetro `this` de uma função.
- [[typescript-thistype]] — `ThisType<Type>`: marcador para tipo de `this` contextual.
- [[typescript-awaited]] — `Awaited<Type>`: desembrulha `Promise`s recursivamente.
- [[typescript-intrinsic-string-manipulation-types]] — `Uppercase`/`Lowercase`/`Capitalize`/`Uncapitalize`, overview.

## Projetos

- [[projetos/maquina-estados-pedido/README|Máquina de Estados de Pedido]] — mini-projeto de consolidação do Bloco 0 (discriminated unions, narrowing, exhaustiveness checking).

## Estudos Pessoais

### Bíblia
*(vazio)*

### Curiosidades
*(vazio)*

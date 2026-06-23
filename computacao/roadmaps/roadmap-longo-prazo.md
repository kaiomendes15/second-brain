---
tipo: nota
area: computacao
tags: [roadmap, carreira, longo-prazo, referencia]
atualizado: 2026-06-19
---

> ⚠️ **Referência intocável.** A IA lê este documento para orientar, mas **nunca o edita**.
> É a biblioteca de consulta Júnior → Staff. O progresso vivo fica em [[estado]];
> o plano de execução atual está em [[computacao/roadmaps/roadmap-curto-prazo/index]].

## Índice

- [Fase 0 — Ciência da Computação Aplicada](#fase-0--ciência-da-computação-aplicada)
- [✅ Checkpoint: Júnior Forte](#checkpoint-júnior-forte)
- [Fase 1 — Programação a Sério](#fase-1--programação-a-sério)
- [Fase 2 — Frontend de Engenheiro](#fase-2--frontend-de-engenheiro)
- [Fase 3 — Backend de Engenheiro](#fase-3--backend-de-engenheiro)
- [✅ Checkpoint: Pleno de Verdade](#checkpoint-pleno-de-verdade-mid--sde-ii)
- [Fase 4 — Infraestrutura e Operações](#fase-4--infraestrutura-e-operações)
- [Fase 5 — Sistemas Distribuídos e Arquitetura](#fase-5--sistemas-distribuídos-e-arquitetura)
- [✅ Checkpoint: Sênior Real](#checkpoint-sênior-real-sde-iii--senior)
- [Fase 6 — Liderança Técnica e Impacto](#fase-6--liderança-técnica-e-impacto)
- [Fase 7 — Especialização e Fronteira](#fase-7--especialização-e-fronteira)
- [✅ Checkpoint: Staff / Principal Engineer](#checkpoint-staff--principal-engineer)

---

## Fase 0 — Ciência da Computação Aplicada

> Estimativa: 3–6 meses de estudo + prática deliberada.

---

### Módulo 01 — Arquitetura de Computadores

> Como o hardware executa o seu código. Sem isso, performance é mágica negra.

#### 01.1 Representação de dados

- [ ] Estudar sistema binário: conversão base 10 ↔ base 2, operações binárias
- [ ] Estudar hexadecimal e sua relação com binário
- [ ] Entender complemento de dois para números negativos
- [ ] Estudar ponto flutuante IEEE 754: precisão simples e dupla, NaN, Infinity
- [ ] Implementar exemplos de erros de precisão de ponto flutuante em código
- [ ] Estudar overflow e underflow numérico

#### 01.2 CPU e pipeline

- [ ] Estudar o ciclo fetch-decode-execute
- [ ] Entender pipeline de CPU: estágios, hazards, stalls
- [ ] Estudar branch prediction: static, dynamic, especulação
- [ ] Entender out-of-order execution e reordenação de instruções
- [ ] Estudar SIMD (Single Instruction Multiple Data) e vetorização
- [ ] Entender superscalar execution

#### 01.3 Hierarquia de memória

- [ ] Estudar registradores, L1, L2, L3, RAM — latências relativas de cada nível
- [ ] Entender cache lines (geralmente 64 bytes), spatial e temporal locality
- [ ] Estudar false sharing em programas multi-thread
- [ ] Entender TLB (Translation Lookaside Buffer) e seu impacto
- [ ] Estudar cache misses: cold, capacity, conflict
- [ ] Implementar benchmark que demonstra impacto de locality

#### 01.4 Memória e I/O

- [ ] Estudar endianness: big-endian vs little-endian, implicações em rede
- [ ] Entender alinhamento de memória e padding em structs
- [ ] Estudar DMA (Direct Memory Access)
- [ ] Entender interrupções vs polling
- [ ] Estudar syscalls: transição user space → kernel space e seu custo
- [ ] Comparar custo de syscall vs custo de função normal

**Referências recomendadas:**
- Livro: *Computer Organization and Design* — Patterson & Hennessy
- Livro: *What Every Programmer Should Know About Memory* — Drepper (gratuito)
- Curso: *Computer Architecture* — ETH Zürich (YouTube)

---

### Módulo 02 — Sistemas Operacionais

> A base para debugging em produção. Sem isso, você fica tentando resolver problemas sem entender o ambiente.

#### 02.1 Processos e threads

- [ ] Estudar diferença entre processo e thread: espaço de endereçamento, recursos
- [ ] Entender fork() e exec() — copy-on-write
- [ ] Estudar criação e destruição de threads, joinability
- [ ] Entender estados de processo: running, ready, blocked, zombie
- [ ] Estudar context switch: o que é salvo/restaurado, custo
- [ ] Implementar processos e threads em pelo menos uma linguagem de sistema

#### 02.2 Memória virtual

- [ ] Estudar paginação: páginas, frames, page tables
- [ ] Entender address translation, multi-level page tables
- [ ] Estudar TLB e seu papel na tradução
- [ ] Entender page faults: minor (soft) vs major (hard)
- [ ] Estudar mmap: mapeamento de arquivos em memória
- [ ] Entender swapping e o custo real de swap
- [ ] Estudar segfaults: por que acontecem e como diagnosticar

#### 02.3 Schedulers

- [ ] Estudar algoritmos de scheduling: FIFO, Round Robin, Priority
- [ ] Entender CFS (Completely Fair Scheduler) do Linux
- [ ] Estudar prioridades e nice values no Linux
- [ ] Entender preemption e cooperação
- [ ] Estudar NUMA (Non-Uniform Memory Access) e afinidade de CPU

#### 02.4 IPC — Comunicação entre processos

- [ ] Estudar pipes: anônimos e named pipes (FIFOs)
- [ ] Entender Unix sockets vs TCP sockets
- [ ] Estudar shared memory: mmap, POSIX shared memory
- [ ] Entender signals: envio, captura, handlers
- [ ] Estudar semáforos POSIX e mutexes

#### 02.5 I/O e modelos

- [ ] Estudar I/O blocking vs non-blocking
- [ ] Entender select() e poll() — limitações
- [ ] Estudar epoll (Linux): edge-triggered vs level-triggered
- [ ] Entender io_uring: interface moderna para I/O assíncrono
- [ ] Comparar modelos: thread-per-connection vs event loop vs async

#### 02.6 Sistema de arquivos

- [ ] Estudar inodes: metadados, hard links, symlinks
- [ ] Entender journaling e sua importância para integridade
- [ ] Estudar fsync() e garantias de durabilidade
- [ ] Entender page cache e dirty pages
- [ ] Estudar diferentes filesystems: ext4, XFS, ZFS, btrfs
- [ ] Entender como banco de dados usa o filesystem

#### 02.7 Segurança e isolamento

- [ ] Estudar permissões POSIX: users, groups, bits rwx, setuid
- [ ] Entender Linux capabilities
- [ ] Estudar namespaces: PID, NET, MNT, USER, IPC, UTS
- [ ] Entender cgroups v1 e v2
- [ ] Aprender ferramentas de troubleshooting: strace, lsof, /proc, perf

**Referências recomendadas:**
- Livro: *Operating Systems: Three Easy Pieces* — Arpaci-Dusseau (gratuito online)
- Livro: *The Linux Programming Interface* — Kerrisk
- Prática: Implementar um shell simples do zero

---

### Módulo 03 — Redes de Computadores

> Toda chamada de rede que você faz passa por aqui. Entender é não-negociável.

#### 03.1 Modelo de camadas

- [ ] Estudar modelo OSI: 7 camadas e responsabilidade de cada uma
- [ ] Entender modelo TCP/IP: 4 camadas e mapeamento com OSI
- [ ] Estudar encapsulamento e decapsulamento de pacotes

#### 03.2 TCP e transporte

- [ ] Estudar three-way handshake: SYN, SYN-ACK, ACK
- [ ] Entender four-way termination: FIN, ACK, FIN, ACK
- [ ] Estudar sequence numbers, acknowledgments, janela deslizante
- [ ] Entender retransmissão: timeout e fast retransmit
- [ ] Estudar congestion control: slow start, congestion avoidance, fast recovery
- [ ] Entender head-of-line blocking em TCP
- [ ] Estudar TCP options: MSS, window scaling, SACK, timestamps
- [ ] Implementar servidor TCP simples do zero com sockets

#### 03.3 UDP e protocolos alternativos

- [ ] Estudar UDP: quando usar (DNS, DNS, jogos, streaming)
- [ ] Entender QUIC: multiplexação, 0-RTT, built-in TLS
- [ ] Entender quando UDP + reliability manual > TCP

#### 03.4 DNS

- [ ] Estudar resolução DNS: recursiva vs iterativa
- [ ] Entender tipos de registro: A, AAAA, CNAME, MX, TXT, NS, PTR, SRV
- [ ] Estudar TTL, caching de DNS, negative caching
- [ ] Entender propagação de DNS e por que é lenta
- [ ] Estudar DNSSEC (introdução)
- [ ] Praticar: resolver DNS manualmente com dig

#### 03.5 TLS e criptografia de transporte

- [ ] Estudar TLS 1.3 handshake: key exchange, authentication, finished
- [ ] Entender certificados X.509, CA hierarchy, chain of trust
- [ ] Estudar SNI (Server Name Indication)
- [ ] Entender OCSP stapling, certificate revocation
- [ ] Estudar Perfect Forward Secrecy (PFS) e por que importa
- [ ] Entender mTLS: autenticação mútua de clientes e servidores

#### 03.6 HTTP em profundidade

- [ ] Estudar HTTP/1.1: métodos, status codes, headers completos
- [ ] Entender pipelining HTTP/1.1 e suas limitações
- [ ] Estudar HTTP/2: multiplexação, server push, header compression (HPACK)
- [ ] Entender HTTP/3: QUIC como transporte, conexões 0-RTT
- [ ] Estudar cache HTTP: Cache-Control, ETag, If-Modified-Since, Vary
- [ ] Entender cookies em profundidade: atributos Secure, HttpOnly, SameSite
- [ ] Estudar CORS: preflight, simple requests, credenciais

#### 03.7 Protocolos de aplicação

- [ ] Estudar WebSockets: handshake, frames, ping/pong
- [ ] Entender Server-Sent Events: casos de uso, limitações
- [ ] Estudar long polling e por que foi substituído
- [ ] Entender gRPC sobre HTTP/2

#### 03.8 Infraestrutura de rede

- [ ] Estudar load balancers L4 (TCP) vs L7 (HTTP): diferenças e usos
- [ ] Entender anycast e seu uso em CDNs e DNS
- [ ] Estudar BGP: conceitos básicos (não precisa operar, precisa entender)
- [ ] Praticar: tcpdump, Wireshark, dig, curl com headers

**Referências recomendadas:**
- Livro: *Computer Networking: A Top-Down Approach* — Kurose & Ross
- Livro: *High Performance Browser Networking* — Grigorik (gratuito online)
- Prática: Implementar HTTP/1.1 parser do zero

---

### Módulo 04 — Terminal, Shell e Ferramentas Unix

> Produtividade real começa aqui. Devs lentos no terminal são lentos em tudo.

#### 04.1 Shell e scripting

- [ ] Estudar variáveis: declaração, escopo, exportação
- [ ] Entender expansão de variáveis: ${var}, ${var:-default}, ${var:?error}
- [ ] Estudar quoting: single quote vs double quote vs backslash
- [ ] Entender redirecionamentos: >, >>, 2>, &>, /dev/null
- [ ] Estudar subshell vs processo filho: () vs {}
- [ ] Entender arrays no bash
- [ ] Estudar funções no shell, parâmetros posicionais
- [ ] Aprender scripting robusto: set -euo pipefail, trap, cleanup

#### 04.2 Ferramentas de texto

- [ ] Dominar grep: regex, -r, -l, -n, -v, -A, -B, -C
- [ ] Dominar sed: substituição, endereçamento, in-place
- [ ] Aprender awk: fields, patterns, actions, built-in variables
- [ ] Dominar find: -name, -type, -mtime, -exec, -maxdepth
- [ ] Aprender jq: seleção, transformação, filtros em JSON
- [ ] Dominar sort, uniq, cut, tr, wc, head, tail
- [ ] Aprender xargs: paralelização com -P, limitações

#### 04.3 Pipes e composição

- [ ] Entender o pipeline Unix: filosofia e composição
- [ ] Estudar named pipes (mkfifo) para casos especiais
- [ ] Entender process substitution: <() e >()
- [ ] Aprender tee: dividir saída

#### 04.4 Ferramentas de produtividade

- [ ] Dominar tmux: sessões, janelas, painéis, detach/attach
- [ ] Configurar tmux.conf com atalhos úteis
- [ ] Aprender gerenciamento de sessão remota com screen (fallback)

#### 04.5 SSH avançado

- [ ] Estudar geração de chaves: Ed25519 vs RSA
- [ ] Configurar ~/.ssh/config com múltiplos hosts
- [ ] Entender SSH agent forwarding
- [ ] Estudar port forwarding: local (-L), remote (-R), dynamic (-D)
- [ ] Entender ProxyJump para acessar hosts internos

#### 04.6 Editor profundo

- [ ] Escolher Vim ou Neovim: movimentação, modos, comandos essenciais
- [ ] Dominar busca e substituição no editor
- [ ] Configurar LSP (Language Server Protocol) no editor
- [ ] Dominar macros e comandos de repetição
- [ ] Configurar um ambiente de desenvolvimento completo

**Referências recomendadas:**
- Livro: *The Linux Command Line* — Shotts (gratuito online)
- Prática: Reescrever scripts que você usa com bash puro (sem depender de ferramentas externas quando desnecessário)

---

### Módulo 05 — Git como Engenheiro

> Não é só commit/push. Entender o modelo de dados muda como você raciocina sobre histórico.

#### 05.1 Modelo interno do Git

- [ ] Estudar os 4 tipos de objeto Git: blob, tree, commit, tag
- [ ] Entender SHA-1 como identificador de conteúdo
- [ ] Estudar refs: branches como ponteiros para commits
- [ ] Entender HEAD: detached HEAD e o que significa
- [ ] Estudar o .git directory: o que cada arquivo faz
- [ ] Implementar: criar um commit manualmente com plumbing commands

#### 05.2 Operações essenciais com profundidade

- [ ] Dominar merge: fast-forward, three-way merge, octopus
- [ ] Dominar rebase: linear, interactive, --onto
- [ ] Entender cherry-pick: casos de uso e riscos
- [ ] Estudar reset: --soft, --mixed, --hard — o que cada um afeta
- [ ] Estudar revert: quando preferir a reset
- [ ] Entender stash: apply vs pop, múltiplos stashes
- [ ] Dominar resolução de conflitos: ferramentas, estratégias

#### 05.3 Operações avançadas

- [ ] Dominar git bisect: debugging por bissecção binária
- [ ] Estudar reflog: recovery de commits "perdidos"
- [ ] Aprender interactive rebase: squash, fixup, edit, reorder
- [ ] Estudar git blame: -C para rastrear movimentos de código
- [ ] Entender git log avançado: --graph, --follow, -S, -G
- [ ] Estudar submodules: quando usar, como atualizar
- [ ] Entender worktrees: múltiplas working copies

#### 05.4 Hooks e automação

- [ ] Estudar hooks: pre-commit, commit-msg, pre-push, post-receive
- [ ] Implementar pre-commit hook com linting e type checking
- [ ] Estudar ferramentas: Husky, lefthook

#### 05.5 Estratégias de branching

- [ ] Entender trunk-based development e seus benefícios
- [ ] Estudar GitFlow: quando faz sentido, quando não faz
- [ ] Entender GitHub Flow: simples e efetivo
- [ ] Estudar feature flags como alternativa a branches longas

#### 05.6 Convenções

- [ ] Estudar Conventional Commits: feat, fix, chore, breaking change
- [ ] Entender Semantic Versioning (semver): major.minor.patch
- [ ] Aprender geração automática de CHANGELOG

**Referências recomendadas:**
- Livro: *Pro Git* — Chacon & Straub (gratuito online)
- Prática: Implementar git clone simplificado do zero

---

### Módulo 06 — Matemática para Desenvolvedores

> Não vira matemático — vira capaz de raciocinar formalmente e sem medo.

#### 06.1 Lógica e álgebra booleana

- [ ] Estudar proposições, conectivos: AND, OR, NOT, XOR, IMPLIES
- [ ] Aprender tabelas verdade e simplificação
- [ ] Estudar álgebra booleana: leis de De Morgan, distributividade
- [ ] Entender prova por indução: base, hipótese, passo
- [ ] Estudar prova por contradição e contrapositiva

#### 06.2 Teoria dos conjuntos e relações

- [ ] Estudar operações: união, interseção, diferença, complemento
- [ ] Entender produto cartesiano, relações
- [ ] Estudar funções: injetora, sobrejetora, bijetora
- [ ] Entender composição de funções

#### 06.3 Combinatória

- [ ] Estudar princípio da multiplicação e adição
- [ ] Aprender permutações e combinações
- [ ] Entender princípio da casa dos pombos e suas aplicações em CS
- [ ] Estudar análise de casos em algoritmos

#### 06.4 Probabilidade e estatística

- [ ] Estudar espaço amostral, eventos, probabilidade
- [ ] Entender probabilidade condicional e independência
- [ ] Estudar Teorema de Bayes e suas aplicações
- [ ] Aprender distribuições: uniforme, normal, exponencial (Poisson para erros)
- [ ] Dominar percentis P50/P95/P99 — você vai usar em todo SLO
- [ ] Estudar média vs mediana: quando cada uma mente
- [ ] Entender correlação vs causalidade

#### 06.5 Grafos como matemática

- [ ] Estudar grafos: vértices, arestas, dirigidos, não-dirigidos, ponderados
- [ ] Entender caminhos, ciclos, componentes, conectividade
- [ ] Estudar árvores como caso especial de grafos
- [ ] Entender bipartite graphs e matching

#### 06.6 Análise assintótica

- [ ] Estudar Big-O: definição formal e intuição
- [ ] Entender Big-Ω e Big-Θ
- [ ] Analisar algoritmos simples: loops, recursão
- [ ] Estudar análise amortizada: exemplos com dynamic array

**Referências recomendadas:**
- Livro: *Mathematics for Computer Science* — Leighton & van Dijk (MIT OpenCourseWare, gratuito)
- Livro: *Concrete Mathematics* — Knuth (para ir além)

---

## Checkpoint: Júnior Forte

> **Régua correta:** A maioria dos juniores que sai de bootcamp e da maioria dos cursos universitários **não passa deste checkpoint**. Quem completa a Fase 0 + Fase 1 já se distancia do entry-level médio.

### Critérios concretos para avançar

- [ ] Implementa uma feature de complexidade média sem supervisão constante
- [ ] Lê código-fonte de bibliotecas open source e entende o que está acontecendo
- [ ] Faz debugging sistemático: reproduz, isola e corrige bugs sem chutar aleatoriamente
- [ ] Escreve testes que pegam regressões reais, não só inflam cobertura
- [ ] Conversa fluentemente sobre HTTP, TCP, processos, memória e Git internals
- [ ] Consegue explicar o que acontece em um computador quando você aperta Enter em `curl google.com`

---

## Fase 1 — Programação a Sério

> Estimativa: 6–12 meses de prática intensiva.

---

### Módulo 07 — Domínio Profundo de Uma Linguagem

> Não a sintaxe — o modelo de execução, o ecossistema, as armadilhas. Escolha uma linguagem e vá fundo.

#### 07.1 Sistema de tipos

- [ ] Estudar tipagem estática vs dinâmica: tradeoffs reais
- [ ] Entender inferência de tipos: como o compilador deduz tipos
- [ ] Estudar generics/templates/parametric polymorphism
- [ ] Entender covariance e contravariance em tipos genéricos
- [ ] Estudar type narrowing e type guards
- [ ] Entender union types, intersection types, discriminated unions

#### 07.2 Modelo de memória da linguagem

- [ ] Entender stack vs heap na sua linguagem
- [ ] Estudar garbage collector (se aplicável): algoritmo, tuning, pausas
- [ ] Entender referências, valores, cópia vs referência
- [ ] Estudar vazamentos de memória comuns na linguagem
- [ ] Aprender ferramentas de profiling de memória
- [ ] Entender finalizers, destructors, weak references

#### 07.3 Modelo de execução

- [ ] Estudar event loop (se aplicável): microtasks, macrotasks
- [ ] Entender model de threads da linguagem
- [ ] Estudar runtime startup, inicialização de módulos
- [ ] Entender import/require: como módulos são resolvidos e cacheados
- [ ] Estudar lazy evaluation vs eager evaluation (se aplicável)

#### 07.4 Tratamento de erros

- [ ] Estudar o mecanismo idiomático da linguagem: exceptions, Result, Either, Option
- [ ] Entender stack traces: como ler e interpretar
- [ ] Estudar error wrapping e propagação
- [ ] Entender quando usar cada abordagem
- [ ] Implementar error handling sem suprimir erros acidentalmente

#### 07.5 Metaprogramação

- [ ] Estudar reflection: inspecionar tipos e estruturas em runtime
- [ ] Entender decorators/annotations: como funcionam por baixo
- [ ] Estudar macros (se disponível na linguagem)
- [ ] Entender code generation: quando e como usar

#### 07.6 Ecossistema e tooling

- [ ] Dominar o build system da linguagem
- [ ] Configurar linter: regras importantes, customização
- [ ] Configurar formatter: integração com editor e CI
- [ ] Entender o package manager: lockfiles, semver, peer deps
- [ ] Configurar debugger no editor
- [ ] Ler código-fonte de 3+ bibliotecas relevantes do ecossistema

**Referências recomendadas (escolha para sua linguagem):**
- JavaScript/TypeScript: *You Don't Know JS* — Kyle Simpson; *Effective TypeScript* — Vanderkam
- Python: *Fluent Python* — Ramalho; *CPython Internals* — Shaw
- Go: *The Go Programming Language* — Donovan & Kernighan; tour.golang.org
- Rust: *The Rust Programming Language* (gratuito online); *Rust for Rustaceans* — Gjengset
- Java: *Effective Java* — Bloch; *Java Concurrency in Practice* — Goetz

---

### Módulo 08 — Segunda Linguagem (Paradigma Diferente)

> Reseta vícios mentais e expande o que você consegue enxergar em qualquer código.

#### 08.1 Escolha e motivação

- [ ] Se sua primeira é imperativa/OO: aprender uma funcional (Elixir, Haskell, Clojure, F#)
- [ ] Se sua primeira é GC: aprender uma com controle de memória (Rust, Go, C)
- [ ] Entender *por que* esse paradigma existe, que problemas ele resolve melhor

#### 08.2 Conceitos funcionais

- [ ] Estudar imutabilidade: valores vs variáveis
- [ ] Entender funções de primeira classe e higher-order functions
- [ ] Estudar map, filter, reduce e suas implementações
- [ ] Entender closures e captura de estado
- [ ] Estudar currying e partial application
- [ ] Entender recursão como controle de fluxo, tail recursion
- [ ] Estudar pattern matching em profundidade
- [ ] Entender ADTs (Algebraic Data Types): Product types, Sum types
- [ ] Estudar functors, monads (intuição, não necessariamente teoria)

#### 08.3 Concorrência diferente

- [ ] Estudar o modelo de concorrência da segunda linguagem
- [ ] Entender actors (se Elixir/Erlang): mailboxes, supervisors
- [ ] Entender channels e goroutines (se Go)
- [ ] Entender ownership e borrowing (se Rust): por que elimina data races

#### 08.4 Comparação deliberada

- [ ] Implementar o mesmo problema em ambas as linguagens
- [ ] Comparar: verbosidade, performance, expressividade, manutenibilidade
- [ ] Entender o que a segunda linguagem faz melhor e o que faz pior
- [ ] Trazer conceitos da segunda para a primeira (onde aplicável)

**Referências recomendadas:**
- Elixir: *Programming Elixir* — Thomas; *Elixir in Action* — Jurić
- Haskell: *Learn You a Haskell* (gratuito online)
- Rust: *The Rust Programming Language* (gratuito online)
- Go: *The Go Programming Language* — Donovan & Kernighan

---

### Módulo 09 — Estruturas de Dados a Fundo

> Não é LeetCode. É saber escolher a estrutura certa em produção e entender o custo real.

#### 09.1 Sequenciais

- [ ] Estudar arrays dinâmicos: crescimento, amortização, realocação
- [ ] Entender linked lists: singly, doubly, circular — tradeoffs vs array
- [ ] Estudar quando lista ligada é genuinamente melhor que array
- [ ] Implementar ambos do zero em pelo menos uma linguagem

#### 09.2 Hash tables

- [ ] Estudar funções de hash: propriedades, distribuição uniforme
- [ ] Entender collision resolution: chaining, open addressing (linear, quadratic, double hashing)
- [ ] Estudar load factor e rehashing
- [ ] Entender Robin Hood hashing
- [ ] Estudar consistent hashing (usado em sistemas distribuídos)
- [ ] Implementar uma hash table do zero

#### 09.3 Árvores

- [ ] Implementar BST: insert, delete, search, traversals
- [ ] Estudar BST degenerado vs balanceado
- [ ] Entender AVL tree: rotações, balanceamento
- [ ] Estudar Red-Black tree: propriedades (sem precisar decorar caso a caso)
- [ ] Entender B-tree: por que bancos de dados usam
- [ ] Estudar B+tree: diferença do B-tree, eficiência em range scans
- [ ] Implementar B-tree simplificado

#### 09.4 Heaps e filas de prioridade

- [ ] Estudar heap binário: min-heap, max-heap, heapify
- [ ] Entender operações: insert O(log n), extract-min O(log n), peek O(1)
- [ ] Estudar heapsort
- [ ] Entender Fibonacci heap (nível teórico, por que existe)

#### 09.5 Estruturas de strings

- [ ] Estudar Trie: insert, search, prefix search
- [ ] Entender suffix arrays: construção, aplicações
- [ ] Estudar Aho-Corasick para busca múltipla de padrões

#### 09.6 Estruturas probabilísticas

- [ ] Estudar Bloom filter: false positives, sem false negatives, usos reais
- [ ] Entender HyperLogLog: cardinality estimation aproximada
- [ ] Estudar Count-Min Sketch: frequency estimation em streams
- [ ] Entender quando usar aproximação vs exatidão

#### 09.7 Grafos como estrutura

- [ ] Entender matriz de adjacência vs lista de adjacência: tradeoffs
- [ ] Estudar grafos dirigidos, não-dirigidos, ponderados
- [ ] Implementar as duas representações

#### 09.8 Caches (estruturas de eviction)

- [ ] Implementar LRU (Least Recently Used) do zero: HashMap + DLL
- [ ] Estudar LFU (Least Frequently Used): implementação eficiente
- [ ] Entender ARC (Adaptive Replacement Cache)
- [ ] Estudar clock algorithm (second-chance)

#### 09.9 Estruturas avançadas

- [ ] Estudar Union-Find (Disjoint Set Union): path compression, union by rank
- [ ] Entender segment tree: range queries, point updates
- [ ] Estudar Fenwick tree (Binary Indexed Tree): prefix sums eficientes
- [ ] Entender skip lists: alternativa probabilística a balanced BST

**Referências recomendadas:**
- Livro: *Introduction to Algorithms (CLRS)* — Cormen et al. (capítulos relevantes)
- Prática: Implementar cada estrutura do zero antes de usar a da linguagem

---

### Módulo 10 — Algoritmos Clássicos e Aplicações

> Saber QUANDO usar cada um vale mais do que decorar implementação.

#### 10.1 Ordenação

- [ ] Implementar e entender: insertion sort, selection sort, bubble sort (e por que são ruins)
- [ ] Implementar mergesort: recursivo e iterativo
- [ ] Implementar quicksort: escolha de pivot, worst case, randomização
- [ ] Estudar heapsort: in-place, não-estável
- [ ] Entender TimSort: merge sort + insertion sort, por que Python e Java usam
- [ ] Estudar radix sort e counting sort: quando batem O(n log n)
- [ ] Entender estabilidade de sort e quando importa

#### 10.2 Busca

- [ ] Implementar busca binária: cuidados com overflow, variantes (lower_bound, upper_bound)
- [ ] Estudar busca ternária: para funções unimodais
- [ ] Entender busca em BST, hash table, skip list

#### 10.3 Grafos

- [ ] Implementar BFS: shortest path em grafo não-ponderado, nível por nível
- [ ] Implementar DFS: recursive e iterativo, pré e pós-ordem
- [ ] Estudar topological sort: Kahn's algorithm, DFS-based
- [ ] Implementar detecção de ciclos: dirigido e não-dirigido
- [ ] Estudar componentes fortemente conectados: Tarjan, Kosaraju
- [ ] Estudar componentes conexas: Union-Find

#### 10.4 Caminhos mínimos

- [ ] Implementar Dijkstra: com priority queue
- [ ] Estudar Bellman-Ford: grafos com pesos negativos, detecção de ciclos negativos
- [ ] Entender A*: heurística, admissibilidade, usos em jogos e GPS
- [ ] Estudar Floyd-Warshall: todos os pares em O(n³)

#### 10.5 Árvore geradora mínima

- [ ] Implementar Kruskal com Union-Find
- [ ] Implementar Prim com priority queue
- [ ] Entender quando MST é útil em design de sistemas

#### 10.6 Programação dinâmica

- [ ] Estudar memoization vs tabulation (top-down vs bottom-up)
- [ ] Resolver problemas clássicos: knapsack, LCS, LIS, edit distance
- [ ] Estudar DP em grafos: DAG shortest path
- [ ] Entender redução de dimensão em DP
- [ ] Estudar DP com bitmask para problemas de subconjuntos

#### 10.7 Algoritmos gulosos

- [ ] Estudar quando greedy é ótimo: provas de exchange argument
- [ ] Resolver: interval scheduling, activity selection
- [ ] Entender quando greedy falha (e por que usar DP)

#### 10.8 Strings

- [ ] Implementar KMP: preprocessamento, busca em O(n+m)
- [ ] Estudar Rabin-Karp: hashing, aplicações
- [ ] Entender Z-algorithm

#### 10.9 Algoritmos para entrevistas e sistemas

- [ ] Estudar two pointers, sliding window
- [ ] Entender merge intervals
- [ ] Estudar algoritmos de reservatório (reservoir sampling)
- [ ] Entender algoritmos de eleição (Boyer-Moore majority vote)

**Referências recomendadas:**
- Livro: *Introduction to Algorithms (CLRS)* — Cormen et al.
- Livro: *Algorithm Design* — Kleinberg & Tardos
- Prática: Resolver 150+ problemas no LeetCode (não decorar — entender padrões)

---

### Módulo 11 — Concorrência e Paralelismo

> Onde 90% dos devs param e onde os bons aceleram.

#### 11.1 Fundamentos

- [ ] Entender a diferença real entre concorrência e paralelismo
- [ ] Estudar quando cada um é adequado: I/O bound vs CPU bound
- [ ] Entender por que concorrência é difícil: ordem de execução não-determinística

#### 11.2 Problemas clássicos e primitivas

- [ ] Estudar race conditions: exemplos, detecção, prevenção
- [ ] Entender deadlock: condições de Coffman, detecção, prevenção
- [ ] Estudar livelock: exemplos, solução
- [ ] Entender starvation: causas, prevenção
- [ ] Implementar mutex do zero (com atomic operations)
- [ ] Estudar semáforos: counting e binary, produtores-consumidores
- [ ] Entender condition variables: wait/notify, spurious wakeups
- [ ] Estudar RWLocks: readers-writer problem, implementação

#### 11.3 Operações atômicas e modelo de memória

- [ ] Estudar operações atômicas: compare-and-swap (CAS), fetch-and-add
- [ ] Entender memory barriers/fences
- [ ] Estudar modelos de memória: sequentially consistent, acquire-release, relaxed
- [ ] Entender o modelo de memória da sua linguagem (JMM, C++11, Go memory model)

#### 11.4 Concorrência de alto nível

- [ ] Estudar thread pools: tamanho ótimo, work stealing
- [ ] Entender futures/promises: implementação interna
- [ ] Estudar async/await: como o compilador transforma em state machines
- [ ] Entender como evitar blocking em código async
- [ ] Estudar structured concurrency

#### 11.5 Modelos alternativos

- [ ] Estudar Actor model: mailboxes, supervisão, Erlang/OTP
- [ ] Entender CSP (Communicating Sequential Processes): channels, Go
- [ ] Estudar STM (Software Transactional Memory): Haskell, Clojure
- [ ] Entender o model de ownership do Rust como solução de compile-time

#### 11.6 Padrões de concorrência

- [ ] Implementar Producer-Consumer com buffer limitado
- [ ] Implementar Fan-out / Fan-in
- [ ] Implementar pipeline de processamento
- [ ] Estudar barrier synchronization
- [ ] Entender cancellation e timeouts em código concorrente

**Referências recomendadas:**
- Livro: *Java Concurrency in Practice* — Goetz et al. (vale para qualquer linguagem)
- Livro: *The Art of Multiprocessor Programming* — Herlihy & Shavit
- Prática: Implementar um thread pool do zero

---

### Módulo 12 — Testes Profissionais

> Devs sem cultura de teste estagnam em pleno e ficam lá para sempre.

#### 12.1 Filosofia e pirâmide

- [ ] Entender pirâmide de testes: unit → integration → e2e, proporções saudáveis
- [ ] Estudar o que cada nível testa e não testa
- [ ] Entender custo de cada nível: velocidade, manutenção, confiança
- [ ] Estudar o "honeycomb" de testes (Spotify) como alternativa

#### 12.2 Testes unitários

- [ ] Dominar a estrutura Arrange-Act-Assert (AAA)
- [ ] Estudar o que é uma boa unidade de teste
- [ ] Entender test doubles: mocks, stubs, fakes, spies — quando usar cada um
- [ ] Estudar problemas de testes: testes frágeis, over-mocking
- [ ] Entender testes de comportamento vs de implementação

#### 12.3 TDD

- [ ] Praticar o ciclo red-green-refactor
- [ ] Entender TDD como design tool, não só como testing tool
- [ ] Estudar outside-in TDD (London School) vs inside-out (Chicago School)
- [ ] Implementar um projeto completo com TDD

#### 12.4 Testes avançados

- [ ] Estudar property-based testing: gerar inputs aleatórios, shrinking
- [ ] Implementar propriedades em QuickCheck, Hypothesis ou fast-check
- [ ] Estudar mutation testing: medir qualidade dos testes, não cobertura
- [ ] Entender snapshot testing: quando usar e quando evitar
- [ ] Estudar golden file tests: comparação com output esperado

#### 12.5 Testes de integração e contrato

- [ ] Estudar contract testing com Pact: consumer-driven contracts
- [ ] Entender como testar integrações com banco de dados (testcontainers)
- [ ] Estudar testes de integração com mocks de serviços externos (WireMock)

#### 12.6 Testes de performance

- [ ] Estudar testes de carga: k6, Locust, JMeter
- [ ] Entender diferença entre load test, stress test, spike test, soak test
- [ ] Estudar como interpretar resultados: percentis, throughput, error rate
- [ ] Entender degradação graceful vs falha abrupta

#### 12.7 Chaos engineering

- [ ] Estudar princípios do Chaos Engineering (Netflix)
- [ ] Entender fault injection: kill pods, introduzir latência, errar dependências
- [ ] Estudar Chaos Monkey, Gremlin, Chaos Mesh
- [ ] Entender Game Days: exercícios planejados de falha

#### 12.8 Cobertura e métricas

- [ ] Entender o que cobertura de linha/branch mede e o que não mede
- [ ] Estudar quando ignorar cobertura baixa é correto
- [ ] Entender coverage as a tool, not a goal

**Referências recomendadas:**
- Livro: *Test-Driven Development* — Beck
- Livro: *Growing Object-Oriented Software, Guided by Tests* — Freeman & Pryce
- Livro: *Unit Testing: Principles, Practices, and Patterns* — Khorikov

---

### Módulo 13 — Debugging Sistemático

> Talvez a habilidade mais subestimada do mercado. Sêniores debugam 10x mais rápido.

#### 13.1 Metodologia

- [ ] Estudar o processo científico aplicado a bugs: hipótese → teste → invalidação
- [ ] Entender "rubber duck debugging" como ferramenta real
- [ ] Aprender a criar minimal reproducible examples (MREs)
- [ ] Estudar differential debugging: o que mudou?

#### 13.2 Ferramentas de debugging

- [ ] Dominar o debugger da sua linguagem: breakpoints, watchpoints, step into/over/out
- [ ] Estudar conditional breakpoints e logpoints
- [ ] Entender call stack, frame inspection, variable evaluation
- [ ] Aprender remote debugging
- [ ] Estudar debuggers interativos (pdb, gdb, dlv)

#### 13.3 Tipos difíceis de bugs

- [ ] Estudar Heisenbugs: bugs que somem quando você observa
- [ ] Entender race conditions: uso de thread sanitizers, detecção
- [ ] Estudar memory leaks: ferramentas (Valgrind, AddressSanitizer, heapdump)
- [ ] Entender bugs de performance: profiling como debugging

#### 13.4 Profiling

- [ ] Aprender a ler flame graphs: CPU profiling
- [ ] Estudar memory profilers: heap allocation, object retention
- [ ] Entender allocation profilers: encontrar hot paths de alocação
- [ ] Estudar I/O profilers: disk, rede

#### 13.5 Debugging em produção

- [ ] Estudar logging estratégico para debugging
- [ ] Entender distributed tracing para bugs em microsserviços
- [ ] Estudar análise de core dumps
- [ ] Aprender a usar eBPF para debugging de sistema (nível avançado)

**Referências recomendadas:**
- Livro: *Debugging: The 9 Indispensable Rules* — Agans
- Prática: Pegar um projeto open source com issues abertos e debugar pelo menos 5 bugs reais

---

## Fase 2 — Frontend de Engenheiro

> Estimativa: 6–9 meses de prática intensiva.

---

### Módulo 14 — Plataforma Web em Profundidade

> O que é o browser, não só "como uso o framework".

#### 14.1 Pipeline de renderização

- [ ] Estudar parsing HTML: tokenization, tree construction, error recovery
- [ ] Entender construção do DOM e CSSOM
- [ ] Estudar render tree, layout tree, paint
- [ ] Entender compositing: layers, GPU, will-change
- [ ] Estudar reflow (layout) vs repaint — e como evitar
- [ ] Entender o que dispara reflow: lista de propriedades
- [ ] Estudar forced synchronous layout (layout thrashing)

#### 14.2 Event loop do browser

- [ ] Entender event loop: task queue, microtask queue, render steps
- [ ] Estudar microtasks: Promise.then, queueMicrotask, MutationObserver
- [ ] Entender macrotasks: setTimeout, setInterval, I/O callbacks
- [ ] Estudar requestAnimationFrame: por que usar para animações
- [ ] Entender quando código JavaScript bloqueia a UI

#### 14.3 Web APIs importantes

- [ ] Dominar Fetch API: request/response, streaming, abort
- [ ] Estudar IndexedDB: transações, índices, cursores
- [ ] Entender Web Workers: comunicação, limitações, SharedArrayBuffer
- [ ] Estudar Service Workers: ciclo de vida, interceptação de requests, cache
- [ ] Entender WebSockets API: abrir, enviar, receber, fechar
- [ ] Estudar Intersection Observer, MutationObserver, ResizeObserver

#### 14.4 Storage e cookies

- [ ] Entender cookies: atributos Secure, HttpOnly, SameSite, Domain, Path
- [ ] Estudar localStorage vs sessionStorage: limites, sincrono
- [ ] Entender IndexedDB: async, transacional, objetos complexos
- [ ] Estudar quotas e eviction policies
- [ ] Entender Storage Access API e cookies de terceiros

#### 14.5 Segurança no browser

- [ ] Estudar Same-Origin Policy: o que constitui mesma origem
- [ ] Entender CORS em profundidade: preflight, credenciais, headers
- [ ] Estudar CSP (Content Security Policy): diretivas, report-only
- [ ] Entender XSS: DOM-based, reflected, stored — prevenção
- [ ] Estudar CSRF: tokens, SameSite cookie
- [ ] Entender clickjacking: X-Frame-Options, frame-ancestors

#### 14.6 Acessibilidade

- [ ] Estudar WCAG 2.1/2.2: níveis A, AA, AAA
- [ ] Entender ARIA: roles, states, properties — quando e quando não usar
- [ ] Estudar HTML semântico como base de acessibilidade
- [ ] Aprender a usar screen reader (NVDA, VoiceOver, JAWS)
- [ ] Entender navegação por teclado: focus management, skip links
- [ ] Estudar contraste de cor: razão mínima 4.5:1

#### 14.7 Internacionalização

- [ ] Estudar Intl API: DateTimeFormat, NumberFormat, Collator
- [ ] Entender encoding: UTF-8, caracteres, code points
- [ ] Estudar layouts RTL: direção, espelhamento
- [ ] Entender pluralização com Intl.PluralRules

**Referências recomendadas:**
- Site: MDN Web Docs (referência primária)
- Livro: *High Performance Browser Networking* — Grigorik (gratuito)
- Livro: *Inclusive Components* — Pickering

---

### Módulo 15 — CSS Profissional e Design Systems

> A diferença entre devs que "tentam fazer funcionar" e devs que constroem interfaces que escalam.

#### 15.1 Box model e formatting contexts

- [ ] Dominar box model: content, padding, border, margin, box-sizing
- [ ] Entender block formatting context (BFC): quando é criado, implicações
- [ ] Estudar inline formatting context
- [ ] Entender stacking contexts: o que cria um, z-index
- [ ] Estudar containing block: qual elemento é o referencial de posicionamento

#### 15.2 Layouts

- [ ] Dominar Flexbox completo: todos os eixos, alinhamento, wrapping
- [ ] Dominar CSS Grid: template areas, implicit vs explicit, subgrid
- [ ] Entender quando usar Flexbox vs Grid
- [ ] Estudar posicionamento: static, relative, absolute, fixed, sticky
- [ ] Entender multi-column layout

#### 15.3 Cascade e especificidade

- [ ] Estudar cascade: origem (author, user, UA), especificidade, ordem
- [ ] Entender cálculo de especificidade: id > class > element
- [ ] Estudar herança: quais propriedades herdam, `inherit`, `initial`, `unset`
- [ ] Entender layers (cascade layers) — CSS moderno

#### 15.4 Custom properties e temas

- [ ] Dominar CSS custom properties (variáveis): escopo, herança, fallback
- [ ] Implementar sistema de temas com custom properties
- [ ] Estudar @property: tipos, herança, animação de variáveis
- [ ] Entender color-scheme e prefers-color-scheme

#### 15.5 CSS moderno

- [ ] Estudar container queries: @container, cqw, cqh
- [ ] Entender :has() selector e suas implicações
- [ ] Estudar CSS nesting nativo
- [ ] Entender @layer para gerenciamento de especificidade
- [ ] Estudar logical properties: inline, block, start, end

#### 15.6 Animações e performance

- [ ] Estudar transitions: propriedades, timing functions, delays
- [ ] Entender animations com @keyframes
- [ ] Estudar o que pode animar sem reflow: transform e opacity
- [ ] Entender Web Animations API
- [ ] Estudar will-change: uso correto e riscos
- [ ] Entender prefers-reduced-motion

#### 15.7 Responsividade

- [ ] Dominar media queries: breakpoints, range syntax
- [ ] Estudar fluid typography: clamp(), viewport units
- [ ] Entender responsive images: srcset, sizes, picture element
- [ ] Estudar mobile-first vs desktop-first

#### 15.8 Metodologias e arquitetura

- [ ] Estudar BEM: bloco, elemento, modificador
- [ ] Entender CSS Modules: scoping local
- [ ] Estudar CSS-in-JS: styled-components, Emotion — tradeoffs reais
- [ ] Estudar Tailwind: utility-first, purging, customização
- [ ] Entender quando cada metodologia é adequada

#### 15.9 Design systems

- [ ] Estudar design tokens: cores, tipografia, espaçamento, elevação
- [ ] Implementar sistema de tokens com custom properties
- [ ] Construir componentes primitivos: Button, Input, Modal do zero
- [ ] Entender composição de componentes
- [ ] Estudar tipografia: escala tipográfica, line-height, letter-spacing
- [ ] Entender sistemas de cor: HSL, OKLCH, paletas geradas

**Referências recomendadas:**
- Livro: *Every Layout* — Atkinson & Bell (everylayout.dev)
- Livro: *CSS: The Definitive Guide* — Meyer
- Site: CSS Tricks, MDN

---

### Módulo 16 — Framework Moderno em Profundidade

> Saber USAR é júnior. Entender o que ele faz por baixo é pleno+.

#### 16.1 Modelo de renderização

- [ ] Estudar Virtual DOM: diffing algorithm, reconciliation
- [ ] Entender chaves (keys): por que importam, erro de usar index
- [ ] Estudar fine-grained reactivity: Signals (Solid, Preact Signals, Vue 3)
- [ ] Entender compiladores de framework (Svelte, Qwik) vs runtime
- [ ] Comparar modelos: VDOM vs signals vs compiler — tradeoffs

#### 16.2 Componentes e estado

- [ ] Estudar ciclo de vida completo de componentes
- [ ] Dominar hooks (React) ou composables (Vue): regras, pitfalls
- [ ] Entender closures em hooks: stale closures, deps array
- [ ] Estudar memoization: useMemo, useCallback — quando usar, quando não
- [ ] Entender useRef vs useState: quando não re-renderizar
- [ ] Estudar derived state e quando é anti-padrão

#### 16.3 Renderização server-side

- [ ] Estudar SSR: benefícios, tradeoffs, custo de infraestrutura
- [ ] Entender SSG: geração estática, incrementalidade
- [ ] Estudar ISR (Incremental Static Regeneration): revalidação
- [ ] Entender React Server Components: sem JS no cliente, com limitações
- [ ] Estudar streaming SSR: Suspense, out-of-order streaming
- [ ] Entender hydration: full, partial, progressive, islands architecture
- [ ] Estudar resumability (Qwik) como alternativa a hydration

#### 16.4 Routing

- [ ] Estudar client-side routing: History API, pushState
- [ ] Entender file-based routing: Next.js, Remix, SvelteKit
- [ ] Estudar nested layouts: compartilhamento de UI, outlets
- [ ] Entender loading states, suspense boundaries, error boundaries
- [ ] Estudar parallel e intercepting routes (Next.js App Router)

#### 16.5 Padrões avançados

- [ ] Estudar render props: flexibilidade vs verbosidade
- [ ] Entender Higher-Order Components e quando evitar
- [ ] Estudar compound components: contexto interno, API fluente
- [ ] Entender headless components: Radix, Headless UI
- [ ] Estudar controlled vs uncontrolled components
- [ ] Entender forwarding refs, useImperativeHandle

#### 16.6 Segundo framework

- [ ] Aprender um segundo framework (se React, aprender Vue ou vice-versa)
- [ ] Comparar: DX, performance, ecossistema, tradeoffs
- [ ] Entender que frameworks são ferramentas, não identidades

**Referências recomendadas:**
- React: react.dev (documentação oficial nova), *React Internals Deep Dive* — youtube bbycroft.net
- Vue: vuejs.org, *Vue.js 3 by Example* — Ye
- Svelte: svelte.dev

---

### Módulo 17 — Gerenciamento de Estado e Dados

> Onde a maioria dos apps frontend morre — bugs caóticos e refatorações infinitas vêm daqui.

#### 17.1 Taxonomia de estado

- [ ] Entender as 4 categorias: local, global, server, URL
- [ ] Estudar onde cada tipo de estado deve viver
- [ ] Entender as consequências de colocar estado no lugar errado
- [ ] Estudar estado derivado vs estado source of truth

#### 17.2 Estado global

- [ ] Estudar Flux pattern: unidirectional data flow
- [ ] Estudar Redux: store, actions, reducers, selectors
- [ ] Entender Redux Toolkit: createSlice, createAsyncThunk
- [ ] Estudar alternativas: Zustand, Jotai (atoms), Valtio (proxies), Nanostores
- [ ] Entender signals como primitiva de estado
- [ ] Estudar quando estado global é necessário vs over-engineering

#### 17.3 Estado de servidor (server state)

- [ ] Estudar TanStack Query (React Query): queries, mutations, cache
- [ ] Entender stale-while-revalidate
- [ ] Estudar invalidação de cache, refetch strategies
- [ ] Entender optimistic updates: rollback em caso de erro
- [ ] Estudar SWR como alternativa mais simples

#### 17.4 Forms

- [ ] Estudar controlled vs uncontrolled forms
- [ ] Dominar React Hook Form: register, watch, formState
- [ ] Estudar validação com Zod ou Yup
- [ ] Entender multi-step forms, field arrays
- [ ] Estudar error messages acessíveis

#### 17.5 Real-time e sincronização

- [ ] Implementar cliente WebSocket com reconexão automática
- [ ] Estudar Server-Sent Events para dados unidirecionais
- [ ] Entender sincronização de estado entre abas (BroadcastChannel)
- [ ] Estudar offline-first: IndexedDB + sync quando volta online
- [ ] Entender CRDTs no frontend: Yjs, Automerge

#### 17.6 State machines

- [ ] Estudar statecharts: estados, transições, guards, actions
- [ ] Implementar com XState ou Zag.js
- [ ] Entender quando state machines evitam bugs impossíveis de-reproducir

**Referências recomendadas:**
- Documentação TanStack Query, Zustand, XState
- Artigo: *You Might Not Need Redux* — Abramov

---

### Módulo 18 — Build System e Bundlers

> O que está acontecendo quando você roda `npm run build`.

#### 18.1 Module systems

- [ ] Estudar CommonJS: require, module.exports, sincronismo
- [ ] Entender ES Modules: import/export, live bindings, top-level await
- [ ] Estudar interoperabilidade CJS/ESM: problemas comuns
- [ ] Entender UMD e AMD (legado, mas existe em muito código)

#### 18.2 Bundlers

- [ ] Estudar Webpack: entry, output, loaders, plugins, code splitting
- [ ] Entender Vite: dev server com ESM nativo, build com Rollup
- [ ] Estudar esbuild: por que é rápido (Go, paralelismo)
- [ ] Estudar Rollup: library bundling, tree shaking
- [ ] Entender Turbopack: incremental computation

#### 18.3 Otimizações de bundle

- [ ] Dominar tree shaking: como funciona, side effects, sideEffects em package.json
- [ ] Estudar code splitting: chunks, async boundaries
- [ ] Entender dynamic imports e lazy loading de rotas e componentes
- [ ] Estudar bundle analysis: webpack-bundle-analyzer, source-map-explorer
- [ ] Entender chunk naming e long-term caching com hashes

#### 18.4 Transpilação

- [ ] Estudar Babel: plugins, presets, configuração
- [ ] Entender SWC: compatibilidade com Babel, performance
- [ ] Estudar targets: browserslist, polyfills
- [ ] Entender source maps: tipos, uso em produção vs dev

#### 18.5 Monorepos

- [ ] Estudar pnpm workspaces: linking, hoisting
- [ ] Entender Turborepo: caching, pipeline de build
- [ ] Estudar Nx: affected commands, computation cache
- [ ] Entender quando monorepo é a resposta certa

**Referências recomendadas:**
- Documentação Vite, Webpack, Rollup
- Livro: *Monorepo Tools* — nx.dev/concepts

---

### Módulo 19 — Performance Frontend

> A diferença entre "funciona" e "é usado por milhões sem reclamação".

#### 19.1 Core Web Vitals

- [ ] Estudar LCP (Largest Contentful Paint): o que mede, como melhorar
- [ ] Entender INP (Interaction to Next Paint): substituiu FID
- [ ] Estudar CLS (Cumulative Layout Shift): causas, como evitar
- [ ] Entender TTFB (Time to First Byte): impacto no LCP
- [ ] Estudar FCP (First Contentful Paint)
- [ ] Aprender a medir com Lighthouse, WebPageTest, Chrome DevTools

#### 19.2 Critical rendering path

- [ ] Estudar render-blocking resources: CSS, JS
- [ ] Entender preload, prefetch, preconnect, dns-prefetch
- [ ] Estudar above-the-fold: inlining critical CSS
- [ ] Entender defer e async em scripts

#### 19.3 Imagens e mídia

- [ ] Estudar formatos: AVIF, WebP, JPEG, PNG — quando usar cada um
- [ ] Entender responsive images: srcset, sizes
- [ ] Estudar lazy loading: loading="lazy", Intersection Observer
- [ ] Entender aspect-ratio para evitar CLS
- [ ] Estudar compressão: qualidade vs tamanho

#### 19.4 Fontes

- [ ] Estudar font-display: auto, block, swap, fallback, optional
- [ ] Entender FOUT (Flash of Unstyled Text) e FOIT
- [ ] Estudar subsetting: carregar só os caracteres necessários
- [ ] Entender preloading de fontes
- [ ] Estudar variable fonts

#### 19.5 JavaScript performance

- [ ] Estudar Long Tasks: o que bloqueia a thread principal
- [ ] Entender scheduler API para dividir trabalho pesado
- [ ] Estudar Web Workers para offload de CPU
- [ ] Entender memory leaks: event listeners, closures, detached DOM

#### 19.6 Profiling e ferramentas

- [ ] Dominar Chrome DevTools Performance tab: flame chart, timings
- [ ] Estudar Chrome DevTools Memory tab: heap snapshots
- [ ] Usar Coverage tab para encontrar CSS/JS não usado
- [ ] Estudar RUM (Real User Monitoring) vs synthetic
- [ ] Implementar Lighthouse CI em pipelines

**Referências recomendadas:**
- Site: web.dev/performance (Google)
- Livro: *Web Performance in Action* — Wagner

---

### Módulo 20 — Mobile e Cross-Platform

> Frontend hoje não é só web.

#### 20.1 Progressive Web Apps

- [ ] Estudar Service Worker lifecycle: install, activate, fetch
- [ ] Implementar caching strategies: cache-first, network-first, stale-while-revalidate
- [ ] Estudar Web App Manifest: ícones, display, theme-color
- [ ] Entender install prompt, beforeinstallprompt
- [ ] Estudar Push API e Notifications API
- [ ] Entender limitações de PWA vs nativo

#### 20.2 React Native (ou Flutter)

- [ ] Estudar a arquitetura: JSI, Fabric, TurboModules (React Native novo)
- [ ] Entender a bridge e seus limitações (legado)
- [ ] Estudar componentes nativos: View, Text, ScrollView, FlatList
- [ ] Entender navegação: React Navigation, Expo Router
- [ ] Estudar native modules: como expor código nativo para JS
- [ ] Entender Expo: managed vs bare workflow

#### 20.3 Diferenças web × mobile

- [ ] Estudar gestos: pan, pinch, tap, swipe — APIs e bibliotecas
- [ ] Entender navegação mobile: stack, tab, drawer
- [ ] Estudar animações mobile: 60fps, Reanimated
- [ ] Entender performance no JS thread vs UI thread

#### 20.4 Distribuição

- [ ] Estudar processo de submissão: App Store, Play Store
- [ ] Entender code signing, certificates, provisioning profiles (iOS)
- [ ] Estudar OTA updates: CodePush, Expo Updates
- [ ] Entender CI/CD para mobile: Fastlane, EAS Build

---

## Fase 3 — Backend de Engenheiro

> Estimativa: 9–15 meses de prática intensiva.

---

### Módulo 21 — Design de APIs em Produção

> A interface que outros times vão usar por anos. Erros aqui são caros de desfazer.

#### 21.1 REST maduro

- [ ] Estudar o modelo de recursos: substantivos, não verbos
- [ ] Dominar métodos HTTP: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
- [ ] Estudar status codes corretos: 200, 201, 204, 301, 302, 304, 400, 401, 403, 404, 409, 422, 429, 500, 503
- [ ] Entender HATEOAS: links, discoverability
- [ ] Estudar paginação: cursor-based vs offset-based (tradeoffs reais)
- [ ] Entender filtragem, ordenação, sparse fieldsets
- [ ] Estudar idempotência: GET, PUT, DELETE são idempotentes; POST não
- [ ] Implementar idempotency keys para POST

#### 21.2 Modelagem de erros

- [ ] Estudar RFC 7807 (Problem Details): type, title, status, detail, instance
- [ ] Implementar error responses consistentes
- [ ] Entender erros de validação: campo por campo, não genérico
- [ ] Estudar error propagation: não vazar detalhes internos

#### 21.3 Versionamento

- [ ] Estudar URI versioning (/v1/): simples, explícito
- [ ] Entender header versioning (Accept: application/vnd.api+json;version=1)
- [ ] Estudar content negotiation
- [ ] Entender breaking vs non-breaking changes
- [ ] Estudar estratégias de deprecação

#### 21.4 GraphQL

- [ ] Estudar schema definition: types, queries, mutations, subscriptions
- [ ] Entender resolvers: parent, args, context, info
- [ ] Estudar N+1 problem em GraphQL e DataLoader
- [ ] Entender federation: subgraphs, supergraph
- [ ] Estudar persisted queries, query depth limiting, cost analysis
- [ ] Entender quando GraphQL é melhor que REST (e quando não é)

#### 21.5 gRPC e Protocol Buffers

- [ ] Estudar Protocol Buffers: syntax, tipos, encoding binário
- [ ] Entender gRPC service definitions
- [ ] Estudar streaming: unary, server streaming, client streaming, bidirectional
- [ ] Entender quando usar gRPC (service-to-service) vs REST (público)
- [ ] Estudar gRPC-Web para browser

#### 21.6 API gateways e BFF

- [ ] Estudar API gateway: auth, rate limiting, routing, aggregation
- [ ] Entender BFF (Backend for Frontend): um backend por cliente
- [ ] Estudar schema stitching vs federation em GraphQL

#### 21.7 Documentação

- [ ] Escrever OpenAPI spec do zero
- [ ] Estudar schema-first vs code-first: tradeoffs
- [ ] Entender como documentação é produto: exemplos, playground

---

### Módulo 22 — Bancos de Dados Relacionais a Fundo

> Este módulo mata muito candidato a sênior em entrevista. É onde a maioria tem buracos enormes.

#### 22.1 SQL avançado

- [ ] Dominar window functions: ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, FIRST_VALUE
- [ ] Dominar CTEs (Common Table Expressions): recursivas, múltiplas
- [ ] Estudar lateral joins (LATERAL, CROSS APPLY)
- [ ] Entender GROUPING SETS, CUBE, ROLLUP
- [ ] Dominar subqueries correlacionadas
- [ ] Estudar JSON functions em PostgreSQL

#### 22.2 Modelagem

- [ ] Estudar normalização: 1NF, 2NF, 3NF, BCNF — com exemplos reais
- [ ] Entender quando desnormalizar: leitura pesada, analytics
- [ ] Estudar modelagem de hierarquias: adjacency list, closure table, nested sets
- [ ] Entender soft delete: tradeoffs vs hard delete
- [ ] Estudar audit tables e temporal tables

#### 22.3 Índices em profundidade

- [ ] Estudar B-tree index: estrutura interna, quando funciona bem
- [ ] Entender hash index: equality only
- [ ] Estudar GIN: array, JSONB, full-text search
- [ ] Entender GiST: geometric, exclusion constraints
- [ ] Estudar partial indexes: indexar só um subconjunto
- [ ] Entender covering indexes (index-only scan)
- [ ] Estudar multi-column indexes: ordem das colunas, leading column
- [ ] Entender index bloat e VACUUM em PostgreSQL

#### 22.4 Query planner

- [ ] Aprender EXPLAIN: nodes, costs, rows
- [ ] Dominar EXPLAIN ANALYZE: actual times, actual rows
- [ ] Estudar planos de execução: sequential scan, index scan, index-only scan, bitmap heap scan
- [ ] Entender join strategies: nested loop, hash join, merge join
- [ ] Estudar statistics: pg_statistic, ANALYZE, histogram bounds
- [ ] Entender planner hints (e por que são perigosos)

#### 22.5 Transações e concorrência

- [ ] Dominar ACID: o que cada letra significa na prática
- [ ] Estudar isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable
- [ ] Entender anomalias: dirty read, non-repeatable read, phantom read, write skew
- [ ] Estudar MVCC: como PostgreSQL implementa
- [ ] Entender locks: row-level, table-level, advisory
- [ ] Estudar deadlocks: detecção e prevenção
- [ ] Entender SELECT FOR UPDATE, FOR SHARE

#### 22.6 Escalabilidade

- [ ] Estudar replicação: physical (WAL streaming) vs logical
- [ ] Entender read replicas: lag, consistência eventual
- [ ] Estudar particionamento: range, list, hash
- [ ] Entender connection pooling: PgBouncer, pooling modes
- [ ] Estudar prepared statements e por que usar

#### 22.7 Operações em produção

- [ ] Estudar migrations zero-downtime: expand-contract pattern
- [ ] Entender index creation concurrently
- [ ] Estudar VACUUM, AUTOVACUUM, bloat
- [ ] Entender pg_stat_statements para identificar queries lentas
- [ ] Estudar logical replication para migrations sem downtime

**Referências recomendadas:**
- Documentação: PostgreSQL (inteira, sério)
- Livro: *PostgreSQL: Up and Running* — Obe & Hsu
- Livro: *Use The Index, Luke* (gratuito online)

---

### Módulo 23 — NoSQL e Escolha de Storage

> Cada banco resolve um problema. Saber escolher é o que distingue arquitetura de colecionar tecnologias.

#### 23.1 Key-Value

- [ ] Estudar Redis: data types (string, hash, list, set, sorted set, stream)
- [ ] Entender Redis como cache: TTL, eviction policies, key design
- [ ] Estudar Redis como message broker: pub/sub, streams
- [ ] Entender Redis persistence: RDB, AOF, tradeoffs
- [ ] Estudar Redis Cluster: sharding, replicação
- [ ] Entender DynamoDB: partition key, sort key, GSIs, LSIs
- [ ] Estudar DynamoDB pricing model e suas implicações de design

#### 23.2 Document stores

- [ ] Estudar MongoDB: BSON, documentos, collections
- [ ] Entender schema design: embedded vs referenced — tradeoffs reais
- [ ] Estudar aggregation pipeline
- [ ] Entender índices MongoDB: single, compound, multikey, text, geospatial
- [ ] Estudar transações multi-documento
- [ ] Entender quando documento é pior que relacional

#### 23.3 Wide-column

- [ ] Estudar Cassandra: arquitetura peer-to-peer, consistência tunável
- [ ] Entender partition key e clustering columns
- [ ] Estudar como modelagem é query-driven em Cassandra
- [ ] Entender compaction strategies, tombstones

#### 23.4 Busca

- [ ] Estudar Elasticsearch: inverted index, tokenização, analyzers
- [ ] Entender TF-IDF e BM25 scoring
- [ ] Estudar query DSL: match, bool, filter, aggregations
- [ ] Entender mapping, dynamic templates
- [ ] Estudar OpenSearch como alternativa open source

#### 23.5 Bancos de vetores

- [ ] Estudar embeddings: representação semântica de texto/imagem
- [ ] Entender similarity search: cosine, dot product, euclidean
- [ ] Estudar ANN (Approximate Nearest Neighbors): HNSW, IVF
- [ ] Estudar pgvector (PostgreSQL extension)
- [ ] Entender Pinecone, Weaviate, Chroma como opções gerenciadas

#### 23.6 Time-series

- [ ] Estudar TimescaleDB: hypertables, continuous aggregates
- [ ] Entender InfluxDB: line protocol, tags vs fields, retention policies
- [ ] Estudar quando time-series é melhor que PostgreSQL

#### 23.7 Object storage

- [ ] Estudar S3: eventual consistency model, strong consistency (atual)
- [ ] Entender S3 API: presigned URLs, multipart upload, versioning
- [ ] Estudar lifecycle policies, storage classes
- [ ] Entender quando usar S3 vs banco

#### 23.8 Polyglot persistence

- [ ] Estudar como combinar múltiplos storages coerentemente
- [ ] Entender synchronization entre bancos: CDC, dual-write
- [ ] Estudar CQRS com stores diferentes para read e write

---

### Módulo 24 — Autenticação e Autorização

> Onde brechas viram manchete. Responsabilidade real de qualquer engenheiro.

#### 24.1 Fundamentos de autenticação

- [ ] Estudar hashing de senhas: bcrypt, argon2id, scrypt — parâmetros
- [ ] Entender salt e pepper: por que e como
- [ ] Estudar timing attacks: comparação segura de hashes
- [ ] Entender credential stuffing e proteções

#### 24.2 Sessions e tokens

- [ ] Estudar sessions server-side: armazenamento, invalidação, scalability
- [ ] Entender cookies como transporte de session ID
- [ ] Estudar JWT: header.payload.signature, algoritmos HS256 vs RS256 vs ES256
- [ ] Entender problemas do JWT: revogação, tamanho, none algorithm attack
- [ ] Estudar refresh tokens: rotação, sliding window, family tracking

#### 24.3 OAuth 2.0 e OIDC

- [ ] Estudar Authorization Code + PKCE: fluxo completo passo a passo
- [ ] Entender Client Credentials: machine-to-machine
- [ ] Estudar Device Authorization Grant: TV, CLI
- [ ] Entender scopes, audiences, claims
- [ ] Estudar OpenID Connect: ID token, userinfo endpoint
- [ ] Implementar OAuth server do zero (pelo menos uma vez)

#### 24.4 MFA e autenticação moderna

- [ ] Estudar TOTP: RFC 6238, Google Authenticator
- [ ] Entender WebAuthn/FIDO2/Passkeys: credential creation, assertion
- [ ] Estudar SMS OTP (e por que é fraco)
- [ ] Entender recovery codes: geração, armazenamento

#### 24.5 Autorização

- [ ] Estudar RBAC: roles, permissions, role hierarchy
- [ ] Entender ABAC: attributes, policies, XACML
- [ ] Estudar ReBAC (Relationship-based): Google Zanzibar, OpenFGA
- [ ] Implementar um sistema de autorização do zero
- [ ] Entender row-level security no PostgreSQL

#### 24.6 Multi-tenancy

- [ ] Estudar row-level tenancy: discriminator column, RLS
- [ ] Entender schema-per-tenant: isolamento, complexity
- [ ] Estudar database-per-tenant: máximo isolamento, custo
- [ ] Entender tradeoffs de cada modelo

---

### Módulo 25 — Segurança Aplicada (OWASP+)

> Não é opcional. É higiene de qualquer engenheiro sério.

#### 25.1 OWASP Top 10

- [ ] Estudar cada item do OWASP Top 10 2021 com exemplos reais de exploit e mitigação
- [ ] A01: Broken Access Control
- [ ] A02: Cryptographic Failures
- [ ] A03: Injection (SQL, NoSQL, command, LDAP, template)
- [ ] A04: Insecure Design
- [ ] A05: Security Misconfiguration
- [ ] A06: Vulnerable and Outdated Components
- [ ] A07: Identification and Authentication Failures
- [ ] A08: Software and Data Integrity Failures
- [ ] A09: Security Logging and Monitoring Failures
- [ ] A10: Server-Side Request Forgery (SSRF)

#### 25.2 Vulnerabilidades comuns

- [ ] Estudar XSS: stored, reflected, DOM-based — exploração e prevenção
- [ ] Entender CSRF: SameSite cookie, CSRF tokens
- [ ] Estudar SSRF: bypass de firewalls internos, cloud metadata
- [ ] Entender XXE: XML external entities
- [ ] Estudar insecure deserialization
- [ ] Entender prototype pollution (JavaScript)
- [ ] Estudar path traversal, directory traversal

#### 25.3 Secrets management

- [ ] Estudar HashiCorp Vault: secrets engines, leases, dynamic secrets
- [ ] Entender KMS (Key Management Service): envelope encryption
- [ ] Estudar rotação de secrets: automática, sem downtime
- [ ] Entender never-commit: git-secrets, pre-commit hooks
- [ ] Estudar SOPS para secrets em repositório (quando necessário)

#### 25.4 Supply chain

- [ ] Estudar dependency auditing: npm audit, pip audit
- [ ] Entender SBOM (Software Bill of Materials)
- [ ] Estudar SLSA framework: supply-chain levels
- [ ] Entender sigstore: assinatura de artefatos

#### 25.5 Proteções de infraestrutura

- [ ] Estudar rate limiting: algoritmos (token bucket, leaky bucket, fixed window)
- [ ] Entender WAF (Web Application Firewall): rules, managed rules
- [ ] Estudar DDoS mitigation: absorção, scrubbing, anycast
- [ ] Entender IP allowlisting, geo-blocking

#### 25.6 Criptografia aplicada

- [ ] Estudar criptografia simétrica: AES-GCM, ChaCha20-Poly1305
- [ ] Entender criptografia assimétrica: RSA, ECC (não implementar — usar libs)
- [ ] Estudar funções de hash: SHA-256, SHA-3
- [ ] Entender KDF (Key Derivation Functions): PBKDF2, scrypt, argon2
- [ ] Estudar quando usar o quê: never roll your own crypto

#### 25.7 Threat modeling

- [ ] Estudar STRIDE: Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation
- [ ] Entender data flow diagrams para threat modeling
- [ ] Praticar threat modeling em um sistema real

#### 25.8 Privacidade e compliance

- [ ] Estudar LGPD: bases legais, direitos dos titulares, DPO
- [ ] Entender GDPR: consentimento, portabilidade, direito ao esquecimento
- [ ] Estudar técnicas de privacidade: anonimização, pseudonimização, k-anonymity

---

### Módulo 26 — Mensageria e Processamento Assíncrono

> Toda aplicação séria tem isso. Entender é divisor de águas no nível de senioridade.

#### 26.1 Conceitos fundamentais

- [ ] Entender por que processamento assíncrono existe: desacoplamento, resiliência, throughput
- [ ] Estudar diferença entre filas (queues) e streams
- [ ] Entender diferença entre pub/sub e point-to-point

#### 26.2 Delivery semantics

- [ ] Estudar at-most-once: fire and forget, possibilidade de perda
- [ ] Entender at-least-once: redelivery, duplicatas possíveis
- [ ] Estudar exactly-once: ilusão ou realidade? — por que é difícil
- [ ] Entender idempotência como resposta pragmática ao at-least-once
- [ ] Estudar deduplicação: message IDs, idempotency keys

#### 26.3 RabbitMQ

- [ ] Estudar exchanges: direct, topic, fanout, headers
- [ ] Entender bindings, routing keys
- [ ] Estudar durabilidade: durable queues, persistent messages
- [ ] Entender dead-letter exchanges (DLX)
- [ ] Estudar prefetch count e fairness

#### 26.4 Apache Kafka

- [ ] Estudar arquitetura: brokers, topics, partitions, replicas
- [ ] Entender offsets: committed, current, lag
- [ ] Estudar consumer groups: paralelismo por partição
- [ ] Entender retention: time-based, size-based
- [ ] Estudar log compaction: preservar último valor por chave
- [ ] Entender ISR (In-Sync Replicas) e garantias de durabilidade
- [ ] Estudar Kafka Streams: processamento local, KTable, KStream
- [ ] Entender exactly-once semântics dentro do Kafka (transactional API)
- [ ] Estudar Schema Registry, Avro, evolução de schema

#### 26.5 Padrões de integração

- [ ] Estudar Outbox pattern: garantia de entrega com consistência
- [ ] Entender Inbox pattern: prevenção de processamento duplicado
- [ ] Estudar Saga: orquestração vs coreografia
- [ ] Entender compensating transactions
- [ ] Estudar Dead Letter Queue: tratamento de mensagens problemáticas

#### 26.6 Workers e jobs

- [ ] Implementar worker pool com concorrência controlada
- [ ] Estudar retry com exponential backoff e jitter
- [ ] Entender scheduling: cron, delayed jobs
- [ ] Estudar leader election para jobs singleton
- [ ] Entender prioridade de jobs

---

### Módulo 27 — Arquitetura Limpa e DDD

> Como construir código que sobrevive a 5+ anos de mudanças e equipes.

#### 27.1 SOLID com profundidade

- [ ] Estudar SRP: uma razão para mudar (não "faz uma coisa")
- [ ] Entender OCP: aberto para extensão, fechado para modificação
- [ ] Estudar LSP: subtipos devem ser substituíveis — com exemplos de violação
- [ ] Entender ISP: interfaces específicas por cliente
- [ ] Estudar DIP: depender de abstrações, não de concretizações
- [ ] Praticar identificar violações em código real

#### 27.2 Princípios fundamentais

- [ ] Estudar coupling vs cohesion: métricas e intuição
- [ ] Entender Lei de Demeter: não falar com estranhos
- [ ] Estudar Lei de Conway: arquitetura espelha estrutura de comunicação
- [ ] Entender princípio de menor surpresa

#### 27.3 Arquiteturas em camadas

- [ ] Estudar Hexagonal (Ports & Adapters): ports, adapters, domain
- [ ] Entender Clean Architecture: entities, use cases, interface adapters, frameworks
- [ ] Estudar Onion Architecture: semelhanças e diferenças
- [ ] Entender por que todas convergem para a mesma ideia

#### 27.4 DDD tático

- [ ] Estudar entities: identidade, ciclo de vida
- [ ] Entender value objects: igualdade por valor, imutabilidade
- [ ] Estudar aggregates: raiz de agregado, invariantes, tamanho correto
- [ ] Entender repositories: interface de coleção, sem detalhes de infraestrutura
- [ ] Estudar domain events: o que aconteceu, comunicação entre aggregates
- [ ] Entender domain services: lógica sem lar em entity

#### 27.5 DDD estratégico

- [ ] Estudar bounded contexts: fronteiras explícitas de modelos
- [ ] Entender ubiquitous language: vocabulário compartilhado entre dev e domínio
- [ ] Estudar context maps: relações entre contexts
- [ ] Entender anti-corruption layer: tradução entre contextos
- [ ] Estudar Event Storming como técnica de descoberta

#### 27.6 CQRS e Event Sourcing

- [ ] Estudar CQRS: separação de read e write models
- [ ] Entender quando CQRS ajuda (escala assimétrica) e quando prejudica
- [ ] Estudar Event Sourcing: eventos como source of truth, replay
- [ ] Entender projeções, read models, eventual consistency
- [ ] Entender quando Event Sourcing é over-engineering

---

### Módulo 28 — Padrões de Projeto Aplicados

> Reconhecer e aplicar com julgamento — não decorar o catálogo GoF.

#### 28.1 Criacionais

- [ ] Estudar Factory Method: variação por subclasse
- [ ] Entender Abstract Factory: famílias de objetos
- [ ] Estudar Builder: construção passo a passo, imutabilidade
- [ ] Entender Singleton: por que é considerado anti-padrão em OOP, alternativas
- [ ] Estudar Prototype: clonagem

#### 28.2 Estruturais

- [ ] Estudar Adapter: compatibilidade de interfaces
- [ ] Entender Decorator: adicionar comportamento sem herança
- [ ] Estudar Facade: interface simplificada para subsistema complexo
- [ ] Entender Proxy: controle de acesso, lazy loading, logging
- [ ] Estudar Composite: tree de objetos com interface uniforme

#### 28.3 Comportamentais

- [ ] Estudar Strategy: algoritmos intercambiáveis
- [ ] Entender Observer: publish-subscribe, event systems
- [ ] Estudar State: autômato finito como objeto
- [ ] Entender Command: encapsular ação como objeto, undo/redo
- [ ] Estudar Template Method: esqueleto de algoritmo com ganchos
- [ ] Entender Chain of Responsibility: middleware pattern

#### 28.4 Padrões de integração (EIP)

- [ ] Estudar Message Channel, Message Router, Message Translator
- [ ] Entender Aggregator, Splitter, Scatter-Gather
- [ ] Estudar Pipes and Filters

#### 28.5 Padrões empresariais (Fowler)

- [ ] Estudar Repository: coleção de objetos
- [ ] Entender Unit of Work: track de mudanças
- [ ] Estudar Identity Map: cache de objetos por identidade
- [ ] Entender Data Mapper vs Active Record

#### 28.6 Anti-padrões

- [ ] Estudar God Class, Feature Envy, Data Clump
- [ ] Entender Anemic Domain Model
- [ ] Estudar Service Locator (e por que evitar)
- [ ] Entender quando um "padrão" vira problema

---

## Checkpoint: Pleno de Verdade (Mid / SDE II)

> **Calibração importante:** O que o mercado brasileiro chama de "sênior" frequentemente corresponde a este checkpoint. No mercado global (big tech, scale-ups), este é o pleno (Mid-level / SDE II).

### Critérios concretos para avançar

- [ ] Recebe um problema mal definido e entrega solução completa: código, testes, observabilidade
- [ ] Modela um domínio do zero e justifica decisões arquiteturais com tradeoffs
- [ ] Faz code review com profundidade: design, segurança, performance, não só estilo
- [ ] Resolve incidentes em produção sem entrar em pânico
- [ ] Sabe quando NÃO usar uma tecnologia (mais valioso do que saber usar)
- [ ] Mentora juniores sem ser arrogante ou impaciente
- [ ] Entende o código como custo, não só como entrega

---

## Fase 4 — Infraestrutura e Operações

> Estimativa: 9–12 meses de prática intensiva.

---

### Módulo 29 — Linux e Containers a Fundo

> Container não é mágica. É Linux.

#### 29.1 Namespaces (a base de containers)

- [ ] Estudar PID namespace: isolamento de processo, PID 1 no container
- [ ] Entender NET namespace: interfaces de rede isoladas, veth pairs
- [ ] Estudar MNT namespace: filesystem isolado, pivot_root
- [ ] Entender USER namespace: mapeamento de UIDs
- [ ] Estudar IPC namespace: semáforos, shared memory
- [ ] Entender UTS namespace: hostname isolado
- [ ] Implementar: criar container manualmente com unshare + pivot_root

#### 29.2 Cgroups

- [ ] Estudar cgroups v1: controllers, hierarchy
- [ ] Entender cgroups v2: unified hierarchy
- [ ] Estudar CPU controller: shares, quota, period
- [ ] Entender memory controller: limit, swappiness, OOM killer
- [ ] Estudar IO controller: throttling

#### 29.3 OCI e Docker

- [ ] Estudar OCI Image Spec: layers, manifests, config
- [ ] Entender OCI Runtime Spec: config.json, lifecycle
- [ ] Estudar Docker: daemon, client, containerd, runc
- [ ] Dominar Dockerfile: FROM, RUN, COPY, CMD, ENTRYPOINT, ARG, ENV
- [ ] Entender multi-stage builds: separar build de runtime
- [ ] Estudar BuildKit: cache mounts, secrets, SSH forwarding
- [ ] Entender layer caching: ordem de instruções, cache invalidation

#### 29.4 Imagens mínimas e segurança

- [ ] Estudar distroless: sem shell, sem package manager
- [ ] Entender scratch: imagem vazia para binários estáticos
- [ ] Estudar Alpine: musl libc, apk
- [ ] Entender rootless containers: executar sem root no host
- [ ] Estudar seccomp profiles: bloquear syscalls desnecessárias
- [ ] Entender AppArmor/SELinux para containers

#### 29.5 Networking de containers

- [ ] Estudar bridge network: veth pairs, iptables, NAT
- [ ] Entender host network: sem isolamento de rede
- [ ] Estudar overlay network: conectar containers em múltiplos hosts
- [ ] Entender DNS em Docker: resolução por nome de serviço

#### 29.6 Registries e segurança de imagens

- [ ] Estudar Docker Hub, ECR, GCR, ACR
- [ ] Entender vulnerability scanning: Trivy, Grype
- [ ] Estudar image signing: Cosign, Notary
- [ ] Entender image promotion entre registries

---

### Módulo 30 — Kubernetes em Produção

> Não só `kubectl apply`. Entender por que Kubernetes existe e o que ele faz.

#### 30.1 Arquitetura

- [ ] Estudar control plane: kube-apiserver, etcd, kube-scheduler, kube-controller-manager
- [ ] Entender etcd: raft consensus, por que é crítico
- [ ] Estudar worker nodes: kubelet, kube-proxy, container runtime
- [ ] Entender o loop de reconciliação (control loop) como padrão central

#### 30.2 Workloads

- [ ] Dominar Pod: spec, lifecycle, restart policies
- [ ] Estudar Deployment: ReplicaSet, rolling update, rollback
- [ ] Entender StatefulSet: stable network identity, ordered scaling
- [ ] Estudar DaemonSet: um pod por node
- [ ] Entender Job e CronJob: batch e scheduled
- [ ] Estudar init containers e sidecar containers

#### 30.3 Networking no Kubernetes

- [ ] Estudar Services: ClusterIP, NodePort, LoadBalancer, ExternalName
- [ ] Entender Endpoints e EndpointSlices
- [ ] Estudar Ingress: routing HTTP, TLS termination
- [ ] Entender NetworkPolicies: controle de tráfego L3/L4
- [ ] Estudar CNI: Calico, Cilium, Flannel

#### 30.4 Storage

- [ ] Estudar Persistent Volumes (PV) e Persistent Volume Claims (PVC)
- [ ] Entender StorageClasses: dynamic provisioning
- [ ] Estudar CSI (Container Storage Interface)
- [ ] Entender Volume access modes: ReadWriteOnce, ReadOnlyMany, ReadWriteMany

#### 30.5 Configuração e segurança

- [ ] Dominar ConfigMaps e Secrets
- [ ] Estudar RBAC: Role, ClusterRole, RoleBinding, ClusterRoleBinding
- [ ] Entender ServiceAccounts e workload identity
- [ ] Estudar PodSecurityAdmission, SecurityContext
- [ ] Entender Resource requests e limits: QoS classes

#### 30.6 Autoscaling

- [ ] Estudar HPA (Horizontal Pod Autoscaler): CPU, memória, custom metrics
- [ ] Entender VPA (Vertical Pod Autoscaler): right-sizing
- [ ] Estudar Cluster Autoscaler: adicionar/remover nodes
- [ ] Entender KEDA: event-driven autoscaling (Kafka lag, queue depth)

#### 30.7 GitOps e deploy

- [ ] Estudar Helm: charts, templates, values, releases
- [ ] Entender Kustomize: overlays, patches
- [ ] Estudar ArgoCD: sync, health checks, app of apps
- [ ] Entender Flux: GitOps toolkit, image automation

#### 30.8 Service mesh

- [ ] Estudar Istio: data plane, control plane, Envoy sidecar
- [ ] Entender mTLS automático entre serviços
- [ ] Estudar Linkerd: alternativa mais simples
- [ ] Entender quando service mesh vale o custo

#### 30.9 Operators e CRDs

- [ ] Estudar Custom Resource Definitions (CRDs)
- [ ] Entender operator pattern: estender Kubernetes
- [ ] Implementar um operator simples com kubebuilder ou operator-sdk

---

### Módulo 31 — Cloud Profunda

> AWS, GCP ou Azure. Cobertura ampla com profundidade onde importa.

#### 31.1 IAM e segurança

- [ ] Dominar IAM: users, groups, roles, policies (identity vs resource)
- [ ] Estudar trust relationships: role assumption entre serviços
- [ ] Entender princípio do menor privilégio na prática
- [ ] Estudar SCPs (Service Control Policies) em Organizations
- [ ] Entender federation: SAML, OIDC com provedor externo

#### 31.2 Networking na cloud

- [ ] Estudar VPC: subnets públicas e privadas, routing tables
- [ ] Entender Internet Gateway, NAT Gateway, Egress-only IGW
- [ ] Estudar VPC Peering, Transit Gateway
- [ ] Entender PrivateLink / VPC Endpoints: sem tráfego pela internet
- [ ] Estudar Security Groups vs NACLs
- [ ] Entender Route 53 / Cloud DNS: routing policies, health checks

#### 31.3 Compute

- [ ] Estudar EC2 / Compute Engine: tipos de instância, lifecycle
- [ ] Entender spot / preemptible: custo e interrupção
- [ ] Estudar Lambda / Cloud Functions / Cloud Run: cold start, concorrência, limites
- [ ] Entender ECS Fargate: serverless containers
- [ ] Estudar Auto Scaling Groups: launch templates, scaling policies

#### 31.4 Storage na cloud

- [ ] Dominar S3: bucket policies, ACLs, object versioning
- [ ] Estudar S3 storage classes: Standard, IA, Glacier
- [ ] Entender lifecycle policies
- [ ] Estudar EBS: tipos (gp3, io2), snapshots, RAID
- [ ] Entender EFS: NFS gerenciado, performance modes

#### 31.5 Databases gerenciados

- [ ] Estudar RDS: multi-AZ, read replicas, parameter groups
- [ ] Entender Aurora: shared storage, global database
- [ ] Estudar DynamoDB: on-demand vs provisioned, DAX
- [ ] Entender ElastiCache: Redis vs Memcached

#### 31.6 Mensageria e eventos

- [ ] Estudar SQS: standard vs FIFO, visibility timeout, DLQ
- [ ] Entender SNS: topics, subscriptions, fan-out
- [ ] Estudar EventBridge: event bus, rules, targets
- [ ] Entender Kinesis: shards, data retention

#### 31.7 FinOps e custo

- [ ] Estudar Cost Explorer e budgets
- [ ] Entender Savings Plans vs Reserved Instances vs On-Demand
- [ ] Estudar tagging strategy para cost allocation
- [ ] Entender rightsizing e Compute Optimizer

#### 31.8 Multi-region e DR

- [ ] Estudar AZs vs Regions: latência, preço, compliance
- [ ] Entender active-active vs active-passive multi-region
- [ ] Estudar RTO (Recovery Time Objective) e RPO (Recovery Point Objective)
- [ ] Entender Route 53 failover e latency routing

---

### Módulo 32 — Infrastructure as Code

> Infra clicada à mão é dívida técnica garantida.

#### 32.1 Terraform

- [ ] Estudar HCL: providers, resources, data sources, outputs, variables
- [ ] Entender state: local e remote, locking
- [ ] Estudar modules: criação, versionamento, input/output
- [ ] Entender workspaces para múltiplos ambientes
- [ ] Estudar drift detection e `terraform refresh`
- [ ] Entender `terraform import` para recursos existentes
- [ ] Estudar Terragrunt para DRY terraform

#### 32.2 Pulumi

- [ ] Estudar IaC com linguagem real (TypeScript, Python, Go)
- [ ] Entender vantagens vs desvantagens comparado ao Terraform
- [ ] Estudar stack references entre projetos

#### 32.3 Modularização e boas práticas

- [ ] Estudar estrutura de módulos reutilizáveis
- [ ] Entender module versioning com Terraform Registry
- [ ] Estudar ambientes sem duplicação: workspaces vs separate states
- [ ] Entender secret handling em IaC: Vault provider, SOPS

#### 32.4 Policy as Code

- [ ] Estudar Open Policy Agent (OPA): Rego, query
- [ ] Entender Conftest para validar IaC
- [ ] Estudar Sentinel (Terraform Cloud)
- [ ] Entender guardrails preventivos vs detectivos

#### 32.5 Imutabilidade

- [ ] Estudar Packer: construir AMIs e imagens
- [ ] Entender imutabilidade de infraestrutura: substituir vs atualizar
- [ ] Estudar golden images vs bootstrap

---

### Módulo 33 — CI/CD e Cultura de Delivery

> Frequência de deploy é proxy de saúde de engenharia.

#### 33.1 Fundamentos

- [ ] Estudar Continuous Integration: o que realmente significa
- [ ] Entender Continuous Delivery vs Continuous Deployment
- [ ] Estudar DORA metrics: deploy frequency, lead time, MTTR, change failure rate

#### 33.2 Pipelines

- [ ] Dominar GitHub Actions: workflows, jobs, steps, matrix
- [ ] Estudar GitLab CI: stages, artifacts, cache
- [ ] Entender self-hosted runners: segurança, custo
- [ ] Estudar paralelização de testes no CI
- [ ] Entender caching de dependências no CI

#### 33.3 Estratégias de deploy

- [ ] Estudar rolling deployment: gradual replacement
- [ ] Entender blue-green: swap imediato, rollback simples
- [ ] Estudar canary: percentual crescente de tráfego
- [ ] Entender feature flags: deploy sem ativar, separar deploy de release
- [ ] Estudar progressive delivery: LaunchDarkly, Unleash, Flagsmith

#### 33.4 Qualidade no pipeline

- [ ] Implementar: lint, type check, unit tests, integration tests em paralelo
- [ ] Estudar testes de fumaça pós-deploy
- [ ] Entender flaky tests: detecção, quarentena, eliminação
- [ ] Estudar secret scanning no pipeline: gitleaks, truffleHog

#### 33.5 Trunk-based development

- [ ] Estudar trunk-based development: commits diários na main
- [ ] Entender feature flags como substituto de branches longas
- [ ] Estudar branches de curta duração: máx 1-2 dias
- [ ] Entender abstract branch pattern

---

### Módulo 34 — Observabilidade e SRE

> Você não pode operar o que não consegue medir.

#### 34.1 Os três pilares

- [ ] Estudar logs: quando usar, limitações
- [ ] Entender métricas: agregação, cardinalidade, granularidade
- [ ] Estudar distributed tracing: por que logs não bastam
- [ ] Entender como os três se complementam: correlação

#### 34.2 Logging

- [ ] Estudar logging estruturado: JSON, campos padronizados
- [ ] Entender correlation IDs: rastrear requests entre serviços
- [ ] Estudar log levels: DEBUG, INFO, WARN, ERROR, FATAL — quando usar cada
- [ ] Entender log sampling: reduzir volume sem perder sinal
- [ ] Estudar Loki, Elasticsearch, CloudWatch para armazenamento

#### 34.3 Métricas

- [ ] Estudar tipos: counter, gauge, histogram, summary
- [ ] Entender cardinalidade: por que labels de alta cardinalidade são perigosos
- [ ] Estudar Prometheus: scraping, PromQL, recording rules
- [ ] Entender Grafana: dashboards, alerting
- [ ] Estudar exemplars: conectar métricas com traces

#### 34.4 Distributed tracing

- [ ] Estudar spans: nome, atributos, eventos, status
- [ ] Entender context propagation: W3C trace context
- [ ] Estudar sampling: head-based vs tail-based
- [ ] Entender OpenTelemetry: padrão unificado (traces + metrics + logs)
- [ ] Estudar Jaeger, Tempo como backends de tracing

#### 34.5 SLOs e SLAs

- [ ] Estudar SLI (Service Level Indicator): métricas que importam para usuário
- [ ] Entender SLO (Service Level Objective): metas realistas
- [ ] Estudar error budgets: quanto posso gastar?
- [ ] Entender SLA (Service Level Agreement): compromisso legal
- [ ] Estudar alerting baseado em error budget

#### 34.6 Alerting saudável

- [ ] Estudar symptom-based alerting vs cause-based
- [ ] Entender alert fatigue: o que acontece quando tem alertas demais
- [ ] Estudar páginas (urgente) vs tickets (não-urgente)
- [ ] Entender runbooks: o que fazer quando alerta dispara

#### 34.7 Postmortems e RCA

- [ ] Estudar postmortems sem culpa (blameless)
- [ ] Entender 5 Whys
- [ ] Estudar Ishikawa (fishbone diagram)
- [ ] Entender como escrever um postmortem que melhora o sistema

#### 34.8 Chaos engineering

- [ ] Estudar princípios de chaos engineering
- [ ] Entender steady state hypothesis
- [ ] Estudar Chaos Monkey, Gremlin, Chaos Mesh, Litmus
- [ ] Entender Game Days: execício planejado de falha

---

### Módulo 35 — DevSecOps

> Segurança integrada ao pipeline, não adicionada depois.

#### 35.1 SAST e DAST

- [ ] Estudar SAST (Static Analysis Security Testing): análise de código
- [ ] Entender DAST (Dynamic Analysis): testa app em execução
- [ ] Estudar IAST (Interactive): instrumentação em runtime
- [ ] Estudar SCA (Software Composition Analysis): vulnerabilidades em deps

#### 35.2 Container security

- [ ] Estudar Trivy: scan de imagens, filesystem, repositório
- [ ] Entender Grype, Snyk para scanning
- [ ] Estudar Falco: detecção de comportamento anômalo em runtime
- [ ] Entender admission controllers para bloquear imagens inseguras

#### 35.3 Zero trust

- [ ] Estudar modelo zero trust: never trust, always verify
- [ ] Entender BeyondCorp (Google): acesso baseado em identidade, não rede
- [ ] Estudar service-to-service auth: mTLS, SPIFFE/SPIRE
- [ ] Entender network segmentation

---

## Fase 5 — Sistemas Distribuídos e Arquitetura

> Estimativa: 12–18 meses de estudo profundo e experiência prática.

---

### Módulo 36 — Fundamentos de Sistemas Distribuídos

> A teoria que separa sêniores reais de quem decora receita de arquitetura.

#### 36.1 Falácias e realidade

- [ ] Estudar as 8 falácias da computação distribuída (Deutsch) e suas implicações práticas
- [ ] Entender partial failure: o que diferencia sistemas distribuídos
- [ ] Estudar gray failures: não é up, não é down — pior dos mundos

#### 36.2 Tempo e ordenação

- [ ] Estudar problema de sincronização de relógios: clock drift
- [ ] Entender relógios lógicos de Lamport: happens-before
- [ ] Estudar vector clocks: causalidade completa
- [ ] Entender Google TrueTime: GPS + atomic clocks
- [ ] Estudar o problema dos Dois Generais: impossibilidade de garantia

#### 36.3 Teoremas fundamentais

- [ ] Estudar CAP theorem: prova, interpretação correta, nuances
- [ ] Entender PACELC: latency vs consistency em partições e normalidade
- [ ] Estudar FLP impossibility: consensus em sistema assíncrono

#### 36.4 Modelos de consistência

- [ ] Estudar linearizability (strongest): operações como se fossem atômicas globais
- [ ] Entender sequential consistency: ordem total, sem real-time guarantee
- [ ] Estudar causal consistency: apenas causalidade é preservada
- [ ] Entender eventual consistency: convergência sem garantia de quando
- [ ] Estudar monotonic reads, read-your-writes, consistent prefix

#### 36.5 Consensus

- [ ] Estudar Paxos: proposers, acceptors, learners, fases
- [ ] Estudar Raft: paper completo, leader election, log replication, safety
- [ ] Entender Multi-Paxos e suas otimizações
- [ ] Estudar Byzantine fault tolerance: quando adversários estão presentes

#### 36.6 Replicação

- [ ] Estudar replicação leader-follower: sync vs async
- [ ] Entender replicação multi-leader: conflicts, last-write-wins, CRDTs
- [ ] Estudar replicação leaderless: quorum reads/writes (W + R > N)
- [ ] Entender hinted handoff, read repair, anti-entropy

#### 36.7 Detecção de falhas

- [ ] Estudar gossip protocol: disseminação de informação
- [ ] Entender failure detectors: perfect, eventual, heartbeats
- [ ] Estudar Phi Accrual Failure Detector (Akka, Cassandra)

**Referências recomendadas:**
- Livro: *Designing Data-Intensive Applications* — Kleppmann (capítulos 5-9)
- Paper: *Raft: In Search of an Understandable Consensus Algorithm*
- Paper: *Dynamo: Amazon's Highly Available Key-Value Store*

---

### Módulo 37 — Escalabilidade na Prática

> Como sistemas passam de 100 para 100 milhões de usuários.

#### 37.1 Estratégias de scaling

- [ ] Estudar scaling vertical: até onde vai, limitações
- [ ] Entender scaling horizontal: stateless vs stateful
- [ ] Estudar decomposição por domínio vs por carga

#### 37.2 Sharding e particionamento

- [ ] Estudar sharding por hash: distribuição uniforme
- [ ] Entender sharding por range: range scans, hot spots
- [ ] Estudar consistent hashing: virtual nodes, rebalancing mínimo
- [ ] Entender resharding: como fazer sem downtime

#### 37.3 Replicação de leitura

- [ ] Estudar read replicas: lag, read-your-writes inconsistency
- [ ] Entender write fanout em social networks
- [ ] Estudar cache-aside, write-through, write-back
- [ ] Entender read-heavy vs write-heavy systems

#### 37.4 Caching em múltiplos níveis

- [ ] Estudar client cache: browser, apps
- [ ] Entender CDN: edge caching, cache invalidation em edge
- [ ] Estudar application cache: Redis, Memcached
- [ ] Entender database query cache: quando ajuda e quando prejudica
- [ ] Estudar cache invalidation: the hard problem
- [ ] Entender thundering herd em cache miss

#### 37.5 Otimização de throughput

- [ ] Estudar batching: reduzir round trips
- [ ] Entender pipelining: enviar sem esperar resposta
- [ ] Estudar connection multiplexing: HTTP/2, gRPC
- [ ] Entender compression: custo CPU vs ganho de rede

#### 37.6 Capacity planning

- [ ] Estudar estimativas de back-of-envelope
- [ ] Entender Lei de Little: L = λW
- [ ] Estudar load testing como base para capacity
- [ ] Entender cost modeling: compute, storage, network

---

### Módulo 38 — Padrões de Microsserviços

> E também quando NÃO usar microsserviços.

#### 38.1 Quando não usar

- [ ] Estudar monolito modular como ponto de partida
- [ ] Entender custo de distribuição: latência, complexidade operacional
- [ ] Estudar strangler fig como transição gradual
- [ ] Entender premature decomposition

#### 38.2 Decomposição

- [ ] Estudar decomposição por bounded context (não por entidade)
- [ ] Entender service granularity: micro demais vs macro demais
- [ ] Estudar shared database anti-pattern
- [ ] Entender data ownership por serviço

#### 38.3 Comunicação

- [ ] Estudar síncrona (REST, gRPC): acoplamento temporal
- [ ] Entender assíncrona (eventos, mensagens): desacoplamento, complexidade
- [ ] Estudar quando cada uma é adequada
- [ ] Entender fan-out: notificar múltiplos serviços

#### 38.4 Resiliência

- [ ] Estudar circuit breaker: states, thresholds, recovery
- [ ] Entender retry com exponential backoff + jitter
- [ ] Estudar timeout: o que acontece sem timeout
- [ ] Entender bulkhead: isolar falhas
- [ ] Estudar fallback: degradação graciosa

#### 38.5 Service discovery

- [ ] Estudar client-side discovery: Eureka, Consul
- [ ] Entender server-side discovery: load balancer, Kubernetes Service
- [ ] Estudar DNS-based service discovery

#### 38.6 Transações distribuídas

- [ ] Estudar 2PC (Two-Phase Commit): bloqueante, problema do coordenador
- [ ] Entender Saga: compensating transactions
- [ ] Estudar coreografia de Saga: eventos, sem coordenador
- [ ] Entender orquestração de Saga: coordenador central
- [ ] Estudar por que evitar distributed transactions sempre que possível

---

### Módulo 39 — Arquitetura Orientada a Eventos

> Onde sistemas modernos de alto throughput realmente vivem.

#### 39.1 Eventos como contrato

- [ ] Estudar diferença entre eventos e comandos
- [ ] Entender event schema design: o que incluir, o que não incluir
- [ ] Estudar schema evolution: backward, forward, full compatibility
- [ ] Entender Avro vs Protobuf vs JSON Schema para eventos
- [ ] Estudar Schema Registry: versioning, compatibility checks

#### 39.2 Stream processing

- [ ] Estudar Kafka Streams: KStream, KTable, windowing, joins
- [ ] Entender Apache Flink: stateful processing, checkpointing
- [ ] Estudar aggregations, windowing (tumbling, sliding, session)
- [ ] Entender exactamente-once processing

#### 39.3 Materialized views e CDC

- [ ] Estudar materialized views como read models
- [ ] Entender CDC (Change Data Capture): Debezium, capturar mudanças do banco
- [ ] Estudar log-based CDC vs trigger-based
- [ ] Entender como construir read models com eventos

#### 39.4 Reliability em eventos

- [ ] Estudar Outbox pattern completo: implementação, falhas
- [ ] Entender Inbox pattern: deduplicação
- [ ] Estudar reprocessamento e replay de eventos
- [ ] Entender event time vs processing time
- [ ] Estudar watermarks para lidar com late arrivals

---

### Módulo 40 — Performance Engineering

> Otimização baseada em medição, não em achismo.

#### 40.1 Fundamentos de performance

- [ ] Estudar latência vs throughput: tradeoffs
- [ ] Entender percentis: P50, P95, P99, P999 — por que não usar média
- [ ] Estudar Lei de Amdahl: ganho máximo com paralelismo
- [ ] Entender Lei de Little: relação entre concorrência, throughput e latência
- [ ] Estudar coordinated omission: erro clássico em benchmarks

#### 40.2 Profiling em produção

- [ ] Estudar continuous profiling: Pyroscope, Parca
- [ ] Entender CPU profiling: flame graphs, hot spots
- [ ] Estudar allocation profiling: GC pressure, object churn
- [ ] Entender lock profiling: contention

#### 40.3 Diagnóstico por categoria

- [ ] Estudar CPU bound: profiling, algoritmos, vetorização
- [ ] Entender I/O bound: async I/O, batching, caching
- [ ] Estudar memory bound: locality, estruturas de dados compactas
- [ ] Entender lock-contention bound: lock-free, sharding de locks

#### 40.4 Database performance

- [ ] Estudar N+1 em ORMs: detecção, eager loading, DataLoader
- [ ] Entender connection pool sizing: fórmula de Hikari
- [ ] Estudar query batching
- [ ] Entender índices como resposta a slow queries

#### 40.5 Low-level optimizations

- [ ] Estudar zero-copy: sendfile, splice
- [ ] Entender mmap para leitura de arquivos
- [ ] Estudar buffer pooling: evitar alocação
- [ ] Entender struct packing para cache efficiency

#### 40.6 Benchmarking honesto

- [ ] Estudar benchmarking metodologicamente correto: warmup, múltiplas amostras
- [ ] Entender benchmarks enganosos: micro-benchmark fallacy
- [ ] Estudar statistically significant comparisons
- [ ] Entender regression testing de performance

---

### Módulo 41 — System Design — Estudos de Caso

> Estudar como empresas grandes resolveram problemas reais.

#### 41.1 Papers seminais obrigatórios

- [ ] Ler e entender: *Dynamo* (Amazon) — sistemas de alta disponibilidade
- [ ] Ler e entender: *Bigtable* (Google) — wide-column storage
- [ ] Ler e entender: *GFS* (Google) — distributed filesystem
- [ ] Ler e entender: *MapReduce* (Google) — batch processing
- [ ] Ler e entender: *Spanner* (Google) — global distributed database
- [ ] Ler e entender: *Kafka* (LinkedIn) — messaging e streaming
- [ ] Ler e entender: *Raft* — consensus algorithm

#### 41.2 Engineering blogs obrigatórios

- [ ] Estudar: Netflix Engineering — resiliência, chaos engineering
- [ ] Estudar: Uber Engineering — geospatial, real-time
- [ ] Estudar: Stripe Engineering — payments, reliability
- [ ] Estudar: Discord Engineering — scaling chat, cassandra
- [ ] Estudar: Cloudflare Blog — edge, networking
- [ ] Estudar: Figma Engineering — real-time collaboration

#### 41.3 System designs clássicos

- [ ] Projetar: URL shortener (hashing, redirecionamento, analytics)
- [ ] Projetar: Twitter timeline (fan-out, cache, eventual consistency)
- [ ] Projetar: Distributed cache (consistent hashing, eviction)
- [ ] Projetar: Search autocomplete (trie, ranking, real-time)
- [ ] Projetar: Rate limiter (token bucket, sliding window, distributed)
- [ ] Projetar: Chat system (WebSocket, presence, delivery)
- [ ] Projetar: Video platform (CDN, chunking, transcoding)
- [ ] Projetar: Payment system (idempotência, saga, reconciliação)
- [ ] Projetar: Ad serving system (targeting, real-time bidding)

#### 41.4 Estimativas (back-of-envelope)

- [ ] Dominar: números que todo engenheiro deve saber (latências, tamanhos)
- [ ] Praticar: storage estimation
- [ ] Praticar: throughput estimation
- [ ] Praticar: bandwidth estimation
- [ ] Praticar: server count estimation

---

### Módulo 42 — Confiabilidade e Resiliência

> Construir para o caos, não para o caminho feliz.

#### 42.1 Failure modes

- [ ] Estudar hardware failures: disk, network, power
- [ ] Entender gray failures: parcialmente disponível é pior que totalmente indisponível
- [ ] Estudar cascading failures: como um serviço derruba toda a cadeia
- [ ] Entender human errors: a causa mais comum de outage

#### 42.2 Graceful degradation

- [ ] Estudar fallback responses: caches, valores padrão
- [ ] Entender feature degradation: funcionalidade reduzida sem falha total
- [ ] Estudar load shedding: rejeitar carga excessiva explicitamente
- [ ] Entender priority queues em momento de stress

#### 42.3 Multi-region e DR

- [ ] Estudar active-active: tráfego em múltiplas regiões simultâneamente
- [ ] Entender active-passive: failover manual ou automático
- [ ] Estudar data replication entre regiões: lag, conflicts
- [ ] Entender RTO e RPO: definir, medir, testar

#### 42.4 Backup e restore

- [ ] Estudar estratégias de backup: full, incremental, differential
- [ ] Entender restore testing: backup sem restore é ilusão
- [ ] Estudar point-in-time recovery (PITR)
- [ ] Entender backup encryption e armazenamento geographicamente separado

#### 42.5 Problemas de retry

- [ ] Estudar retry storms: amplificação de carga em falha
- [ ] Entender thundering herd: múltiplos clientes reconectando simultaneamente
- [ ] Estudar jitter: randomização de retry para suavizar picos
- [ ] Entender circuit breaker como proteção de downstream

---

## Checkpoint: Sênior Real (SDE III / Senior)

> **Calibração importante:** Este é o nível de sênior que big tech contrata. "Anos de experiência" não vira sênior automaticamente — é capacidade demonstrada de tomar decisões arquiteturais e operar sistemas críticos com autonomia e confiança.

### Critérios concretos para avançar

- [ ] Recebe um problema de negócio aberto e entrega arquitetura completa com tradeoffs explicados
- [ ] Lidera incidentes Sev1 mantendo a calma e estruturando a resposta
- [ ] É procurado por outros times para revisar designs (não só código)
- [ ] Faz tradeoff explícito entre performance, custo, time-to-market e dívida técnica
- [ ] Escreve design docs que são usados por anos como referência
- [ ] Já liderou a refatoração de um sistema legado grande sem quebrar o negócio
- [ ] Eleva o nível técnico de todos ao redor sem ser visto como "o cara difícil"
- [ ] Conhece os limites do seu próprio conhecimento e articula isso claramente

---

## Fase 6 — Liderança Técnica e Impacto

> Esta fase é contínua — não tem data de conclusão.

---

### Módulo 43 — Comunicação Técnica de Alto Nível

> Sêniores e Staff engineers escrevem mais do que codam. Isso surpreende muita gente.

#### 43.1 Design Documents

- [ ] Estudar estrutura de design doc: contexto, problema, alternativas, decisão, tradeoffs
- [ ] Entender como escrever alternativas de forma honesta (não só validar a decisão já tomada)
- [ ] Estudar como documentar suposições e riscos
- [ ] Praticar: escrever 3+ design docs reais com feedback

#### 43.2 RFC e ADR

- [ ] Estudar RFC process: proposta, discussão, aceitação
- [ ] Entender ADR (Architecture Decision Record): formato leve, persistência
- [ ] Estudar como tornar decisões técnicas rastreáveis
- [ ] Entender quais decisões merecem ADR e quais são over-documentation

#### 43.3 Postmortems

- [ ] Estudar estrutura: timeline, impacto, causa raiz, ações
- [ ] Entender blameless culture: sistemas, não pessoas
- [ ] Praticar escrever postmortem de um incidente real ou simulado

#### 43.4 Apresentações

- [ ] Estudar comunicação para diferentes audiências: engenheiros, PMs, C-level
- [ ] Entender pyramid principle: conclusão primeiro, detalhes depois
- [ ] Estudar storytelling com dados técnicos
- [ ] Praticar apresentar decisions técnicas sem jargão desnecessário

#### 43.5 Diagramas que comunicam

- [ ] Estudar C4 model: context, container, component, code
- [ ] Entender sequence diagrams (UML subset)
- [ ] Estudar data flow diagrams
- [ ] Aprender a fazer diagramas que funcionam sem legenda verbal

---

### Módulo 44 — Engenharia de Requisitos e Descoberta

> Resolver o problema errado muito bem é uma das piores coisas que pode acontecer.

#### 44.1 Descoberta do problema real

- [ ] Estudar 5 Whys aplicado a requisitos
- [ ] Entender Jobs-to-be-Done framework
- [ ] Estudar problem statement estruturado
- [ ] Entender como distinguir sintoma de causa

#### 44.2 Requisitos técnicos

- [ ] Estudar requisitos funcionais vs não-funcionais (NFRs)
- [ ] Entender como quantificar NFRs: latência P99 < 50ms, disponibilidade 99.9%
- [ ] Estudar constraints: tecnologia, budget, prazo, equipe
- [ ] Entender como documentar requisitos de forma que permita verificação

#### 44.3 Negociação e pushback

- [ ] Estudar como fazer pushback técnico construtivo
- [ ] Entender como negociar escopo com PMs e stakeholders
- [ ] Estudar disagree and commit: como funcionar após decisão tomada
- [ ] Entender quando escalar e quando resolver

---

### Módulo 45 — Code Review como Mentoria

> Onde a cultura técnica do time é construída ou destruída.

#### 45.1 O que revisar

- [ ] Estudar a hierarquia de preocupações: corretude > design > performance > estilo
- [ ] Entender segurança como parte do review, não opcional
- [ ] Estudar testabilidade: código difícil de testar é geralmente mal desenhado
- [ ] Entender legibilidade: código é lido mais do que escrito

#### 45.2 Como dar feedback

- [ ] Estudar feedback construtivo: sobre código, não sobre pessoa
- [ ] Entender nitpick vs blocker: ser explícito sobre severidade
- [ ] Estudar questionar vs sugerir: "por que X?" vs "considere Y"
- [ ] Entender como não ser o gatekeeper que bloqueia tudo

#### 45.3 Padrões de PR

- [ ] Estudar tamanho ideal de PR: ≤400 linhas, objetivo único
- [ ] Entender descrição de PR: contexto, mudanças, como testar
- [ ] Estudar PR como documento: screenshots, links, decisões

---

### Módulo 46 — Estimativa e Planejamento

> A habilidade business mais importante de quem é técnico.

#### 46.1 Técnicas de estimativa

- [ ] Estudar estimativa em 3 pontos: optimistic, realistic, pessimistic
- [ ] Entender cone of uncertainty: incerteza diminui com descoberta
- [ ] Estudar planning poker e story points (e suas limitações)
- [ ] Entender #NoEstimates como perspectiva alternativa

#### 46.2 Gerenciamento de riscos

- [ ] Estudar identificação de riscos técnicos
- [ ] Entender mitigate vs accept vs transfer
- [ ] Estudar spikes técnicos: descoberta reduz incerteza
- [ ] Entender como comunicar riscos a stakeholders não-técnicos

#### 46.3 Roadmap técnico

- [ ] Estudar como construir roadmap baseado em dependências
- [ ] Entender dívida técnica como item de roadmap
- [ ] Estudar priorização: urgência vs importância vs valor
- [ ] Entender como sincronizar roadmap técnico com roadmap de produto

---

### Módulo 47 — Mentoria e Desenvolvimento de Pessoas

> A multiplicação do seu impacto começa aqui.

#### 47.1 Mentoria individual

- [ ] Estudar a diferença entre mentor, coach e sponsor
- [ ] Entender como conduzir 1:1s efetivos
- [ ] Estudar como identificar zona de desenvolvimento proximal de cada um
- [ ] Entender como dar feedback difícil de forma útil

#### 47.2 Delegação

- [ ] Estudar os 7 níveis de delegação
- [ ] Entender quando delegar cria crescimento vs quando cria abandono
- [ ] Estudar como manter accountability sem micromanagement

#### 47.3 Desenvolvimento de times

- [ ] Estudar Tuckman stages: forming, storming, norming, performing
- [ ] Entender como criar ambiente psicologicamente seguro
- [ ] Estudar como distribuir conhecimento no time (bus factor)
- [ ] Entender como elevar o nível técnico coletivo

---

### Módulo 48 — Pensamento de Produto e Negócio

> O dev que entende negócio é insubstituível — e cobra o que quer.

#### 48.1 Métricas que importam

- [ ] Estudar north star metric: uma métrica que representa valor ao usuário
- [ ] Entender leading vs lagging indicators
- [ ] Estudar AARRR (pirate metrics): acquisition, activation, retention, referral, revenue
- [ ] Entender como traduzir features em métricas

#### 48.2 Unit economics

- [ ] Estudar CAC (Customer Acquisition Cost)
- [ ] Entender LTV (Lifetime Value) e relação com CAC
- [ ] Estudar margem de contribuição
- [ ] Entender payback period

#### 48.3 Experimentação

- [ ] Estudar A/B testing: hipótese, tamanho de amostra, significância
- [ ] Entender p-valor e por que é mal interpretado
- [ ] Estudar feature flags para experimentação
- [ ] Entender quando não fazer A/B test

#### 48.4 Decisões técnicas com visão de negócio

- [ ] Estudar build vs buy vs partner
- [ ] Entender custo de oportunidade técnico
- [ ] Estudar time-to-market vs qualidade técnica: quando cada um importa mais
- [ ] Entender como apresentar decisão técnica em termos de negócio

---

### Módulo 49 — Influência Sem Autoridade

> A habilidade central de Staff+ engineers.

#### 49.1 Construção de consenso

- [ ] Estudar técnicas de facilitação: divergência → convergência
- [ ] Entender como conduzir decisões técnicas em grupo
- [ ] Estudar RFC como ferramenta de construção de consenso
- [ ] Entender como incluir vozes discordantes produtivamente

#### 49.2 Argumentação técnica

- [ ] Estudar argumentação baseada em dados, não em autoridade
- [ ] Entender como construir casos técnicos convincentes
- [ ] Estudar como apresentar incerteza sem perder credibilidade
- [ ] Entender como recuar graciosamente quando errar

#### 49.3 Política organizacional

- [ ] Estudar stakeholder mapping
- [ ] Entender como organizações tomam decisões de verdade (informal vs formal)
- [ ] Estudar como escolher batalhas
- [ ] Entender como construir aliados antes de precisar deles

---

## Fase 7 — Especialização e Fronteira

> Esta fase é contínua — é onde você se torna referência.

---

### Módulo 50 — Compiladores e Linguagens

> Entender por dentro vira superpower em qualquer área.

#### 50.1 Frontend do compilador

- [ ] Estudar lexing/tokenization: expressões regulares, autômatos finitos
- [ ] Entender parsing: recursive descent, LL, LR, PEG
- [ ] Estudar AST: construção, traversal, transformação
- [ ] Implementar parser de uma linguagem simples

#### 50.2 Backend do compilador

- [ ] Estudar IR (Intermediate Representation): SSA form
- [ ] Entender otimizações: constant folding, dead code elimination, inlining
- [ ] Estudar code generation: para bytecode ou nativo
- [ ] Entender register allocation

#### 50.3 Type systems

- [ ] Estudar type checking: bidirectional, constraint solving
- [ ] Entender HM type inference (Hindley-Milner)
- [ ] Estudar dependent types (introdução)
- [ ] Entender gradual typing

#### 50.4 Runtimes e VMs

- [ ] Estudar bytecode VMs: JVM, CPython, V8 internals
- [ ] Entender JIT compilation: hot spot detection, tiered compilation
- [ ] Estudar garbage collectors: mark-sweep, copying, generational
- [ ] Entender concurrent GCs: G1, ZGC, Shenandoah

#### 50.5 Projeto prático

- [ ] Construir uma linguagem de scripting pequena do zero
- [ ] Implementar: lexer, parser, AST, interpreter ou compiler para bytecode
- [ ] Adicionar: type checker básico

---

### Módulo 51 — Internals de Bancos de Dados

> Saber por dentro vira intuição em design e performance.

#### 51.1 Storage engines

- [ ] Estudar B-tree storage: page layout, split, merge
- [ ] Entender LSM-tree: memtable, SSTable, compaction
- [ ] Estudar WAL (Write-Ahead Log): crash recovery, durabilidade
- [ ] Entender buffer pool: page replacement, dirty pages, flushing

#### 51.2 Transações internas

- [ ] Estudar MVCC implementação: version chains, visibility rules
- [ ] Entender snapshot isolation internamente
- [ ] Estudar lock managers: lock table, compatibility matrix
- [ ] Entender deadlock detection: wait-for graph

#### 51.3 Query optimization

- [ ] Estudar query rewriting: push down predicates, join reordering
- [ ] Entender cost-based optimization: statistics, histograms
- [ ] Estudar join algorithms: nested loop, hash join, merge join
- [ ] Entender adaptive query execution

#### 51.4 Distribuição

- [ ] Estudar 2PC (Two-Phase Commit) implementação
- [ ] Entender Calvin: deterministic database
- [ ] Estudar Spanner: TrueTime, external consistency
- [ ] Entender CockroachDB: MVCC sobre Raft

**Referências recomendadas:**
- Livro: *Database Internals* — Petrov
- Livro: *Designing Data-Intensive Applications* — Kleppmann

---

### Módulo 52 — Concorrência Avançada

> Onde os melhores devs do mundo vivem.

#### 52.1 Memory models

- [ ] Estudar x86 TSO (Total Store Order): o que x86 garante
- [ ] Entender ARM memory model: mais relaxado que x86
- [ ] Estudar C++11 memory model: acquire, release, seq_cst
- [ ] Entender Java Memory Model: happens-before relationship
- [ ] Estudar Go memory model

#### 52.2 Algoritmos lock-free

- [ ] Estudar ABA problem: por que CAS não é suficiente
- [ ] Entender tagged pointers como solução para ABA
- [ ] Estudar hazard pointers: safe memory reclamation
- [ ] Entender RCU (Read-Copy-Update): Linux kernel
- [ ] Estudar lock-free queue (Michael-Scott queue)
- [ ] Entender wait-freedom vs lock-freedom

#### 52.3 CRDTs

- [ ] Estudar CRDTs: convergência sem coordenação
- [ ] Entender state-based CRDTs (CvRDT): merge commutativo
- [ ] Estudar operation-based CRDTs (CmRDT): operações comutativas
- [ ] Implementar: G-Counter, PN-Counter, OR-Set, LWW-Register
- [ ] Estudar Yjs e Automerge como implementações práticas

---

### Módulo 53 — Machine Learning para Engenheiros

> Hoje diferencial; em breve esperado de qualquer engenheiro sênior.

#### 53.1 Fundamentos

- [ ] Estudar tipos de ML: supervised, unsupervised, reinforcement
- [ ] Entender train/validation/test split: por que três conjuntos
- [ ] Estudar overfitting, underfitting, regularização
- [ ] Entender feature engineering, feature selection

#### 53.2 Modelos clássicos

- [ ] Estudar regressão linear e logística
- [ ] Entender árvores de decisão e random forests
- [ ] Estudar gradient boosting: XGBoost, LightGBM
- [ ] Entender k-means, DBSCAN (clustering)

#### 53.3 Deep learning

- [ ] Estudar redes neurais: neurônios, camadas, activations
- [ ] Entender backpropagation intuitivamente
- [ ] Estudar CNNs para imagens
- [ ] Entender RNNs, LSTMs (contexto histórico)

#### 53.4 Transformers e LLMs

- [ ] Estudar attention mechanism em profundidade
- [ ] Entender transformer architecture: encoder, decoder, self-attention
- [ ] Estudar tokenization: BPE, WordPiece
- [ ] Entender pre-training vs fine-tuning
- [ ] Estudar RLHF (Reinforcement Learning from Human Feedback)
- [ ] Entender scaling laws

#### 53.5 Aplicações práticas de LLMs

- [ ] Estudar embeddings: semantic search, similarity
- [ ] Entender RAG (Retrieval-Augmented Generation): chunking, indexing, retrieval
- [ ] Estudar agents e tool use
- [ ] Entender fine-tuning: LoRA, QLoRA, full fine-tuning
- [ ] Estudar evals: como avaliar qualidade de outputs de LLM

#### 53.6 MLOps

- [ ] Estudar feature stores: serving features consistentemente
- [ ] Entender training pipelines: reprodutibilidade, versionamento
- [ ] Estudar model registry: versionamento, deployment
- [ ] Entender model serving: latência, throughput, batching
- [ ] Estudar monitoring: data drift, concept drift, model degradation

---

### Módulo 54 — IA como Ferramenta (Sem Dependência)

> Usar bem é vantagem competitiva. Depender é morte profissional lenta.

#### 54.1 Quando IA acelera

- [ ] Estudar usos legítimos: rascunho, exploração, refactoring, documentação
- [ ] Entender geração de testes como caso de uso forte
- [ ] Estudar pair programming com IA: como dar contexto adequado
- [ ] Entender code review assistido por IA

#### 54.2 Quando IA prejudica

- [ ] Estudar armadilhas: soluções plausíveis mas incorretas (hallucination)
- [ ] Entender por que IA é ruim em decisões arquiteturais (sem contexto do sistema)
- [ ] Estudar dependência como risco de carreira
- [ ] Entender: você não aprende o que não luta para entender

#### 54.3 Política pessoal de uso

- [ ] Definir: o que você nunca terceiriza para IA (raciocínio arquitetural, segurança crítica)
- [ ] Entender verificação crítica: sempre revisar output, nunca aceitar sem entender
- [ ] Estudar como calibrar confiança no output por domínio
- [ ] Entender: construir intuição própria primeiro, IA como acelerador depois

---

### Módulo 55 — Open Source de Impacto

> A melhor reputação técnica é construída em público, ao longo do tempo.

#### 55.1 Contribuição efetiva

- [ ] Estudar como encontrar projetos relevantes para contribuir
- [ ] Entender como ler codebase de projeto grande rapidamente
- [ ] Estudar como enviar primeira PR que será aceita (small, focused, tested)
- [ ] Entender como participar de issue triage

#### 55.2 Manter um projeto

- [ ] Criar projeto com problema real e usuários reais
- [ ] Estudar documentação como produto: README, docs, examples
- [ ] Entender gerenciamento de issues e PRs de terceiros
- [ ] Estudar releases: changelog, semver, migration guides
- [ ] Entender sustentabilidade de OSS: sponsorship, governance

---

### Módulo 56 — Domínio Especializado

> Onde você se torna referência reconhecida em algo.

#### 56.1 Escolha de especialização

- [ ] Avaliar verticais: fintech, healthtech, edtech, gaming, infra, dev tools, ML infra, real-time
- [ ] Entender onde há interseção entre paixão e mercado
- [ ] Estudar o estado-da-arte da área escolhida

#### 56.2 Profundidade no domínio

- [ ] Estudar regulação e compliance relevante (PCI-DSS, HIPAA, SOC2, ISO 27001)
- [ ] Entender padrões e protocolos específicos da área
- [ ] Ler papers e literatura técnica do domínio
- [ ] Conectar-se com comunidade técnica do nicho

#### 56.3 Posicionamento como referência

- [ ] Escrever sobre o domínio publicamente
- [ ] Contribuir para ferramentas do domínio
- [ ] Falar em eventos da área
- [ ] Construir network de especialistas

---

### Módulo 57 — Pesquisa e Leitura Técnica Avançada

> Onde o conhecimento de fronteira realmente vive.

#### 57.1 Leitura de papers

- [ ] Estudar como ler um paper acadêmico: abstract, intro, conclusão, depois detalhes
- [ ] Aprender a identificar a contribuição central de um paper
- [ ] Estudar como implementar um paper como forma de entendimento
- [ ] Entender como avaliar qualidade e validade de um paper

#### 57.2 Fontes de qualidade

- [ ] Seguir: SOSP, OSDI (systems), SIGMOD, VLDB (databases), NSDI, SIGCOMM (networks)
- [ ] Estudar: The Morning Paper (Adrian Colyer)
- [ ] Acompanhar: engineering blogs curados, não hype
- [ ] Participar de reading groups

---

### Módulo 58 — Empreendedorismo Técnico

> Para quem quer construir o próprio caminho, não só trilhar o de outra pessoa.

#### 58.1 Do problema ao produto

- [ ] Estudar customer development: descobrir antes de construir
- [ ] Entender problem-solution fit vs product-market fit
- [ ] Estudar MVP de verdade: o mínimo que valida a hipótese
- [ ] Entender o custo de construir a coisa errada

#### 58.2 Go-to-market técnico

- [ ] Estudar PLG (Product-Led Growth): produto como canal de aquisição
- [ ] Entender developer marketing: documentação, dev experience, community
- [ ] Estudar pricing para produtos técnicos: freemium, usage-based, seat-based
- [ ] Entender como fundadores técnicos vendem

#### 58.3 Captação e finanças

- [ ] Estudar bootstrap vs venture capital: tradeoffs reais
- [ ] Entender dilution, term sheets, valuations
- [ ] Estudar SAFE e convertible notes
- [ ] Entender cap table: equity, vesting, cliff

#### 58.4 Time e empresa

- [ ] Estudar acordo de sócios: equity split, vesting, saída
- [ ] Entender como contratar as primeiras 10 pessoas
- [ ] Estudar métricas SaaS: MRR, ARR, churn, NDR, CAC, LTV
- [ ] Entender quando escalar vs quando consolidar

---

### Módulo 59 — Carreira Sustentável

> A habilidade que ninguém ensina, mas que separa quem dura de quem se queima.

#### 59.1 Aprendizado contínuo saudável

- [ ] Estudar como aprender sem FOMO crônico
- [ ] Entender curva de adoção de tecnologia: não perseguir todo hype
- [ ] Estudar como aprofundar vs como ampliar — estratégia por fase de carreira
- [ ] Entender que boring technology é frequentemente melhor

#### 59.2 Saúde como base

- [ ] Estudar ergonomia: postura, monitor, teclado
- [ ] Entender exercício como componente de performance cognitiva
- [ ] Estudar sono como base de todo o resto
- [ ] Entender síndrome do impostor: é universal, não é sinal de incompetência

#### 59.3 Gestão financeira de carreira

- [ ] Estudar negociação de salário: pesquisa de mercado, anchoring, múltiplas ofertas
- [ ] Entender equity: como avaliar, vesting, cliff, 83(b) election
- [ ] Estudar investimentos básicos para desenvolvedor de software
- [ ] Entender quando trocar de empresa (e quando não trocar)

#### 59.4 Network real

- [ ] Estudar como construir relacionamentos profissionais de qualidade
- [ ] Entender dar antes de pedir
- [ ] Estudar como aparecer em comunidades técnicas de forma autêntica
- [ ] Entender diferença entre network útil e LinkedIn farming

---

### Módulo 60 — Ética e Responsabilidade

> Onde técnica vira engenharia de verdade.

#### 60.1 Privacidade e dados

- [ ] Estudar Privacy by Design: sete princípios fundantes
- [ ] Entender data minimization: coletar apenas o necessário
- [ ] Estudar bias em sistemas de ML: origem, detecção, mitigação
- [ ] Entender impacto de sistemas de decisão automatizados

#### 60.2 Acessibilidade como responsabilidade

- [ ] Estudar o impacto de software inacessível
- [ ] Entender acessibilidade como direito, não feature
- [ ] Estudar como incorporar acessibilidade no processo de desenvolvimento

#### 60.3 Responsabilidade profissional

- [ ] Estudar como recusar projetos eticamente problemáticos
- [ ] Entender whistleblowing: quando e como
- [ ] Estudar sustentabilidade computacional: pegada de carbono de software
- [ ] Entender o papel do engenheiro em decisões de produto com impacto societal

---

## Checkpoint: Staff / Principal Engineer

> **Nota importante:** Staff não é "sênior com mais tempo de casa". É um arquétipo profissional diferente, com escopo organizacional — não de time. Muitas empresas não têm este nível formalmente.

### Critérios concretos

- [ ] Resolve problemas que ninguém sabe formular ainda — você os formula
- [ ] Define padrões técnicos que duram anos em múltiplos times
- [ ] Influencia executivos com argumentação técnica clara e baseada em negócio
- [ ] Reconhecido externamente: palestras, OSS, papers, comunidade técnica
- [ ] Capaz de fundar empresa com base técnica sólida (CTO real, não título)
- [ ] Multiplica o impacto de dezenas de engenheiros sem ser gestor

---

## Notas Finais

### Sobre a sequência

As fases 0 e 1 são rigorosamente sequenciais — não pule. As fases 2 e 3 (frontend e backend) podem ser desenvolvidas em paralelo com sobreposição. A partir da fase 4, as fases são **concorrentes**: você desenvolve liderança, infra e sistemas distribuídos simultaneamente ao longo de anos de carreira.

### Sobre o critério de conclusão

Um módulo está **realmente concluído** quando você consegue:
1. Explicar o conceito do zero para alguém que nunca viu
2. Justificar tradeoffs e saber quando não usar
3. Identificar o conceito em código de produção real
4. Ensinar alguém de forma que eles consigam aplicar

### Sobre tempo

Com 10–15 horas semanais de estudo + prática deliberada:
- Checkpoint Júnior Forte → 6–12 meses
- Checkpoint Pleno → 2–4 anos
- Checkpoint Sênior → 5–8 anos
- Checkpoint Staff → 10–15 anos (depende muito de contexto)

Esses números assumem aprendizado **intencional** — não apenas acumular tempo de emprego.

### Leituras fundamentais (shelf obrigatória)

- *Designing Data-Intensive Applications* — Kleppmann
- *A Philosophy of Software Design* — Ousterhout
- *The Pragmatic Programmer* — Thomas & Hunt
- *Clean Code* — Martin (leia com senso crítico)
- *System Design Interview* — Alex Xu (vol. 1 e 2)
- *The Staff Engineer's Path* — Reilly
- *An Elegant Puzzle* — Larson
- *Accelerate* — Forsgren, Humble & Kim

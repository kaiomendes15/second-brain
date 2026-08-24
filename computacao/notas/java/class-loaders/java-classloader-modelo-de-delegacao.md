---
tipo: conceito
area: computacao
tags: [java, jvm, classloader]
atualizado: 2026-08-21
fonte_url: https://www.baeldung.com/java-classloaders
---

# Java — Class Loader: Modelo de Delegação (Como Funciona)

Class loaders são parte do Java Runtime Environment. Quando a JVM requisita uma classe, o class loader tenta localizá-la e carregar sua definição no runtime usando o nome totalmente qualificado da classe. O método *java.lang.ClassLoader.loadClass(String name, boolean resolve)* é responsável por carregar a definição da classe no runtime usando seu nome binário. Esse método é sobrecarregado; existe uma variante *java.lang.ClassLoader.loadClass(String name)* com parâmetros diferentes.

Ele realiza uma busca ordenada:

1. Chama *findLoadedClass(String name)* para checar se a classe já foi carregada. O método retorna a classe com o nome binário dado se o loader já a carregou. Caso contrário, retorna *null*.
2. Chama o método *loadClass(String)* no class loader pai. Além disso, usa o class loader embutido da máquina virtual se o pai for *null* — ou seja, delega ao [[java-classloader-definicao#Bootstrap class loader|bootstrap class loader]].
3. Chama o método *findClass(String)* para encontrar a classe.

Como resultado dessa busca ordenada, se a classe não for encontrada e a flag *resolve* estiver como true, o método chama *resolveClass(Class)* no objeto *Class* binário resultante.

Como resultado dessa busca ordenada, se a classe não for encontrada, é lançada [*java.lang.ClassNotFoundException*](https://www.baeldung.com/java-classnotfoundexception-and-noclassdeffounderror).

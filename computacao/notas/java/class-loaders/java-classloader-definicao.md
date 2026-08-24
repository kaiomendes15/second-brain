---
tipo: conceito
area: computacao
tags: [java, jvm, classloader]
atualizado: 2026-08-21
fonte_url: https://www.baeldung.com/java-classloaders
---

# Java — Class Loader: Definição, Funções e Tipos Embutidos

Um class loader é um objeto responsável por carregar classes. Class loaders **carregam classes Java dinamicamente na JVM (Java Virtual Machine) durante o runtime**. Eles também fazem parte do JRE (Java Runtime Environment). Por isso, a JVM não precisa saber sobre os arquivos ou o sistema de arquivos subjacente para executar programas Java — graças aos class loaders.

Além disso, a JVM não carrega todas as classes Java na memória de uma vez, mas sim quando uma aplicação precisa delas. É aí que os class loaders entram: eles são responsáveis por carregar classes na memória.

## Funções de um class loader

Um class loader tem duas funções principais:

- **Carregar classes** — Diferentes class loaders built-in e customizados carregam classes. É possível estender a classe abstrata *java.lang.ClassLoader* para criar implementações de class loader.
- **Localizar recursos** — Um recurso é algum dado como um arquivo *.class*, informação de configuração, ou uma imagem. Recursos costumam ser empacotados junto com uma aplicação ou biblioteca para que sejam fáceis de localizar.

De início, class loaders não criam objetos para array classes. Em vez disso, o runtime Java as cria automaticamente conforme necessário. Por isso, quando usamos *Class#getClassLoader()* para achar o class loader de uma array class, ele retorna o class loader do tipo do elemento. Consequentemente, uma array class não tem class loader se o tipo do elemento for um tipo de dado primitivo.

## Tipos de class loaders embutidos

O runtime Java suporta três class loaders embutidos:

- **[[java-classloader-definicao#Bootstrap class loader|Bootstrap class loader]]** — o class loader embutido da máquina virtual, representado como *null*.
- **[[java-classloader-definicao#Platform class loader|Platform class loader]]** — carrega as classes da plataforma, que incluem as APIs da plataforma Java SE, suas classes de implementação, e classes de runtime específicas do JDK. É o pai do system class loader.
- **[[java-classloader-definicao#System class loader|System class loader]]** — também conhecido como *application class loader*, carrega classes no classpath da aplicação, no module path, e ferramentas específicas do JDK.

### Demo

```java
public void printClassLoaders() throws ClassNotFoundException {

    System.out.println("Platform Classloader:" 
      + ClassLoader.getPlatformClassLoader()); 

    System.out.println("System Classloader:" 
      + ClassLoader.getSystemClassLoader());

    System.out.println("Classloader of this class:"
      + PrintClassLoader.class.getClassLoader());

    System.out.println("Classloader of DriverManager:"
      + DriverManager.class.getClassLoader());

    System.out.println("Classloader of ArrayList:"
      + ArrayList.class.getClassLoader());
}
```

Ao executar, o método acima imprime:

```bash
Platform Classloader:jdk.internal.loader.ClassLoaders$PlatformClassLoader@5674cd4d
System Classloader:jdk.internal.loader.ClassLoaders$AppClassLoader@33909752
Classloader of this class:jdk.internal.loader.ClassLoaders$AppClassLoader@33909752
Classloader of DriverManager:jdk.internal.loader.ClassLoaders$PlatformClassLoader@5674cd4d
Classloader of ArrayList:null
```

Há três class loaders diferentes aqui: bootstrap (exibido como *null*), platform, e system.

O system class loader carrega a classe que contém o método de exemplo — **o system class loader carrega os arquivos no classpath**.

Em seguida, o platform class loader carrega a classe *DriverManager*.

Por fim, o bootstrap class loader carrega a classe *ArrayList*. **Um bootstrap (ou primordial) class loader é o pai de todos os outros; porém, ele não tem pai**.

Note que, para *ArrayList*, o output mostra *null*. **Isso acontece porque o bootstrap class loader é escrito em código nativo, não em Java, então ele não aparece como uma classe Java**. Como resultado, o comportamento do bootstrap class loader varia entre JVMs.

### Bootstrap class loader

Uma instância de *java.lang.ClassLoader* carrega classes Java. Porém, class loaders são classes em si mesmas. Então a pergunta é: quem carrega a própria *java.lang.ClassLoader*? É aí que entra o bootstrap (ou primordial) class loader. Ele é responsável principalmente por carregar classes internas do JDK, tipicamente *rt.jar* e outras bibliotecas core localizadas no diretório *$JAVA_HOME/jre/lib*. Além disso, **o bootstrap class loader serve como pai de todas as outras instâncias de *ClassLoader***.

**Esse bootstrap class loader é parte do núcleo da JVM e é escrito em código nativo**, como visto no exemplo acima. Plataformas diferentes podem ter implementações diferentes desse class loader.

### Platform class loader

O **platform class loader é filho do bootstrap class loader e cuida de carregar as classes core padrão do Java**, para que fiquem disponíveis a todas as aplicações rodando na plataforma.

### System class loader

O system (ou application) class loader, por outro lado, cuida de carregar todas as classes em nível de aplicação na JVM. **Ele carrega arquivos encontrados na variável de ambiente classpath, na opção de linha de comando *-classpath* ou *-cp***. Também é filho do platform class loader.

Como um class loader efetivamente localiza e carrega uma classe requisitada, veja [[java-classloader-modelo-de-delegacao]].

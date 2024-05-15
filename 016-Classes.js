/*
    Introdução às Classes:

    Classes são uma forma de definir objetos em JavaScript, 
    introduzidas no ECMAScript 2015 (ES6).
    Elas fornecem uma sintaxe mais clara e orientada a objetos 
    para criar objetos e lidar com herança.

    Constructor:

    O método constructor é um método especial chamado no momento da criação de uma instância da classe.
    Ele é usado para inicializar as propriedades do objeto.
    Métodos:

    Métodos são funções definidas dentro da classe.
    Eles podem acessar e manipular propriedades do objeto usando a palavra-chave this.
    Instância:

    Uma instância é um objeto criado a partir de uma classe usando a palavra-chave new.
    Cada instância possui suas próprias cópias das propriedades da classe.
    Herança:

    Classes em JavaScript suportam herança usando a palavra-chave extends.
    A classe filha pode herdar propriedades e métodos da classe pai.

    
*/

class MinhaClasse {
    constructor(parametros) {
        this.propriedade = valor;
    }
  
    metodo() {
        // corpo do método
    }
  }
  
  class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
  
    comer() {
        console.log(`${this.nome} está comendo...`);
    }
  }
  //HERANÇA
  class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }
  
    latir() {
        console.log("Au Au!");
    }
  }
  
  // Exemplo de uso
  const rex = new Cachorro("Rex", 3, "Golden Retriever");
  const rex1 = new Cachorro("Rex Maluko", 100, "Vira lata");
  
  // Imprimir propriedades do cachorro
  console.log("Nome:", rex.nome); // Saída: Nome: Rex
  console.log("Idade:", rex.idade); // Saída: Idade: 3
  console.log("Raça:", rex.raca); // Saída: Raça: Golden Retriever
  
  console.log("Nome:", rex1.nome); // Saída: Nome: Rex
  console.log("Idade:", rex1.idade); // Saída: Idade: 3
  console.log("Raça:", rex1.raca); // Saída: Raça: Golden Retriever
  
  rex.nome = "TROVAO"
  rex.idade = 10
  rex.raca = "Fila Brasileiro"
  
  // Imprimir propriedades do cachorro
  console.log("Nome:", rex.nome); 
  console.log("Idade:", rex.idade); 
  console.log("Raça:", rex.raca); 
  /*  
    Getters são usados para obter o valor de uma propriedade.
    Setters são usados para definir o valor de uma propriedade.
    Eles são definidos usando as palavras-chave get e set.
  */
  
  class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
  
    get area() {
        return this.largura * this.altura;
    }
  
    set area(valor) {
        this.largura = Math.sqrt(valor);
        this.altura = Math.sqrt(valor);
    }
    
  }
  
  const retangulo = new Retangulo(4, 5); // Criando um objeto retângulo com largura 4 e altura 5
  console.log("A area do retangulo e:",retangulo.area); // Obtendo a área do retângulo (deve ser 20)
  
  retangulo.area = 36; // Definindo a área do retângulo para 36
  console.log("A largura e:",retangulo.largura); // Deve imprimir 6, pois a raiz quadrada de 36 é 6
  console.log("A altura e:",retangulo.altura); // Deve imprimir 6, pois a raiz quadrada de 36 é 6
  
  const rtl = new Retangulo(2, 1.5)
  console.log("A area do retangulo e:",rtl.area) 
  
  
  const rtl2 = new Retangulo(5, 2)
  console.log("A area do retangulo e:",rtl2.area)
  
  // Método estático
  class Utilidades {
    static somar(a, b) {
      return a + b;
    }
  }
  
  console.log(Utilidades.somar(5, 3)); // Saída: 8
  
        
  
  
  
  
  
    
  
  
  
  
  
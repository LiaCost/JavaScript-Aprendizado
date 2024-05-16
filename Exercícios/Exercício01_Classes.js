
// Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma 
// mensagem com o nome e a idade da pessoa

class Pessoa {
    constructor(nome, idade){
       this.nome = nome;
       this.idade = idade;
    } 
    apresentar()
    {
        console.log("O meu nome é: " + this.nome + ". A minha idade é:" + this.idade)
    }
}

const p1 = new Pessoa( "Gabriel", 14)
p1.apresentar();

// Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o 
// perímetro do retângulo.

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
  
  const retangulo = new Retangulo(4, 5); 
  console.log("A area do retangulo e:",retangulo.area); 
  
  retangulo.area = 36; 
  console.log("A largura é:",retangulo.largura); 
  console.log("A altura e:",retangulo.altura); 
  
  const rtl = new Retangulo(2, 1.5)
  console.log("A area do retangulo e:",rtl.area) 
  
  
  const rtl2 = new Retangulo(5, 2)
  console.log("A area do retangulo e:",rtl2.area)

// Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e
// verificar o saldo.
class ContaBancaria{
    constructor( saldo, titular){
        this.saldo = saldo;
        this.titular = titular;

    }

    depositar(valor){
        this.saldo = this.saldo + valor
    }
    sacar(valor){
        this.saldo = this.saldo - valor
    }

    verificar(){
         console.log("O valor do saldo é: " +this.saldo )
    }
}

const banco = new ContaBancaria ( 500, "Victor" )
banco.verificar();
banco.depositar(56);
banco.verificar();
banco.sacar(57);
banco.verificar();



//  Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular
//  o valor total do produto (preço * quantidade).
class Produto {
    constructor( nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularValor(){
        console.log("O valor do produto é: " + (this.preco*this.quantidade))
    }
}

const produtos = new Produto( "calça ", 120, 3 )
produtos.calcularValor();

// Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as
// informações do carro.

class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    metodo(){
        console.log("Marca: " +this.marca+  " Modelo: " +this.modelo+  " Ano: " +this.ano )
    }
}

const p2 = new Carro ( "Audi", "Rs7", "2024")
p2.metodo();

// Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para
// calcular a média das notas.

class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0; // Evita divisão por zero se o array de notas estiver vazio
        }
        const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return soma / this.notas.length;
    }
}

// Exemplo de uso
const aluno = new Aluno('João Silva', '2021101', [7.5, 8.0, 9.0, 6.5]);
console.log(`Nome: ${aluno.nome}`); // Nome: João Silva
console.log(`Matrícula: ${aluno.matricula}`); // Matrícula: 2021101
console.log(`Média das notas: ${aluno.calcularMedia().toFixed(2)}`); // Média das notas: 7.75


 
// Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem
// com o nome e o tipo do animal.

class Animal {
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo; 
    }
    metodo(){
        console.log( "Nome: " +this.nome+ " Tipo: " +this.tipo )
    }
}

const animal = new Animal ( "Kiara", "Cachorro")
animal.metodo();

// Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular 
// a área e o perímetro do triângulo.
class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    calcularPerimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }

    calcularArea() {
        const s = (this.lado1 + this.lado2 + this.lado3) / 2;
        return Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3));
    }
}

// Exemplo de uso
const triangulo = new Triangulo(3, 4, 5);
console.log(`Perímetro: ${triangulo.calcularPerimetro()}`); // Perímetro: 12
console.log(`Área: ${triangulo.calcularArea()}`);           // Área: 6



// Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas 
// as informações do livro.

class Livro {
    constructor(titulo, autor, ano ){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    metodo(){
        console.log( "Livro: " +this.titulo+ "Autor: " +this.autor+ " Ano: " +this.ano)
    }
}

const livro = new Livro ("Pride and Prejudice ", "Jane Austen", "1813")
livro.metodo();

// Crie uma classe Circulo com propriedade raio e métodos para calcular a
// área e o perímetro do círculo.
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

// Exemplo de uso
const circulo = new Circulo(5);
console.log(`Perímetro: ${circulo.calcularPerimetro().toFixed(2)}`); // Perímetro: 31.42
console.log(`Área: ${circulo.calcularArea().toFixed(2)}`);           // Área: 78.54



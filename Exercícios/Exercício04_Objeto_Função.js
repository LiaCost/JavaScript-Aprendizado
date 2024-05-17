// 1-Crie uma função construtora chamada Animal que define propriedades para nome 
// e especie. Crie um objeto animal1 com nome "Leão" e espécie "Felino".

function Animal() {
    this.nome;
    this.especie;
}
    let animal1 = new Animal();

    animal1.nome = "Leão"
    animal1.especie = "Felino"

    
    // Acessando propriedades dos objetos
    console.log(animal1.nome);
    console.log(animal1.especie); 


// 2-Defina uma função construtora Produto que tem propriedades nome, preco, 
// e quantidade. Crie um objeto produto1 com nome "Notebook", preço "2500" e  quantidade "5".

function Produto(){
   this.nome;
   this.preco;
   this.quantidade;
}
let produto1 = new Produto();

produto1.nome = "Notebook"
produto1.preco = "2500"
produto1.quantidade = "5"

console.log(produto1.nome);
console.log(produto1.preco);
console.log(produto1.quantidade);

// 3-Crie uma função construtora Carro com propriedades marca, modelo, e ano.
// Crie um objeto carro1 com marca "Toyota", modelo "Corolla" e ano "2022".

function Carro(){
    this.marca;
    this.modelo;
    this.ano;
}
let carro1 = new Carro();

carro1.marca = "Toyota"
carro1.modelo = "Corolla"
carro1.ano = "2022"

console.log(carro1.marca);
console.log(carro1.modelo);
console.log(carro1.ano);

// 4-Defina uma função construtora Livro que tenha propriedades titulo, autor e 
// anoPublicacao. Crie um objeto livro1 com título "Dom Casmurro", autor "Machado de Assis" e ano de publicação "1899".

function Livro(){
    this.titulo;
    this.autor;
    this.ano;
}
let livro1 = new Livro();

livro1.titulo = "Dom Casmurro"
livro1.autor = "Machado de Assis"
livro1.ano = "1899"

console.log(livro1.titulo);
console.log(livro1.autor);
console.log(livro1.ano);


// 5-Crie uma função construtora ContaBancaria com propriedades titular, saldo e tipo. 
// Crie um objeto conta1 com titular "João", saldo "5000" e tipo "Corrente".

function ContaBancaria(){
    this.titular;
    this.saldo;
    this.tipo;
}
let conta1 = new ContaBancaria();

conta1.titular = "João"
conta1.saldo = "5000"
conta1.tipo = "Corrente"

console.log(conta1.titular);
console.log(conta1.saldo);
console.log(conta1.tipo);

// 6-Defina uma função construtora Cachorro com propriedades raca, cor e idade. 
// Crie um objeto cachorro1 com raça "Labrador", cor "Marrom" e idade "5".

function Cachorro(){
    this.raca;
    this.cor;
    this.idade;
}
let cachorro1 = new Cachorro();

cachorro1.raca = "Labrador"
cachorro1.cor = "Marrom"
cachorro1.idade = "5"

console.log(cachorro1.raca);
console.log(cachorro1.cor);
console.log(cachorro1.idade);

// 7-Crie uma função construtora Aluno com propriedades nome, matricula e curso.
// Crie um objeto aluno1 com nome "Maria", matrícula "2021001" e curso "Engenharia Civil".

function Aluno(){
    this.nome;
    this.matricula;
    this.curso;
}
let aluno1 = new Aluno();

aluno1.nome = "Maria"
aluno1.matricula = "2021001"
aluno1.curso = "Engenharia Civil"

console.log(aluno1.nome);
console.log(aluno1.matricula);
console.log(aluno1.curso);

// 8-Defina uma função construtora Restaurante com propriedades nome, endereco e 
// tipoCozinha. Crie um objeto restaurante1 com nome "La Pizzeria", endereço "Rua das Pizzas, 123" e tipo de cozinha "Italiana".

function Restaurante(){
    this.nome;
    this.endereco;
    this.tipodecozinha ;
}
let restaurante1 = new Restaurante();

restaurante1.nome = "La Pizzeria"
restaurante1.endereco = "Rua das Pizzas, 123"
restaurante1.tipodecozinha = "Italiana"

console.log(restaurante1.nome);
console.log(restaurante1.endereco);
console.log(restaurante1.tipodecozinha);

// 9-Crie uma função construtora Filme com propriedades titulo, diretor e 
// anoLancamento. Crie um objeto filme1 com título "O Poderoso Chefão", 
// diretor "Francis Ford Coppola" e ano de lançamento "1972".

function Filme(){
    this.titulo;
    this.autor;
    this.ano;
}
let filme1 = new Filme();

filme1.titulo = "O Poderoso Chefão"
filme1.diretor = "Francis Ford Coppola"
filme1.ano = "1972"

console.log(filme1.titulo);
console.log(filme1.diretor);
console.log(filme1.ano);

// 10-Defina uma função construtora Funcionario com propriedades nome, cargo e 
// salario. Crie um objeto funcionario1 com nome "Carlos", cargo "Gerente" e salário "7000".

function Funcionario(){
    this.nome;
    this.cargo;
    this.salario;
}
let funcionario1 = new Funcionario();

funcionario1.nome = "Carlos"
funcionario1.cargo = "Gerente"
funcionario1.salario = "7000"

console.log(funcionario1.nome);
console.log(funcionario1.cargo);
console.log(funcionario1.salario);
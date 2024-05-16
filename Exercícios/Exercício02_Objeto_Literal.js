
/** Exercício 1: Criação de Objeto Literal
Crie um objeto literal que represente um livro, com 
as propriedades titulo, autor e ano. Em seguida, 
imprima as informações do livro no console.
 */

const livro1 = {
    titulo: "Sense and Sensibility",
    autor:" Jane Austen ",
    ano:  1811
};

console.log(`Título: ${livro1.titulo}`);
console.log(`Autor: ${livro1.autor}`);
console.log(`Ano: ${livro1.ano}`);



/** Exercício 2: Adição de Método
Adicione um método informacoes() ao objeto 
livro que imprima todas as informações do livro, 
incluindo título, autor e ano. */
class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    informacoes() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano: ${this.ano}`);
    }
}

const livro2 = new Livro('1984', 'George Orwell', 1949);
livro2.informacoes();



/** Exercício 3: Lista de Compras
Crie um objeto literal que represente uma 
lista de compras, onde cada item da lista é uma 
propriedade com o nome do item e a quantidade desejada. */

const listaDeCompras1 = {
    arroz: 2,
    feijao: 1,
    macarrao: 3,
    leite: 5
};



/** Exercício 4: Adição e Remoção de Itens
Adicione métodos ao objeto lista de compras para
 adicionar um novo item à lista e remover um item existente.
 */

 const listaDeCompras2 = {
    arroz: 2,
    feijao: 1,
    macarrao: 3,
    leite: 5,
    
    adicionarItem(item, quantidade) {
        this[item] = (this[item] || 0) + quantidade;
    },
    
    removerItem(item) {
        delete this[item];
    }
};

// Testando os métodos
listaDeCompras2.adicionarItem('cafe', 2);
listaDeCompras2.removerItem('feijao');


/** Exercício 5: Total da Compra
Adicione um método ao objeto lista de compras para 
calcular o valor total da compra, com base na quantidade
 desejada de cada item e seus preços individuais.
*/

const listaDeCompras3 = {
    arroz: 2,
    feijao: 1,
    macarrao: 3,
    leite: 5,
    precos: {
        arroz: 5.0,
        feijao: 4.0,
        macarrao: 2.5,
        leite: 3.0
    },
    
    adicionarItem(item, quantidade) {
        this[item] = (this[item] || 0) + quantidade;
    },
    
    removerItem(item) {
        delete this[item];
    },
    
    calcularTotal() {
        let total = 0;
        for (let item in this) {
            if (this.precos[item] && typeof this[item] === 'number') {
                total += this[item] * this.precos[item];
            }
        }
        return total;
    }
};


console.log(listaDeCompras3.calcularTotal()); 


/** Exercício 6: Registro de Funcionários
Crie um objeto literal que represente um registro de 
funcionários, onde cada funcionário é representado por um 
objeto com propriedades como nome, cargo e salário. */

const registroDeFuncionarios = {
    funcionarios: [
        { nome: 'João', cargo: 'Desenvolvedor', salario: 5000 },
        { nome: 'Maria', cargo: 'Designer', salario: 4500 }
    ]
};


/** Exercício 7: Adição de Funcionários
Adicione métodos ao objeto registro de funcionários 
para adicionar um novo funcionário ao registro e remover um funcionário existente. */

const registroDeFuncionarios1 = {
    funcionarios1: [
        { nome: 'João', cargo: 'Desenvolvedor', salario: 5000 },
        { nome: 'Maria', cargo: 'Designer', salario: 4500 }
    ],
    
    adicionarFuncionario1(funcionario1) {
        this.funcionarios1.push(funcionario1);
    },
    
    removerFuncionario1(nome) {
        this.funcionarios1 = this.funcionarios1.filter(f => f.nome !== nome);
    }
};


registroDeFuncionarios1.adicionarFuncionario1({ nome: 'Carlos', cargo: 'Gerente', salario: 6000 });
registroDeFuncionarios1.removerFuncionario1('Maria');


/** Exercício 8: Aumento de Salário
Adicione um método ao objeto registro de funcionários 
para aumentar o salário de todos os funcionários em uma certa porcentagem. */

const registroDeFuncionarios2 = {
    funcionarios2: [
        { nome: 'João', cargo: 'Desenvolvedor', salario: 5000 },
        { nome: 'Maria', cargo: 'Designer', salario: 4500 }
    ],
    
    adicionarFuncionario2(funcionario2) {
        this.funcionarios2.push(funcionario2);
    },
    
    removerFuncionario2(nome) {
        this.funcionarios2 = this.funcionarios2.filter(f => f.nome !== nome);
    },
    
    aumentarSalarios(percentual) {
        this.funcionarios2.forEach(f => {
            f.salario += f.salario * (percentual / 100);
        });
    }
};

registroDeFuncionarios2.aumentarSalarios(10); 


/** Exercício 9: Contato
Crie um objeto literal que represente um contato, 
com propriedades como nome, email e telefone. */

const contato = {
    nome: 'Ana',
    email: 'ana@example.com',
    telefone: '1234-5678'
};


/** Exercício 10: Lista de Contatos
Crie um array de objetos literais que representem uma lista 
de contatos. Cada objeto deve ter as mesmas propriedades 
definidas no exercício anterior. Adicione métodos para 
adicionar um novo contato à lista, remover um contato
 existente e buscar um contato pelo nome. */

 const listaDeContatos = [
    { nome: 'Ana', email: 'ana@example.com', telefone: '1234-5678' },
    { nome: 'Bruno', email: 'bruno@example.com', telefone: '8765-4321' }
];

const operacoesContatos = {
    adicionarContato(contato) {
        listaDeContatos.push(contato);
    },
    
    removerContato(nome) {
        const index = listaDeContatos.findIndex(c => c.nome === nome);
        if (index !== -1) {
            listaDeContatos.splice(index, 1);
        }
    },
    
    buscarContato(nome) {
        return listaDeContatos.find(c => c.nome === nome) || null;
    }
};

operacoesContatos.adicionarContato({ nome: 'Carlos', email: 'carlos@example.com', telefone: '1122-3344' });
operacoesContatos.removerContato('Ana');
console.log(operacoesContatos.buscarContato('Bruno')); 


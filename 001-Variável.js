

/* VAR
   var n1; 
   É variavel global;
   Aceita redeclaração e sob escrita;
   Pode chamar ela em qualquer lugar do código*/

    var nome = "Lia";
    if (true)
    {
        var nome = "Costa"
    }

    var nome = "Santos"
    console.log(nome)

 /* 
    LET
    let n2; 
    Caracteristica mais importante: é variavel de escoupo;
    Não aceita redeclarção;
    Aceita sob escrita;
    NÃO PODE SER ACESSADA FORA DO BLOCO DE CÓDIGO QUE ELA FOI CRIADA
    Onde abre chaves e fecha chaves é um bloco de códigos*/
        
    if (true)
    {
        let nome = "Costa"
        console.log(nome)
    }

/*
    CONST
    const n3 = 'Constante'
    Não aceita redeclaração e sob escrita;
    É uma variavel rigida;
    A CONSTANTE TEM QUE SER DELCARADA ASSIM QUE INICIALIZADA SE NÃO QUEBR;
    É variavel de escoupo*/ 

    const name = "Lia"
    if(true)
    {
        const nome = "Costa"
    }
    nome = "Santos"
    console.log(nome)

    
    // Exemplo de erro com var
var nome = "João";
console.log(nome); // Saída: "João"
{
    var nome = "Maria"; // Reatribui o valor da variável global
    console.log(nome); // Saída: "Maria"
}
console.log(nome); // Saída: "Maria" (o valor foi alterado fora do bloco)

// Exemplo de erro com let
let animal = "gato";
console.log(animal); // Saída: "gato"
{
    let animal = "cachorro"; // Declara uma nova variável de bloco com o mesmo nome
    console.log(animal); // Saída: "cachorro"
}
console.log(animal); // Saída: "gato" (o valor não foi alterado fora do bloco)

// Exemplo de erro com const
const COR = "azul";
console.log(COR); // Saída: "azul"
{
    const COR = "vermelho"; // Declara uma nova constante de bloco com o mesmo nome
    console.log(COR); // Saída: "vermelho"
}
console.log(COR); // Saída: "azul" (o valor não foi alterado fora do bloco)

// Erro ao tentar reatribuir uma constante (irá gerar erro)
const IDADE = 30;
IDADE = 40; // Isso irá gerar um erro

    


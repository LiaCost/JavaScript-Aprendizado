

/* VAR
   var n1; 
   É variavel global;
   Aceita redeclaração e sob escrita;
   Pode chamar ela em qualquer lugar do código*/

    var nome = "Lia";
    if (true)
    {
        var nome = "Campelo"
    }

    var nome = "Costa"
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
        let nome = "Campelo"
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
        const nome = "Campelo"
    }
    nome = "Costa"
    console.log(nome)
    
    


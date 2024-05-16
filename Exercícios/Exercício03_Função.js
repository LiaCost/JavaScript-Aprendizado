
  //  1-Crie uma função chamada soma que aceita dois parâmetros e retorna a 
  //  soma deles.
        function soma(a, b) {
        return a + b;
}

  //  2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e 
  //  não tem nenhum parâmetro nem retorno.
        function saudacao() {
        console.log("Olá, mundo!");
}


  //  3-Escreva uma função chamada verificarPar que recebe um número como parâmetro 
  //  e retorna verdadeiro se o número for par e falso caso contrário.
        function verificarPar(numero) {
            if (numero % 2 === 0) {
            return true;
            } else {
            return false; 
            }
}
  
        console.log(verificarPar(4)); 
        console.log(verificarPar(7)); 
  
   
  //  4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo
  //  como parâmetro e retorna a área do círculo.
        function calcularAreaCirculo(raio) {
        const area = Math.PI * Math.pow(raio, 2);
        
        return area;
}
        console.log(calcularAreaCirculo(5)); 
        console.log(calcularAreaCirculo(10)); 
  

  // 5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro 
  // e retorna a data atual.
        function retornarDataAtual() {
            const dataAtual = new Date();

            return dataAtual;
}
       console.log(retornarDataAtual());
  

  //  6-Escreva uma função chamada calcularMedia que recebe um array de números 
  //  como parâmetro e retorna a média desses números.
        function calcularMedia(numeros2) {
            if (numeros2.length === 0) {
                return 0;
            }

            let soma = 0;
            for (let i = 0; i < numeros2.length; i++) {
                soma += numeros2[i];
            }

            let media = soma / numeros2.length;
            return media;
}
        const arrayDeNumeros = [1, 2, 3, 4, 5];
        const media = calcularMedia(arrayDeNumeros);
        console.log(`A média dos números é: ${media}`); 



  // 7-Crie uma função chamada adicionarDois que aceita um número como parâmetro
  // e retorna esse número adicionado a 2.

        function adicionarDois(numero3) {
            return numero3 + 2;
}
        const resultado = adicionarDois(5);
        console.log(`O resultado é: ${resultado}`); 


  // 8-Defina uma função chamada concatenarStrings que recebe duas strings como
  // parâmetros e retorna uma nova string que é a concatenação das duas strings fornecidas.
        function concatenarStrings(str1, str2) {
            return str1.concat(str2);

}       const result = concatenarStrings("EIII, ", "QUERO CAFÉ.");
        console.log(result); 

  // 9-Escreva uma função chamada verificarNegativo que recebe um número como
  // parâmetro e retorna verdadeiro se o número for negativo e falso caso contrário.
        function verificarNegativo(numero4) {
            return numero4 < 0;
}
        const numero7 = -5;
        const numero8 = 3;
        console.log(verificarNegativo(numero7)); 
        console.log(verificarNegativo(numero8)); 


 // 10-Crie uma função chamada removerEspacos que recebe uma string como 
 // parâmetro e retorna a mesma string sem espaços em branco.
        function removerEspacos(str) {
            return str.replace(/\s+/g, '');
}
        const stringComEspacos = "Olá, como vai você?";
        const stringSemEspacos = removerEspacos(stringComEspacos);
        console.log(`String sem espaços: ${stringSemEspacos}`);


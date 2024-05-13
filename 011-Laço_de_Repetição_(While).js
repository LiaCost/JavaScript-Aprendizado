/*
    O while( laço enquanto) é utilizado quando
    queremos executar um bloco de código
    repetidamente enquanto uma condição específica
    for verdadeira. Ele é especialmente útil quando o
    número de iterações não é conhecido antecipadamente ou 
    quando precisamos repetir uma ação até que uma condição 
    específica seja atendida.
*/

// Contagem regressiva usando while
/*let contador = 5;
while (contador >= 1){
    console.log(contador);
    contador--;
}*/

//

let i = 0;
while ( 1>=5)
{
    console.log(1);
    i++;
}


const frutas = [ 'maçã', 'banana', 'laranja', 'pera','melancia']
let j = 0;
while (j < frutas.length){
    console.log( 'Eu gossto de ' + frutas[j]);
    j++;
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age:30
};

let key = 0;
while(key in person){
    console.log(key + ':' + person[key]);
}

let k = 0;
while(k < 10){
    if (k === 5){
        break;
    }
    console.log(k);
    k++;
}



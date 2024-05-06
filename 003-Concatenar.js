
/** Cocatenar: é unificar variáveis e textos em uma saída 
 *  O (toString) tranformar qualquer outro tipo primitivo em texto*/ 

var dono = "Lia"
var ddd = 61
var telefone = "9 9999 9999"
console.log ( "A cliente " + dono + " tem o seguinte número de celular ("+ddd+") " +telefone);

let texto = ` A clinte ${dono} tem o seguinte número de celular ${ddd} ${telefone} `
console.log(texto)

var idade = 19 
console.log(idade + 1) /** acumuladores na saída +1 */

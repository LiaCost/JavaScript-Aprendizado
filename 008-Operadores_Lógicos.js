// Operador E lógico (&&)
// Retorna verdadeiro se ambos os operandos forem verdadeiros.
// Exemplo: (a && b) é verdadeiro somente se tanto 'a' quanto 'b' forem verdadeiros.
console.log(true && true);   // Saída: true
console.log(true && false);  // Saída: false
console.log(false && true);  // Saída: false
console.log(false && false); // Saída: false

// Operador OU lógico (||)
// Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.
// Exemplo: (a || b) é verdadeiro se pelo menos um dos valores 'a' ou 'b' for verdadeiro.
console.log(true || true);   // Saída: true
console.log(true || false);  // Saída: true
console.log(false || true);  // Saída: true
console.log(false || false); // Saída: false

// Operador NÃO(NEGAÇÃO) lógico (!)
// Inverte o valor do operando booleano.
// Exemplo: !a é verdadeiro se 'a' for falso, e falso se 'a' for verdadeiro.
console.log(!true);  // Saíd,0,a: false
console.log(!false); // Saída: true

/**
    Operadores lógicos:
    e(and) - &&(Java)   x<10 e(and) x>0
    ou(or) - ||(java)   x||10 ou(or) x||0
    não(!) - !(java)    x!10 não(!)  x!0
 */

// Operador E(AND) lógico (&&)
let a = 5;
let b = 7;

if (a >= b && a === b){
    console.log("a é maior e igual a b");
} else{
    console.log("a não é maior e igual a b");
} 

// Operador OU(OR) lógico (||)
let c = 8;
let d = 7;

if (c >= d || c === d) {
    console.log("c é maior e igual a d");
} else{
    console.log("c não é maior e igual a d");
} 


// Operador NÃO(NEGAÇÃO) lógico (!)
let e = 5;
let f = 7;

if (!(e < f || e == f)) {
    console.log("e é maior e igual a f");
} else{
    console.log("e não é maior e igual a f");
} 



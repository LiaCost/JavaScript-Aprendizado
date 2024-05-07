/**
     * NUMBER:
     * parseInt (Int:inteiro)
     * parseFloat - (Float números flutantes: números com casas decimais)
     * false significa 0
     * true significa 1
 */

    //Conversão de string para número
    var idade = 20 
    console.log(typeof idade, idade)
    var idade = Number("20") 
    console.log(typeof idade, idade)

    //Converter boolean para número
    /** boolean: verdadeiro ou falso */
    var number = Number(false) 
    console.log(typeof number, number)
    var number = Number(true) 
    console.log(typeof number, number)

    // Converter data para número
    var number = Number(new Date())
    console.log(typeof number, number)

     // Conversão de string usando parseInt
     var n = "29"
     console.log(typeof n, n)
     console.log(typeof parseInt(n), parseInt(n))
    
    // Conversão de string usando parseFloat
    var n = "29.23"
    console.log(typeof n, n)
    console.log(typeof parseFloat(n), parseFloat(n))
   
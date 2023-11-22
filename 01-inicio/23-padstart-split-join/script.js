//  Adiciona numeros para autocompletar uma quantidade de números requeridos.

let sku="34"
let sku2="346534"

console.log(sku.padStart(6,0))
console.log(sku2.padStart(8,0))
//////////////////////////////////////////

//     Split divide uma string com espaços retorna um array      //
let frase="Testando o método split!"
console.log(frase.split(" "))

let frutas="uva;maçã;limão;laranja"
let tools="chave,martelo,alicate,medidor"

console.log(frutas.split(";"))
console.log(tools.split(","))

//////////////////////////////

//  Join junta elementos de um array em uma frase

let palavras=["Pão","Manteiga","Chá"]

console.log(palavras.join("@"))
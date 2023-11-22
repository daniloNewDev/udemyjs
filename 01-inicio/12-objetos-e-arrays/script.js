let numeros=[1,3,4,6,8,12,26]
let nomeString=["Danilo","Shalom","Baruch HShem"]
let itemsBoolean=[true,false,false,true,true]

let misturado=[true,"Danilo",38]

//      Para acessar os elementos       //

console.log(numeros[2])
console.log(nomeString[1])
console.log(itemsBoolean[3])
console.log(misturado[1])
console.log(numeros.length[-1])

//      Propriedades        //

let name1="Danilo"
console.log(nomeString[1].length)
console.log(name1.length)

//      Objetos     //
// Conjunto de dados. //

let pessoa={
    nome: "Danilo",
    idade: 38,
    profissão: "Programador",
    trabalhando: true
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissão)
console.log(pessoa.trabalhando)

console.log(`Shalom, ${pessoa.nome}, você é ${pessoa.profissão}.`)
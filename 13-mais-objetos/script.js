let pessoa={
    nome: "Danilo",
    idade: 38,
    profissão: "Programador",
    cnh: true
}
delete pessoa.cnh
console.log(pessoa)
delete pessoa.idade
console.log(pessoa)
pessoa.trabalhando=true
console.log(pessoa)

//      Assign      //

let carro={
    motor: 1.0,
    portas: 2,
    direcao: "hidráulica"
}

let adcionais={
    arCondicionado: true,
    travaAutomatica: true
}

console.log(carro)
Object.assign(carro,adcionais)
console.log(carro)

//      Object keys     //

console.log(Object.keys(adcionais))

//      Mutabilidade        //
let notas={
    primeira: "Dó",
    segunda: "Ré",
    terceira: "Mi"
}

let notas2=notas

console.log(notas2)
console.log(notas2==notas)
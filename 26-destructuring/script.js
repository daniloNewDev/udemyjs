//      Define variáveis com propriedades do objeto com uma notação diferente
//      Destructuring

const person={
    name: "Moshe",
    lastname: "HaBeinu"
}

const {name: fname,lastname: lname}=person

console.log(fname+" "+lname)
console.log(`Shalom, ${fname}, mah nishmah?`)

let obj={
    rodas: 4,
    portas: 2,
    valor: "R$ 200 mil",
    marca: "AUDI",
    modelo: "A13"
}

const {rodas: wheels,portas: doors,valor: custo,marca: brand,modelo: model}=obj
console.log(`${brand} ${model} de ${doors} portas. Somente ${custo}.`)

//      Destructuring com Array

// Define variáveis com os valores de um Array

let names=["Danilo","Shalom","Moshe","Ruth","Sara"]
let [name1,name2,name3,name4,name5]=names

console.log(name1,name2,name5,name4,name3)
console.log(typeof (name1))
console.log(typeof (names))
console.log(typeof (obj))
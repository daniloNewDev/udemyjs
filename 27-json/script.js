let daniloNewDev={
    "name": "Danilo New Dev",
    "age": 38,
    "country": "Brasil",
    "dosmoke": true,
    "drinks": ["pepsi","ice tea","gatorade"]
}

console.log(daniloNewDev.name)
console.log(daniloNewDev.age)
let frase=`Shalom, ${daniloNewDev.name}, como estão as coisas no ${daniloNewDev.country}?`
console.log(frase)

//  Stringify - parse  //

let daniloString=JSON.stringify(daniloNewDev)

console.log(daniloString)
console.log(typeof (JSON.stringify(daniloNewDev)))

console.log(JSON.parse(daniloString))

let frase2="Serei um grande programador"
const fraseArr=frase2.split(" ")
console.log(fraseArr)


const calculadora={
    soma: function (a,b) {return a+b},
    subt: function (a,b) {return a-b},
    mult: function (a,b) {return a*b},
    divi: function (a,b) {return a/b}
}
console.log(calculadora.soma(4,2))
console.log(calculadora.subt(4,2))
console.log(calculadora.mult(4,2))
console.log(calculadora.divi(4,2))
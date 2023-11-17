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
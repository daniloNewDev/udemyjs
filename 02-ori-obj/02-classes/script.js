let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function () {
        console.log("Au Au")
    }
}

let labrador = Object.create(cachorro)

labrador.latir()

labrador.raca = "Labrador"

console.log(labrador.raca)
console.log(cachorro.raca)
console.log(cachorro)
console.log(labrador.latir())
console.log(labrador.patas)

//      Instanciando Classes por Função     //

function createDog(race, paws, color) {
    let dog = Object.create({})
    dog.race = race
    dog.paws = paws
    dog.color = color
    dog.bark = function () { console.log("Au au!") }
    return dog
}

let doberman = createDog("Doberman", 4, "Black and Brown")
console.log(doberman)
console.log(doberman.bark())
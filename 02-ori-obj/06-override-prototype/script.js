class Dog {
    constructor(race, color) {
        this.race = race
        this.color = color
    }
}

let labrador = new Dog("Labrador", "White")
console.log(labrador)

Dog.prototype.bark = function () { return console.log("Au, Au.") }
console.log(labrador.bark())

Dog.prototype.paws = 4
console.log(labrador.paws)


Dog.prototype.race = "SRD"
console.log(Dog.prototype.race)
console.log(labrador.race)
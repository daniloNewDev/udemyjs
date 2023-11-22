class Mamifero {
    constructor(paws) {
        this.paws = paws
    }
}

let coiote = new Mamifero(4)
console.log(coiote)

class Dog extends Mamifero {
    constructor(paws, race) {
        super(paws, paws)
        this.race = race
    }
    bark() {
        console.log("Au au")
    }
}

let pug = new Dog(4, "Pug")

console.log(pug.paws)
console.log(pug.race)
console.log(pug.bark())

//      InstanceOf

console.log(new Dog instanceof Mamifero)
console.log(pug instanceof Mamifero)
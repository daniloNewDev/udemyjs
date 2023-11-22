function Dog(race, paws, color) {
    this.race = race
    this.paws = paws
    this.color = color
}

Dog.prototype.uivar = function () { console.log("Auuuuu!") }

let husky = new Dog("Husky", 4, "White")
console.log(husky.uivar())
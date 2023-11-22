function Dog(race, paws, color) {
    this.race = race
    this.paws = paws
    this.color = color
    this.uivar = function () { console.log("Auuuuu!") }
}
let husky = new Dog("Husky", 4, "WhiteSnow")

console.log(husky)
console.log(husky.uivar())
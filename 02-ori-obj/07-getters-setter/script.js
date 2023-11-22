class Dog {
    constructor(race, color) {
        this.race = race
        this.color = color
    }

    bark() {
        console.log("Au au")
    }
    get getColor() {
        return this.color
    }
    set setColor(color) {
        this.color = color
    }
}

let pastorAlemao = new Dog("Pastor Alemão", "")
console.log(pastorAlemao)

pastorAlemao.setColor = "Brown"
console.log(pastorAlemao)
console.log(pastorAlemao.getColor)

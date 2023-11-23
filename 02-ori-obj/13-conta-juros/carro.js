class Carro {
    constructor(marca, cor, gas, consumo) {
        this.marca = marca
        this.cor = cor
        this.gas = gas
        this.consumo = consumo
    }
    driving(km) {
        let litrosConsumidos = km / this.consumo
        this.gas -= litrosConsumidos
    }
    abastecer(litros) {
        this.gas += litros
    }
}

let carro = new Carro("GMC", "Black", "100", 14)
console.log(carro)

carro.driving(100)
carro

carro.abastecer(5)
carro
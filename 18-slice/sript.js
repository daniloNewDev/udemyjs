let carros=["BMW","GMC","VW","Fiat","Renault","JEEP"]

console.log(carros.slice(3,4))
console.log(carros.slice(4,6))
// Se o segundo parâmetro não seja preenchido, ele traz toso o restante do array.
console.log(carros.slice(2))

// Números negativos retornam array de trás pra frente.
console.log(carros.slice(-3))
console.log(carros.slice(-2))

// Segundo parâmetro negativo traz o array sem os últimos.
console.log(carros.slice(1,-2))

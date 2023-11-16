//      Remove e Adiciona sempre no final do array      //

let nomes=["Shalom","Danilo","Moshe","Ruth"]

let removido=nomes.pop()
console.log(removido)
console.log(nomes)

let adicional="Rivka"
nomes.push(adicional)
nomes.push("Israel")

console.log(nomes)

//      Shift e Unshift     //

let carros=["VW","Fiat","GMC"]

let removerCarro=carros.shift()
console.log(removerCarro)
console.log(carros)

carros.unshift("BMW")
carros.unshift("JEEP")
console.log(carros)
console.log(carros[0])
console.log(carros[2])
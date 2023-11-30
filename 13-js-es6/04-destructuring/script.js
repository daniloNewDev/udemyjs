const fruits = ["Maçã", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits

f1
f2
f3

//  No objeto:
const productsDetails = {
    name: "Mouse",
    price: 39,
    category: "Periférico",
    color: "Cinza"
}
const { name: productName, price, category: productCategory, color } = productsDetails

console.log(`O valor do ${productName} é de ${price}, modelo ${productCategory}, cor ${color}.`)

//  spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]
a3
const a4 = [0, ...a1, ...a2, 7]
a4

const carName = { name: "Polo" }
const carBrand = { brand: "VW" }
const othersInfos = { km: 1000, price: 45000 }

const car = { ...carName, ...carBrand, ...othersInfos }

car
function* criadorID() {
    let id = 0
    while (true) {
        yield id++
    }
}

let idCreate = criadorID()

console.log(idCreate.next().value)
console.log(idCreate.next().value)
console.log(idCreate.next().value)
console.log(idCreate.next().value)
console.log(idCreate.next().value)
console.log(idCreate.next().value)
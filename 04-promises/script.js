//  Callbacks

console.log("1")
// setTimeout(function () { console.log("Lehitraot!") }, 2000)
console.log("2")
console.log("3")

//  Promisses
let p = Promise.resolve(5)
console.log("Shalom")
console.log(p)

p.then((value) => { return value + 5 }).then((value) => { console.log(value) })

//  Falhas nas Promises
let pErr = Promise.resolve(new Error("Não deu certo"))
console.log("bseder")
pErr.then((value) => console.log((value)))
    .catch(reason => console.log("Falhou... " + reason))

//  Reject
function verificarNum(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve("O número é 2.")
        } else {
            reject(new Error("Falhou!"))
        }
    })
}
console.log(verificarNum(2))

//  Método .all

const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(20)
    }, 5000)
})

const p2 = Promise.resolve(30)

const p3 = new Promise((resolve, reject) => {
    resolve(40)
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))


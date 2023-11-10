let consoleTest=() => {
    console.log("Shalom, chaverim!")
}

consoleTest()

const divisao=(a,b) => {
    return a/b
}

console.log(divisao(56,7))
console.log(divisao(100,4))

// sem parênteses //

const subtrairValorDois=x => {
    return x-2
}

console.log(subtrairValorDois(8))
console.log(subtrairValorDois(15))

const saudacao=(nome,cnh) => {
    cnh===undefined
        ? console.log(`Shalom, ${nome}!`)
        :console.log(`Shalom, ${nome}, você pode dirigir!`)
}

saudacao("Danilo",true)
// Closure, uma função dentro da outra //

const armazSoma=(x) => {
    return y => x+y
}
let soma1=armazSoma(3)
console.log(soma1(5))

// Contador //

const contador=(i) => {
    let cont=i
    let somarContador=() => {
        console.log(cont)
        cont++
    }
    return somarContador
}

let meuContador=contador(5)
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()

//      Recursion       //

//???
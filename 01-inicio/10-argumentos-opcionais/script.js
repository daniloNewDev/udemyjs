const soma=(a,b) => {
    if (a===undefined||b===undefined) {
        console.log("Esta função precisa de dois parâmetros.")
    } else {
        return a+b
    }
}
console.log(soma(2))
console.log(soma(2,3))

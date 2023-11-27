//  Async
async function somar(a, b) {
    return a + b
}

somar(2, 4).then(value => console.log(value))

//  Await
function somaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a + b)
        }, 4000)
    })
}

async function resSoma(a, b, c) {
    let x = somaComDelay(a, b)
    let y = c

    return await x + y  //  Esperando o resultado para executar a função
}

resSoma(2, 4, 6).then(value => console.log(value))
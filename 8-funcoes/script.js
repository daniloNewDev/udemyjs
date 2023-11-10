const imprimirNoConsole=() => {
    console.log("Shalom!")
}
imprimirNoConsole()
////////////////////////

const saudacao=(nome) => {
    if (nome=="Danilo") {
        console.log(`Shalom, ${nome}, ma nishmá?`)
    }
}
saudacao("Danilo")
///////////////////////


const multplicar=(a,b) => {
    return a*b
}
console.log(multplicar(2,9))
///////////////////////////////

const permissao=(idade,cnh) => {
    idade>=18&&cnh==true
        ? console.log("Tem permissão para dirigir.")
        :console.log("Não tem permissão para dirigir.")
}

permissao(18,true)
permissao(14,false)
permissao(23,false)
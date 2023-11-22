let num1="Echad"
let num2="Shitaim"
let num3="Shalosh"
let num4="Arba"

//  Função que pode receber um número indefinido de parâmetros  //


const imprimirNumeros=(...args) => {
    for (let i=0;i<args.length;i++)
        console.log(args[i])
}
//  O operador Rest vai retornar os parâmetros em um Array.
imprimirNumeros(num1,num2)
imprimirNumeros(num3,num4)
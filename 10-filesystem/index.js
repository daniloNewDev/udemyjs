//  Lendo:

let { readFile, writeFile, write } = require('fs')

readFile('arquivo.txt', "utf8", (error, texto) => {
    if (error) {
        throw error
    } else {
        console.log(texto)
    }
})

//  Escrevendo:
writeFile("arquivo.txt", "Texto escrito por writeFile", (error) => {
    if (error) {
        throw error
    } else {
        console.log("Escreveu com sucesso!")
    }
})
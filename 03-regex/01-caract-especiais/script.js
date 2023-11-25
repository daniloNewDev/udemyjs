const reg1 = new RegExp("bola")

console.log(reg1.test("Tem bola?"))
console.log(reg1.test("Não tem."))

const reg2 = /bola/

console.log(reg2.test("Tem bola?"))
console.log(reg2.test("Não tem."))

console.log(/paz/.test("Que a paz esteja com os teus!"))
console.log(/paz/.test("Shalom 1284085paz8503 Aleichem!"))

//  Conjunto de caracteres  //

const conjunto = /[12345]/

console.log(conjunto.test("Temos o número 6"))
console.log(conjunto.test("Temos o número 2"))
console.log(conjunto.test("Temos o número 48"))
console.log(conjunto.test("Temos o número 53"))

const doZeroAoNove = /[0-9]/
//  conjunto de 0 a 9
console.log(conjunto.test("Temos o número 53"))
console.log(conjunto.test("aztnznzb"))

//  .  = Qualquer caractere, menos uma NOVA LINHA
//  \s = Caractere alfanumérico
//  \d = Qualquer dígito
//  \w = Caractere de espaço em branco
//  \S = Caracteres que NÃO são de espaço em branco
//  \D = Caracteres que NÃO são dígitos
//  \W = Caracteres que NÃO são alfanuméricosdígitos



//  \. = Caractere de espaço em branco
const pontoRegex = /./
console.log(pontoRegex.test("124jbvdo"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("Smart"))


//  \s = Caractere com espaço, tabs, quebras de linha
const sRegex = /\s/
console.log(sRegex.test("124jbvdo"))
console.log(sRegex.test(" "))
console.log(sRegex.test("123"))
console.log(sRegex.test("Smart"))

//  \d = Qualquer dígito
const dRegex = /\d/
console.log(dRegex.test("124jbvdo"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))
console.log(dRegex.test("Smart"))

//  \w = Qualquer dígito
const wRegex = /\w/
console.log(wRegex.test("124jbvdo"))
console.log(wRegex.test(" "))
console.log(wRegex.test("123"))
console.log(wRegex.test("Smart"))

//  \S = Caractere que NÃO são espaço, tabs ou quebras de linha
const sUpperRegex = /\S/
console.log(sUpperRegex.test("124jbvdo"))
console.log(sUpperRegex.test(" "))
console.log(sUpperRegex.test("123"))
console.log(sUpperRegex.test("Smart"))

//  \D = Caracteres que NÃO são dígitos
const dUpperRegex = /\D/
console.log(dUpperRegex.test("124jbvdo"))
console.log(dUpperRegex.test(" "))
console.log(dUpperRegex.test("123"))
console.log(dUpperRegex.test("Smart"))

//  \W = Caracteres que NÃO são alfanuméricos
const wUpperRegex = /\W/
console.log(wUpperRegex.test("124jbvdo"))
console.log(wUpperRegex.test(" "))
console.log(wUpperRegex.test("123"))
console.log(wUpperRegex.test("Smart"))

//      Na prática      //

const dia = /\d\d/
console.log(dia.test("2019"))
console.log(dia.test("asd12"))
console.log(dia.test("23"))
console.log(dia.test("1"))

//  para receber o retorno correto de dois dígitos:
console.log(dia.test(13) && "13".length == 2)
console.log(dia.test("2019") && "2019".length == 2)

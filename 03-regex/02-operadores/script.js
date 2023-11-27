const notLettersAandB = /[^ab]/
//
console.log(notLettersAandB.test("a"))
console.log(notLettersAandB.test("Esse nem tem..."))
console.log(notLettersAandB.test("1245sdf"))

const notAtoZ = /[^a-z]/
//  Um conjunto de A a Z:
console.log(notAtoZ.test("javascript"))
console.log(notAtoZ.test("1234"))
console.log(notAtoZ.test(" "))
console.log(notAtoZ.test("as3456"))

const umOumais = /\d+/
//  Quando a ocorrência acontece mais de uma vez:
console.log(umOumais.test("25vrh646"))
console.log(umOumais.test("1234"))
console.log(umOumais.test("asgahath"))
console.log(umOumais.test(" "))
console.log(umOumais.test(" feg4eryj"))

//  Question    //
const padrao = /123?5/

console.log(padrao.test("53235"))
console.log(padrao.test("1235"))

//  Ocorrências Precisas    //
const fone = /\(\d{2}\)\d{5}-\d{4}/

console.log(fone.test("(11)98888-4444"))
console.log(fone.test("11988884444"))

//  Método Exec //
const digit = /\d+/

console.log(digit.exec("Tem o número 100 aqui"))
console.log(digit.exec("Aqui não"))

//  Método Match    //
const frase = "Número 100 está aqui!".match(/\d+/)

console.log(frase)

//  Choice Pattern  //
const regChoice = /\w+: ("Moshe|Danilo|Sara)/

console.log(regChoice.test("Nome: Danilo"))
console.log(regChoice.test("Nome: Amanda"))
console.log(regChoice.test("Nome: Sara"))

//  Validando um domínio:
const validaDominio = /[?www].\w+\.com.br|.com/

console.log(validaDominio.test("www.google.com"))
console.log(validaDominio.test("www.maincode.com.br"))

//  Validando um e-mail:
const validaEmail = /\w+@\w+\.\w+/

console.log(validaEmail.test("dannewdev@gmail.com"))
console.log(validaEmail.test("dannewdev@gmail"))
console.log(validaEmail.test("gmail.com"))
console.log(validaEmail.test("@gmail.com"))

//  Validando data de nascimento:
const validaData = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validaData.test("13/08/1985"))
console.log(validaData.test("1/1/2001"))
console.log(validaData.test("1/01/2001"))
console.log(validaData.test("1/01/91"))
console.log(validaData.test("31-01-2001"))


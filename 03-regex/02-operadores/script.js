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

const padrao = /123?5/

console.log(padrao.test("53235"))
console.log(padrao.test("1235"))

const fone = /\(\d{2}\)\d{5}-\d{4}/

console.log(fone.test("(11)98888-4444"))
console.log(fone.test("11988884444"))
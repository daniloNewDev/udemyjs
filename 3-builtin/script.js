const saudacao = () => {
    return alert("Shavua Tov!!!")
}
const resposta = document.getElementById("resposta").value

const promptFunction = () => {
    let nome = prompt("Qual o teu nome?")
    let idade = prompt("Qual a tua idade?")
    return document.getElementById("resposta").innerHTML = `Shalom, ${nome}!!! Você tem ${idade} anos de idade.`
}

const maior = () => {
    return document.getElementById("respMaior").innerHTML = Math.max(23, 64, 8, 12, 29, 60)
}

const menor = () => {
    return document.getElementById("respMenor").innerHTML = Math.min(23, 64, 8, 12, 29, 60)
}

const arredondar = () => {
    return document.getElementById("respArredondar").innerHTML = Math.round(15.500,85)
}

console.log(Date())
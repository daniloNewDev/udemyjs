const ageDisplay=() => {
  let name=prompt("Qual o seu nome?")
  let age=prompt("Qual a sua idade?")
  return name=="Danilo"&&age==38
    ? (document.getElementById("resultado").innerHTML=`Shalom, ${name}, você tem ${age} de idade!`)
    :(document.getElementById("resultado").innerHTML=`Quem é você, meu truta?`);
}

//if(name == "Danilo" && age == 38) {
//   return document.getElementById("resultado").innerHTML = `Shalom, ${name}, você tem ${age} de idade!`
//} else {
//    return document.getElementById("resultado").innerHTML = `Quem é você, meu truta?`
//}

const radar=() => {
  let velocidade=prompt("Digite a velocidade:")

  velocidade<=60
    ? document.getElementById("resultado2").innerHTML="Boa viagem!"
    :document.getElementById("resultado2").innerHTML=`Ops! Foi multado, andando a ${velocidade}Km/h! ${velocidade-60}km/h acima do permitido.`
}

let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")

input1.addEventListener("focus", function () { console.log("Entrou no input") })
input2.addEventListener("focus", function () { console.log("Saiu no input") })
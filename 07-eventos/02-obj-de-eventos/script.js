//  Objetos de Eventos:

let btn1 = document.querySelector("#bt1")
let btn2 = document.querySelector("#bt2")

function msg(event) {
    console.log(event)
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function (event) { console.log(event) })


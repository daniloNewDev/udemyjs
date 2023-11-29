//  Eventos:
let btn1 = document.querySelector("#bt1")
let btn2 = document.querySelector("#bt2")

function msg() {
    console.log("Clicou!")
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function () { btn1.removeEventListener("click", msg) })

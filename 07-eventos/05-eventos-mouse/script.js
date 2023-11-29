let btn1 = document.querySelector("#btn1")

btn1.addEventListener("mousedown", function (e) {
    console.log("Apertou o mouse!")
})

btn1.addEventListener("mouseup", function () {
    console.log("Soltou o click!")
})

btn1.addEventListener("dblclick", function () {
    console.log("Duas vezes o click!")
})

btn1.addEventListener("contextmenu", function () {
    console.log("Clicou botão direito!")
})
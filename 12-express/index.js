let express = require('express')
let app = express()

app.get('/', function (req, res) {
    res.send('Primeira Rota com Express.')
})

app.get('/teste', function (req, res) {
    res.send('Testando Rota.')
})

app.listen(3000, function () {
    console.log("Aplicação funciona na porta 3000.")
})
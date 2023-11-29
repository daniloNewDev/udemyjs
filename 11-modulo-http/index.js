const { createServer } = require('http')

let server = createServer((request, response) => {

    response.writeHead(200, { "Content-Type": "texto/html" })
    response.write("<h1>Hello World</h1>")
})
server.listen(8000)

console.log('Listen the gate 8000!')
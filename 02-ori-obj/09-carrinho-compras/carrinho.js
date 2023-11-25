class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens
        this.qtd = qtd
        this.valorTotal = valorTotal
    }

    addItem(item) {
        let count = 0
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd
                count = 1
            }
        }

        if (count == 0) {
            this.itens.push(item)
        }

        this.qtd += item.qtd
        this.valorTotal += item.valor * item.qtd
    }
    removeItem(item) {
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {

                this.itens[itemCarrinho].qtd -= item.qtd
                this.qtd -= item.qtd
                this.valorTotal -= item.valor * item.qtd

                if (this.itens[itemCarrinho].qtd == 0) {
                    let obj = this.itens[itemCarrinho]
                    let index = this.itens.findIndex(function (obj) { return obj.id == item.id })
                    this.itens.splice(index, 1)
                }
            }
        }
    }
}

let carrinho = new Carrinho([{ id: 1, nome: "Camisa", qtd: 1, valor: 80 }], 1, 80)

console.log(carrinho)

carrinho.addItem({ id: 1, nome: "Camisa", qtd: 1, valor: 80 })
carrinho.addItem({ id: 1, nome: "Camisa", qtd: 1, valor: 80 })
carrinho.addItem({ id: 2, nome: "Calça", qtd: 1, valor: 100 })
carrinho.addItem({ id: 3, nome: "Sapato", qtd: 1, valor: 180 })
console.log(carrinho)

carrinho.removeItem({ id: 1, nome: "Camisa", qtd: 1, valor: 80 })
carrinho.removeItem({ id: 1, nome: "Camisa", qtd: 1, valor: 80 })
carrinho.removeItem({ id: 1, nome: "Camisa", qtd: 1, valor: 80 })
console.log(carrinho)

carrinho.addItem({ id: 1, nome: "Camisa", qtd: 1, valor: 80 })
carrinho.addItem({ id: 1, nome: "Camisa", qtd: 1, valor: 80 })
console.log(carrinho)
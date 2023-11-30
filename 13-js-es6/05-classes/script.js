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
            if (count == 0) {
                this.itens.push(item)
            }
        }
        this.qtd += item.qtd
        this.valorTotal += item.price * item.qtd
    }
    removeItem(item) {
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd -= item.qtd
                this.qtd -= item.qtd
                this.valorTotal -= item.price * item.qtd

                if (this.itens[itemCarrinho].qtd == 0) {
                    let obj = this.itens[itemCarrinho]
                    let index = this.itens.findIndex(obj => obj.id == item.id)
                    this.itens.splice(index, 1)
                }
            }
        }
    }
}

const carrinho = new Carrinho([{ name: "Camisa", id: 1, qtd: 1, price: 50 }], 1, 50)

carrinho.addItem({ name: "Camisa", id: 1, qtd: 1, price: 50 })
carrinho.addItem({ name: "Calça", id: 2, qtd: 1, price: 60 })

carrinho.removeItem({ name: "Calça", id: 2, qtd: 1, price: 60 })

console.log(carrinho)
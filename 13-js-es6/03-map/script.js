const products = [
    { name: "Camisa", price: 10, category: "Clothes" },
    { name: "Cellphone", price: 210, category: "Eletronics" },
    { name: "Notebook", price: 500, category: "IT" },
    { name: "Blusa", price: 20, category: "Clothes" },
    { name: "Cigars", price: 10, category: "WTF" },
]

products.map((product) => {
    if (product.category === "Clothes") {
        product.onSale = true
    }
})

products
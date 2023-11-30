const arr = [1, 2, 3, 4, 5]

const highNum = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

//  array com objetos:

const users = [
    { name: "Rivka", presente: true },
    { name: "Danilo", presente: false },
    { name: "Sara", presente: false },
    { name: "Moshe", presente: true }
]

const presentes = users.filter((user) => user.presente)
presentes

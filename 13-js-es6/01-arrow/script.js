const arrowSum = (a, b) => a + b

const greeting = (name) => console.log("Shalom, " + name)

greeting("Danilo")

const user = {
    name: "Danilo",
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log("Usename: " + self.name)
        }, 500)
    },
    sayUsserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 1500)
    }
}

user.sayUserName()
user.sayUsserNameArrow()


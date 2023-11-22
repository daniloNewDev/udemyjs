class Conta {
    constructor(saldo) {
        this.saldo = saldo
    }
    deposito(valor) {
        this.saldo += valor
    }
    saque(valor) {
        this.saldo -= valor
    }
}

let conta = new Conta(1000)

conta.deposito(1500)
console.log(conta)

conta.saque(200)
console.log(conta)
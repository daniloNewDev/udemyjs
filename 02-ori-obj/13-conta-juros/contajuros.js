class Conta {
    constructor(saldoCC, saldoCP, juros) {
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.juros = juros
    }

    deposito(valor) {
        this.saldoCC += valor
    }
    saque(valor) {
        this.saldoCC -= valor
    }
    transfCP(valor) {
        this.saldoCC -= valor
        this.saldoCP += valor
    }
    transfCC(valor) {
        this.saldoCC += valor
        this.saldoCP -= valor
    }
    jurosAniver() {
        let juros = (this.saldoCP * this.juros) / 100
        this.saldoCP += juros
    }
}

//  Nova Classe:
class contaEspecial extends Conta {
    constructor(saldoCC, saldoCP, juros) {
        super(saldoCC, saldoCP, juros * 1)
    }
}

let conta = new Conta(12000, 0, 1)
conta.deposito(8500)
conta

conta.saque(200)
conta

conta.transfCP(8000)
conta

conta.transfCC(200)
conta

conta.jurosAniver()
conta

//  Novo objeto, conta Especial:

let contaVip = new contaEspecial(120000, 480000, 2)
contaVip

contaVip.deposito(10000)
contaVip

contaVip.saque(400)
contaVip

contaVip.jurosAniver()
contaVip
 export class ContaCorrente {
    constructor (agencia, saldo){
        this.agencia = agencia;
        this.saldo = 0;
    }

    depositar(valor) {
        const saldoDepósito = this.saldo += valor;
        return `O seu saldo atual após o depósito é de R$ ${saldoDepósito} reais`;
    }

    sacar(valor){
        if(valor <= this.saldo){
            const saldoSaque = this.saldo -= valor;
            return `O seu saldo atual após o saque é de R$ ${saldoSaque} reais`;
        } else {
            return 'O seu saldo é insuficiente para esse saque';
        }
    }

}
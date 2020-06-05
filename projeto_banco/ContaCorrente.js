class ContaCorrente {
    constructor (agencia, saldo){
        this.agencia = agencia;
        this.saldo = saldo;
    }

    depositar(valor) {
        return saldo += valor;
    }

    sacar(valor){
        if(valor<=saldo){
            return saldo -= valor
        } else {
            return 'O seu saldo é insuficiente para esse saque';
        }
    }
}
class Conta {
    constructor (nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}
// console.log (Conta);


class ContaCorrente {
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
// console.log(ContaCorrente)

const conta1 = new Conta ('Viviane Miranda', '14416483724');
console.log ('conta1 dados: ', conta1);
console.log ('________________');

const contaCorrente1 = new ContaCorrente ('4515');
console.log('contaCorrente1 dados: ', contaCorrente1);
console.log ('contaCorrete1 depósito: ', contaCorrente1.depositar(100));
console.log ('contaCorrente1 sacar: ', contaCorrente1.sacar(150));
console.log ('_________________');

const conta2 = new Conta ('Neide Maria', '89782387638');
console.log ('conta2 dados: ', conta2);
console.log ('__________________');

const contaCorrente2 = new ContaCorrente ('88920-9');
console.log ('contaCorrente2 dados: ', contaCorrente2);
console.log ('contaCorrente2 depósito: ', contaCorrente2.depositar(2000));
console.log ('contaCorrente2 saque: ', contaCorrente2.sacar(390));
console.log ('_____________________');
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




//-----------------CÓDIGO JESSICA---------------------------------
// class Conta {
//     constructor(nome, cpf) {
//       this.nome = nome;
//       this.cpf = cpf;
//     }
//   }
  
//   class ContaCorrente {
//     constructor(agencia) {
//       this.agencia = agencia;
//       this.saldo = 0;
//     }
  
//     depositar(valor) {
//       return this.saldo += valor;
//     }
  
//     sacar(valor) {
//       return this.saldo -= valor;
//     }
  
//   }
  
  
//   const cliente1 = new Conta('Jessica', 'XXX.XXX.XX-XX');
//   console.log(cliente1)
  
//   const contaCorrenteJessica = new ContaCorrente('1010');
//   console.log('Saldo inicial: ', contaCorrenteJessica.saldo)
  
//   contaCorrenteJessica.depositar(40000);
//   console.log('Saldo após deposito de 4milhões: ', contaCorrenteJessica.saldo)
  
  
//   contaCorrenteJessica.sacar(30000);
//   console.log('Saldo após saque de 3milhões:', contaCorrenteJessica.saldo)
  
  
//   contaCorrenteJessica.depositar(40000);
//   console.log('Saldo após deposito de 4milhões', contaCorrenteJessica.saldo)
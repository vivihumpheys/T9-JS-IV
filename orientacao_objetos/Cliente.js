export class Cliente {
    constructor(nome, cpf, valor, modeloCelular, anoCelular, corCelular, loja, atendente) {
      this.nome = nome;
      this.cpf = cpf;
      this.dataCompra = new Date();
      this.valor = valor;
      this.modeloCelular = modeloCelular;
      this.anoCelular = anoCelular;
      this.corCelular = corCelular;
      this.loja = loja;
      this.atendente = atendente;
  
    }
  
  
    descontar() {
     //com condição em bloco
       if (this.valor <= 1500){
         const desconto =  this.valor*0.05;
         const valorFinal = this.valor - desconto;
           return `${this.nome}, você ganhou desconto de 5%, no total de ${desconto} reais e o valor final do produto é ${valorFinal} reais`;
       } else if (this.valor <= 3000) {
        const desconto =  this.valor*0.07;
        const valorFinal = this.valor - desconto;
           return `${this.nome}, você ganhou desconto de 7%, no total de ${desconto} reais e o valor final do produto é ${valorFinal} reais`
       } else {
        const desconto =  this.valor*0.1;
        const valorFinal = this.valor - desconto;
        return `${this.nome}, você ganhou desconto de 10%, no total de ${desconto} reais e o valor final do produto é ${valorFinal} reais`;
       }
      }
  
    verificarCor() {
  
      const corMinuscula = this.corCelular.toLowerCase();
      console.log(corMinuscula)
  
      if (corMinuscula === 'roxo') {
        return `Cor em estoque`
      } else {
        return `Cor ${this.corCelular} indisponível `
      }
    }
  
  
  }
  const cliente1 = new Cliente('Dora Barreto', '223.001.221-29', 2000, 'XXX-12', 2020, 'Amarelo', 'RJ-BR', 'Joana Maria')
  console.log("dados cliente1:", cliente1);
  console.log("cliente 1", cliente1.descontar());
  console.log("cliente 1", cliente1.verificarCor());
  console.log('_______________________');
  
  const cliente2 = new Cliente ('Jacinda Dos Santos', '29947462789', 1340, 'iphone', 2020, 'roxo', 'mg-br', 'claudia silva');
  console.log ('dados cliente2: ', cliente2);
  console.log(cliente2.descontar());
  console.log("cliente 1", cliente2.verificarCor());
  console.log ('______________');
  
  const cliente3 = new Cliente ('ana maria duarte', '98982713816238', 3400, 'motorola', 2019, 'azul','sp-br', 'lidia aguilar');
  console.log('dados cliente3: ', cliente3);
  console.log (cliente3.descontar());
  console.log("cliente 1", cliente3.verificarCor());
  console.log ('____________________');
  
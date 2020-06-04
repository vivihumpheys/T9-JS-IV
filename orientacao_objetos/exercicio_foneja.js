// 	CLIENTE1:

// 	Nome: Dora Barreto
// 	CPF: 223.001.221-29
// Data da compra: '11/09/2019'
// 	Valor da compra: R$ 2.000,00
// 	Modelo do celular: 'XXX-12'
// 	Ano do celular: 2020
// 	Cor do celular: Amarelo
// 	Loja: RJ-BR
// 	Atendente: Joana Maria

// 	CLIENTE 2:

// 	Nome: Marcela Janino Silva
// 	CPF: 321.101.231-29
// Data da compra: '11/09/2019'
// 	Valor da compra: R$ 1.300,00
// 	Modelo do celular: XXM-y
// 	Ano do celular: 2019
// 	Cor do celular: ROXO
// 	Loja: SP-BR
// 	Atendente: Drielly Gomes Almeida

// 	CLIENTE 3:

// 	Nome: Raquel Borges Figueredo
// 	CPF: 910.311.425-01
// 	Valor da compra: R$ 4.000,00
// 	Modelo do celular: MDM-PRO
// 	Ano do celular: 2020
// 	Cor do celular: AZUL
// 	Loja: MG-BR
// 	Atendente: Fran Carneiro de Pinha

class Cliente {
  constructor(
    nome,
    cpf,
    valor,
    modeloCelular,
    anoCelular,
    corCelular,
    loja,
    nomeAtendente
  ) {
    this.nome = nome;
    this.cpf = cpf;
    (this.dataCompra = new Date()), //objeto pre-configurado que pega a data de hoje do seu pc,;
      (this.valor = valor);
    this.modeloCelular = modeloCelular;
    this.anoCelular = anoCelular;
    this.corCelular = corCelular;
    this.loja = loja;
    this.nomeAtendente = nomeAtendente;
  }
  descontar() {
    //com if ternário
    const desconto =
      this.valor < 1500
        ? "yass, você ganhou desconto de 10%"
        : "sorry, no discounts for you";
    return desconto;

    //com condição em bloco
    //  if (this.valor < 1500){
    //      return 'yass, você ganhou desconto de 10%'
    //  } else {
    //      return 'sorry, no discounts for you'
    //  }
  }
  verificarCor() {
    const cor = this.corCelular.toLowerCase();
    const corCelular =
      cor === "roxo"
        ? "cor disponível no estoque"
        : "cor indisponível no estoque";
    return corCelular;
  }
}

const cliente1 = new Cliente(
  "Dora Barreto",
  "223.001.221-29",
  2000,
  "XXX-12",
  2020,
  "Amarelo",
  "RJ-BR",
  "Joana Maria"
);
console.log("cliente 1: ", cliente1);
console.log("terá desconto?", cliente1.descontar());
console.log("tem essa cor?", cliente1.verificarCor());
console.log("---------------------");

const cliente2 = new Cliente(
  "Marcela Janino Silva",
  "321.101.231-29",
  1300,
  "XXM-y",
  2019,
  "ROXO",
  "SP-BR",
  "Drielly Gomes Almeida"
);
console.log("cliente 2: ", cliente2);
console.log("terá desconto?", cliente2.descontar());
console.log("tem essa cor?", cliente2.verificarCor());
console.log("---------------------");

const cliente3 = new Cliente(
  "Raquel Borges Figueredo",
  "910.311.425-01",
  400,
  "MDM-PRO",
  2020,
  "AZUL",
  " MG-BR",
  "Fran Carneiro de Pinha"
);
console.log("cliente 3: ", cliente3);
console.log("terá desconto?", cliente3.descontar());
console.log("tem essa cor?", cliente3.verificarCor());
console.log("---------------------");


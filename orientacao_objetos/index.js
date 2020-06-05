// class Cliente {
//     constructor (nome, email, cpf){
//         this.nome = nome;
//         this.email = email;
//         this.cpf = cpf
//     }
// }

// const cliente1 = new Cliente ("vivi", "vivi@gmail.com", "14416483724")

// console.table (cliente1)

import {Cliente} from './Cliente';

const cliente1 = new Cliente('Dora Barreto', '223.001.221-29', 2000, 'XXX-12', 2020, 'Amarelo', 'RJ-BR', 'Joana Maria')
  console.log("dados cliente1:", cliente1);
  console.log("cliente 1", cliente1.descontar());
  console.log("cliente 1", cliente1.verificarCor());
  console.log('_______________________');
  
  const cliente2 = new Cliente ('Jacinda Dos Santos', '29947462789', 1340, 'Iphone', 2020, 'roxo', 'MG-BR', 'Claudia Silva');
  console.log ('dados cliente2: ', cliente2);
  console.log(cliente2.descontar());
  console.log("cliente 1", cliente2.verificarCor());
  console.log ('______________');
  
  const cliente3 = new Cliente ('Ana Maria Duarte', '98982713816238', 3400, 'Motorola', 2019, 'azul','SP-BR', 'Lidia Aguilar');
  console.log('dados cliente3: ', cliente3);
  console.log (cliente3.descontar());
  console.log("cliente 1", cliente3.verificarCor());
  console.log ('____________________');

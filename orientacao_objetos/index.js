class Cliente {
    constructor (nome, email, cpf){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf
    }
}

const cliente1 = new Cliente ("vivi", "vivi@gmail.com", "14416483724")

console.table (cliente1)
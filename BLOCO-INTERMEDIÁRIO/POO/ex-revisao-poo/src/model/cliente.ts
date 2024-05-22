// Você está desenvolvendo um sistema de banco de dados simples para armazenar informações de clientes. Para isso, você precisa criar algumas classes em TypeScript:

// Classe Cliente:
// Atributos:
// id: um número inteiro representando o identificador único do cliente.
// nome: uma string representando o nome do cliente.
// idade: um número inteiro representando a idade do cliente.
// Métodos:
// constructor(id: number, nome: string, idade: number): um construtor que recebe o ID, nome e idade do cliente e os atribui aos atributos correspondentes.
// apresentarCliente(): um método que imprime no console as informações do cliente (ID, nome e idade).

// Classe BancoDadosClientes:
// Atributos:
// clientes: um array para armazenar os objetos Cliente.
// Métodos:
// adicionarCliente(cliente: Cliente): um método que adiciona um objeto Cliente ao array clientes.
// listarClientes(): um método que lista todos os clientes cadastrados, chamando o método apresentarCliente() para cada cliente.

export class Cliente {
    id: number;
    nome: string;
    idade: number;

    constructor(id: number, nome: string, idade: number) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    apresentarCliente(): void {
        console.log(`Cliente ${this.id}: Nome - ${this.nome}, Idade - ${this.idade}`);
    }
}

export class BancoDadosClientes {
    clientes: Cliente[];

    constructor() {
        this.clientes = [];
    }

    adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    listarClientes(): void {
        console.log("Clientes cadastrados:");
        this.clientes.forEach(cliente => {
            cliente.apresentarCliente();
        });
    }
}
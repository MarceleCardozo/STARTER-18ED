"use strict";
class Item {
    constructor(valor, nome, descricao) {
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Pedidos {
    constructor() {
        this.itens = [];
        this.valorTotal = 0;
    }
    adicionarItem(item) {
        this.itens.push(item);
        this.valorTotal += item.valor;
    }
    calcularValorTotal() {
        return this.itens.reduce((total, item) => total + item.valor, 0);
    }
}
// Criando itens
const item1 = new Item(29.99, "Camiseta", "Camiseta de algodão tamanho M");
const item2 = new Item(49.99, "Calça Jeans", "Calça jeans azul tamanho 40");
const item3 = new Item(15.99, "Boné", "Boné preto com logo");
console.log("Itens Criados:");
console.log(item1);
console.log(item2);
console.log(item3);
// Criando um pedido e adicionando itens
const pedido = new Pedidos();
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);
pedido.adicionarItem(item3);
console.log("\nItens no Pedido:");
console.log(pedido.itens);
console.log("\nValor Total do Pedido:");
console.log(pedido.valorTotal);
// Verificando se o método calcularValorTotal funciona corretamente
const valorCalculado = pedido.calcularValorTotal();
console.log("\nValor Total Calculado com método calcularValorTotal:");
console.log(valorCalculado);
console.log('----------------------------------------------------------------');
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    desenhar() {
        console.log(`Desenhando um círculo com raio ${this.raio}`);
    }
    redimensionar() {
        this.raio *= 2;
        console.log(`O círculo foi redimensionado para o novo raio ${this.raio}`);
    }
}
class Retangulo {
    constructor(comprimento, altura) {
        this.comprimento = comprimento;
        this.altura = altura;
    }
    desenhar() {
        console.log(`Desenhando um retângulo com comprimento ${this.comprimento} e altura ${this.altura}`);
    }
    redimensionar() {
        this.comprimento *= 2;
        this.altura *= 2;
        console.log(`O retângulo foi redimensionado para o novo comprimento ${this.comprimento} e altura ${this.altura}`);
    }
}
// Testando a classe Circulo
const circulo = new Circulo(5);
console.log("Testando Circulo:");
circulo.desenhar(); // Saída: Desenhando um círculo com raio 5
circulo.redimensionar(); // Saída: O círculo foi redimensionado para o novo raio 10
circulo.desenhar(); // Saída: Desenhando um círculo com raio 10
// Testando a classe Retangulo
const retangulo = new Retangulo(10, 20);
console.log("\nTestando Retangulo:");
retangulo.desenhar(); // Saída: Desenhando um retângulo com comprimento 10 e altura 20
retangulo.redimensionar(); // Saída: O retângulo foi redimensionado para o novo comprimento 20 e altura 40
retangulo.desenhar(); // Saída: Desenhando um retângulo com comprimento 20 e altura 40
console.log('----------------------------------------------------------------');
class Animal {
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
    emitirSom() {
        console.log(`${this.nome} está emitindo um som.`);
    }
    mover() {
        console.log(`${this.nome} está se movendo.`);
    }
}
class Cachorro extends Animal {
    constructor(nome, idade, peso) {
        super(nome, idade, peso);
    }
    latir() {
        console.log(`${this.nome} está latindo.`);
    }
}
class Cavalo extends Animal {
    constructor(nome, idade, peso) {
        super(nome, idade, peso);
    }
    relinchar() {
        console.log(`${this.nome} está relinchando.`);
    }
}
class Gato extends Animal {
    constructor(nome, idade, peso) {
        super(nome, idade, peso);
    }
    miar() {
        console.log(`${this.nome} está miando.`);
    }
}
// Criando instâncias de cada animal
const cachorro = new Cachorro('Rex', 5, 20);
const cavalo = new Cavalo('Spirit', 8, 500);
const gato = new Gato('Whiskers', 3, 5);
// Testando métodos comuns
cachorro.emitirSom(); // Saída: Rex está emitindo um som.
cachorro.mover(); // Saída: Rex está se movendo.
cavalo.emitirSom(); // Saída: Spirit está emitindo um som.
cavalo.mover(); // Saída: Spirit está se movendo.
gato.emitirSom(); // Saída: Whiskers está emitindo um som.
gato.mover(); // Saída: Whiskers está se movendo.
// Testando métodos específicos
cachorro.latir(); // Saída: Rex está latindo.
cavalo.relinchar(); // Saída: Spirit está relinchando.
gato.miar(); // Saída: Whiskers está miando.

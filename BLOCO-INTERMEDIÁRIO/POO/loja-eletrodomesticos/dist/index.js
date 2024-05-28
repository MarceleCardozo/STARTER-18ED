"use strict";
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    vender(quantidade) {
        if (this.quantidade >= quantidade) {
            this.quantidade -= quantidade;
            return true;
        }
        return false;
    }
    repor(quantidade) {
        this.quantidade += quantidade;
    }
}
class Cliente {
    constructor(nome, idCliente) {
        this.nome = nome;
        this.idCliente = idCliente;
        this.produtosComprados = [];
    }
    comprar(produto, quantidade) {
        if (produto.vender(quantidade)) {
            this.produtosComprados.push(produto);
        }
        else {
            console.log("Produto não disponível na quantidade desejada.");
        }
    }
}
class Loja {
    constructor() {
        this.produtos = [];
        this.clientes = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    registrarCliente(cliente) {
        this.clientes.push(cliente);
    }
    fazerVenda(idCliente, nomeProduto, quantidade) {
        const cliente = this.clientes.find(c => c.idCliente === idCliente);
        const produto = this.produtos.find(p => p.nome === nomeProduto);
        if (cliente && produto) {
            cliente.comprar(produto, quantidade);
            console.log("Venda concluída com sucesso.");
        }
        else {
            console.log("Cliente ou produto não encontrado.");
        }
    }
}
// Passo 1: Criar uma loja
const loja = new Loja();
// Passo 2: Adicionar produtos à loja
const geladeira = new Produto("Geladeira", 1000, 5);
const tv = new Produto("TV", 800, 10);
const smartphone = new Produto("Smartphone", 500, 15);
loja.adicionarProduto(geladeira);
loja.adicionarProduto(tv);
loja.adicionarProduto(smartphone);
// Passo 3: Registrar clientes na loja
const joao = new Cliente("João", "12345");
const maria = new Cliente("Maria", "54321");
const ana = new Cliente("Ana", "67890");
loja.registrarCliente(joao);
loja.registrarCliente(maria);
loja.registrarCliente(ana);
// Passo 4: Fazer vendas com diferentes cenários
loja.fazerVenda("12345", "Geladeira", 1); // João compra 1 Geladeira
loja.fazerVenda("54321", "TV", 2); // Maria compra 2 TVs
loja.fazerVenda("67890", "Smartphone", 5); // Ana compra 5 Smartphones
// Cenário onde o cliente tenta comprar mais do que a quantidade disponível
loja.fazerVenda("12345", "Geladeira", 10); // João tenta comprar 10 Geladeiras (falha)
// Cenário onde o cliente tenta comprar um produto não existente
loja.fazerVenda("54321", "Laptop", 1); // Maria tenta comprar 1 Laptop (produto não encontrado)
// Cenário onde um cliente não registrado tenta comprar um produto
loja.fazerVenda("00000", "TV", 1); // Cliente não registrado tenta comprar 1 TV (cliente não encontrado)
// Passo 5: Verificar estados dos objetos após operações
console.log("Estado final dos produtos:");
console.log(loja.produtos);
console.log("Estado final dos clientes:");
console.log(loja.clientes);
// Verificar os produtos comprados por cada cliente
console.log("Produtos comprados por João:");
console.log(joao.produtosComprados);
console.log("Produtos comprados por Maria:");
console.log(maria.produtosComprados);
console.log("Produtos comprados por Ana:");
console.log(ana.produtosComprados);

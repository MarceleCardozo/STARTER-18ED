import { Circulo, Retangulo } from "./model/abstracao";
import { Carro } from "./model/carro";
import { ContaBancaria } from "./model/encapsulamento";
import { Animal, Cachorro } from "./model/heranca";
import { BancoDadosClientes, Cliente } from "./model/cliente";
import { Aguia, Passaro, Pinguim, fazerPassaroVoar } from "./model/polimorfismo";

// Abstração
const circulo = new Circulo(5);
console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());

const retangulo = new Retangulo(10, 5);
console.log(retangulo.calcularArea());
console.log(retangulo.calcularPerimetro());

console.log('----------------------------')

// Encapsulamento
const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.consultarSaldo());
conta.sacar(200);
console.log(conta.consultarSaldo()); 
// conta.saldo = 1000; // Erro: saldo é privado

console.log('----------------------------')

// Herança
const animal = new Animal("Animal Genérico");
animal.emitirSom();

const cachorro = new Cachorro("Buddy", "Golden Retriever");
cachorro.emitirSom(); 
console.log(cachorro.getRaca()); 

console.log("--------------------------------")

// Polimorfismo
const passaro = new Passaro();
const aguia = new Aguia();
const pinguim = new Pinguim();

fazerPassaroVoar(passaro);
fazerPassaroVoar(aguia); 
fazerPassaroVoar(pinguim);

console.log("--------------------------------")

// Ex 5
const meuCarro = new Carro("Toyota", "Corolla", 2022);
meuCarro.informacoes(); // Saída: Marca: Toyota, Modelo: Corolla, Ano: 2022
meuCarro.acelerar(50); // Saída: O carro Toyota Corolla está agora a 50 km/h.
meuCarro.acelerar(30); // Saída: O carro Toyota Corolla está agora a 80 km/h.
meuCarro.frear(); // Saída: O carro Toyota Corolla parou.

console.log("--------------------------------")

// Ex 6
const bancoClientes = new BancoDadosClientes();

bancoClientes.adicionarCliente(new Cliente(1, "João", 30));
bancoClientes.adicionarCliente(new Cliente(2, "Maria", 25));
bancoClientes.adicionarCliente(new Cliente(3, "Pedro", 35));

bancoClientes.listarClientes();
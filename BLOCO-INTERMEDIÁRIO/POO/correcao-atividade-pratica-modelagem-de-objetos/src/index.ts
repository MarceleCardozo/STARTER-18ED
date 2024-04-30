// 1 - Crie uma classe Contador, que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer métodos que devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

class Contador {
    private valor: number;

    constructor() {
        this.valor = 0;
    }

    zerar(): void {
        this.valor = 0;
    }

    incrementar(): void {
        this.valor++;
    }

    retornarValor(): number {
        return this.valor;
    }
}

// Exemplo de uso:
const contador = new Contador();
console.log(contador.retornarValor()); // Saída: 0

contador.incrementar();
contador.incrementar();
console.log(contador.retornarValor()); // Saída: 2

contador.zerar();
console.log(contador.retornarValor()); // Saída: 0

console.log("----------------------------------------------------------------")


// 2 - Crie uma classe que modele uma bola:
// a) Atributos
// i. Cor
// ii. Circunferência
// iii. Material

// b) Métodos
// i. Trocar Cor
// ii. Mostrar cor

class Bola {
    private cor: string;
    private circunferencia: number;
    private material: string;

    constructor(cor: string, circunferencia: number, material: string) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }

    trocarCor(novaCor: string): void {
        this.cor = novaCor;
    }

    mostrarCor(): string {
        return this.cor;
    }
}

// Exemplo de uso:
const minhaBola = new Bola("vermelha", 20, "plástico");
console.log(minhaBola.mostrarCor()); // Saída: vermelha

minhaBola.trocarCor("azul");
console.log(minhaBola.mostrarCor()); // Saída: azul

console.log("----------------------------------------------------------------")


// 3 - Crie  uma  classe  para  implementar  uma conta  corrente.  A  classe  deve  possuir  os  seguintes  atributos:  
// a) Número  da  conta
// b) Nome  do  correntista
// c) Saldo

// Os métodos são os seguintes: 
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os demais atributos são obrigatórios. A conta não pode ficar com saldo negativo.

class ContaCorrente {
    private numeroConta: number;
    private nomeCorrentista: string;
    private saldo: number;

    constructor(numeroConta: number, nomeCorrentista: string, saldo: number = 0) {
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = saldo;
    }

    alterarNome(novoNome: string): void {
        this.nomeCorrentista = novoNome;
    }

    deposito(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log("O valor do depósito deve ser maior que zero.");
        }
    }

    saque(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente ou valor de saque inválido.");
        }
    }

    mostrarSaldo(): number {
        return this.saldo;
    }
}

// Exemplo de uso:
const minhaConta = new ContaCorrente(12345, "Fulano");
console.log(minhaConta.mostrarSaldo()); // Saída: 0

minhaConta.deposito(1000);
console.log(minhaConta.mostrarSaldo()); // Saída: 1000

minhaConta.saque(500);
console.log(minhaConta.mostrarSaldo()); // Saída: 500

minhaConta.saque(1500);
console.log(minhaConta.mostrarSaldo()); // Saldo insuficiente

minhaConta.alterarNome("Ciclano");
console.log(minhaConta.mostrarSaldo()); // Saída: 500

console.log("----------------------------------------------------------------")


// 4 - Crie uma classe para representar uma Calculadora. Esta classe deve conter um atributo que servirá para armazenar o histórico das operações e seus respectivos resultados.
// a) Esta classe deve conter as operações de somar, multiplicar, dividir e diminuir.
// b) Esta classe deve iniciar com o histórico vazio
// c) Esta classe deve conter uma ação para visualizar o histórico.

class Calculadora {
    private historico: string[];

    constructor() {
        this.historico = [];
    }

    somar(a: number, b: number): number {
        const resultado = a + b;
        this.historico.push(`${a} + ${b} = ${resultado}`);
        return resultado;
    }

    multiplicar(a: number, b: number): number {
        const resultado = a * b;
        this.historico.push(`${a} * ${b} = ${resultado}`);
        return resultado;
    }

    dividir(dividendo: number, divisor: number): number {
        if (divisor === 0) {
            console.log("Erro: divisão por zero.");
            return NaN;
        }
        const resultado = dividendo / divisor;
        this.historico.push(`${dividendo} / ${divisor} = ${resultado}`);
        return resultado;
    }

    diminuir(a: number, b: number): number {
        const resultado = a - b;
        this.historico.push(`${a} - ${b} = ${resultado}`);
        return resultado;
    }

    visualizarHistorico(): void {
        console.log("Histórico das operações:");
        this.historico.forEach(op => console.log(op));
    }
}

// Exemplo de uso:
const calculadora = new Calculadora();
calculadora.somar(5, 3);
calculadora.multiplicar(4, 6);
calculadora.dividir(10, 2);
calculadora.diminuir(8, 3);

calculadora.visualizarHistorico();

console.log("----------------------------------------------------------------")


// 5 - Faça um programa completo utilizando classes e métodos que:
// a) Possua uma classe chamada BombaCombustivel, com no mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro
// iii. quantidadeCombustivel

// b) Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. Não deve ser possível abastecer se não tiver gasolina suficiente na bomba.

class BombaCombustivel {
    private tipoCombustivel: string;
    private valorLitro: number;
    private quantidadeCombustivel: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    abastecerPorValor(valor: number): void {
        const litrosAbastecidos = valor / this.valorLitro;
        if (litrosAbastecidos <= this.quantidadeCombustivel) {
            console.log(`Foram abastecidos ${litrosAbastecidos.toFixed(2)} litros de ${this.tipoCombustivel}.`);
            this.quantidadeCombustivel -= litrosAbastecidos;
        } else {
            console.log("Não há combustível suficiente na bomba.");
        }
    }

    abastecerPorLitro(litros: number): void {
        const valorAPagar = litros * this.valorLitro;
        console.log(`O valor a ser pago pelo cliente é R$ ${valorAPagar.toFixed(2)}.`);
    }

    alterarValor(novoValor: number): void {
        this.valorLitro = novoValor;
    }

    alterarCombustivel(novoCombustivel: string): void {
        this.tipoCombustivel = novoCombustivel;
    }

    alterarQuantidadeCombustivel(novaQuantidade: number): void {
        this.quantidadeCombustivel = novaQuantidade;
    }
}

// Exemplo de uso:
const bombaGasolina = new BombaCombustivel("Gasolina", 5.0, 100);
bombaGasolina.abastecerPorValor(50); // Saída: Foram abastecidos 10.00 litros de Gasolina.
bombaGasolina.abastecerPorLitro(20); // Saída: O valor a ser pago pelo cliente é R$ 100.00.
bombaGasolina.alterarValor(5.5);
bombaGasolina.alterarCombustivel("Álcool");
bombaGasolina.alterarQuantidadeCombustivel(150);

console.log("----------------------------------------------------------------")


// 6 - Implemente uma classe chamada Carro com as seguintes propriedades:
// a) Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
// b) O consumo é especificado no construtor e o nível de combustível inicial é 0.
// c) Forneça um método andar() que simula o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
// d) Forneça um método obterGasolina(), que retorna o nível atual de combustível e forneça um método adicionarGasolina(), para abastecer o tanque.

// Exemplo:
// meuFusca = new Carro(15)
// meuFusca.adicionarGasolina(20)
// meuFusca.andar(100)
// meuFusca.obterGasolina()

class Carro {
    private consumoCombustivel: number; // km/litro
    private nivelCombustivel: number; // litros

    constructor(consumoCombustivel: number) {
        this.consumoCombustivel = consumoCombustivel;
        this.nivelCombustivel = 0;
    }

    andar(distancia: number): void {
        const combustivelNecessario = distancia / this.consumoCombustivel;
        if (combustivelNecessario <= this.nivelCombustivel) {
            this.nivelCombustivel -= combustivelNecessario;
            console.log(`O veículo percorreu ${distancia} km.`);
        } else {
            console.log("Não há combustível suficiente para percorrer essa distância.");
        }
    }

    adicionarGasolina(quantidade: number): void {
        this.nivelCombustivel += quantidade;
    }

    obterGasolina(): number {
        return this.nivelCombustivel;
    }
}

// Exemplo de uso:
const meuFusca = new Carro(15);
meuFusca.adicionarGasolina(20);
meuFusca.andar(100); // Saída: O veículo percorreu 100 km.
console.log(meuFusca.obterGasolina()); // Saída: 13.333333333333334

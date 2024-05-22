// Exercício 5
// Você deve criar uma classe TypeScript chamada Carro com as seguintes características:

// A classe Carro deve ter as seguintes propriedades:
// marca: uma string representando a marca do carro.
// modelo: uma string representando o modelo do carro.
// ano: um número representando o ano de fabricação do carro.
// velocidade: um número representando a velocidade atual do carro em km/h, inicialmente 0.
// A classe Carro deve ter os seguintes métodos:

// Um método construtor que receba a marca, modelo e ano do carro e inicialize as propriedades correspondentes.
// Um método acelerar(velocidade: number), que aumenta a velocidade do carro de acordo com o valor passado como argumento. Esse método deve exibir uma mensagem informando a nova velocidade do carro.
// Um método frear(), que reduz a velocidade do carro para 0. Se o carro já estiver parado, deve exibir uma mensagem informando que o carro já está parado.
// Um método informacoes(), que exibe na tela as informações do carro (marca, modelo e ano).


export class Carro {
    marca: string;
    modelo: string;
    ano: number;
    velocidade: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;
    }

    acelerar(velocidade: number): void {
        this.velocidade += velocidade;
        console.log(`O carro ${this.marca} ${this.modelo} está agora a ${this.velocidade} km/h.`);
    }

    frear(): void {
        if (this.velocidade === 0) {
            console.log(`O carro ${this.marca} ${this.modelo} já está parado.`);
        } else {
            this.velocidade = 0;
            console.log(`O carro ${this.marca} ${this.modelo} parou.`);
        }
    }

    informacoes(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

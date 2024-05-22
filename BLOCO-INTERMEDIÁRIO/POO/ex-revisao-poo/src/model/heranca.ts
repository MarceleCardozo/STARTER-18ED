// Exercício 3: Herança
// Crie uma classe Animal com um método emitirSom que imprime uma mensagem genérica. 
// Crie uma classe Cachorro que herda de Animal e sobrescreve o método emitirSom para imprimir 
// uma mensagem específica de latido. Adicione um método getRaca na classe Cachorro para retornar a raça do cachorro.

// Explicação:
// Herança permite que uma classe herde características (atributos e métodos) de outra classe. 
// Neste exercício, você aprenderá como criar uma hierarquia de classes usando herança e como sobrescrever métodos.

export class Animal {
    constructor(protected nome: string) {}

    emitirSom(): void {
        console.log(`${this.nome} emite um som.`);
    }
}

export class Cachorro extends Animal {
    constructor(nome: string, private raca: string) {
        super(nome);
    }

    emitirSom(): void {
        console.log(`${this.nome} late.`);
    }

    getRaca(): string {
        return this.raca;
    }
}

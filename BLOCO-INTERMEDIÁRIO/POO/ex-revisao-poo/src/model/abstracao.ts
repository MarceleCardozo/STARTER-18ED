// Exercício 2: Abstração
// Crie uma classe abstrata Forma com métodos abstratos calcularArea e calcularPerimetro. 
// Em seguida, crie as classes Circulo e Retangulo que herdam de Forma e implementam esses métodos. 
// A classe Circulo deve ter um atributo raio, e a classe Retangulo deve ter atributos largura e altura.

// Explicação:
// Abstração é o processo de ocultar os detalhes complexos de implementação e mostrar apenas a funcionalidade essencial. 
// Classes abstratas são usadas para definir uma interface comum para um grupo de subclasses. 
// Neste exercício, você aprenderá a criar e usar classes abstratas.

abstract class Forma {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

export class Circulo extends Forma {
    constructor(private raio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * (this.raio * this.raio);
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

export class Retangulo extends Forma {
    constructor(private largura: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

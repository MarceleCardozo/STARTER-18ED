// Exercício 4: Polimorfismo
// Crie uma classe Passaro com um método voar. 
// Em seguida, crie as classes Aguia e Pinguim que herdam de Passaro. 
// A classe Aguia deve sobrescrever o método voar para indicar que está voando alto, 
// enquanto a classe Pinguim deve sobrescrever o método para indicar que não pode voar. 
// Crie uma função fazerPassaroVoar que receba um objeto do tipo Passaro e chame seu método voar.

// Explicação:
// Polimorfismo permite que você trate objetos de diferentes classes de maneira uniforme através de uma interface comum. 
// Neste exercício, você aprenderá a usar polimorfismo para chamar métodos em objetos de diferentes subclasses 
// de forma uniforme.

export class Passaro {
    voar(): void {
        console.log("O pássaro está voando.");
    }
}

export class Aguia extends Passaro {
    voar(): void {
        console.log("A águia está voando alto.");
    }
}

export class Pinguim extends Passaro {
    voar(): void {
        console.log("O pinguim não pode voar.");
    }
}

export function fazerPassaroVoar(passaro: Passaro): void {
    passaro.voar();
}

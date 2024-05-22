// Exercício 1: Encapsulamento
// Crie uma classe ContaBancaria que represente uma conta bancária. 
// Esta classe deve ter um atributo privado saldo e métodos públicos para 
// depositar (depositar), sacar (sacar) e consultar o saldo (consultarSaldo). 
// Garanta que o saldo não possa ser alterado diretamente de fora da classe.

// Explicação:
// Encapsulamento é o conceito de restringir o acesso direto a alguns dos componentes de um objeto, 
// geralmente usando modificadores de acesso. Neste exercício, você aprenderá a usar modificadores 
// de acesso (private, public) para proteger o saldo de uma conta bancária.

export class ContaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    public sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        }
    }

    public consultarSaldo(): number {
        return this.saldo;
    }
}


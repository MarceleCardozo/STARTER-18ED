"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    titulo;
    autor;
    anoPublicacao;
    disponivel;
    constructor(titulo, autor, anoPublicado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicado;
        this.disponivel = true;
    }
    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            console.log("Livro emprestado com sucesso!");
        }
        else {
            console.log("Este livro não esta disponivel!");
        }
    }
    devolver() {
        this.disponivel = true;
        console.log("Livro devolvido com sucesso!");
    }
}
exports.default = Livro;

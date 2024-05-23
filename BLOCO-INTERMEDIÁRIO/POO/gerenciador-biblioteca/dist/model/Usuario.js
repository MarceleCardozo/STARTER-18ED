"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    id;
    livroEmprestado;
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
        this.livroEmprestado = [];
    }
    emprestarLivro(livro) {
        this.livroEmprestado.push(livro);
        livro.emprestar();
    }
    devolverLivro() {
        this.devolverLivro();
    }
}
exports.default = Usuario;

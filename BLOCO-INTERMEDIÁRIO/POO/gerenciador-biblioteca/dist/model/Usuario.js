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
    devolverLivro(livro) {
        const index = this.livroEmprestado.indexOf(livro);
        if (index !== -1) {
            this.livroEmprestado.splice(index, 1);
            livro.devolver();
        }
        else {
            console.log("Livro não encontrado!");
        }
    }
}
exports.default = Usuario;

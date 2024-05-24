"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Usuario"));
class Funcionario extends Usuario_1.default {
    cargo;
    constructor(cargo, nome, id) {
        super(nome, id);
        this.cargo = cargo;
    }
    adicionarLivro(livro, biblioteca) {
        return biblioteca.livros.push(livro);
    }
    removerLivro(livro, biblioteca) {
        const indice = biblioteca.livros.indexOf(livro);
        if (indice !== -1) {
            biblioteca.livros.splice(indice, 1);
        }
        else {
            console.log("Livro não encontrado!");
        }
    }
}
exports.default = Funcionario;

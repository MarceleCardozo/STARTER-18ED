"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Biblioteca {
    livros;
    usuarios;
    constructor() {
        this.livros = [];
        this.usuarios = [];
    }
    registrarUsuario(usuario) {
        return this.usuarios.push(usuario);
    }
    listarLivrosDisponiveis() {
        return this.livros.filter((livro) => livro.disponivel);
    }
    buscarLivroPorTitulo(titulo) {
        return this.livros.find((livro) => livro.titulo === titulo);
    }
    emprestarLivros(titulo, usuario) {
        const livroBuscado = this.buscarLivroPorTitulo(titulo);
        if (livroBuscado) {
            return usuario.emprestarLivro(livroBuscado);
        }
        return "Livro não foi encontrado";
    }
    devolverLivro(titulo, usuario) {
        const livroBuscado = this.buscarLivroPorTitulo(titulo);
        if (livroBuscado) {
            return usuario.devolverLivro(livroBuscado);
        }
        return "Livro não encontrado!";
    }
}
exports.default = Biblioteca;

import Livro from "./Livro";

class Usuario {
    private nome: string;
    private id: number;
    private livroEmprestado: Livro[];
    
    constructor(nome: string, id: number) {
        this.nome = nome;
        this.id = id;
    }

    emprestarLivro() {
        
    }

    devolverLivro() {
        this.devolverLivro();
    }
}
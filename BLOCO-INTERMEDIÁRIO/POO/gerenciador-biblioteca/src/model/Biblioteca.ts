import Livro from "./Livro";
import Usuario from "./Usuario";

class Biblioteca {
    public livros: Livro[];
    public usuarios: Usuario[]

    constructor(livros:Livro[], usuarios:Usuario[]){
        this.livros = livros;
        this.usuarios = usuarios;
    }
}
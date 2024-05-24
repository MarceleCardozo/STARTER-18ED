import Livro from "./Livro";
import Usuario from "./Usuario";

class Biblioteca {
    public livros: Livro[];
    public usuarios: Usuario[]

    constructor(livros:Livro[], usuarios:Usuario[]){
        this.livros = livros;
        this.usuarios = usuarios;
    }

    registrarUsuario(usuario:Usuario){
        this.usuarios.push(usuario)
    }

    listarLivrosDisponiveis(){
        console.log(this.livros);
    }

    buscarLivroPorTitulo(titulo:string){
        this.livros.forEach(livro => this.titulo === titulo)
    }
}
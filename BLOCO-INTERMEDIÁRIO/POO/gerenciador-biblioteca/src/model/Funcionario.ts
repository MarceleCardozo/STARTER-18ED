import Livro from "./Livro"
import Usuario from "./Usuario"
import Biblioteca from "./Biblioteca"

class Funcionario extends Usuario {
    cargo: string

    constructor(cargo: string, nome:string, id:number){
        super(nome, id)
        this.cargo = cargo
    }

    adicionarLivro(livro:Livro, biblioteca:Biblioteca){
        biblioteca.livros.push(livro) 
    }
    removerLivro(livro:Livro, biblioteca: Biblioteca){
        const indice = livro
        
        biblioteca.livros.splice()
    }
}
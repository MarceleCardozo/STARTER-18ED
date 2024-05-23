import Usuario from "./Usuario"

class Funcionario extends Usuario {
    cargo: string

    constructor(cargo: string, nome:string, id:number){
        super(nome, id)
        this.cargo = cargo
    }

    adicionarLivro(livro:Livro){
        
    }
}
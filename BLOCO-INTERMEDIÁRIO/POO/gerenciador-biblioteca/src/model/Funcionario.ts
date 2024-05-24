import Livro from "./Livro";
import Usuario from "./Usuario";
import Biblioteca from "./Biblioteca";

class Funcionario extends Usuario {
  cargo: string;

  constructor(cargo: string, nome: string, id: number) {
    super(nome, id);
    this.cargo = cargo;
  }

  adicionarLivro(livro: Livro, biblioteca: Biblioteca) {
    return biblioteca.livros.push(livro);
  }

  removerLivro(livro: Livro, biblioteca: Biblioteca) {
    const indice = biblioteca.livros.indexOf(livro);
    if (indice !== -1) {
      biblioteca.livros.splice(indice, 1);
    } else {
      console.log("Livro não encontrado!");
    }
  }
}

export default Funcionario;

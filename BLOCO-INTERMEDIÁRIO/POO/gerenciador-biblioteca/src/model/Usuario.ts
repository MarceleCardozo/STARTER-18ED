import Livro from "./Livro";

class Usuario {
  private nome: string;
  private id: number;
  private livroEmprestado: Livro[];

  constructor(nome: string, id: number) {
    this.nome = nome;
    this.id = id;
    this.livroEmprestado = [];
  }

  emprestarLivro(livro: Livro) {
    this.livroEmprestado.push(livro);
    livro.emprestar();
  }

  devolverLivro(livro: Livro) {
    const index = this.livroEmprestado.indexOf(livro);
    if (index !== -1) {
      this.livroEmprestado.splice(index,1);
      livro.devolver()
    } else {
      console.log("Livro não encontrado!");
    }

  }
}

export default Usuario;

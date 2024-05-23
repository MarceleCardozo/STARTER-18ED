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
    this.livroEmprestado.indexOf(livro);
    this.livroEmprestado.splice();
  }
}

export default Usuario;

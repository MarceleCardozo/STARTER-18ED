class Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
  disponivel: boolean;

  constructor(titulo: string, autor: string, anoPublicado: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicado;
    this.disponivel = true;
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false;
      console.log("Livro emprestado com sucesso!");
    } else {
      console.log("Este livro não esta disponivel!");
    }
  }
  devolver() {
    this.disponivel = true;
    console.log("Livro devolvido com sucesso!");
  }
}

export default Livro;

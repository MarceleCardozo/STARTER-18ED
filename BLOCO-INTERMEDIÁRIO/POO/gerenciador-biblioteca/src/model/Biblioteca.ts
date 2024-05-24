import Livro from "./Livro";
import Usuario from "./Usuario";

class Biblioteca {
  public livros: Livro[];
  public usuarios: Usuario[];

  constructor(livros: Livro[], usuarios: Usuario[]) {
    this.livros = livros;
    this.usuarios = usuarios;
  }

  registrarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listarLivrosDisponiveis() {
    console.log(this.livros);
  }

  buscarLivroPorTitulo(titulo: string) {
    return this.livros.find((livro) => livro.titulo === titulo);
  }

  emprestarLivros(titulo: string, usuario: Usuario) {
    const index = this.livros.findIndex((livro) => livro.titulo === titulo);
    if (index !== -1) {
        this.livros.splice(index,1);
        usuario.emprestarLivro(livro: Livro)
      } else {
        console.log("Livro não encontrado!");
      }
  }
}

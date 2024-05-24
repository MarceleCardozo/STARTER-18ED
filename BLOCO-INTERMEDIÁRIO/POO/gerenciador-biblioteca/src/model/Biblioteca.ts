import Livro from "./Livro";
import Usuario from "./Usuario";

class Biblioteca {
  public livros: Livro[];
  public usuarios: Usuario[];

  constructor() {
    this.livros = [];
    this.usuarios = [];
  }

  registrarUsuario(usuario: Usuario) {
    return this.usuarios.push(usuario);
  }

  listarLivrosDisponiveis() {
    return this.livros.filter((livro) => livro.disponivel);
  }

  buscarLivroPorTitulo(titulo: string) {
    return this.livros.find((livro) => livro.titulo === titulo);
  }

  emprestarLivros(titulo: string, usuario: Usuario) {
    const livroBuscado = this.buscarLivroPorTitulo(titulo);
    if (livroBuscado) {
      return usuario.emprestarLivro(livroBuscado);
    }
    return "Livro não foi encontrado";
  }
  devolverLivro(titulo: string, usuario: Usuario) {
    const livroBuscado = this.buscarLivroPorTitulo(titulo);
    if (livroBuscado) {
      return usuario.devolverLivro(livroBuscado);
    }
    return "Livro não encontrado!";
  }
}

export default Biblioteca;

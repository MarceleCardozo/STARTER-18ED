import Livro from "./model/Livro";
import Biblioteca from "./model/Biblioteca";
import Usuario from "./model/Usuario";
import Funcionario from "./model/Funcionario";

const livro1 = new Livro("dawda", "dawda", 2023);
const livro2 = new Livro("it", "king", 2000);
const livro3 = new Livro("tripulacao", "kingkong", 2000);

const usuario1 = new Usuario("henrique", 666);
const funcionario1 = new Funcionario("marcele", "aux.limpeza", 7777);
const biblioteca = new Biblioteca();

console.log(funcionario1.adicionarLivro(livro1, biblioteca));
console.log(funcionario1.adicionarLivro(livro2, biblioteca));
console.log(biblioteca.registrarUsuario(usuario1));

biblioteca.emprestarLivros("it", usuario1);
console.log(biblioteca.listarLivrosDisponiveis());

biblioteca.devolverLivro("it", usuario1);
console.log(biblioteca.listarLivrosDisponiveis());

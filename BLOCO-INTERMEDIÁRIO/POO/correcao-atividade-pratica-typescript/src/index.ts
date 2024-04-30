// 1 - Crie uma função que receba 2 números e retorne um objeto contendo a média
//e também um indicador booleano de aprovado/reprovado. Considere aprovado com média >= 6.

// function calcularMediaAprovacao(nota1: number, nota2: number): Resultado {
//   const media = (nota1 + nota2) / 2;
//   const aprovado = media >= 6;

//   return { media, aprovado };
// }

// const resultadoExemplo = calcularMediaAprovacao(2, 1);
// console.log(resultadoExemplo);

//-----------------------------------------------------------------------

// 2 - Crie uma função que receba uma lista de objetos contendo nota e peso,
// realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

// function calcularMediaAritmetica(listaNotaPeso: NotaPeso[]): number {
//   const totalNotasPesos = listaNotaPeso.reduce((acumulador, { nota, peso }) => {
//     return acumulador + nota * peso;
//   }, 0);

//   console.log("Total notas peso: " + totalNotasPesos);

//   const totalPesos = listaNotaPeso.length;

//   console.log("Total pesos: " + totalPesos);

//   const mediaAritmetica = totalNotasPesos / totalPesos;

//   return mediaAritmetica;
// }

// const listaNotasPesosExemplo: NotaPeso[] = [
//   { nota: 10, peso: 2 },
//   { nota: 2, peso: 7 },
//   { nota: 2, peso: 1 },
// ];

// const resultadoExemplo = calcularMediaAritmetica(listaNotasPesosExemplo);

// console.log(resultadoExemplo);

// 3 - Crie um programa que simule uma carteira de dinheiro.
// Este programa vai precisar ter uma carteira contendo saldo,
// transações de entrada e saídas. Ou seja, será um objeto com estas  propriedades.
// Depois crie uma função para lançar uma entrada e uma saída. Caso ao lançar uma saída
// e não tiver saldo, precisa dar um erro ou avisar.

// function criarCarteira(): Carteira {
//   return {
//     saldo: 0,
//     transacoes: [],
//   };
// }

// function lancarEntrada(carteira: Carteira, valor: number): void {
//   carteira.saldo += valor;
//   carteira.transacoes.push({ tipo: "entrada", valor });
// }

// function lancarSaida(carteira: Carteira, valor: number): void {
//   if (valor > carteira.saldo) {
//     console.log(`Saldo insuficiente, ${carteira.saldo}`);
//   } else {
//     carteira.saldo -= valor;
//     carteira.transacoes.push({ tipo: "saída", valor });
//   }
// }

// const minhaCarteira = criarCarteira();

// lancarEntrada(minhaCarteira, 1000);
// console.log(minhaCarteira);

// lancarSaida(minhaCarteira, 15);
// console.log(minhaCarteira);

// lancarSaida(minhaCarteira, 1000);
// console.log(minhaCarteira);

// 4 - Crie um programa para cadastrar, listar e excluir produtos de uma lista com tipagem de Produto.

// function cadastrarProduto(lista: ListaProdutos, produto: Produto): void {
//   lista.produtos.push(produto);
// }

// function listarProdutos(lista: ListaProdutos): void {
//   console.log(lista.produtos);
// }

// function excluirProduto(lista: ListaProdutos, id: number) {
//   const index = lista.produtos.findIndex((produto) => produto.id === id);

//   lista.produtos.splice(index, 1);
// }

// const listaDeProdutos: ListaProdutos = {
//   produtos: [],
// };

// const produto1: Produto = {
//   id: 1,
//   nome: "Mesa",
//   valor: 20,
//   estoque: true,
// };

// cadastrarProduto(listaDeProdutos, produto1);

// listarProdutos(listaDeProdutos);

// excluirProduto(listaDeProdutos, 1);

// listarProdutos(listaDeProdutos);

// 5 - Crie um programa para mostrar informações de usuários (User) de uma empresa.
// Crie o tipo User com as seguintes propriedades: nome, idade, ocupação e salário (opcional).
// Caso o salário do usuário não seja informado, mostre o valor “N/A”. Exemplo:
// “Daphne, 23 anos, analista de TI, salário R$ 1000”
// “Daphne, 23 anos, analista de TI, salário N/A”

function mostrarInformacoesUsuario(usuario: User) {
  const salarioFormatado = usuario.salario
    ? `R$ ${usuario.salario.toFixed(2)}`
    : "N/A";
  console.log(
    `${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${salarioFormatado}`
  );
}

// const usuario1: User = {
//   nome: "Daphne",
//   idade: 23,
//   ocupacao: "analista de TI",
//   salario: 1000,
// };

// const usuario2: User = {
//   nome: "Daphne",
//   idade: 23,
//   ocupacao: "analista de TI",
// };

// console.log(mostrarInformacoesUsuario(usuario1));
// console.log(mostrarInformacoesUsuario(usuario2));

// 6 - Usando o contexto do exercício 5, crie um tipo de usuário que representa funcionários da diretoria da empresa.
// O tipo Diretor deve conter as propriedades: nome, idade, salário (opcional) e nível de comissionamento (numérico).
// Crie uma função que receba um Diretor e mostre suas informações. Exemplos:
// “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

function mostrarInformacoesDiretor(diretor: Diretor) {
  const salarioFormatado = diretor.salario
    ? `R$ ${diretor.salario.toFixed(2)}`
    : "N/A";
  console.log(
    `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelDeComissionamento}, salário ${salarioFormatado}`
  );
}

// const diretor1: Diretor = {
//   nome: "Daphne",
//   idade: 23,
//   nivelDeComissionamento: 5,
//   salario: 1000,
// };

// const diretor2: Diretor = {
//   nome: "Daphne",
//   idade: 23,
//   nivelDeComissionamento: 5,
// };

// console.log(mostrarInformacoesDiretor(diretor1));
// console.log(mostrarInformacoesDiretor(diretor2));

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

function mostrarInformacoes(lista: UserOrDiretor[]) {
  lista.forEach((item) => {
    if ("nivelDeComissionamento" in item) {
      mostrarInformacoesDiretor(item);
    } else {
      mostrarInformacoesUsuario(item);
    }
  });
}

const lista: UserOrDiretor[] = [
  { nome: "Daphne", idade: 23, nivelDeComissionamento: 5, salario: 1000 },
  { nome: "Daphne", idade: 23, nivelDeComissionamento: 5 },
  { nome: "Daphne", idade: 23, ocupacao: "analista de TI", salario: 1000 },
  { nome: "Daphne", idade: 23, ocupacao: "analista de TI" },
];

mostrarInformacoes(lista);

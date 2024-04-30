interface Produto {
  id: number;
  nome: string;
  valor: number;
  estoque: boolean;
}

interface ListaProdutos {
  produtos: Produto[];
}

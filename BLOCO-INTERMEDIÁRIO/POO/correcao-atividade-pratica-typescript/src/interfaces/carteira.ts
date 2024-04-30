interface Carteira {
  saldo: number;
  transacoes: Transacoes[];
}

interface Transacoes {
  tipo: "entrada" | "saída";
  valor: number;
}

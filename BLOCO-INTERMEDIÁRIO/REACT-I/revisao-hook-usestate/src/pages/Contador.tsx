import { useState } from "react";

function Contador() {
  // useState = usa estado
  const [contador, setContador] = useState<number>(1);

  function adicionaValor() {
    setContador(contador + 1);
  }

  return (
    <>
      <p>{contador}</p>
      <button onClick={adicionaValor}>Adicionar</button>
    </>
  );
}

export default Contador;

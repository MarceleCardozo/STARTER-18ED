import BeautifulTitle from "../components/title";
import BeautifulParagraph from "../components/paragraph";
import BeautifulButton from "../components/button";
import { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("O contador mudou de valor: ", count);
  }, [count]);

  return (
    <div>
      <BeautifulTitle>Contador</BeautifulTitle>
      <BeautifulParagraph>Contador: {count}</BeautifulParagraph>
      <BeautifulButton onClick={() => setCount(count + 1)}>
        Incrementar
      </BeautifulButton>
    </div>
  );
}

export default Count;

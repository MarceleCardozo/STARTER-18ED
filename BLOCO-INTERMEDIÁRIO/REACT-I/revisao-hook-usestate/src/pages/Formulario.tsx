import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");

  function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    console.log(`Nome: ${nome}; Email: ${email}; Telefone: ${telefone}`);

    setNome("");
    setEmail("");
    setTelefone("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulário</h1>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </label>
      <br />
      <label>
        Telefone:
        <input
          type="text"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
      </label>
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Formulario;

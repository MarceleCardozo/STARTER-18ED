import { useState } from "react";
import InputDefault from "../components/InputDefault";

function Home() {
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [publication, setPublication] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <>
      <form>
        <InputDefault action={setId} key="id" label="ID" value={id} />
        <InputDefault
          action={setTitle}
          key="title"
          label="Titulo"
          value={title}
        />
        <InputDefault
          action={setAuthor}
          key="author"
          label="Autor"
          value={author}
        />
        <InputDefault
          action={setPublication}
          key="publication"
          label="Ano de Publicacao"
          value={publication}
        />

        <InputDefault
          action={setDate}
          key="date"
          label="Data de Cadastro"
          value={date}
        />
        <InputDefault action={setGender} key="" label="Genero" value={gender} />
        <InputDefault
          action={setDescription}
          key="description"
          label="Descricao"
          value={description}
        />
      </form>
    </>
  );
}

export default Home;

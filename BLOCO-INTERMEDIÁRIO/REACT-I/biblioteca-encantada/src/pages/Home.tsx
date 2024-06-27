import { useState } from "react";
import InputDefault from "../components/InputDefault";
import ButtonDefault from "../components/ButtonDefault";
import BooksType from "../types/BooksType";

function Home() {
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [publication, setPublication] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [books, setBooks] = useState<BooksType[]>([]);

  function handleClick() {
    if(id && title && author && publication && date && gender && description) {
      const book: BooksType = {
        id,
        title,
        author,
        publication,
        date,
        gender,
        description
      } 

      const newBooks = [...books, book];

      setBooks(newBooks);
    }
  }

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
        <ButtonDefault label="Cadastrar" />
      </form>
    </>
  );
}

export default Home;

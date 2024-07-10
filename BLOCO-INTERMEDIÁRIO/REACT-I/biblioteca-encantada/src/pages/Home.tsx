import { useState } from "react";
import InputDefault from "../components/InputDefault";
import ButtonDefault from "../components/ButtonDefault";
import BooksType from "../types/BooksType";
import Modal from "../components/Modal";

function Home() {
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [publication, setPublication] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [books, setBooks] = useState<BooksType[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  function openModal() {
    setOpen(!open);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id && title && author && publication && date && gender && description) {
      const book: BooksType = {
        id,
        title,
        author,
        publication,
        date,
        gender,
        description,
      };

      const newBooks = [...books, book];
      setBooks(newBooks);
    }
    setId("");
    setTitle("");
    setAuthor("");
    setPublication("");
    setDate("");
    setGender("");
    setDescription("");
  }
  function deleteBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const booksFilter = books.filter((book) => book.id !== id);
    setBooks(booksFilter);
  }

  return (
    <>
      <ButtonDefault label="Adicionar Livro" action={openModal} />
      {open && (
        <Modal
          action={openModal}
          actionConfirm={openModal}
          title="Cadastrar Livros"
        >
          <form onSubmit={handleSubmit}>
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
              label="Ano de Publicação"
              value={publication}
            />

            <InputDefault
              action={setDate}
              key="date"
              label="Data de Cadastro"
              value={date}
            />
            <InputDefault
              action={setGender}
              key=""
              label="Genero"
              value={gender}
            />
            <InputDefault
              action={setDescription}
              key="description"
              label="Descrição"
              value={description}
            />
            <ButtonDefault label="Cadastrar" type="submit" />
          </form>
        </Modal>
      )}
      {books.map((item) => (
        <div>
          <p>Title: {item.title}</p>
          <p>Autor: {item.author}</p>
          <p>Ano de Publicação: {item.publication}</p>
          <br />
        </div>
      ))}
      <form onSubmit={deleteBook}>
        <InputDefault
          action={setId}
          key="deleteId"
          label="Deletar ID"
          value={id}
        />
        <ButtonDefault label="Deletar Livro" type="submit" />
      </form>
    </>
  );
}

export default Home;

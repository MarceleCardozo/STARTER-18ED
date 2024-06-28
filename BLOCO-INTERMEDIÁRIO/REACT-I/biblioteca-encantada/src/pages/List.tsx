import {useState} from "react";
import BooksType from "../types/BooksType";
import ButtonDefault from "../components/ButtonDefault";

function List() {
  const [books, setBooks] = useState<BooksType[]>([]);
  function getBooks() {
    const getBook = JSON.parse(localStorage.getItem("books") || "");
    setBooks(getBook);
  }

  function deleteBook(id: string) {
    const booksFilter = books.filter((book) => book.id !== id);
    localStorage.removeItem("books");
    localStorage.setItem("books", JSON.stringify(booksFilter));
  }

  return (
    <>
      {books.map((item) => (
        <div>
          <p>Title: {item.title}</p>
          <p>Autor: {item.author}</p>
          <p>Ano de Publicação: {item.publication}</p>
          <br />
        </div>
      ))}
      <ButtonDefault label="Listar" action={getBooks} />
    </>
  );
}

export default List;

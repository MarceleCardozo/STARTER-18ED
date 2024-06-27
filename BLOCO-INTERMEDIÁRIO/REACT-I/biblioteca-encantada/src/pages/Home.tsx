import { useState } from "react";
import InputDefault from "../components/InputDefault";








function Home() {

  const [id, setId] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [publication, setPublication] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [description, setDescription] = useState<string>('')



  return (
    <>
      <form>
        <InputDefault action={ } key="" label="Alguma coisa" value="" />
      </form>
    </>
  );
}

export default Home;

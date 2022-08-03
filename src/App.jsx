import { useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import ResultForm from "./components/ResultForm";

export default function App() {
  const [answers, setAnswers] = useState({});
  const [dataRecieved, setDataRecieved] = useState(false);

  const formSubmitHandler = (data) => {
    console.log(data);
    setAnswers(data);
    setDataRecieved(true);
  };

  return (
    <>
      <Header />
      <Container>
        {dataRecieved ? (
          <ResultForm formData={answers} />
        ) : (
          <Form onFormSubmit={formSubmitHandler} />
        )}
      </Container>
      <Footer />
    </>
  );
}

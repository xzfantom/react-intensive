import { Component } from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

class App extends Component {
  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Container>
          <Header />
          <Form onFormSubmit={this.formSubmitHandler} />
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;

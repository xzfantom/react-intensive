import { Component } from "react";
import "./Form.css";

import Buttons from "../Buttons/Buttons";
import TextAreas from "../TextAreas/TextAreas";
import Inputs from "../Inputs/Inputs";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      birthDate: "",
      phone: "",
      site: "",
      about: "",
      technologies: "",
      project: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState(() => ({
      firstName: "",
      lastName: "",
      birthDate: "",
      phone: "",
      site: "",
      about: "",
      technologies: "",
      project: "",
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.resetForm();
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
        onReset={this.resetForm}
      >
        <Inputs onInputChange={this.handleChange} textValue={this.state} />
        <TextAreas
          onTextAreaChange={this.handleChange}
          textValue={this.state}
        />

        <Buttons />
      </form>
    );
  }
}

export default Form;

import { Component } from "react";
import Buttons from "../Buttons/Buttons";
import TextAreas from "../TextAreas/TextAreas";
import Inputs from "../Inputs/Inputs";
import formValidation from "../../services/formValidation";
import { validatePhoneNumber } from "../../services/validatePhoneNumber";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  birthDate: "",
  phone: "",
  site: "",
  about: "",
  technologies: "",
  project: "",
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE, errors: {} };
    this.formValidation = formValidation.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      this.setState({
        [name]: validatePhoneNumber(value),
      });
      return;
    }
    this.setState({
      [name]: value,
    });
  };

  onBlur = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE, errors: {} });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.formValidation();
    if (isValid) {
      this.props.onFormSubmit(this.state);
      this.resetForm();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.resetForm}>
        <Inputs
          onInputChange={this.handleChange}
          textValue={this.state}
          onBlur={this.onBlur}
        />
        <TextAreas
          onTextAreaChange={this.handleChange}
          textValue={this.state}
          onBlur={this.onBlur}
        />

        <Buttons />
      </form>
    );
  }
}

export default Form;

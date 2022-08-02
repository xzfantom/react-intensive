import { Component } from "react";
import FormError from "../FormError/FormError";
import styles from "./Inputs.module.css";

class Inputs extends Component {
  render() {
    return (
      <div className={styles["form__inputs-group"]}>
        <div className={styles["input-field"]}>
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={this.props.textValue.firstName}
              onChange={this.props.onInputChange}
              onBlur={this.props.onBlur}
              placeholder="John"
            />
          </label>
          <FormError
            inputErrors={this.props.textValue}
            nameOfInput="firstName"
          />
        </div>

        <div className={styles["input-field"]}>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={this.props.textValue.lastName}
              onChange={this.props.onInputChange}
              placeholder="Johnson"
              onBlur={this.props.onBlur}
            />
          </label>
          <FormError
            inputErrors={this.props.textValue}
            nameOfInput="lastName"
          />
        </div>

        <div className={styles["input-field"]}>
          <label>
            Birth Date
            <input
              type="date"
              name="birthDate"
              value={this.props.textValue.birthDate}
              onChange={this.props.onInputChange}
            />
          </label>
          <FormError
            inputErrors={this.props.textValue}
            nameOfInput="birthDate"
          />
        </div>

        <div className={styles["input-field"]}>
          <label>
            Phone number
            <input
              type="tel"
              name="phone"
              value={this.props.textValue.phone}
              onChange={this.props.onInputChange}
              placeholder="7-7777-77-77"
            />
          </label>
          <FormError inputErrors={this.props.textValue} nameOfInput="phone" />
        </div>

        <div className={styles["input-field"]}>
          <label>
            Your site
            <input
              type="text"
              name="site"
              maxLength="50"
              value={this.props.textValue.site}
              onChange={this.props.onInputChange}
              placeholder="https://developer.mozilla.org/"
              onBlur={this.props.onBlur}
            />
          </label>
          <FormError inputErrors={this.props.textValue} nameOfInput="site" />
        </div>
      </div>
    );
  }
}

export default Inputs;

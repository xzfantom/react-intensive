import { Component } from "react";

class FormError extends Component {
  render() {
    const { errors } = this.props.inputErrors;

    return (
      <>
        {Object.keys(errors).map((errorItem) => {
          if (errorItem.includes(this.props.nameOfInput)) {
            return (
              <p key={Math.random()} className="form__error">
                {errors[errorItem]}
              </p>
            );
          }
          return <div key={Math.random()}></div>;
        })}
      </>
    );
  }
}
export default FormError;

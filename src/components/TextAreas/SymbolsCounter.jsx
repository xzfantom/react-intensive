import { Component } from "react";

class SymbolsCounter extends Component {
  render() {
    const symbolsAllowed = 600;
    const { fieldLength } = this.props;

    return (
      <div>
        {fieldLength <= symbolsAllowed && (
          <p className="form__info-counter">
            {symbolsAllowed - fieldLength} of 600 symbols left
          </p>
        )}
        {fieldLength > symbolsAllowed && (
          <p className="form__info-counter exceed">
            {fieldLength - symbolsAllowed} symbols exceed
          </p>
        )}
      </div>
    );
  }
}

export default SymbolsCounter;

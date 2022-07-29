import { Component } from "react";

import "./Buttons.css";

class Buttons extends Component {
  render() {
    return (
      <div className="input__buttons-group">
        <button
          className="btn btn-outline"
          type="reset"
          onClick={() => window.scrollTo(0, 0)}
        >
          Reset the form!
        </button>
        <button
          className="btn btn-full"
          type="submit"
          onClick={() => window.scrollTo(0, 0)}
        >
          Save
        </button>
      </div>
    );
  }
}

export default Buttons;

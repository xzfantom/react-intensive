import { Component } from "react";
import "./TextAreas.css";
import FormError from "../FormError/FormError";
import SymbolsCounter from "./SymbolsCounter";

class TextAreas extends Component {
  render() {
    return (
      <div className="form__text-areas">
        <div className="input-field">
          <label>
            About Yourself
            <textarea
              type="text"
              name="about"
              rows="7"
              cols="50"
              value={this.props.textValue.about}
              onChange={this.props.onTextAreaChange}
              placeholder="Few words about yourself..."
              onBlur={this.props.onBlur}
            />
          </label>
          <SymbolsCounter fieldLength={this.props.textValue.about.length} />
          <FormError inputErrors={this.props.textValue} nameOfInput="about" />
        </div>

        <div className="input-field">
          <label>
            Technologies Stack
            <textarea
              type="text"
              name="technologies"
              rows="7"
              cols="50"
              value={this.props.textValue.technologies}
              onChange={this.props.onTextAreaChange}
              placeholder="HTML5, CSS3, JavaScript..."
              onBlur={this.props.onBlur}
            />
          </label>
          <SymbolsCounter
            fieldLength={this.props.textValue.technologies.length}
          />
          <FormError
            inputErrors={this.props.textValue}
            nameOfInput="technologies"
          />
        </div>

        <div className="input-field">
          <label>
            Last Project Description
            <textarea
              type="text"
              name="project"
              rows="7"
              cols="50"
              value={this.props.textValue.project}
              onChange={this.props.onTextAreaChange}
              placeholder="Describe your last project please"
              onBlur={this.props.onBlur}
            />
          </label>
          <SymbolsCounter fieldLength={this.props.textValue.project.length} />
          <FormError inputErrors={this.props.textValue} nameOfInput="project" />
        </div>
      </div>
    );
  }
}

export default TextAreas;

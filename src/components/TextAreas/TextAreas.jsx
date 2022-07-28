import { Component } from "react";
import "./TextAreas.css";

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
            />
          </label>
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
            />
          </label>
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
            />
          </label>
        </div>
      </div>
    );
  }
}

export default TextAreas;

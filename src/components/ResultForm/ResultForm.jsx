import { Component } from "react";
import "./ResultForm.css";

class ResultForm extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      firstName,
      lastName,
      birthDate,
      phone,
      site,
      about,
      technologies,
      project,
    } = this.props.formData.answers;

    const dateOptions = { year: "numeric", month: "long", day: "numeric" };

    return (
      <div className="result-form">
        <h2 className="result-form__heading">
          Hello, {firstName} {lastName}!
        </h2>
        <p className="result-form__text">
          Thank you for filling our Questionnaire. Your data is below:
        </p>
        <table className="zebra-tbl">
          <tbody>
            <tr className="zebra-tbl-row">
              <th className="zebra-tbl-row-head">First name</th>
              <td className="zebra-tbl-row-data">{firstName}</td>
            </tr>
            <tr className="zebra-tbl-row">
              <th className="zebra-tbl-row-head">Last name</th>
              <td className="zebra-tbl-row-data">{lastName}</td>
            </tr>
            <tr className="zebra-tbl-row">
              <th className="zebra-tbl-row-head">Birth date</th>
              <td className="zebra-tbl-row-data">
                {new Date(birthDate).toLocaleString("en-US", dateOptions)}
              </td>
            </tr>
            <tr className="zebra-tbl-row">
              <th className="zebra-tbl-row-head">Phone number</th>
              <td className="zebra-tbl-row-data">{phone}</td>
            </tr>
            <tr className="zebra-tbl-row">
              <th className="zebra-tbl-row-head">Your site</th>
              <td className="zebra-tbl-row-data">{site}</td>
            </tr>
            <tr className="zebra-tbl-row">
              <th className="zebra-tbl-row-head">About Yourself</th>
              <td className="zebra-tbl-row-data">{about}</td>
            </tr>
            <tr className="zebra-tbl-row">
              <th className="zebra-tbl-row-head">Technologies Stack</th>
              <td className="zebra-tbl-row-data">{technologies}</td>
            </tr>
            <tr className="zebra-tbl-row">
              <th className="zebra-tbl-row-head">Last Project Description</th>
              <td className="zebra-tbl-row-data">{project}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-outline result-form_btn"
          type="submit"
          onClick={() => window.location.reload(false)}
        >
          Go Back
        </button>
      </div>
    );
  }
}
export default ResultForm;

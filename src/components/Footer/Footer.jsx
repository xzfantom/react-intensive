import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="footer__text">
          &copy; Copyright Natalia Bezhenar&nbsp;
          {new Date().getFullYear()}
        </p>
        <a
          className="footer__icon-author"
          href="https://www.flaticon.com/free-icons/art-and-design"
          title="art and design icons"
          target="_blank"
          rel="noreferrer"
        >
          Art and design icons created by Freepik - Flaticon
        </a>
      </footer>
    );
  }
}

export default Footer;

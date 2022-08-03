import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <p className={styles.footer__text}>
        &copy; Copyright Natalia Bezhenar&nbsp;
        {new Date().getFullYear()}
      </p>
      <a
        className={styles["footer__icon-author"]}
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

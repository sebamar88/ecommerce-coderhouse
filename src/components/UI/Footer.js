import * as styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div class="container">
        <h2>Logo</h2>
        <ul>
          <li>
            <a href="!#">Home</a>
          </li>
          <li>
            <a href="!#">Contact</a>
          </li>
          <li>
            <a href="!#">Privacy Polity</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

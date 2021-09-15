import styles from './Header.module.css'

const Header = () => {
  return ( 
    <section className={styles.section} >
      <header className={styles.container}>
        <a href="/">
          <h2 className={styles.logo} >Logo</h2>
        </a>
        <ul className={styles.navlinks} >
          <li><a href="!#">Home</a></li>
          <li><a href="!#">Cart</a></li>
          <li><a href="!#">Contact</a></li>
        </ul>
      </header>
    </section>
  );
}

export default Header;
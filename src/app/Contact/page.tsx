import styles from './page.module.css';
import React from 'react';
const Home = () => {
  return (
      <><div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          <a className={styles.logo} href="/"><img src="HaileysDesign.png" alt="Logo" width="250px" height="90px" /></a>
          <li className={styles.navLi}><a href="/">About Me</a></li>
          <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
          <li className={styles.navLi}><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </div><h1 className={styles.h1}>Contact Info and Resume</h1><div className={styles.body}>
     
      </div></>
  );
};
export default Home;
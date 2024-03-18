import styles from './page.module.css';
import React from 'react';
const Portfolio = () => {
  return (
    <><div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          <a className={styles.logo} href="/"><img src="HaileysDesign.png" alt="Logo" width="250px" height="100px" /></a>
          <li className={styles.navLi}><a href="/">About Me</a></li>
          <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
          <li className={styles.navLi}><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </div><h1 className={styles.h1}>Portfolio</h1></>
    
  );
};
export default Portfolio;
import styles from './page.module.css';
import React from 'react';
const Projects = () => {
  return (
    <div className={styles.header}>
        <nav className={styles.nav}>
        <ul className={styles.navUl}>
        <li className={styles.navLi}><a href="Home"><img src="HaileysDesign.png" alt="Logo" width="250px" height="120px"/></a></li>
        <li className={styles.navLi}><a href="/">Home</a></li>
        <li className={styles.navLi}><a href="/projects">Projects</a></li>
        <li className={styles.navLi}><a href="/Resume">Resume</a></li>
        <li className={styles.navLi}><a href="/Contactinfo">Contact Info</a></li>
        </ul>
        </nav>
    <h1 className={styles.h1}>Projects</h1>
  
    </div>
  );
};
export default Projects;
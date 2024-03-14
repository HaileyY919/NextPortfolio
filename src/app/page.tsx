import styles from './page.module.css';
import React from 'react';
const Home = () => {
  return (
    <><div className={styles.header}>
     <a className={styles.logo} href="/"><img src="HaileysDesign.png" alt="Logo" width="250px" height="120px"/></a>
        <nav className={styles.nav}>
        <ul className={styles.navUl}>
        <li className={styles.navLi}><a href="/">Home</a></li>
        <li className={styles.navLi}><a href="/projects">Projects</a></li>
        <li className={styles.navLi}><a href="/Resume">Resume</a></li>
        <li className={styles.navLi}><a href="/Contactinfo">Contact Info</a></li>
        </ul>
        </nav>
    </div>
    <h1 className={styles.h1}>Hailey Young’s Portfolio</h1>
    <div className={styles.body}>
        <div className={styles.aboutText}>
        <div className={styles.MyPhoto}><img src="Me.png" alt="Hailey" width="230px" height="300px"/></div>
        <h3 className={styles.h3}>How I got Started</h3>
        <p className={styles.p}>When I began my high school career, I had no clue what I wanted to do after I graduated. That’s when I took my first photography class, which then led to me taking another and also enrolling in graphic design courses. During these courses, my teacher set us up with opportunities to work with local businesses and provide them with logos, brochures, business cards, etc. These meetings helped me realize that graphic design is something I enjoy and want to pursue.</p>
        <p className={styles.p}>I am now enrolled in North Idaho College’s Graphic and Web Design program where I have been working towards an Associate of Applied Science. The program has been an amazing experience where I have been given the chance to learn more of what the Adobe programs have to offer.</p>
        <p className={styles.p}>I have taken what I learned in my photography and graphic design classes with me into other areas of my life as well and used them to my creative advantage.</p>
        </div>
        <div className={styles.skills}>
        <div className={styles.graphics}><h2 className={styles.h2}>Graphic Design</h2><a href="/Projects"><img src="GDicon.png" alt="Icon" width="254px" height="214px"/></a></div>
        <div className={styles.graphics}><a href="/Projects"><img src="Camera.png" alt="Camera" width="200px" height="180px"/></a><h2 className={styles.h2}>Photography</h2></div>
        </div>
        </div>
    <footer>Find me on <a href= "https://www.instagram.com/haileys_design_work/#" target= "_blank">Instagram</a></footer>
    </>
  );
};
export default Home;
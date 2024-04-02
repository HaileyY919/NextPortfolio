import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import POL from "@/assets/POL.jpeg"
const Portfolio = () => {
  return (
    <><div className={styles.header}>
          <nav className={styles.nav}>
              <ul className={styles.navUl}>
                  <a className={styles.logo} href="/"><Image src={HaileysDesign} width={250} height={90} alt={'Hailey'} /></a>
                  <li className={styles.navLi}><a href="/">About Me</a></li>
                  <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/logos">Logos</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/posters">Posters</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/OtherProjects">Other Projetcs</a></li>
                  <li className={styles.navLi}><a href="/Contact">Contact</a></li>
              </ul>
          </nav>
      </div>
      <h1 className={styles.h1}>Poetry Out Loud Flyer</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={POL}
        width={230}
        height={330} 
        alt={'POL'}    /></div>
    <p className={styles.p}>Another club started at my school is called Poetry Out Loud (POL). When the president of the club saw the posters I made for Book Club, she asked me to make some for POL as well since the club was not very large and she wanted to try and get more members.</p>
  
        </>
    );
};
export default Portfolio;
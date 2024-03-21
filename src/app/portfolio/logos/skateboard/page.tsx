import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import Skateboard from "@/assets/Skateboard.png";
const Portfolio = () => {
  return (
    <><div className={styles.header}>
          <nav className={styles.nav}>
              <ul className={styles.navUl}>
                  <a className={styles.logo} href="/"><Image src={HaileysDesign} width={250} height={100} alt={'Hailey'} /></a>
                  <li className={styles.navLi}><a href="/">About Me</a></li>
                  <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/logos">Logos</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/posters">Posters</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/OtherProjects">Other Projetcs</a></li>
                  <li className={styles.navLi}><a href="/Contact">Contact</a></li>
              </ul>
          </nav>
      </div>
      <h1 className={styles.h1}>Skateboard Hobby Logo</h1>
      <div className={styles.image}>
      <Image
          src={Skateboard}
          width={250}
          height={220}
          alt={'Skate'} /></div>
    <p className={styles.p}>This logo was the first assignment we were given in my Adobe Illustrator class. Our professor wanted us to create a hobby logo to get to know a bit more about us. I took the opportunity to create a skateboard. Although I am not an amazing skater, I still love it when I get the chance to ride. The most difficult part of making this logo, especially with minimal Adobe knowledge, was adding texture to the board.</p>
        </>
    );
};
export default Portfolio;
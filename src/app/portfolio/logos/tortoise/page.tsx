import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import Tortoise from "@/assets/Tortoise.png";
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
      <h1 className={styles.h1}>Animal Mascot Logo</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Tortoise}
        width={250}
        height={220} 
        alt={'Tortoise'}/></div>
      <p className={styles.p}>In this project, we chose any animal we wanted in order to create an animal mascot logo. I chose a Radiated Tortoise because I wanted to do an animal that was more unique. My family also owns 4 of these tortoises so I was able to take my own photos to use as reference.</p>
          </>
    );
};
export default Portfolio;
import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import Bird from "@/assets/Weekly Exercises/Bird.png";
import Butterfly from "@/assets/Weekly Exercises/Butterfly.png";
import Coffee from "@/assets/Weekly Exercises/Coffee.png";
import Jelly from "@/assets/Weekly Exercises/WeeklyExercise6JELLYFISH_HYoung.png";
import Snow from "@/assets/Weekly Exercises/Snowflake.png";
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
      <h1 className={styles.h1}>Illustrator Exercises</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Bird}
        width={250}
        height={250} 
        alt={'Monogram'}    /></div>
    <p className={styles.p}>Every week in my Adobe Illustrator Class we had weekly exercises assignment with what we had to create that week. These were quick illustrations that were focussed on utilizing tools we learned that week. These are my favorites from the semester.</p>
   <div className={styles.additionalimage}>
    <Image className={styles.additionalimage}
        src={Butterfly}
        width={250}
        height={250} 
        alt={'Monogram'}    />
        <Image className={styles.additionalimage}
        src={Coffee}
        width={250}
        height={250} 
        alt={'Monogram'}    />
        <Image className={styles.additionalimage}
        src={Jelly}
        width={250}
        height={250} 
        alt={'Monogram'}    />
        <Image className={styles.additionalimage}
        src={Snow}
        width={250}
        height={250} 
        alt={'Monogram'}    /></div>
        </>
    );
};
export default Portfolio;
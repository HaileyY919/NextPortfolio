import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import GradCard from "@/assets/Graduation-Card.jpg";
import LGrad from "@/assets/LGrad.jpg"
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
      <h1 className={styles.h1}>Graduation Announcement Cards</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={GradCard}
        width={220}
        height={280} 
        alt={'Explore'}    /></div>
    <p className={styles.p}>Since I was learning Adobe programs while being a dual credit high school senior, I decided to make my own graduation announcements. I wanted at least two photos of myself as well as graduation elements (cap and diploma). Then I decided to go with a black and gold theme for the background and the important text.</p>
    <p className={styles.p2}>I also designed my boyfriend, Landon's Graduation Card.</p>
    <Image className={styles.additionalimage}
        src={LGrad}
        width={280}
        height={220} 
        alt={'Explore'}    />
        </>
    );
};
export default Portfolio;
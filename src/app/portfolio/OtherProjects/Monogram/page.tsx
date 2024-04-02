import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import Explore from "@/assets/Explore.png"
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
      <h1 className={styles.h1}>Explore Magazine Cover</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Explore}
        width={280}
        height={400} 
        alt={'POL'}    /></div>
    <p className={styles.p}>This magazine cover was one of my Photoshop class assignments where we essentially had free rain over what we made so long as we used the "explore" title with that font. We were allowed up to 5 instances of AI generated content and had to make something captivating and creative. I used AI to generate the shark and a few other creatures throughout. My favorite part in creating this magazine cover was making my Anglerfish look like it is lighting up the text above it and it fading out the further from the fish the text is.</p>
  
        </>
    );
};
export default Portfolio;
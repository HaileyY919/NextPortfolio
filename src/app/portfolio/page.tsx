import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import BCMockup from "@/assets/MyBranding/BCMockup.png";
import Skateboard from "@/assets/Skateboard.png";
import BookClub from "@/assets/Bookclub.png";
import Monogram from "@/assets/Monogram.png";

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
    </div><h1 className={styles.h1}>Portfolio</h1>
    {/* <h2 className={styles.h2}>Logos</h2> */}
    <div className={styles.display}>
      <Image className={styles.image}
        src={BCMockup}
        width={320}
        height={300} 
        alt={'BC'}    />
      <a href="/portfolio/logos"><Image className={styles.image}
        src={Skateboard}
        width={250}
        height={220} 
        alt={'Skate'}    /></a>
     <Image className={styles.image}
        src={BookClub}
        width={200}
        height={300} 
        alt={'Book'}    />
      <Image className={styles.image}
        src={Monogram}
        width={250}
        height={250} 
        alt={'Monogram'}    />
        </div>
    {/* <h2 className={styles.h2}>Posters</h2>
    <h2 className={styles.h2}>Other Projects</h2> */}
    </>
  );
};
export default Portfolio;
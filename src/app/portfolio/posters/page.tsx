import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import BookClub from "@/assets/Bookclub.png";
import POL from "@/assets/POL.jpeg"
import Travel from "@/assets/TravelPoster.png"
import MolRep from "@/assets/MolecularReptile.png"
import Explore from "@/assets/Explore.png"
import FavType from "@/assets/Favoritetype.png"
import ISAS from "@/assets/ISASPoster.jpg"
import Gizmo from "@/assets/Gizmo.png"

const Portfolio = () => {
  return (
    <><div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          <a className={styles.logo} href="/"><Image src={HaileysDesign} width={250} height={100} alt={'Hailey'}/></a>
          <li className={styles.navLi}><a href="/">About Me</a></li>
          <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
          <li className={styles.navLismall}><a href="/portfolio/logos">Logos</a></li>
          <li className={styles.navLismall}><a href="/portfolio/posters">Posters</a></li>
          <li className={styles.navLismall}><a href="/portfolio/OtherProjects">Other Projetcs</a></li>
          <li className={styles.navLi}><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </div><h1 className={styles.h1}>Posters</h1>
    <div className={styles.logos}>
      <Image className={styles.image}
        src={BookClub}
        width={300}
        height={470} 
        alt={''}    />
      {/* <Image className={styles.image}
        src={}
        width={270}
        height={190} 
        alt={'Golf'}    />
      <Image className={styles.image}
        src={}
        width={200}
        height={230} 
        alt={''}    />
      <Image className={styles.image}
        src={}
        width={250}
        height={220} 
        alt={'Tortoise'}    />
      <Image className={styles.image}
        src={}
        width={355}
        height={80} 
        alt={''}    /> */}
        </div>
    </>
  );
};
export default Portfolio;
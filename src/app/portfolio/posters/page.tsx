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
          <a className={styles.logo} href="/"><Image src={HaileysDesign} width={250} height={90} alt={'Hailey'}/></a>
          <li className={styles.navLi}><a href="/">About Me</a></li>
          <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
          <li className={styles.navLismall}><a href="/portfolio/logos">Logos</a></li>
          <li className={styles.navLismall}><a href="/portfolio/posters">Posters</a></li>
          <li className={styles.navLismall}><a href="/portfolio/OtherProjects">Other Projetcs</a></li>
          <li className={styles.navLi}><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </div><h1 className={styles.h1}>Posters</h1>
    <div className={styles.posters}>
      <a href="/portfolio" className={styles.displayLink}>
      <Image className={styles.image}
        src={BookClub}
        width={230}
        height={330} 
        alt={'Book'}    />
        <div className={styles.displayTitle}>
          <h3>Book Club</h3>
        </div>
      </a>
      <a href="/portfolio" className={styles.displayLink}>
      <Image className={styles.image}
        src={POL}
        width={230}
        height={330} 
        alt={'POL'}    />
         <div className={styles.displayTitle}>
          <h3>Poetry Out Loud</h3>
        </div>
      </a>
      <a href="/portfolio" className={styles.displayLink}>
      <Image className={styles.image}
        src={MolRep}
        width={250}
        height={280} 
        alt={'MolReptile'}    />
       <div className={styles.displayTitle}>
          <h3>Molecular Reptile</h3>
        </div>
      </a>
      <a href="/portfolio" className={styles.displayLink}>
      <Image className={styles.image}
        src={Travel}
        width={280}
        height={400} 
        alt={'Travel'}    />
       <div className={styles.displayTitle}>
          <h3>Travel Poster</h3>
        </div>
      </a>
      <a href="/portfolio" className={styles.displayLink}>
      <Image className={styles.image}
        src={Explore}
        width={280}
        height={400} 
        alt={'Explore'}    />
         <div className={styles.displayTitle}>
          <h3>Explore Magazine Cover</h3>
        </div>
      </a>
      <a href="/portfolio" className={styles.displayLink}>
      <Image className={styles.image}
        src={FavType}
        width={280}
        height={400} 
        alt={'Type'}    />
         <div className={styles.displayTitle}>
          <h3>Favorite Type</h3>
        </div>
      </a>
      <a href="/portfolio" className={styles.displayLink}>
      <Image className={styles.image}
        src={ISAS}
        width={300}
        height={200} 
        alt={'ISAS'}    />
         <div className={styles.displayTitle}>
          <h3>Idaho Science and Aerospace Scholars</h3>
        </div>
      </a>
      <a href="/portfolio" className={styles.displayLink}>
      <Image className={styles.image}
        src={Gizmo}
        width={250}
        height={280} 
        alt={'Gizmo'}    />
         <div className={styles.displayTitle}>
          <h3>Gizmo and PTK</h3>
        </div>
      </a>
        </div>
    </>
  );
};
export default Portfolio;
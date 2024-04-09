import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import BookClub from "@/assets/Bookclub.png";
import POL from "@/assets/POL.jpeg";
import Travel from "@/assets/TravelPoster.png";
import MolRep from "@/assets/MolecularReptile.png";
import FavType from "@/assets/Favoritetype.png";
// import ISAS from "@/assets/ISASPoster.jpg";
import Gizmo from "@/assets/Gizmo.png";

const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
    <h1 className={styles.h1}>Posters</h1>
    <div className={styles.posters}>
      <a href="/portfolio/posters/book-club" className={styles.displayLink}>
      <Image className={styles.image}
        src={BookClub}
        width={230}
        height={330} 
        alt={'Book'}    />
        <div className={styles.displayTitle}>
          <h3>Book Club</h3>
        </div>
      </a>
      <a href="/portfolio/posters/POL" className={styles.displayLink}>
      <Image className={styles.image}
        src={POL}
        width={230}
        height={330} 
        alt={'POL'}    />
         <div className={styles.displayTitle}>
          <h3>Poetry Out Loud</h3>
        </div>
      </a>
      <a href="/portfolio/posters/MolRep" className={styles.displayLink}>
      <Image className={styles.image}
        src={MolRep}
        width={240}
        height={290} 
        alt={'MolReptile'}    />
       <div className={styles.displayTitle}>
          <h3>Molecular Reptile</h3>
        </div>
      </a>
      <a href="/portfolio/posters/Thailand" className={styles.displayLink}>
      <Image className={styles.image}
        src={Travel}
        width={280}
        height={400} 
        alt={'Travel'}    />
       <div className={styles.displayTitle}>
          <h3>Travel Poster</h3>
        </div>
      </a>
      <a href="/portfolio/posters/FavType" className={styles.displayLink}>
      <Image className={styles.image}
        src={FavType}
        width={280}
        height={400} 
        alt={'Type'}    />
         <div className={styles.displayTitle}>
          <h3>Favorite Type</h3>
        </div>
      </a>
      <a href="/portfolio/posters/PTK" className={styles.displayLink}>
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
    </main>
    </div>
    </>
  );
};
export default Portfolio;
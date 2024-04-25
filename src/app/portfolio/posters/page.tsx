import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import BookClub from "@/assets/Bookclub.png";
import POL from "@/assets/POL.jpeg";
import Travel from "@/assets/TravelPoster.png";
import MolRep from "@/assets/MolecularReptile.png";
import FavType from "@/assets/Favoritetype.png";
import Quote from "@/assets/YouCanQuoteMe.png"
import Gizmo from "@/assets/Gizmo.png";

const Portfolio = () => {
  return (
    <>
    <Header />
    <main className={styles.main}>
    <h1 className={styles.h1}>Posters</h1>
    <div className={styles.display}>
    <div className={styles.displayWrapper}>
      <a href="/portfolio/posters/book-club" className={styles.displayLink}>
      <Image  className={styles.displayImage}
        src={BookClub}
        alt={'Book'}   fill />
        <div className={styles.displayTitle}>
          <h3>Book Club</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/posters/POL" className={styles.displayLink}>
      <Image  className={styles.displayImage}
        src={POL}
        alt={'POL'}   fill />
         <div className={styles.displayTitle}>
          <h3>Poetry Out Loud</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/posters/MolRep" className={styles.displayLink}>
      <Image  className={styles.displayImage}
        src={MolRep}
        alt={'MolReptile'}   fill />
       <div className={styles.displayTitle}>
          <h3>Molecular Reptile</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/posters/Thailand" className={styles.displayLink}>
      <Image  className={styles.displayImage}
        src={Travel}
        alt={'Travel'}  fill  />
       <div className={styles.displayTitle}>
          <h3>Travel Poster</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/posters/FavType" className={styles.displayLink}>
      <Image  className={styles.displayImage}
        src={FavType}
        alt={'Type'}   fill />
         <div className={styles.displayTitle}>
          <h3>Favorite Type</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/posters/quote" className={styles.displayLink}>
      <Image  className={styles.displayImage}
        src={Quote}
        alt={'Type'}   fill />
         <div className={styles.displayTitle}>
          <h3>Design Quote</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/posters/PTK" className={styles.displayLink}>
      <Image  className={styles.displayImage}
        src={Gizmo} 
        alt={'Gizmo'}   fill />
         <div className={styles.displayTitle}>
          <h3>Gizmo and PTK</h3>
        </div>
      </a>
      </div>
      </div>
    </main>
    </>
  );
};
export default Portfolio;
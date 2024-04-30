import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import BCMockup from "@/assets/MyBranding/BCMockup.png";
import Skateboard from "@/assets/Skateboard.png";
import BookClub from "@/assets/Bookclub.png";
import Monogram from "@/assets/Monogram.png";
import Sunset from "@/assets/Photography/sunset.jpg"
import Header from '@/components/global/Header';

const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
      <main className={styles.main}>
    <h1 className={styles.h1}>Portfolio</h1>
    <div className={styles.display}>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/MyBranding" className={styles.displayLink}>
        <Image className={styles.displayImage}
        src={BCMockup}
        alt={'BC'} fill />
        <div className={styles.displayTitle}>
          <h3>Personal Branding</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/logos" className={styles.displayLink}>
        <Image className={styles.displayImage}
        src={Skateboard} 
        alt={'Skate'} fill/>
         <div className={styles.displayTitle}>
          <h3>Logos</h3>
        </div>
        </a>
        </div>
      <div className={styles.displayWrapper}>
     <a href="/portfolio/posters" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={BookClub}
        alt={'Book'} fill/>
         <div className={styles.displayTitle}>
          <h3>Posters</h3>
        </div>
        </a>
        </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/OtherProjects" className={styles.displayLink}>
        <Image className={styles.displayImage}
        src={Monogram}
        alt={'Monogram'} fill />
         <div className={styles.displayTitle}>
          <h3>Other Design Projects</h3>
        </div>
        </a>
        </div>
        <div className={styles.displayWrapper}>
      <a href="/portfolio/photography" className={styles.displayLink}>
        <Image className={styles.displayImage}
        src={Sunset}
        alt={'Monogram'} fill />
         <div className={styles.displayTitle}>
          <h3>Photography</h3>
        </div>
        </a>
        </div>
        </div>
        </main>
      </div>
    </>
  );
};
export default Portfolio;
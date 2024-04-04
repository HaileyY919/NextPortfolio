import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import BCMockup from "@/assets/MyBranding/BCMockup.png";
import Skateboard from "@/assets/Skateboard.png";
import BookClub from "@/assets/Bookclub.png";
import Monogram from "@/assets/Monogram.png";
import Header from '@/components/global/Header';

const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
    <h1 className={styles.h1}>Portfolio</h1>
    <div className={styles.display}>
      <a href="/portfolio/MyBranding" className={styles.displayLink}>
        <Image 
        src={BCMockup}
        width={420}
        height={400} 
        alt={'BC'}/>
        <div className={styles.displayTitle}>
          <h3>Personal Branding</h3>
        </div>
      </a>
      <a href="/portfolio/logos" className={styles.displayLink}>
        <Image 
        src={Skateboard}
        width={450}
        height={420} 
        alt={'Skate'}/>
         <div className={styles.displayTitle}>
          <h3>Logos</h3>
        </div>
        </a>
     <a href="/portfolio/posters" className={styles.displayLink}>
      <Image 
        src={BookClub}
        width={300}
        height={470} 
        alt={'Book'}/>
         <div className={styles.displayTitle}>
          <h3>Posters</h3>
        </div>
        </a>
      <a href="/portfolio/OtherProjects" className={styles.displayLink}>
        <Image 
        src={Monogram}
        width={450}
        height={450} 
        alt={'Monogram'}/>
         <div className={styles.displayTitle}>
          <h3>Other Design Projects</h3>
        </div>
        </a>
        </div>
        </main>
        </div>
    </>
  );
};
export default Portfolio;
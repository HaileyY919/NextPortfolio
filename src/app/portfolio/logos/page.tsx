import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Skateboard from "@/assets/Skateboard.png";
import DiscGolf from "@/assets/DiscGolf.png";
import StrategicIllusions from "@/assets/StrategicIllusions.png";
import Tortoise from "@/assets/Tortoise.png";
import Pawtential from "@/assets/Pawtential.png";
import Header from '@/components/global/Header';

const Portfolio = () => {
  return (
    <>
    <Header />
    <main className={styles.main}>
    <h1 className={styles.h1}>Logos</h1>
    <div className={styles.display}>
    <div className={styles.displayWrapper}>
      <a href="/portfolio/logos/skateboard" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Skateboard}
        alt={'Skate'}   fill />
        <div className={styles.displayTitle}>
          <h3>Hobby Logo</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/logos/discgolf" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={DiscGolf}
        alt={'Golf'}   fill />
        <div className={styles.displayTitle}>
          <h3>Disc Golf Logo</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/logos/strategic" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={StrategicIllusions} 
        alt={'Golf'}   fill />
        <div className={styles.displayTitle}>
          <h3>Strategic Illusions Logo</h3>
        </div>
        </a>
        </div>
        <div className={styles.displayWrapper}> 
      <a href="/portfolio/logos/tortoise" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Tortoise}
        alt={'Tortoise'}   fill />
        <div className={styles.displayTitle}>
          <h3>Animal Mascot Logo</h3>
        </div>
        </a>
        </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/logos/pawtential" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Pawtential} 
        alt={'Paw'}   fill />
         <div className={styles.displayTitle}>
          <h3>Pawtential Logo</h3>
        </div>
        </a>
        </div>
        </div>
        </main>
    </>
  );
};
export default Portfolio;
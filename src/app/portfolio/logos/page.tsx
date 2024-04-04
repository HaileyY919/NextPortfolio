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
    <div className={styles.body}>
    <main>
    <h1 className={styles.h1}>Logos</h1>
    <div className={styles.logos}>
      <a href="/portfolio/logos/skateboard" className={styles.displayLink}>
      <Image className={styles.image}
        src={Skateboard}
        width={250}
        height={220} 
        alt={'Skate'}    />
        <div className={styles.displayTitle}>
          <h3>Hobby Logo</h3>
        </div>
      </a>
      <a href="/portfolio/logos/discgolf" className={styles.displayLink}>
      <Image className={styles.image}
        src={DiscGolf}
        width={270}
        height={190} 
        alt={'Golf'}    />
        <div className={styles.displayTitle}>
          <h3>Disc Golf Logo</h3>
        </div>
      </a>
      <a href="/portfolio/logos/strategic" className={styles.displayLink}>
      <Image className={styles.image}
        src={StrategicIllusions}
        width={200}
        height={230} 
        alt={'Golf'}    />
        <div className={styles.displayTitle}>
          <h3>Strategic Illusions Logo</h3>
        </div>
        </a>
      <a href="/portfolio/logos/tortoise" className={styles.displayLink}>
      <Image className={styles.image}
        src={Tortoise}
        width={250}
        height={220} 
        alt={'Tortoise'}    />
        <div className={styles.displayTitle}>
          <h3>Animal Mascot Logo</h3>
        </div>
        </a>
      <a href="/portfolio/logos/pawtential" className={styles.displayLink}>
      <Image className={styles.image}
        src={Pawtential}
        width={355}
        height={80} 
        alt={'Paw'}    />
         <div className={styles.displayTitle}>
          <h3>Pawtential Logo</h3>
        </div>
        </a>
        </div>
        </main>
        </div>
    </>
  );
};
export default Portfolio;
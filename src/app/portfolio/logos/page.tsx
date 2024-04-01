import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import Skateboard from "@/assets/Skateboard.png";
import DiscGolf from "@/assets/DiscGolf.png";
import StrategicIllusions from "@/assets/StrategicIllusions.png";
import Tortoise from "@/assets/Tortoise.png";
import Pawtential from "@/assets/Pawtential.png";

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
    </div><h1 className={styles.h1}>Logos</h1>
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
    </>
  );
};
export default Portfolio;
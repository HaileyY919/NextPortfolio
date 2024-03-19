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
          <a className={styles.logo} href="/"><Image src={HaileysDesign} width={250} height={100} alt={'Hailey'}/></a>
          <li className={styles.navLi}><a href="/">About Me</a></li>
          <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
          <li className={styles.navLi}><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </div><h1 className={styles.h1}>Logos</h1>
    <div className={styles.logos}>
      <Image className={styles.image}
        src={Skateboard}
        width={250}
        height={220} 
        alt={'Skate'}    />
      <Image className={styles.image}
        src={DiscGolf}
        width={270}
        height={190} 
        alt={'Golf'}    />
      <Image className={styles.image}
        src={StrategicIllusions}
        width={200}
        height={230} 
        alt={'Golf'}    />
      <Image className={styles.image}
        src={Tortoise}
        width={250}
        height={220} 
        alt={'Tortoise'}    />
      <Image className={styles.image}
        src={Pawtential}
        width={355}
        height={80} 
        alt={'Paw'}    />
        </div>
    </>
  );
};
export default Portfolio;
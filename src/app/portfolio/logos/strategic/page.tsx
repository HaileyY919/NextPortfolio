import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import StrategicIllusions from "@/assets/StrategicIllusions.png";
import BusinessCard from "@/assets/OnePage/BussinessCard.png";
import Logos from "@/assets/OnePage/Logos.png";
import Store from "@/assets/OnePage/Store.png";
import Ticket from "@/assets/OnePage/Ticket.png";
import TYCard from "@/assets/OnePage/TYCard.png";
import Hat from "@/assets/OnePage/Hat.png";
import Letterhead from "@/assets/OnePage/Letterhead.png";
import Envelope from "@/assets/OnePage/Envelope.png";
const Portfolio = () => {  
return (
    <><div className={styles.header}>
          <nav className={styles.nav}>
              <ul className={styles.navUl}>
                  <a className={styles.logo} href="/"><Image src={HaileysDesign} width={250} height={100} alt={'Hailey'} /></a>
                  <li className={styles.navLi}><a href="/">About Me</a></li>
                  <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/logos">Logos</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/posters">Posters</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/OtherProjects">Other Projetcs</a></li>
                  <li className={styles.navLi}><a href="/Contact">Contact</a></li>
              </ul>
          </nav>
      </div>
      <h1 className={styles.h1}>Strategic Illusions Logo</h1>
      <div className={styles.image}>
      <Image
        src={StrategicIllusions}
        width={200}
        height={230} 
        alt={'Golf'}/></div>
          </>
    );
};
export default Portfolio;
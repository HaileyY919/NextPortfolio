import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import MolRep from "@/assets/MolecularReptile.png";
import Banner from "@/assets/MolRep-Banner.png";
const Portfolio = () => {
  return (
    <><div className={styles.header}>
          <nav className={styles.nav}>
              <ul className={styles.navUl}>
                  <a className={styles.logo} href="/"><Image src={HaileysDesign} width={250} height={90} alt={'Hailey'} /></a>
                  <li className={styles.navLi}><a href="/">About Me</a></li>
                  <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/logos">Logos</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/posters">Posters</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/OtherProjects">Other Projetcs</a></li>
                  <li className={styles.navLi}><a href="/Contact">Contact</a></li>
              </ul>
          </nav>
      </div>
      <h1 className={styles.h1}>Molecular Reptile Poster & Banner</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={MolRep}
        width={240}
        height={290} 
        alt={'Book'}    /></div>
    <p className={styles.p}>My dad owns his own business called Molecular Reptile where he breeds and sells snakes and other reptiles. For one of his reptile shows he wanted me to make him a poster he could put on his booth table. He wanted his logo to be in the center and have a few of his snake pictures featured in it. This poster is what I created. Later on, as my skills improved he asked me to make him a full sized banner. He wanted the banner to essentially be a larger version of the table-top poster. Bellow is the finished product.</p>
      <Image className={styles.additionalimage}
        src={Banner}
        width={330}
        height={620} 
        alt={'Book'}    />
        </>
    );
};
export default Portfolio;
import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import Pawtential from "@/assets/Pawtential.png";
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
      <h1 className={styles.h1}>Pawtential Logo</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Pawtential}
        width={355}
        height={80} 
        alt={'Paw'}    /></div>
          
      <p className={styles.p}>I made this logo for my senior project. My senior project class took place online as an entrepreneurship class. We did the project in a group to make it easier to divide up the workload of making a business. Our business is called Pawtential. We are essentially a social media marketing agency for pet products. My group granted me the opportunity to create our logo after we decided our name and color scheme.</p>
          </>
    );
};
export default Portfolio;
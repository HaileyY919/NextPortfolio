import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import BookClub from "@/assets/Bookclub.png";
import Bookmark from "@/assets/Bookmark.png";
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
      <h1 className={styles.h1}>Book Club Flyer</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={BookClub}
        width={230}
        height={330} 
        alt={'Book'}    /></div>
    <p className={styles.p}>The high school I went to does not have many clubs. My best friend decided to change that by creating a Book Club. She asked me to create a poster for her to hang around the school to advertise the club. I did not make the book club logo, but I used the logos coloring in the poster to keep the two elements cohesive.</p>
    <p className={styles.p2}>I also made some bookmarks that we handed out to club members.</p>
    <Image className={styles.additionalimage}
        src={Bookmark}
        width={260}
        height={320} 
        alt={'Book'}    />
        </>
    );
};
export default Portfolio;
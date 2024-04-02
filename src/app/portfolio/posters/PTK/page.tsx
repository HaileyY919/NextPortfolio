import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
import Gizmo from "@/assets/Gizmo.png";
import PTK from "@/assets/PTK.jpg";
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
      <h1 className={styles.h1}>PTK meets Gizmo Flyers</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Gizmo}
        width={250}
        height={280} 
        alt={'PTK'}    /></div>
    <p className={styles.p}>At North Idaho College I am the vice president of service in the Phi Theta Kappa Honors Society. During one of our projects, we partnered with Gizmo to hold an event for PTK members, students, and the general public. At this event we had activities for people to do where they got to take home something they made, as well as food and a give-away. To advertise the event, I created a flyer to hang around campus and post on social media.</p>
    <p className={styles.p2}>I also made a flyer for our spring member meeting/induction ceremony. Bellow is that flyer.</p>
    <Image className={styles.additionalimage}
        src={PTK}
        width={250}
        height={280} 
        alt={'PTK'}    />
        </>
    );
};
export default Portfolio;
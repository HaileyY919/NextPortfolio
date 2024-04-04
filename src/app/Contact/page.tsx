import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Resumeg from '@/assets/Files/Resumegraphic.png';
import Resume from '@/assets/Files/Resume.png'
import Insta from '@/assets/Icons/Insta.png'
import FB from '@/assets/Icons/Facebook.png'
import Linkdin from '@/assets/Icons/Link.png'
import Email from '@/assets/Icons/Email.png'
import Phone from '@/assets/Icons/Phone.png'
const Home = () => {
  return (
      <><div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navUl}>
          <a className={styles.logo} href="/"><img src="HaileysDesign.png" alt="Logo" width="250px" height="90px" /></a>
          <li className={styles.navLi}><a href="/">About Me</a></li>
          <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
          <li className={styles.navLi}><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </div><h1 className={styles.h1}>Contact Info and Resume</h1><div className={styles.body}>
    <h2 className={styles.h2}>Contact Me by:</h2>
    <p className={styles.p}>
    <a href="tel:2085189125">
    <Image
        src={Phone}
        alt={'BC'}
        height={35}
        width={20}></Image>(208) 518-9125</a></p>
    <p className={styles.p}>
    <a href="mailto:haileyyoung919@gmail.com">
    <Image className={styles.icons}
        src={Email}
        alt={'BC'}></Image>haileyyoung919@gmail.com</a></p>
    <h2 className={styles.h2}>Also Find me on:</h2>
    <p className={styles.p}>
    <a href="https://www.instagram.com/haileys_design_work/" target="_blank">
      <Image className={styles.icons}
        src={Insta}
        alt={'BC'}></Image>haileys_design_work</a></p>
    <p className={styles.p}>
    <a href="https://www.facebook.com/haileys.design.work" target="_blank">
    <Image className={styles.icons}
        src={FB}
        alt={'BC'}></Image>Hailey's Design</a></p>
    <p className={styles.p}>
    <a href="https://www.linkedin.com/in/hailey-young-a2460a283" target="_blank">
    <Image className={styles.icons}
        src={Linkdin}
        alt={'BC'}></Image>Hailey Young</a></p> 
    <h2 className={styles.h2}>Resume</h2>
      <Image className={styles.resume}
        src={Resume}
        width={530}
        height={650} 
        alt={'BC'}></Image>
      </div></>
  );
};
export default Home;
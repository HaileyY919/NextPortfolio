import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Insta from '@/assets/Icons/Insta.png';
import FB from '@/assets/Icons/Facebook.png';
import Linkdin from '@/assets/Icons/Link.png';
import Header from '@/components/global/Header';
import ContactForm from '@/components/global/ContactForm';
const Home = () => {
  return (
      <>
      <Header />
    <main className={styles.main}>
    <h1 className={styles.h1}>Contact Me</h1><div className={styles.body}>
      <div className={styles.contactWrapper}>
      <ContactForm />
      </div>
    <footer className={styles.footer}>
      <h2 className={styles.h3}>Also Fine me On</h2>
      <div className={styles.icons}>
      <a href="https://www.instagram.com/haileys_design_work/" target="_blank">
      <Image className={styles.icon}
        src={Insta}
        alt={'BC'}
        width= {65}
        height= {60}></Image></a>
    <a href="https://www.facebook.com/haileys.design.work" target="_blank">
      <Image className={styles.icon}
        src={FB}
        alt={'BC'}
        width= {65}
        height= {60}></Image></a>
    <a href="https://www.linkedin.com/in/hailey-young-a2460a283" target="_blank">
      <Image className={styles.icon}
        src={Linkdin}
        alt={'BC'}
        width= {65}
        height= {65}></Image></a>
        </div>
      </footer>
      </div>
      </main>
      </>
  );
};
export default Home;
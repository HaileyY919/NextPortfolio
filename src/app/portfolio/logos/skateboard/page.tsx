import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Skateboard from "@/assets/Skateboard.png";
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Skateboard Hobby Logo</h1>
      <div className={styles.image}>
      <Image
          src={Skateboard}
          width={250}
          height={220}
          alt={'Skate'} /></div>
    <p className={styles.p}>This logo was the first assignment we were given in my Adobe Illustrator class. Our professor wanted us to create a hobby logo to get to know a bit more about us. I took the opportunity to create a skateboard. Although I am not an amazing skater, I still love it when I get the chance to ride. The most difficult part of making this logo, especially with minimal Adobe knowledge, was adding texture to the board.</p>
    </main>
    </div>
        </>
    );
};
export default Portfolio;
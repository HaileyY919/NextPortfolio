import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Tortoise from "@/assets/Tortoise.png";
import Header from '@/components/global/Header';
const Portfolio = () => {
  return (
    <>
   <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Animal Mascot Logo</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Tortoise}
        width={250}
        height={220} 
        alt={'Tortoise'}/></div>
      <p className={styles.p}>In this project, we chose any animal we wanted in order to create an animal mascot logo. I chose a Radiated Tortoise because I wanted to do an animal that was more unique. My family also owns 4 of these tortoises so I was able to take my own photos to use as reference.</p>
        </main>
        </div>
          </>
    );
};
export default Portfolio;
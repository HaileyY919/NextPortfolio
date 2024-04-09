import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import POL from "@/assets/POL.jpeg"
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Poetry Out Loud Flyer</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={POL}
        width={230}
        height={330} 
        alt={'POL'}    /></div>
    <p className={styles.p}>Another club started at my school is called Poetry Out Loud (POL). When the president of the club saw the posters I made for Book Club, she asked me to make some for POL as well since the club was not very large and she wanted to try and get more members.</p>
    </main>
    </div>
        </>
    );
};
export default Portfolio;
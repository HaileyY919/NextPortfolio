import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Monogram from "@/assets/Monogram.png";
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Monogram made of my Initials</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Monogram}
        width={250}
        height={250} 
        alt={'Monogram'}    /></div>
    <p className={styles.p}>For another Adobe Illustrator assignment, we had to make a monogram of our initials. I always write my name in cursive, so I decided to have my initials in cursive for this too. It was hard to decide on what artistic route to take with this assignment, but I thought the best way would be to disguise my initials as flowers, more specifically tulips. My initials are HAY so I put the H and Y as flowers and the A is hidden below in the roots.</p>
    </main>
    </div>
        </>
    );
};
export default Portfolio;
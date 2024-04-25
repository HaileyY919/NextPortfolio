import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import NYCard from "@/assets/NYCard_Mockup.png";
import Front from "@/assets/NYCard_Front.png"
import Back from "@/assets/NYCard_Back.png"
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>New Years Card</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={NYCard}
        width={280}
        height={280} 
        alt={'Explore'}    /></div>
    <p className={styles.p}>This New Years Card I made out of only type. The font I chose is called Balloon Dreams. I wanted to have the essence of the design revolve around celebrations, so I wanted balloons and fireworks. I also turned the 0 into a clock striking midnight. For the back of this card I used my logo as the stamp.</p>
    <div  className={styles.additionalimage}>
    <Image
        src={Front}
        width={270}
        height={280} 
        alt={'Explore'}    />
     <Image 
        src={Back}
        width={290}
        height={220} 
        alt={'Explore'}    /></div>
    </main>
    </div>
    </>
    );
};
export default Portfolio;
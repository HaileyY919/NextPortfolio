import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import GradCard from "@/assets/Graduation-Card.jpg";
import lgrad from "@/assets/lgrad.jpg"
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Graduation Announcement Cards</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={GradCard}
        width={220}
        height={280} 
        alt={'Explore'}    /></div>
    <p className={styles.p}>Since I was learning Adobe programs while being a dual credit high school senior, I decided to make my own graduation announcements. I wanted at least two photos of myself as well as graduation elements (cap and diploma). Then I decided to go with a black and gold theme for the background and the important text.</p>
    <p className={styles.p2}>I also designed my boyfriend, Landon&lsquo;s Graduation Card.</p>
    <div className={styles.additionalimage}>
    <Image 
        src={lgrad}
        width={280}
        height={220} 
        alt={'Explore'}    /></div>
    </main>
    </div>
    </>
    );
};
export default Portfolio;
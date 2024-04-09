import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Album from "@/assets/albumcover.png";

const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Album Cover</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Album}
        width={280}
        height={280} 
        alt={'POL'}    /></div>
    <p className={styles.p}>For this assignment, we were to choose one of our favorite songs and make an album cover to represent elements of the song. I chose 2Pac&lsquo;s Dear Mama and created both a static and annimated album cover. This was my first time creating an annimation and it was interesting doing so in Photoshop and learning that area of the software.</p>
        <div className={styles.video}><video width="550px" height="550px" controls>
            <source src={"/videos/annimated.mp4"} type="video/mp4" />
        </video></div>
    </main>
    </div>
        </>
    );
};

export default Portfolio;
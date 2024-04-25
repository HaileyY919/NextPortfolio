import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Quote from "@/assets/YouCanQuoteMe.png"
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Design Quote Poster</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Quote}
        width={280}
        height={400} 
        alt={'POL'}    /></div>
    <p className={styles.p}>In my typography class I had to make  another poster only using type. This poster I was able to use more than one typeface, unlike the Favorite Type one. I used Brush for the word design, Orange Squash for the word visual, and Archivo Black for the words in the brain and Saul Bass. The icons I used for the backgorund pattern were an icon font I found and made a pattern out of.</p>
    </main>
    </div>
        </>
    );
};
export default Portfolio;
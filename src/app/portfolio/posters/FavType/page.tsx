import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import FavType from "@/assets/Favoritetype.png"
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Favorite Type Poster</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={FavType}
        width={280}
        height={400} 
        alt={'POL'}    /></div>
    <p className={styles.p}>In my typography class we were assigned a project where we had to make an entire poster only using type. On top of this, it had to be our &quot;favorite typeface&quot; and we could only use that singular typeface. I chose to do Clarendon after some research because I thought it would be fun to create a wanted poster, which Clarendon was commonly used for when it was first created by Robert Besley in 1845.</p>
    </main>
    </div>
        </>
    );
};
export default Portfolio;
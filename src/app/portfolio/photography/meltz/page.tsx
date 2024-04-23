import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Sauce from '@/assets/JobPhotos/Pouring sauce.jpg';
import Potsticker from '@/assets/JobPhotos/Potsticker.jpg';
import Store from '@/assets/JobPhotos/Front-of-store.jpg';
import Sandwhiches from '@/assets/JobPhotos/Sandwiches-on-grill.jpg'
const Portfolio = () => {
  return (
    <>
    <Header />
    <main className={styles.main}>
    <h1 className={styles.h1}>Meltz Grilled Cheese</h1>
    <div className={styles.image}>
      <Image className={styles.image}
        src={Potsticker}
        width={270}
        height={190} 
        alt={'Golf'}    /></div>
    <p className={styles.p}>One of my friends' family owns a grilled cheese sandwich place called Meltz. They needed some photography work done and knew that I had the skillset, so they hired me to photograph the store, employees, and of course sandwiches.</p>
    <div className={styles.displaygal}>
    <Image className={styles.imagegal}
        src={Sauce}
        width={370}
        height={270} 
        alt={'Basket'}    />
    <Image className={styles.imagegal}
        src={Sandwhiches}
        width={370}
        height={270} 
        alt={'Cuttree'}    />
     <Image className={styles.imagegal}
        src={Store}
        width={370}
        height={270} 
        alt={'throw'}    /></div>
   
    </main>
    </>
  );
};
export default Portfolio;
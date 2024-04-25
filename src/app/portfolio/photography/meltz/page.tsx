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
    <div className={styles.display}>
    <div className={styles.displayWrapper}>
      <Image className={styles.displayImage}
        src={Potsticker}
        alt={'Golf'}   fill /></div>
    <p className={styles.p}>One of my friends&apos; family owns a grilled cheese sandwich place called Meltz. They needed some photography work done and knew that I had the skillset, so they hired me to photograph the store, employees, and of course sandwiches.</p>
    <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Sandwhiches}
        alt={'Basket'}  fill  /></div>
    <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Sauce}
        alt={'Basket'}    fill/></div>
    <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Store}
        alt={'Cuttree'}   fill /></div>
    </div>
    </main>
    </>
  );
};
export default Portfolio;
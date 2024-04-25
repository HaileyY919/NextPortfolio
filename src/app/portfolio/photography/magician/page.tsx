import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Cecil from '@/assets/JobPhotos/Cecil.jpg';
import Audience from '@/assets/JobPhotos/Audience.jpg';
import Performance from '@/assets/JobPhotos/Performance.jpg';
import Tossup from '@/assets/JobPhotos/Tossup.jpg'
const Portfolio = () => {
  return (
    <>
    <Header />
    <main className={styles.main}>
    <h1 className={styles.h1}>Cecil the Magician</h1>
    <div className={styles.display}>
    <div className={styles.displayWrapper}>
      <Image className={styles.displayImage}
        src={Cecil}
        alt={'Golf'}   fill /></div>
    <p className={styles.p}>While volunteering at the Community Library Network, I was taking photos of Cecil the Magician as he performed. After he was done, he approached me and gave me his information so he could pay me to use the photos I took on his website.<a href= "https://cecilsmagic.com/" target='_blank'> View his site here.</a></p>
    <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Tossup}
        alt={'Basket'}   fill /></div>
         <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Performance}
        alt={'Cuttree'}   fill /></div>
     <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Audience}
        alt={'throw'}   fill /></div>
    </div>
    </main>
    </>
  );
};
export default Portfolio;
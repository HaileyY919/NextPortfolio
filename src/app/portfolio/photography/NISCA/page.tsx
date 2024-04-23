import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Piano from '@/assets/JobPhotos/Piano.jpg';
import Audience from '@/assets/JobPhotos/Kick.jpg';
import Performance from '@/assets/JobPhotos/Kids.jpg';
import Tossup from '@/assets/JobPhotos/Reward.jpg'
import Screen from '@/assets/JobPhotos/Showingscreen.jpg'
const Portfolio = () => {
  return (
    <>
    <Header />
    <main className={styles.main}>
    <h1 className={styles.h1}>Cecil the Magician</h1>
    <div className={styles.image}>
      <Image className={styles.image}
        src={Piano}
        width={270}
        height={190} 
        alt={'Golf'}    /></div>
    <p className={styles.p}>While volunteering at the Community Library Network, I was taking photos of Cecil the Magician as he performed. After he was done, he approached me and gave me his information so he could pay me to use the photos I took on his website.<a href= "https://cecilsmagic.com/" target='_blank'> View his site here.</a></p>
    <div className={styles.displaygal}>
    <Image className={styles.imagegal}
        src={Tossup}
        width={370}
        height={270} 
        alt={'Basket'}    />
    <Image className={styles.imagegal}
        src={Performance}
        width={370}
        height={270} 
        alt={'Cuttree'}    />
     <Image className={styles.imagegal}
        src={Audience}
        width={370}
        height={270} 
        alt={'throw'}    />
      <Image className={styles.imagegal}
        src={Screen}
        width={370}
        height={270} 
        alt={'throw'}    /></div>
   
    </main>
    </>
  );
};
export default Portfolio;
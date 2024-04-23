import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Cecil from '@/assets/JobPhotos/Cecil.jpg';
import Potsticker from '@/assets/JobPhotos/Potsticker.jpg';
import Piano from '@/assets/JobPhotos/Piano.jpg';
import Basket from '@/assets/JobPhotos/Basket.jpg';
const Portfolio = () => {
  return (
    <>
    <Header />
    <main className={styles.main}>
    <h1 className={styles.h1}>Photography Work</h1>
    <div className={styles.display}>
    <div className={styles.displayWrapper}>
    <a href="./photography/magician" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Cecil} 
        alt={'Monogram'}  fill  />
         <div className={styles.displayTitle}>
          <h3>Cecil the Magician</h3>
        </div>
      </a>
      </div>
    <div className={styles.displayWrapper}>
    <a href="./photography/meltz" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Potsticker} 
        alt={'Monogram'}  fill  />
         <div className={styles.displayTitle}>
          <h3>Meltz Grilled Cheese</h3>
        </div>
      </a>
      </div>
    <div className={styles.displayWrapper}>
    <a href="./photography/NISCA" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Piano} 
        alt={'Monogram'}  fill  />
         <div className={styles.displayTitle}>
          <h3>NISCA Yearbook</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
    <a href="/portfolio/logos/discgolf" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Basket} 
        alt={'Monogram'}  fill  />
         <div className={styles.displayTitle}>
          <h3>Disc Golf Course</h3>
        </div>
      </a>
      </div>

      </div>
    </main>
    </>
  );
};
export default Portfolio;
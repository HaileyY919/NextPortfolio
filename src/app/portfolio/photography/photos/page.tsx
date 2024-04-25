import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Piano from "@/assets/Photography/sunset.jpg"
import Audience from '@/assets/Photography/flower.jpg';
import Performance from '@/assets/Photography/moss.jpg';
import Tossup from '@/assets/Photography/lake.jpg';
import Screen from '@/assets/Photography/mountain.jpg';
import Team from '@/assets/Photography/wave.jpg';
const Portfolio = () => {
  return (
    <>
    <Header />
    <main className={styles.main}>
    <h1 className={styles.h1}>Photos I am Proud of</h1>
    <div className={styles.display}>
    <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Piano}
        alt={'Golf'}  fill  /></div>
    <p className={styles.p}>These photos are a few of my favorites that I consider to show my best landscape photography. Along wtih graphic design, I enjoy learning how to work with cameras and be a good photographer. I took two photography classes in high school. In one I learned the importance of photojournalism, and the other was more focussed on learning the capabilities of the camera.</p>
    <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Tossup}
        alt={'Basket'}  fill  /></div>
    <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Team}
        alt={'Basket'}    fill/></div>
    <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Performance}
        alt={'Cuttree'}   fill /></div>
    <div className={styles.displayWrapper}>
     <Image className={styles.displayImage}
        src={Audience}
        alt={'throw'}    fill/></div>
    <div className={styles.displayWrapper}>
      <Image className={styles.displayImage}
        src={Screen}
        alt={'throw'}   fill /></div>
    </div>
    </main>
    </>
  );
};
export default Portfolio;
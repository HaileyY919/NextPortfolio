import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Bird from "@/assets/Weekly Exercises/Bird.png";
import Butterfly from "@/assets/Weekly Exercises/Butterfly.png";
import Coffee from "@/assets/Weekly Exercises/Coffee.png";
import Jelly from "@/assets/Weekly Exercises/WeeklyExercise6JELLYFISH_HYoung.png";
import Snow from "@/assets/Weekly Exercises/Snowflake.png";
const Portfolio = () => {
  return (
    <>
    <Header />
    <main className={styles.main}>
      <h1 className={styles.h1}>Illustrator Exercises</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Bird}
        width={250}
        height={250} 
        alt={'Monogram'}    /></div>
    <p className={styles.p}>Every week in my Adobe Illustrator Class we had weekly exercises assignment with what we had to create that week. These were quick illustrations that were focussed on utilizing tools we learned that week. These are my favorites from the semester.</p>
   <div className={styles.additionalimage}>
    <Image className={styles.additionalimage}
        src={Butterfly}
        width={250}
        height={250} 
        alt={'Monogram'}    />
        <Image className={styles.additionalimage}
        src={Coffee}
        width={250}
        height={250} 
        alt={'Monogram'}    />
        <Image className={styles.additionalimage}
        src={Jelly}
        width={200}
        height={260} 
        alt={'Monogram'}    />
        <Image className={styles.additionalimage}
        src={Snow}
        width={250}
        height={250} 
        alt={'Monogram'}    /></div>
    </main>
        </>
    );
};
export default Portfolio;
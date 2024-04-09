import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import DiscGolf from "@/assets/DiscGolf.png";
import Basket from "@/assets/JobPhotos/Basket.jpg";
import Cut from "@/assets/JobPhotos/Cuttree.jpg";
import Throw from "@/assets/JobPhotos/Throw.jpg";
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Disc Golf Course Logo</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={DiscGolf}
        width={270}
        height={190} 
        alt={'Golf'}    /></div>
    <p className={styles.p}>In my high school government class, we were presented with a project held by the city of Rathdrum, ID. The goal of the project was to improve a part of the city of our choosing. The class decided to all join together as one large team to expand the original Rathdrum Mountain Disc Golf Course. Before starting, we had to present this idea before the city council and be granted the funds, as we were not the only high school class competing. The budget of the project was $10,000, therefore we had to plan every aspect of the project to fit that budget. Our class was granted the opportunity to put our project into action and my class divided up the work through clearing the course area and installing baskets, with the help of Parks and Recreation. My job for this project was to create our logo that we used in our presentation, and later put on our 3D printed discs. I also took photos of our progress that were published in the CDA Press, link below.</p>
    <p className={styles.p2}>More info in <a href="https://cdapress.com/news/2022/oct/15/stem-academy-students-build-disc-golf-course-exten/" target='_blank'>CDA Press</a></p>
    <div className={styles.displaygal}>
    <Image className={styles.imagegal}
        src={Basket}
        width={370}
        height={270} 
        alt={'Basket'}    />
    <Image className={styles.imagegal}
        src={Cut}
        width={370}
        height={270} 
        alt={'Cuttree'}    />
     <Image className={styles.imagegal}
        src={Throw}
        width={370}
        height={270} 
        alt={'throw'}    /></div>
    </main>
    </div>
        </>
    );
};
export default Portfolio;
import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Piano from '@/assets/JobPhotos/Piano.jpg';
import Audience from '@/assets/JobPhotos/Kick.jpg';
import Performance from '@/assets/JobPhotos/Kids.jpg';
import Tossup from '@/assets/JobPhotos/Reward.jpg';
import Screen from '@/assets/JobPhotos/Showingscreen.jpg';
import Team from '@/assets/JobPhotos/Team.jpg';
import Tether from '@/assets/JobPhotos/Tetherball.jpg';
import Poster from '@/assets/JobPhotos/Poster.jpg';
import FLL from '@/assets/JobPhotos/FLL.jpg';
const Portfolio = () => {
  return (
    <>
    <Header />
    <main className={styles.main}>
    <h1 className={styles.h1}>North Idaho STEM Charter Academy Yearbook</h1>
    <div className={styles.display}>
    <div className={styles.displayWrapper}>
      <Image className={styles.displayImage}
        src={Piano}
        alt={'Golf'}  fill  /></div>
    <p className={styles.p}>At my high school, North Idaho STEM Charter Academy, students were able to take photos and submit them to the yearbook. Over the years I chose to take and submit photos to build my portfolio in photography. I took photos of kids at recess, working on projects, participating in music class, and competing in challenges. Below are a few of mine that were published in the yearbooks.</p>
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
        src={FLL}
        alt={'Cuttree'}   fill /></div>
    <div className={styles.displayWrapper}>
     <Image className={styles.displayImage}
        src={Audience}
        alt={'throw'}    fill/></div>
    <div className={styles.displayWrapper}>
    <Image className={styles.displayImage}
        src={Tether}
        alt={'throw'}    fill/></div>
    <div className={styles.displayWrapper}>
      <Image className={styles.displayImage}
        src={Screen}
        alt={'throw'}   fill /></div>
    <div className={styles.displayWrapper}>
      <Image className={styles.displayImage}
        src={Poster}
        alt={'throw'}   fill /></div>
    </div>
    </main>
    </>
  );
};
export default Portfolio;
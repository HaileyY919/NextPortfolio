import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Monogram from "@/assets/Monogram.png";
import Rosette from "@/assets/Recipe.png";
import Explore from "@/assets/Explore.png";
import GradCard from "@/assets/Graduation-Card.jpg";
import Album from "@/assets/albumcover.png";
import Bird from "@/assets/Weekly Exercises/Bird.png";
const Portfolio = () => {
  return (
    <>
    <Header />
    <main className={styles.main}>
    <h1 className={styles.h1}>Other Projects</h1>
    <div className={styles.display}>
    <div className={styles.displayWrapper}>
    <a href="/portfolio/OtherProjects/Monogram" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Monogram} 
        alt={'Monogram'}  fill  />
         <div className={styles.displayTitle}>
          <h3>Initial Monogram</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/OtherProjects/WeeklyExercises" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Bird}
        alt={'Monogram'}   fill />
         <div className={styles.displayTitle}>
          <h3>Illustrator exercises</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/OtherProjects/Recipe" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Rosette}
        alt={'Golf'}   fill />
         <div className={styles.displayTitle}>
          <h3>Rosette Cookie Recipe</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/OtherProjects/Explore" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Explore}
        alt={'Explore'}  fill  />
         <div className={styles.displayTitle}>
          <h3>Explore Magazine Cover</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/OtherProjects/GradCard" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={GradCard}
        alt={'Explore'}  fill  />
         <div className={styles.displayTitle}>
          <h3>Graduation Card</h3>
        </div>
      </a>
      </div>
      <div className={styles.displayWrapper}>
      <a href="/portfolio/OtherProjects/AlbumCover" className={styles.displayLink}>
      <Image className={styles.displayImage}
        src={Album}
        alt={'Explore'}   fill />
         <div className={styles.displayTitle}>
          <h3>Album Cover</h3>
        </div>
      </a>
      </div>
      </div>
    </main>
    </>
  );
};
export default Portfolio;
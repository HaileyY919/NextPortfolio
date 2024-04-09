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
    <div className={styles.body}>
    <main>
    <h1 className={styles.h1}>Other Projects</h1>
    <div className={styles.projects}>
    <a href="/portfolio/OtherProjects/Monogram" className={styles.displayLink}>
      <Image className={styles.image}
        src={Monogram}
        width={250}
        height={250} 
        alt={'Monogram'}    />
         <div className={styles.displayTitle}>
          <h3>Initial Monogram</h3>
        </div>
      </a>
      <a href="/portfolio/OtherProjects/WeeklyExercises" className={styles.displayLink}>
      <Image className={styles.image}
        src={Bird}
        width={250}
        height={250} 
        alt={'Monogram'}    />
         <div className={styles.displayTitle}>
          <h3>Illustrator exercises</h3>
        </div>
      </a>
      <a href="/portfolio/OtherProjects/Recipe" className={styles.displayLink}>
      <Image className={styles.image}
        src={Rosette}
        width={260}
        height={320} 
        alt={'Golf'}    />
         <div className={styles.displayTitle}>
          <h3>Rosette Cookie Recipe</h3>
        </div>
      </a>
      <a href="/portfolio/OtherProjects/Explore" className={styles.displayLink}>
      <Image className={styles.image}
        src={Explore}
        width={260}
        height={320} 
        alt={'Explore'}    />
         <div className={styles.displayTitle}>
          <h3>Explore Magazine Cover</h3>
        </div>
      </a>
      <a href="/portfolio/OtherProjects/GradCard" className={styles.displayLink}>
      <Image className={styles.image}
        src={GradCard}
        width={220}
        height={280} 
        alt={'Explore'}    />
         <div className={styles.displayTitle}>
          <h3>Graduation Card</h3>
        </div>
      </a>
      <a href="/portfolio/OtherProjects/AlbumCover" className={styles.displayLink}>
      <Image className={styles.image}
        src={Album}
        width={280}
        height={280} 
        alt={'Explore'}    />
         <div className={styles.displayTitle}>
          <h3>Album Cover</h3>
        </div>
      </a>
      </div>
    </main>
    </div>
    </>
  );
};
export default Portfolio;
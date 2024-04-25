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
    <div className={styles.image}>
      <Image className={styles.image}
        src={Piano}
        width={370}
        height={270} 
        alt={'Golf'}    /></div>
    <p className={styles.p}>At my high school, North Idaho STEM Charter Academy, students were able to take photos and submit them to the yearbook. Over the years I chose to take and submit photos to build my portfolio in photography. I took photos of kids at recess, working on projects, participating in music class, and competing in challenges. Below are a few of mine that were published in the yearbooks.</p>
    <div className={styles.displaygal}>
    <Image className={styles.imagegal}
        src={Tossup}
        width={370}
        height={270} 
        alt={'Basket'}    />
    <Image className={styles.imagegal}
        src={Team}
        width={370}
        height={270} 
        alt={'Basket'}    />
    <Image className={styles.imagegal}
        src={Performance}
        width={370}
        height={270} 
        alt={'Cuttree'}    />
     <Image className={styles.imagegal}
        src={FLL}
        width={380}
        height={270} 
        alt={'Cuttree'}    />
     <Image className={styles.imagegal}
        src={Audience}
        width={370}
        height={270} 
        alt={'throw'}    />
    <Image className={styles.imagegal}
        src={Tether}
        width={370}
        height={270} 
        alt={'throw'}    />
      <Image className={styles.imagegal}
        src={Screen}
        width={370}
        height={270} 
        alt={'throw'}    />
      <Image className={styles.imagegal}
        src={Poster}
        width={370}
        height={270} 
        alt={'throw'}    />
    </div>
    </main>
    </>
  );
};
export default Portfolio;
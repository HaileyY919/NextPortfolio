import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Explore from "@/assets/Explore.png"
import Mockup from "@/assets/MagazineMockup.jpg"
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Explore Magazine Cover</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Explore}
        width={280}
        height={400} 
        alt={'POL'}    /></div>
    <p className={styles.p}>This magazine cover was one of my Photoshop class assignments where we essentially had free rain over what we made so long as we used the &quot;explore&quot; title with that font. We were allowed up to 5 instances of AI generated content and had to make something captivating and creative. I used AI to generate the shark and a few other creatures throughout. My favorite part in creating this magazine cover was making my Anglerfish look like it is lighting up the text above it and it fading out the further from the fish the text is.</p>
    <div className={styles.additionalimage}>
    <Image className={styles.additionalimage}
        src={Mockup}
        width={360}
        height={300} 
        alt={'Golf'}    /></div>
    </main>
    </div>
        </>
    );
};
export default Portfolio;
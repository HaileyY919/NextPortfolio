import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Rosette from "@/assets/Recipe.png";
import Card from "@/assets/RecipeCard.png";
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Rosette Cookie Recipe</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Rosette}
        width={260}
        height={320} 
        alt={'Golf'}    /></div>
    <p className={styles.p}>Rosette Cookies are a type of cookie my grandma and I always make around Christmas. This tradition prompted me to make her a nice recipe page that we can use. I knew she would love this and when I gave it to her, she was super excited, so I am glad I took the time to do that for her. The boarder is made up of cookies, and the other elements I made are used in making the cookies.</p>
    <p className={styles.p2}>The second part to this, was to create a smaller recipe card that brings in supplies needed, and has simplified instructions.</p>
    <Image className={styles.additionalimage}
        src={Card}
        width={260}
        height={200} 
        alt={'Golf'}    />
    </main>
    </div>
        </>
    );
};
export default Portfolio;
import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import BookClub from "@/assets/Bookclub.png";
import Bookmark from "@/assets/Bookmark.png";
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Book Club Flyer</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={BookClub}
        width={230}
        height={330} 
        alt={'Book'}    /></div>
    <p className={styles.p}>The high school I went to does not have many clubs. My best friend decided to change that by creating a Book Club. She asked me to create a poster for her to hang around the school to advertise the club. I did not make the book club logo, but I used the logos coloring in the poster to keep the two elements cohesive.</p>
    <p className={styles.p2}>I also made some bookmarks that we handed out to club members.</p>
    <div className={styles.additionalimage}>
    <Image 
        src={Bookmark}
        width={260}
        height={320} 
        alt={'Book'}    /></div>
    </main>
    </div>
        </>
    );
};
export default Portfolio;
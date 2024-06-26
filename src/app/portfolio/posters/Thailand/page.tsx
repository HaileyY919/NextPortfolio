import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Travel from "@/assets/TravelPoster.png"
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Thailand Travel Poster</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Travel}
        width={280}
        height={400} 
        alt={'POL'}    /></div>
    <p className={styles.p}>For an assignment we were given the opportunity to create a travel poster to anywhere we wanted, whether real or fictional. I chose to have my poster be of Thailand because my family has been talking about travelling there as is. I chose to create elements that the country is known for such as the Tuk-Tuk, elephant, historical monuments, and more. I chose to have the outline of the country&lsquo;s shape be the colors of their flag as a way to incorporate that somehow.</p>
    </main>
    </div>
        </>
    );
};
export default Portfolio;
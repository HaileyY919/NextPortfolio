import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import BWlogo from "@/assets/MyBranding/Logos.png";
import BCMockup from "@/assets/MyBranding/BCMockup.png";
import Letterhead from "@/assets/MyBranding/Letterhead.png";
import TYCard from "@/assets/MyBranding/TY Card.png";
import Envelope from "@/assets/MyBranding/Envelope.png";

const Portfolio = () => {
  return (
    <>
     <Header />
    <div className={styles.body}>
    <main>
    <h1 className={styles.h1}>My Business Package</h1>
    <div className={styles.bpackage}>
      <Image className={styles.image}
        src={BWlogo}
        width={500}
        height={550} 
        alt={'BW'}    />
      <Image className={styles.image}
        src={BCMockup}
        width={420}
        height={400} 
        alt={'Mockup'}    />
      <Image className={styles.image}
        src={Letterhead}
        width={400}
        height={500} 
        alt={'Letterhead'}    />
      <Image className={styles.image}
        src={TYCard}
        width={355}
        height={400} 
        alt={'TY'}    />
      <Image className={styles.image}
        src={Envelope}
        width={400}
        height={200} 
        alt={'Envelope'}    />
        </div>
      <p className={styles.p}>In creating my own business package I decided to create business cards, a letterhead, envelope, and thank you card. I wanted to create these things with common colors and design elements that related to my logo in some way. So I decided on the colors of black, white, and purple.</p>
    </main>
    </div>
    </>
  );
};
export default Portfolio;
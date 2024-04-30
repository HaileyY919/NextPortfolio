import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import BWlogo from "@/assets/MyBranding/BW-Logo.png";
import BCMockup from "@/assets/MyBranding/BCMockup.png";
import Letterhead from "@/assets/MyBranding/Letterhead.png";
import TYCard from "@/assets/MyBranding/TY Card.png";
import Envelope from "@/assets/MyBranding/Envelope.png";

const Portfolio = () => {
  return (
    <>
     <Header />
    <main>
    <h1 className={styles.h1}>My Business Package</h1>
    <div className={styles.bpackage}>
      <div className={styles.displayWrapper}>
      <Image className={styles.image}
        src={BWlogo}
        alt={'BW'}   fill />
      </div>
      <div className={styles.displayWrapper}>
      <Image className={styles.image}
        src={BCMockup}
        alt={'Mockup'}  fill  />
      </div>
      <div className={styles.displayWrapper}>
      <Image className={styles.image}
        src={Letterhead}
        alt={'Letterhead'}  fill  />
      </div>
      <div className={styles.displayWrapper}>
      <Image className={styles.image}
        src={TYCard}
        alt={'TY'}   fill />
      </div>
      <div className={styles.displayWrapper}>
      <Image className={styles.image}
        src={Envelope}
        alt={'Envelope'}  fill  />
        </div>
        </div>
      <p className={styles.p}>In creating my own business package I decided to create business cards, a letterhead, envelope, and thank you card. I wanted to create these things with common colors and design elements that related to my logo in some way. So I decided on the colors of black, white, and purple.</p>
    </main>
    </>
  );
};
export default Portfolio;
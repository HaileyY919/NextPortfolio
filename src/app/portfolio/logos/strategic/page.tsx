import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import StrategicIllusions from "@/assets/StrategicIllusions.png";
import BusinessCard from "@/assets/OnePage/BussinessCard.png";
import Logos from "@/assets/OnePage/Logos.png";
import Store from "@/assets/OnePage/Store.png";
import Ticket from "@/assets/OnePage/Ticket.png";
import TYCard from "@/assets/OnePage/TYCard.png";
import Hat from "@/assets/OnePage/Hat.png";
import Letterhead from "@/assets/OnePage/Letterhead.png";
import Envelope from "@/assets/OnePage/Envelope.png";
const Portfolio = () => {  
return (
    <>
    <Header />
    <main className={styles.main}>
      <h1 className={styles.h1}>Strategic Illusions Logo</h1>
      <div className={styles.display}>
      <div className={styles.displayWrapper}>
      <Image className={styles.displayImage}
        src={StrategicIllusions}
        alt={'Golf'} fill/></div>
         <p className={styles.p}>This project logo was an experience to say the least. My teacher had us first draw out 99 pictogram images of whatever came to mind. Then we had to choose 9 of our favorite sketches to re-draw but larger. After drawing the 9, we had to pick 6, then combine those 6 into 3. With those 3 combined sketches, we got to pick our favorite that would be the final.</p> 
         <p className={styles.p2}>The final sketches I chose to combine were a magic hat and cards. I was lucky these two went together nicely to create essentially a magic logo. With that logo, I then got to create a fake business. Once I determined that my business would be a magic shop/theater, I was able to continue with the further areas of the assignment to create a business package.</p> 
      <div className={styles.displayWrapper}>
      <Image className={styles.displayImage}
        src={BusinessCard}
        alt="BC" fill/></div>
      <div className={styles.displayWrapper}>
      <Image className={styles.displayImage}
        src={Logos}
        alt="logos" fill/></div>
      <div className={styles.displayWrapper}>
      <Image className={styles.displayImage}
        src={Store}
        alt="Store" fill/></div>
      <div className={styles.displayWrapper}>
        <Image className={styles.displayImage}
        src={Ticket}
        alt="Ticket" fill/></div>
        <div className={styles.displayWrapper}>
        <Image className={styles.displayImage}
        src={TYCard}
        alt="TY" fill/></div>
        <div className={styles.displayWrapper}>
        <Image className={styles.displayImage}
        src={Hat}
        alt="Hat"fill/></div>
        <div className={styles.displayWrapper}>
        <Image className={styles.displayImage}
        src={Letterhead}
        alt="LH" fill/></div>
        <div className={styles.displayWrapper}>
        <Image className={styles.displayImage}
        src={Envelope}
        alt="Envelope" fill/></div>
      </div>
      </main>
          </>
    );
};
export default Portfolio;
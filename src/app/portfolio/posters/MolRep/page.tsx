import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import MolRep from "@/assets/MolecularReptile.png";
import Banner from "@/assets/MolRep-Banner.png";
const Portfolio = () => {
  return (
    <>
    <Header />
    <div className={styles.body}>
    <main className={styles.main}>
      <h1 className={styles.h1}>Molecular Reptile Poster & Banner</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={MolRep}
        width={240}
        height={290} 
        alt={'Book'}    /></div>
    <p className={styles.p}>My dad owns his own business called Molecular Reptile where he breeds and sells snakes and other reptiles. For one of his reptile shows he wanted me to make him a poster he could put on his booth table. He wanted his logo to be in the center and have a few of his snake pictures featured in it. This poster is what I created. Later on, as my skills improved he asked me to make him a full sized banner. He wanted the banner to essentially be a larger version of the table-top poster. Bellow is the finished product.</p>
    <div className={styles.additionalimage}>  
      <Image 
        src={Banner}
        width={310}
        height={620} 
        alt={'Book'}    /></div>
    </main>
    </div>
       </>
    );
};
export default Portfolio;
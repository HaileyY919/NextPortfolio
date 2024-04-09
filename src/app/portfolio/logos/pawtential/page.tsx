import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Pawtential from "@/assets/Pawtential.png";
const Portfolio = () => {
  return (
    <>
<Header />
    <div className={styles.body}>
    <main>
      <h1 className={styles.h1}>Pawtential Logo</h1>
      <div className={styles.image}>
      <Image className={styles.image}
        src={Pawtential}
        width={355}
        height={80} 
        alt={'Paw'}    /></div>
          
      <p className={styles.p}>I made this logo for my senior project. My senior project class took place online as an entrepreneurship class. We did the project in a group to make it easier to divide up the workload of making a business. Our business is called Pawtential. We are essentially a social media marketing agency for pet products. My group granted me the opportunity to create our logo after we decided our name and color scheme.</p>
      </main>
       </div>
          </>
    );
};
export default Portfolio;
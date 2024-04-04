import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import Insta from '@/assets/Icons/Insta.png';
import FB from '@/assets/Icons/Facebook.png';
import Linkdin from '@/assets/Icons/Link.png';
import Header from '@/components/global/Header';
const Home = () => {
  return (
      <>
      <Header />
    <div className={styles.body}>
      <main>
      <h1 className={styles.h1}>Meet the Designer</h1>
        <div className={styles.aboutText}>
          <div className={styles.MyPhoto}><img src="Me.png" alt="Hailey" width="230px" height="300px" /></div>
          <h3 className={styles.h3}>How I got Started</h3>
          <p className={styles.p}>Hello and welcome to my Portfolio. My name is Hailey Young and I am graphic and web design student. When I began my high school career, I had no clue what I wanted to do after I graduated. That’s when I took my first photography class, which then led to me taking another and also enrolling in graphic design courses. During these courses, my teacher set us up with opportunities to work with local businesses and provide them with logos, brochures, business cards, etc. These meetings helped me realize that graphic design is something I enjoy and want to pursue.</p>
          <p className={styles.p}>I am now enrolled in North Idaho College’s Graphic and Web Design program where I have been working towards an Associate of Applied Science. The program has been an amazing experience where I have been given the chance to learn more of what the Adobe programs have to offer.</p>
          <p className={styles.p}>I have taken what I learned in my photography and graphic design classes with me into other areas of my life as well and used them to my creative advantage.</p>
        </div>
        <h3 className={styles.h3}>What I Do</h3>
        <div className={styles.skills}>
          <div className={styles.graphics}><h2 className={styles.h2}>Graphic Design</h2><a href="/portfolio"><img src="GDicon.png" alt="Icon" width="254px" height="214px" /></a></div>
          <div className={styles.graphics}><a href="/portfolio"><img src="Camera.png" alt="Camera" width="200px" height="180px" /></a><h2 className={styles.h2}>Photography</h2></div>
        </div>
        </main>
      <footer className={styles.footer}>
      <h2 className={styles.h3}>Also Fine me On</h2>
      <div className={styles.icons}>
      <a href="https://www.instagram.com/haileys_design_work/" target="_blank">
      <Image className={styles.icon}
        src={Insta}
        alt={'BC'}
        width= {65}
        height= {60}></Image></a>
    <a href="https://www.facebook.com/haileys.design.work" target="_blank">
      <Image className={styles.icon}
        src={FB}
        alt={'BC'}
        width= {65}
        height= {60}></Image></a>
    <a href="https://www.linkedin.com/in/hailey-young-a2460a283" target="_blank">
      <Image className={styles.icon}
        src={Linkdin}
        alt={'BC'}
        width= {65}
        height= {65}></Image></a>
        </div>
      </footer>
      </div>
      </>
  );
};
export default Home;
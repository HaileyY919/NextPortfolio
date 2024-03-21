import styles from './page.module.css';
import React from 'react';
import Image from 'next/image';
import HaileysDesign from "@/assets/MyBranding/HaileysDesign.png";
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
    <><div className={styles.header}>
          <nav className={styles.nav}>
              <ul className={styles.navUl}>
                  <a className={styles.logo} href="/"><Image src={HaileysDesign} width={250} height={100} alt={'Hailey'} /></a>
                  <li className={styles.navLi}><a href="/">About Me</a></li>
                  <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/logos">Logos</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/posters">Posters</a></li>
                  <li className={styles.navLismall}><a href="/portfolio/OtherProjects">Other Projetcs</a></li>
                  <li className={styles.navLi}><a href="/Contact">Contact</a></li>
              </ul>
          </nav>
      </div>
      <h1 className={styles.h1}>Strategic Illusions Logo</h1>
      <div className={styles.image}>
      <Image
        src={StrategicIllusions}
        width={200}
        height={250} 
        alt={'Golf'}/></div>
      <p className={styles.p}>This project logo was an experience to say the least. My teacher had us first draw out 99 pictogram images of whatever came to mind. Then we had to choose 9 of our favorite sketches to re-draw but larger. After drawing the 9, we had to pick 6, then combine those 6 into 3. With those 3 combined sketches, we got to pick our favorite that would be the final.</p> 
      <p className={styles.p}>The final sketches I chose to combine were a magic hat and cards. I was lucky these two went together nicely to create essentially a magic logo. With that logo, I then got to create a fake business. Once I determined that my business would be a magic shop/theater, I was able to continue with the further areas of the assignment to create a business package.</p> 
      <div className={styles.display}>
      <Image className={styles.photo}
        src={BusinessCard}
        alt="BC"
        width={600}
        height={300}/>
      <Image className={styles.photo}
        src={Logos}
        alt="logos"
        width={400}/>
      <Image className={styles.photo}
        src={Store}
        alt="Store"
        width={500}/>
        <Image className={styles.photo}
        src={Ticket}
        alt="Ticket"/>
        <Image className={styles.photo}
        src={TYCard}
        alt="TY"
        width={300}/>
        <Image className={styles.photo}
        src={Hat}
        alt="Hat"/>
        <Image className={styles.photo}
        src={Letterhead}
        alt="LH"
        width={400}/>
        <Image className={styles.photo}
        src={Envelope}
        alt="Envelope"
        height={200}
        width={500}/>
      </div>
          </>
    );
};
export default Portfolio;

"use client";

import styles from "@/app/page.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    console.log(pathname);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a className={styles.logo} href="/"><Image src="/HaileysDesign.png" alt="Logo" width="250" height="90" /></a>
                <button className={styles.hamBtn} onClick={openMenu}>Menu</button>
                <ul className={styles.navUl}>
                <li className={styles.navLi}><a href="/">About Me</a></li>
                <li className={styles.navLi}><a href="/portfolio">Portfolio</a>
                    <ul className={pathname.startsWith("/portfolio") ? styles.navSubOpen : styles.navSubClose}>
                        <li className={styles.navLismall}><a href="/portfolio/logos">Logos</a></li>
                        <li className={styles.navLismall}><a href="/portfolio/posters">Posters</a></li>
                        <li className={styles.navLismall}><a href="/portfolio/OtherProjects">Other Projetcs</a></li>
                        <li className={styles.navLismall}><a href="/portfolio/photography">Photography</a></li>
                    </ul>
                </li>
                <li className={styles.navLi}><a href="/Contact">Contact</a></li>
                </ul>
            </nav>

            {open ? (
                <nav className={styles.mobileNav}>
                <button className={styles.closeBtn} onClick={closeMenu}>Close Menu</button>   
                <ul className={styles.mobileNavUl}>
                    <li className={styles.navLi}><a href="/">About Me</a></li>
                    <li className={styles.navLi}><a href="/portfolio">Portfolio</a>
                        <ul className={pathname.startsWith("/portfolio") ? styles.navSubOpen : styles.navSubClose}>
                            <li className={styles.navLismall}><a href="/portfolio/logos">Logos</a></li>
                            <li className={styles.navLismall}><a href="/portfolio/posters">Posters</a></li>
                            <li className={styles.navLismall}><a href="/portfolio/OtherProjects">Other Projetcs</a></li>
                        </ul>
                    </li>
                     <li className={styles.navLi}><a href="/Contact">Contact</a></li>
                </ul>
                </nav>
            ) : null}
           
        </header>
    );
}

export default Header;


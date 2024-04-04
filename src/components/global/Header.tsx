
"use client";

import styles from "@/app/page.module.css";
import { useState } from "react";

const Header = () => {

    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a className={styles.logo} href="/"><img src="HaileysDesign.png" alt="Logo" width="250px" height="90px" /></a>
                <button className={styles.hamBtn} onClick={openMenu}>Menu</button>
                <ul className={styles.navUl}>
                <li className={styles.navLi}><a href="/">About Me</a></li>
                <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
                <li className={styles.navLi}><a href="/Contact">Contact</a></li>
                </ul>
            </nav>

            {open ? (
                <nav className={styles.mobileNav}>
                <button className={styles.closeBtn} onClick={closeMenu}>Close Menu</button>   
                <ul className={styles.mobileNavUl}>
                    <li className={styles.navLi}><a href="/">About Me</a></li>
                    <li className={styles.navLi}><a href="/portfolio">Portfolio</a></li>
                    <li className={styles.navLi}><a href="/Contact">Contact</a></li>
                    </ul>
                </nav>
            ) : null}
           
        </header>
    );
}

export default Header;


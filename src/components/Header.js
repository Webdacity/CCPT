import React from 'react';
import { Link } from "gatsby";

// Styles, Images, Fonts
import styles from "../styles/components/header.module.scss";
import NavbarLogo from "../assets/images/logos/ccpt/logo-full.svg";

export default function Header() {

    const handleNavClick = () => {
        const nav = document.getElementById("nav");
        nav.classList.toggle("mobile-nav-active")

        const body = document.getElementsByTagName("BODY")[0];
        body.classList.toggle("no-scroll");
    }

    return (
        <div>
            <header>
                <nav id="nav">
                    <Link to="/" className={styles.logo}>
                        <img src={NavbarLogo} alt="CCPT Navbar Logo" />
                    </Link>
                    <div className={`inner ${styles.inner}`} >
                        <div className={`navbar-close ${styles.navbarClose}`} onClick={handleNavClick}>
                            &#10005;
                        </div>
                        <div className={styles.list}>
                            <Link to="/" className={styles.item}>
                                Home
                            </Link>
                            <Link to="/about" className={styles.item}>
                                About
                            </Link>
                            <Link to="/services" className={styles.item}>
                                Services
                            </Link>
                            <Link to="/gallery" className={styles.item}>
                                Gallery
                            </Link>
                            <Link to="/projects" className={styles.item}>
                                Projects
                            </Link>
                            <Link to="/contact" className={styles.item}>
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className={`mobile-icon ${styles.mobileIcon}`} onClick={handleNavClick}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

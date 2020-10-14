import React from 'react';
import { Link } from "gatsby";

// Styles, Images, Fonts
import styles from "../styles/components/header.module.scss"
import NavbarLogo from "../assets/images/logos/ccpt/logo-full.svg";

export default function Header() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/" className={styles.logo}>
                        <img src={NavbarLogo} alt="Webdacity Navbar Logo" />
                    </Link>
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
                        <Link to="/contact" className={styles.item}>
                            Contact
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

import React from 'react';
import { Link } from "gatsby";

// Styles, Images, Fonts
import styles from "../styles/components/footer.module.scss"
import FooterLogo from "../assets/images/logos/ccpt/logo-footer.svg";
import "../assets/fonts/ccpt/css/ccpt.css"


export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.info}>
                        <img src={FooterLogo} alt="CCPT Footer Logo" />
                        <h5>Cape Control Panel Technology</h5>
                        <p>CCPT is a young and dynamic company offering turnkey solutions for specialized power and control panel building.</p>
                    </div>
                    <div className={styles.nav}>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/services">
                            Services
                        </Link>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </div>
                    <div className={styles.contact}>
                        <a href="tel:0682589175">
                            <i className="icon-phone"></i>
                            068 258 9175
                        </a>
                        <a href="mailto:finance@ccptech.co.za">
                            <i className="icon-paper-plane"></i>
                            finance@ccptech.co.za
                        </a>
                        <a href="https://goo.gl/maps/4vf5TWhTquBbXe2BA" target="blank">
                            <i className="icon-pin"></i>
                        5 Buketraube Crescent, Saxenburg <br />
                            Business Park 2, Blackheath, 7580
                        </a>
                    </div>
                </div>
                <div className={styles.copy}>
                    <p>© 2020 - CCPT (PTY) LTD.</p>
                    <p>Design &amp; Development by <a href="https://webdacity.dev">Webdacity</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

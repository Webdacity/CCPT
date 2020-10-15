import React from 'react';

// Styles, Images, Fonts
import styles from "../styles/components/section.module.scss";
import "../assets/fonts/ccpt/css/ccpt.css";

export default function Section(props) {

    const themeClass = props.theme ? styles.dark : "";

    const headingTheme = props.headingTheme === "alt" ? "icon-hexagon-outline" : "icon-hexagon";

    return (
        <section className={themeClass}>
            <div className="container" >
                <div className={styles.sectionHeading}>
                    <i className={headingTheme}></i>
                    <h1>{props.headingBig}</h1>
                    <i className={headingTheme}></i>
                </div>
                {props.children}
            </div>
        </section>
    )
}

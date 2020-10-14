import React from 'react';

// Styles, Images, Fonts
import styles from "../styles/components/section.module.scss"
import "../assets/fonts/ccpt/css/ccpt.css"


export default function Section(props) {

    return (
        <section>
            <div className="container">
                <div className={styles.sectionHeading}>
                    <i className="icon-hexagon"></i>
                    <h1>{props.headingBig}</h1>
                    <i className="icon-hexagon"></i>
                </div>
                {props.children}
            </div>
        </section>
    )
}

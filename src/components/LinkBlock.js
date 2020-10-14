import React from 'react';
import { Link } from "gatsby";
import classNames from "classnames"

// Styles, Images, Fonts
import styles from "../styles/components/link-block.module.scss"

export default function LinkBlock(props) {

    const blockDark = classNames({
        'dark': props.dark,
    });

    return (
        <div className="container">
            <div className={`${blockDark} ${styles.block}`}>
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <p>
                            {props.children}
                        </p>
                    </div>
                    <div className={styles.link}>
                        <button className="button white light-text">
                            <Link to={props.linkTo}>
                                {props.linkText}
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </ div>
    )
}

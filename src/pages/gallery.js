import React from 'react';
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout";
import LinkBlock from "../components/LinkBlock";
import Section from "../components/Section";

// Styles, Images, Fonts
import styles from "../styles/pages/gallery.module.scss"

export default function gallery() {

    const Gallery = (props) => {
        let rows = [];
        for (let i = 1; i <= 21; i++) {
            rows.push(
                <div key={i} className={styles.image}>
                    <img src={require(`../assets/images/gallery/${i}.jpg`)} />
                </div>
            )
        }
        return rows
    }

    return (
        <Layout
            pageMeta={{
                title: "Gallery | CCPT",
                description: "View the previous work we've done.",
                canonical: "/gallery"
            }}
        >


            <Section headingBig="Our previous work">
                <div className={styles.grid}>
                    <Gallery />
                </div>
            </Section>

            <LinkBlock
                linkTo="/contact"
                linkText="Contact Us"
            >
                Looking for experienced engineers for your next control panel project?
            </LinkBlock>
        </Layout>
    )
}

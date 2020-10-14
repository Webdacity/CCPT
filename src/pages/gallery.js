import React from 'react';

// Components
import Layout from "../components/Layout";
import LinkBlock from "../components/LinkBlock";
import Section from "../components/Section";

// Styles, Images, Fonts
import styles from "../styles/pages/gallery.module.scss"

export default function gallery() {
    return (
        <Layout
            pageMeta={{
                title: "Gallery | CCPT",
                description: "CCPT offers turnkey solutions for specialized power and control panel building.",
                canonical: "/gallery"
            }}
        >


            <Section headingBig="Our previous work">

            </Section>

        </Layout>
    )
}

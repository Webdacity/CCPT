import React from 'react';
import { graphql } from "gatsby"

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
                <div className="grid">
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

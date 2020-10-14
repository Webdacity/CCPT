import React from 'react';

// Components
import Layout from "../components/Layout";
import LinkBlock from "../components/LinkBlock";
import Section from "../components/Section";


// Styles, Images, Fonts
import styles from "../styles/pages/services.module.scss"

export default function services() {
    return (
        <Layout
            pageMeta={{
                title: "Services | CCPT",
                description: "CCPT offers turnkey solutions for specialized power and control panel building.",
                canonical: "/services"
            }}
        >

            <Section headingBig="Turnkey Projects">

            </Section>


            <LinkBlock
                linkTo="/contact"
                linkText="Contact Us"
            >
                Looking for experienced engineers for your next control panel project?
            </LinkBlock>

            <Section headingBig="Service Industries">

            </Section>


        </Layout >
    )
}

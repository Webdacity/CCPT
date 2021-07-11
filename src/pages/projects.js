import React from 'react';

// Components
import Layout from "../components/Layout";
import LinkBlock from "../components/LinkBlock";
import Section from "../components/Section";

// Styles, Images, Fonts
import styles from "../styles/pages/projects.module.scss";

// Projects Data
import ProjectsData from "../../src/data/projects.json";

export default function projects({ data }) {

    return (
        <Layout
            pageMeta={{
                title: "Projects | CCPT",
                description: "Learn more about the projects we've completed.",
                canonical: "/projects"
            }}
        >

            <Section headingBig="Past Projects">
                <ul className={styles.grid}>
                    {ProjectsData.map((project, index) => (
                        <li key={index}>
                            <i className="icon-square"></i>
                            {project}
                        </li>
                    ))}
                </ul>
            </Section>

            <LinkBlock
                linkTo="/services"
                linkText="View Our Services"
                dark="true"
            >
                We build control panels and offer turnkey projects in all industries.
            </LinkBlock>
        </Layout>
    )
}


import React from 'react';

// Components
import Layout from "../components/Layout";
import LinkBlock from "../components/LinkBlock";
import Section from "../components/Section";
import ServiceBlock from "../components/ServiceBlock"


// Styles, Images, Fonts
import styles from "../styles/pages/services.module.scss"

// Data
import ServicesData from "../data/services.json"
import IndustryData from "../data/industries.json"

export default function services() {

    const SubStationGallery = () => {
        let images = [];
        for (let i = 1; i <= 3; i++) {
            images.push(
                <div key={i} className={styles.image}>
                    <img src={require(`../assets/images/services/substations/${i}.jpg`)} />
                </div>
            )
        }
        return images
    }

    return (
        <Layout
            pageMeta={{
                title: "Services | CCPT",
                description: "View which services we provide and the industries we service.",
                canonical: "/services"
            }}
        >

            <Section headingBig="Turnkey Projects">
                <div className={styles.turnkeyGrid}>
                    {ServicesData.map((service, index) => {
                        return <ServiceBlock key={index}
                            data={service}
                        />
                    })}
                </div>
            </Section>

            <LinkBlock
                linkTo="/projects"
                linkText="Past Projects"
            >
                Curious to see which big projects we've completed in the past?
            </LinkBlock>


            <Section headingBig="Substation Design and Installation">
                <div className={styles.substations}>
                    <p>Substations are the key assets in a powers system throughout generation, transmission, sub-transmission and distribution. CCPT supplies substation design solutions that efficiently support the reliable supply of power for various voltage levels . CCPT’s substation design department delivers comprehensive and innovative design solutions aligned to international standards. We aim to be the next power solutions provider in SADC as well as the entire continent and the planet as a whole, ushering the age of smart grids.</p>
                    <div className={styles.images}>
                        <SubStationGallery />
                    </div>
                </div>
            </Section>


            <LinkBlock
                linkTo="/contact"
                linkText="Contact Us"
            >
                Looking for experienced engineers for your next control panel project?
            </LinkBlock>


            <Section headingBig="Service Industries" headingTheme="alt">
                <div className={styles.services}>
                    <h5>
                        We build control panels for all industries:
                    </h5>
                    <ul>
                        {IndustryData.map((industry, index) => (
                            <li key={index}>
                                <i className="icon-square"></i>
                                {industry}
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

        </Layout >
    )
}

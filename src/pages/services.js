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
                <div className={styles.turnkeyGrid}>
                    {ServicesData.map((service, index) => {
                        return <ServiceBlock key={index}
                            data={service}
                        />
                    })}
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
                        <li>
                            <i className="icon-square"></i>
                            Mining: Land and Sea
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Petro Chemical
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Waste Water
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Water Treatment
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Energy Saving
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Pharmaceutical
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Power Generation
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Packaging
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Steel
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Food &amp; Beverage Manufacturers
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            HVAC systems(C.O Extraction, Pressurization, BMS)
                        </li>
                    </ul>
                </div>
            </Section>


        </Layout >
    )
}

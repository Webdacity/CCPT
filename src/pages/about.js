import React from 'react';
import { graphql } from "gatsby";
import Img from 'gatsby-image';


// Components
import Layout from "../components/Layout";
import LinkBlock from "../components/LinkBlock";
import Section from "../components/Section";

// Styles, Images, Fonts
import styles from "../styles/pages/about.module.scss";


export default function about({ data }) {

    return (
        <Layout
            pageMeta={{
                title: "About | CCPT",
                description: "Learn more about our history and our team.",
                canonical: "/about"
            }}
        >

            <Section headingBig="Who are We?">
                <div className={styles.story}>
                    <p>CCPTECH was founded in 2018. We are a young and dynamic company with years of experience
                    building specialized power and control panels.
                    <span></span>
                    Cape Control Panel Technology manufactures a full range of electrical panels for almost any application,
                    we also specialize in electrical reticulation for industrial and commercial projects.
                    <span></span>
                    This means supply and installation of LV and MV cables, cableways , transformers, VSDs, Motor Control Centres,
                    Distribution Boards, MV switchgear, and PLC Panels. We also do testing and commissioning of the above
                    and issue Certificates of Compliance.
                    </p>
                </div>
                <div className={styles.experience}>
                    <h5>
                        We have years of experience in:
                    </h5>
                    <ul>
                        <li>
                            <i className="icon-square"></i>
                            HVAC controls and electrical
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Systems Integration
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Process Automation
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Factory Automation
                        </li>
                        <li>
                            <i className="icon-square"></i>
                            Electrical Maintenance and Instrument Installation.
                        </li>
                    </ul>
                </div>
            </Section>

            <LinkBlock
                linkTo="/services"
                linkText="View Our Services"
                dark="true"
            >
                We build control panels and offer turnkey projects in all industries.
            </LinkBlock>

            <Section headingBig="Our Team" headingTheme="alt">
                <div className={styles.teamContainer}>

                    <div className={styles.teamGrid}>
                        <div className={styles.teamImage}>
                            <Img fluid={data.casper.childImageSharp.fluid}
                                style={{ width: "90%" }}
                            />
                        </div>
                        <div className={styles.teamText}>
                            <h2><span>Casper</span> Ncube</h2>
                            <h5>Electrical Engineer</h5>
                            <p>
                                Member of Engineers Australia as well as South African Institute of Electrical Engineers.
                                <span></span>
                                5 Years experience in Power and control engineering systems as well as Clinical instrumentation.
                                <span></span>
                                Responsible for Project management, system design, Panel Building including design, procurement, consultation, testing, installation and commissioning. PLC Programming and System commissioning.
                            </p>
                        </div>
                    </div>

                    <div className={styles.teamGrid}>
                        <div className={styles.teamImage}>
                            <Img fluid={data.thembalami.childImageSharp.fluid}
                                style={{ width: "90%" }}
                            />
                        </div>
                        <div className={styles.teamText}>
                            <h2><span>Thembalami</span> Sibanda</h2>
                            <h5>Industrial Automation Technician</h5>
                            <p>
                                Member of Engineers Australia
                                <span></span>
                                3 years Experience in Electrical and Instrumentation  Field ranging from HVAC systems to Industrial systems.
                                <span></span>
                                Responsible for Panel building , Installations and Commissioning.
                            </p>
                        </div>
                    </div>
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

export const query = graphql`
  query AboutTeamImages{
    casper: file(relativePath: { eq: "team/Casper.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 80) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    thembalami: file(relativePath: { eq: "team/Thembalami.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 80) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
}`
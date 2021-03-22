import React from "react";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';

// Components
import Layout from "../components/Layout";
import LinkBlock from "../components/LinkBlock";
import Section from "../components/Section";
import HomeSlider from "../components/HomeSlider"

// Styles, Images, Fonts
import styles from "../styles/pages/index.module.scss";


export default function Home({ data }) {
  return (
    <Layout
      pageMeta={{
        title: "CCPT | Cape Control Panel Technologies",
        description: "CCPT offers turnkey solutions for specialized power and control panel building.",
        canonical: "/"
      }}
    >

      <HomeSlider />

      <Section headingBig="Who are We?"
        theme="dark"
      >
        <div className={styles.about}>
          <p>
            We are a young and dynamic company with years of experience building specialised power and control panels.
            <span></span>
            Cape Control Panel Technology manufactures a full range of electrical panels for almost any application,
            we also specialize in electrical reticulation for industrial and commercial projects.
            <span></span>
            This means supply and installation of LV and MV cables, cableways , transformers, VSDs, Motor Control Centres, Distribution Boards, MV switchgear, and PLC Panels. We also do testing and commissioning of the above and issue Certificates of Compliance.
          </p>
          <button className="button">
            <Link to="/about">
              Learn more
          </Link>
          </button>
        </div>
      </Section>

      <Section headingBig="What Do We Do"
        headingTheme="alt"
      >
        <div className={styles.services}>
          <h4>Specialized Power And Control Panel Building</h4>
          <div className={styles.grid}>

            <div className={styles.service}>
              <div className={styles.image}>
                <Img fluid={data.software.childImageSharp.fluid} />
              </div>

              <h5>PLC Software Engineering</h5>
            </div>

            <div className={styles.service}>
              <div className={styles.image}>
                <Img fluid={data.turnkey.childImageSharp.fluid} />
              </div>
              <h5>Turnkey Projects</h5>
            </div>

            <div className={styles.service}>
              <div className={styles.image}>
                <Img fluid={data.integration.childImageSharp.fluid} />
              </div>
              <h5>System Integration</h5>
            </div>

            <div className={styles.service}>
              <div className={styles.image}>
                <Img fluid={data.maintenance.childImageSharp.fluid} />
              </div>
              <h5>Electrical Maintenance</h5>
            </div>

          </div>
          <button className="button">
            <Link to="/services">
              Learn more
            </Link>
          </button>
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


// DATA

export const query = graphql`
  query HomeServicesImages{
    software: file(relativePath: { eq: "services/home/software.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 80) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turnkey: file(relativePath: { eq: "services/home/turnkey.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 80) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    integration: file(relativePath: { eq: "services/home/integration.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 80) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    maintenance: file(relativePath: { eq: "services/home/maintenance.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 80) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
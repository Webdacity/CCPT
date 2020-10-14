import React from "react";

// Components
import Layout from "../components/Layout";
import LinkBlock from "../components/LinkBlock";
import Section from "../components/Section";

// Styles, Images, Fonts
import styles from "../styles/pages/index.module.scss"


export default function Home() {
  return (
    <Layout
      pageMeta={{
        title: "CCPT | Cape Control Panel Technologies",
        description: "CCPT offers turnkey solutions for specialized power and control panel building.",
        canonical: "/"
      }}
    >
      <Section headingBig="Who are We?">

      </Section>

      <Section headingBig="What Do We Do">

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






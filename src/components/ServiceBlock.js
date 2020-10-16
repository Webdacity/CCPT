import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';



// Styles, Images, Fonts
import styles from "../styles/components/service-block.module.scss"

export default function ServiceBlock(props) {

    const Image = (props) => {
        const data = useStaticQuery(
            graphql`
            query serviceBlockImages{
                hvac: file(relativePath: { eq: "services/hvac.jpg" }) {
                childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
                }
            consulting: file(relativePath: { eq: "services/consulting.jpg" }) {
                childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
                }
                panelBuilding: file(relativePath: { eq: "services/panel-building.jpg" }) {
                childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
                }
                maintenance: file(relativePath: { eq: "services/maintenance.jpg" }) {
                childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
                }
                systemIntegration: file(relativePath: { eq: "services/system-integration.jpg" }) {
                childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
                }
            }
        `
        )

        switch (props.data.image) {
            case "hvac":
                return <Img fluid={data.hvac.childImageSharp.fluid} style={{ height: '100%' }} />
            case "consulting":
                return <Img fluid={data.consulting.childImageSharp.fluid} style={{ height: '100%' }} />
            case "system-integration":
                return <Img fluid={data.systemIntegration.childImageSharp.fluid} style={{ height: '100%' }} />
            case "maintenance":
                return <Img fluid={data.maintenance.childImageSharp.fluid} style={{ height: '100%' }} />
            case "panel-building":
                return <Img fluid={data.panelBuilding.childImageSharp.fluid} style={{ height: '100%' }} />
            default:
                return <Img />
        }
    }

    // DATA

    return (
        <div className={styles.block}>
            <div className={styles.image}>
                {/* <img src={require(`../assets/images/services/${props.data.image}.jpg`)} alt={props.data.image} /> */}
                {/* <Img fluid={data.hvac.childImageSharp.fluid}  /> */}
                <Image {...props} />
            </div>
            <div className={styles.text}>
                <h4>{props.data.name}</h4>
                <p>{props.data.description}</p>
            </div>
        </div >

    )
}

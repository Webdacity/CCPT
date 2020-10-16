import React from 'react';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";

// Styles, Images, Fonts
import styles from "../styles/pages/contact.module.scss"

export default function contact() {
    return (
        <Layout
            pageMeta={{
                title: "Contact | CCPT",
                description: "CCPT offers turnkey solutions for specialized power and control panel building.",
                canonical: "/contact"
            }}
        >
            <Section headingBig="Contact Us">
                <div className={styles.contactGrid}>
                    <div className={styles.details}>
                        <div>
                            <h4>Our Contacts</h4>
                            <a href="tel:0682589175">
                                068 258 9175
                            </a>
                            <a href="mailto:finance@ccptech.co.za">
                                finance@ccptech.co.za
                            </a>
                        </div>
                        <div>
                            <h4>Our Address</h4>
                            <a href="https://goo.gl/maps/4vf5TWhTquBbXe2BA" target="blank">
                                5 Buketraube Crescent, Saxenburg
                                Business Park 2, Blackheath, 7580
                            </a>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <h4>Send us a Message</h4>
                        <form data-netlify="true">
                            <input type="text" name="Name" placeholder="Name" />
                            <input type="email" name="Email" placeholder="Email" />
                            <input type="tel" name="Phone" placeholder="Phone" />
                            <textarea name="Message" placeholder="Message"></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className={styles.map}>
                        <iframe src="https://snazzymaps.com/embed/266348" ></iframe>
                        <iframe src="https://snazzymaps.com/embed/268114" ></iframe>
                    </div>
                </div>
            </Section>
        </Layout>

    )
}

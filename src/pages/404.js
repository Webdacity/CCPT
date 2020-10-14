import React from 'react';

// Components
import Layout from "../components/Layout";

// Styles, Images, Fonts
import styles from "../styles/pages/404.module.scss"

export default function PageNotFound() {
    return (
        <Layout
            pageMeta={{
                title: "Page not Found",
                description: "Page not Found",
                robots: "noindex, nofollow"

            }}
        >



        </Layout>
    )
}

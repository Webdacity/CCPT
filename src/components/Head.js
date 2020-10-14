import React from 'react';
import { Helmet } from "react-helmet";

export default function Head({ pageMeta }) {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();

    return (
        <Helmet htmlAttributes={{ "lang": "en" }}>
            <title>{pageMeta.title}</title>
            <meta name="description" content={pageMeta.description} />
            <link rel="canonical" href={`https://www.ccptech.co.za${pageMeta.canonical}`} />
            <meta name="robots" content={pageMeta.robots ? pageMeta.robots : "index, follow"} />

            <meta name="author" content="Webdacity" />
            <meta name="copyright" content={`CCPT © ${currentYear}`} />
            <meta name="theme-color" content="#ffffff" />

            {/* Open Graph */}
            <meta property="og:site_name" content="CCPT" />
            <meta property="og:title" content={pageMeta.title} />
            <meta property="og:description" content={pageMeta.description} />
            <meta property="og:type" content="Website" />
            <meta property="og:url" content={`https://www.ccptech.co.za${pageMeta.canonical}`} />
            <meta property="og:image" content="https://www.ccptech.co.za/social.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta property="og:image:alt" content="CCPT Logo" />

            {/* Stylesheets */}
            <script src="/pace.min.js"></script>

        </Helmet >
    )
}

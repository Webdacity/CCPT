import React from 'react';

// Components
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";

// Styles & Fonts
import "typeface-roboto";
import "typeface-tomorrow";
import "../styles/global.scss";

export default function Layout(props) {
    return (
        <>
            <Head pageMeta={props.pageMeta} />
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

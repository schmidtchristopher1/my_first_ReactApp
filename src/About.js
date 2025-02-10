import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function About() {
    return (
        <div>
            <Header name='About'/>
            <h1 style={styles.h1}>About</h1>
            <p style={styles.p}>This is the about page</p>
            <Footer/>
        </div>
    );
}

const styles = {
    h1: {
        textAlign: "center",
    },
    p: {
        textAlign: "center",
    },
}

export default About;

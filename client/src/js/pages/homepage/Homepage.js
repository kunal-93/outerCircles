import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Carousel from "components/Carousel";
import Card from "components/Card";

const HomePage = () => {
    return (
        <main className="main">
            <section>
                <Carousel />
                <Card variant="wide" />
                <Card variant="wide"/>
                <Card variant="wide"/>
            </section>
            <section>
                <Card />
                <Card />
                <Card />
            </section>
        </main>
    )
}

export default HomePage;
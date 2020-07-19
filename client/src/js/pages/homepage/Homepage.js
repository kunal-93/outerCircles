import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Carousel from "components/Carousel";
import Card from "components/Card";

const HomePage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section>
                    {/* <div className="container-fluid shadow-sm"> */}
                        <Carousel />
                    {/* </div> */}
                    <Card />
                    <Card />
                    <Card />
                </section>
                <section>
                    <Card variant="small" />
                    <Card variant="small" />
                    <Card variant="small" />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default HomePage;
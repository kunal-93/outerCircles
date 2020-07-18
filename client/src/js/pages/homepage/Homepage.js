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
                    <div className="container-fluid shadow-sm">
                        <Carousel />
                    </div>
                    <Card />
                </section>
                <aside>
                    <h2>Side bar</h2>
                </aside>
            </main>
            <Footer />
        </>
    )
}

export default HomePage;
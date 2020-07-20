import React from "react";
import Carousel from "components/Carousel";
import Card from "components/Card";

const HomePage = () => {
    return (
        <main className="main">
            <section>
                <Carousel />
                <Card articleID="1" variant="wide" />
                <Card articleID="2" variant="wide"/>
            </section>
            <section>
                <Card articleID="3"/>
                <Card articleID="4"/>
            </section>
        </main>
    )
}

export default HomePage;
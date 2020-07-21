import React from "react";  
import Services from "components/Services";
import ArticleGrid from "components/ArticleGrid";
import About from "components/About";
import Team from "components/Team";
import ContactUs from "components/ContactUs";

const HomePage = () => {
    return (
    <div>
        { /* <!-- Masthead--> */ }
        <header class="masthead">
            <div class="container">
                <div class="masthead-heading text-uppercase">Outer Circle</div>
                <div class="masthead-subheading">Speak your mind !</div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Find Out More</a>
            </div>
        </header>
        <Services />
        <ArticleGrid />
        <About />
        <Team />
        <ContactUs />
    </div>
    )
}

export default HomePage;
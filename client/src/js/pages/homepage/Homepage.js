import React from "react";  
import Services from "components/Services";
import ArticleGrid from "components/ArticleGrid";
import About from "components/About";
import Team from "components/Team";
import ContactUs from "components/ContactUs";
import {articleGridModel} from "models/articleGridModel";
import {aboutModel} from "models/aboutModel";

const HomePage = () => {
    const articleGridModel = articleGridModel;
    const aboutModel = aboutModel;
    return (
    <div>
        { /* <!-- Masthead--> */ }
        <header className="masthead">
            <div className="container">
                <div className="masthead-heading text-uppercase">Outer Circle</div>
                <div className="masthead-subheading">Speak your mind !</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Find Out More</a>
            </div>
        </header>

        <Services /> 
        <ArticleGrid articleGridModel= {articleGridModel} />
        <About aboutModel = {aboutModel} />
        <Team />
        <ContactUs />
    </div>
    )
}

export default HomePage;
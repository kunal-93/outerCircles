import React from "react";  
import Services from "components/Services";
import ArticleGrid from "components/ArticleGrid";
import About from "components/About";
import Team from "components/Team";
import ContactUs from "components/ContactUs";
import {articleGridModel} from "models/articleGridModel";
import {aboutModel} from "models/aboutModel";

const HomePage = () => {
    const aboutModel = [
        {
            Title : "Our Humble Beginnings",
            Content : "Science Says That Technology Is Speeding Up Our Brains' Perception of Time. Every year, it feels like time speeds up a little more. ... But McLoughlin has found evidence that our perception of time is now speeding up even faster thanks to smartphones.",
            Datetime : "06-May-2020",
            ImageURL : "src/img/about/1.jpg"
        },
        {
            Title : "Our Next Step",
            Content : "Sweet alyssum, celosia, cornflower or bachelor button, marigold and cosmos sprout within five to seven days.",
            Datetime : "17-June-2020",
            ImageURL : "src/img/about/2.jpg"
        }
    ]
    
    const articleGridModel = [
        {
            title: "Threads",
            imageURL: "src/img/articles/01-thumbnail.jpg",
            content: "Illustration",
        },
        {
            title: "Explore",
            imageURL: "src/img/articles/02-thumbnail.jpg",
            content: "Graphic Design",
        },
        {
            title: "Finish",
            imageURL: "src/img/articles/03-thumbnail.jpg",
            content: "For the second day in a row, Ottawa's number of new confirmed COVID-19 cases has hit double digits — part of a recent surge health officials say is linked to young people.",
        },
        {
            title: "Lines",
            imageURL: "src/img/articles/04-thumbnail.jpg",
            content: "COLUMBIA ICEFIELD, Alta. - Angela Bye couldn't believe her eyes when she used her camera's telephoto lens to get a closer look at what appeared to be one of the massive glacier sightseeing buses overturned on the approach to the Columbia Icefield.",
        },
        {
            title: "Southwest",
            imageURL: "src/img/articles/05-thumbnail.jpg",
            content: "COLUMBIA ICEFIELD, Alta. - Angela Bye couldn't believe her eyes when she used her camera's telephoto lens to get a closer look at what appeared to be one of the massive glacier sightseeing buses overturned on the approach to the Columbia Icefield.",
        },
        {
            title: "Window",
            imageURL: "src/img/articles/06-thumbnail.jpg",
            content: "COLUMBIA ICEFIELD, Alta. - Angela Bye couldn't believe her eyes when she used her camera's telephoto lens to get a closer look at what appeared to be one of the massive glacier sightseeing buses overturned on the approach to the Columbia Icefield.",
        }
    ]
    
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
import React, {useState} from "react";

const Services = () => {
    return (
            <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">What We Offer</h3>
            </div>
            <div className="row text-center">
            <div className="col-md-3">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Blogging</h4>
                <p className="text-muted">How things works! <i className="fa fa-heart"></i> </p>
            </div>
            <div className="col-md-3">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Interview Questions and Tips</h4>
                <p className="text-muted">We here to help you get hired !</p>
            </div>
            <div className="col-md-3">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Class Room Study</h4>
                <p className="text-muted">Get onboard for free online classNamees !</p>
            </div>
            <div className="col-md-3">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-question-circle fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Questions</h4>
                <p className="text-muted">I mustache you a question... <i className="fa fa-smile-o"></i></p>
            </div>
        </div>
        </div>
    </section>
    )
}
export default Services


import React, {useState} from "react";

const Services = () => {
    return (
            <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                <h2 class="section-heading text-uppercase">Services</h2>
                <h3 class="section-subheading text-muted">What We Offer</h3>
            </div>
            <div class="row text-center">
            <div class="col-md-3">
                <span class="fa-stack fa-4x">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Blogging</h4>
                <p class="text-muted">How things works! <i class="fa fa-heart"></i> </p>
            </div>
            <div class="col-md-3">
                <span class="fa-stack fa-4x">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Interview Questions and Tips</h4>
                <p class="text-muted">We here to help you get hired !</p>
            </div>
            <div class="col-md-3">
                <span class="fa-stack fa-4x">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Class Room Study</h4>
                <p class="text-muted">Get onboard for free online classes !</p>
            </div>
            <div class="col-md-3">
                <span class="fa-stack fa-4x">
                    <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    <i class="fa fa-question-circle fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Questions</h4>
                <p class="text-muted">I mustache you a question... <i class="fa fa-smile-o"></i></p>
            </div>
        </div>
        </div>
    </section>
    )
}
export default Services


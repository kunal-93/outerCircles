import React from "react";

const About = ({aboutModel}) => {
    return (
        <section className="page-section" id="about">
            { /* <!-- About--> */ }
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lets talk about us</h3>
                </div>

                <ul className="timeline">
                    {
                    aboutModel && aboutModel.map((items) =>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={items.ImageURL} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{items.Datetime}</h4>
                                <h4 className="subheading">{items.Title}</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">{items.Content}</p></div>
                        </div>
                    </li>  )
                    }
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About


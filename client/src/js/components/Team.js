import React from "react";

const Team = () => {
    return (
        <section className="page-section bg-light" id="team">
            { /* <!-- Team--> */ }
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">We thank all of you <i className="fa fa-heart"></i> - Team </h3>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="src/img/team/K.png" alt="" />
                            <h4>Kunal Dhawan</h4>
                            <p className="text-muted">Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="src/img/team/P.png" alt="" />
                            <h4>Priyanka Thakur</h4>
                            <p className="text-muted">Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Do reach out to us, we would love to hear from you.</p></div>
                </div>
            </div>
        </section>
    )
}
export default Team
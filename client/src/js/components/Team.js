import React from "react";

const Team = () => {
    return (
        <section class="page-section bg-light" id="team">
            { /* <!-- Team--> */ }
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">We thank all of you <i class="fa fa-heart"></i> - Team </h3>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="src/img/team/2.jpg" alt="" />
                            <h4>Kunal Dhawan</h4>
                            <p class="text-muted">Developer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="src/img/team/3.jpg" alt="" />
                            <h4>Priyanka Thakur</h4>
                            <p class="text-muted">Developer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Do reach out to us, we would love to hear from you.</p></div>
                </div>
            </div>
        </section>
    )
}
export default Team
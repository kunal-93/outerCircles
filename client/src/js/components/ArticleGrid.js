import React from "react";  

const ArticleGrid = ({articleGridModel}) => {
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Recent Articles </h2>
                    <h3 className="section-subheading text-muted">Those who love to read <i className="fa fa-book"></i> </h3>
                </div>
                <div className="row">
                    {
                        articleGridModel && articleGridModel.map((items) =>
                        <div className="col-lg-4 col-sm-6 mb-4 portfolio-item ">
                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src={items.imageURL} alt="" />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{items.title}</div>
                                    <div className="portfolio-caption-subheading text-muted">{items.content}</div>
                                </div>
                        </div>
                        )
                    }                                 
                </div>
            </div>
        </section>
    )
}

export default ArticleGrid
        
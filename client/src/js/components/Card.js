import React from "react";
import {Card} from "react-bootstrap";
import {classNames} from "js/helpers/utilities";
import getArticleByID from "js/models/articles";

const CardCustom = ({articleID, variant="default"}) => {
    const cardStyle = variant === "wide" ? "card-grid-wide" : "card-grid"
    
    const article = getArticleByID(articleID);
    return (
        <Card className={classNames(cardStyle, "shadow-sm")}>
            <Card.Img className="card-img" variant="top" src={article.imageURL} />
            <div className="card-content">
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.content}</Card.Text>
                </Card.Body>
                <Card.Body className="card-content-links">
                    <Card.Link href="#">Read More</Card.Link>
                    <Card.Link href="#">Other links</Card.Link>
                </Card.Body>
            </div>
            <Card.Footer className="card-footer d-flex justify-content-around">
                <span>{article.postedTime}</span>
                <span>{article.place}</span>
            </Card.Footer>
        </Card>
    )
}

export default CardCustom;
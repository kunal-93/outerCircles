import React from "react";
import {Card} from "react-bootstrap";
import {classNames} from "js/helpers/utilities";

const CardCustom = ({variant="default"}) => {
    const cardStyle = variant === "wide" ? "card-grid-wide" : "card-grid"
    
    return (
        <Card className={classNames(cardStyle, "shadow-sm")}>
            <Card.Img className="card-img" variant="top" src="src/img/Covid.jpg" />
            <div className="card-content">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body className="card-content-links">
                    <Card.Link href="#">Read More</Card.Link>
                    <Card.Link href="#">Other links</Card.Link>
                </Card.Body>
            </div>
            <Card.Footer className="card-footer">2 Days ago</Card.Footer>
        </Card>
    )
}

export default CardCustom;
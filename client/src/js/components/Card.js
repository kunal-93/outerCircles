import React from "react";
import {Card} from "react-bootstrap";

const CardCustom = () => {
    return (
        <Card className="card-grid shadow-sm">
            <Card.Img className="card-img" variant="top" src="src/img/Covid.jpg" />
            <div className="card-content">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </div>
            <Card.Footer className="card-footer">2 Days ago</Card.Footer>
        </Card>
    )
}

export default CardCustom;
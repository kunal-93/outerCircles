import React from "react";
import {Navbar, Nav, Form, Row, Col, Button} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Outer Circles</Navbar.Brand>
            </Navbar>
    
            <Form className="footer-message">
                <h4>Message us</h4>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="yourEmail@example.com" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMessage">
                    <Form.Control as="textarea" placeholder="Your message" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
                   
            <Navbar variant="dark">
                <Nav className="flex-column">
                    <h4>Socials</h4>
                    <Nav.Link href="#">Active</Nav.Link>
                    <Nav.Link href="#" eventKey="link-1">Link</Nav.Link>
                    <Nav.Link href="#" eventKey="link-2">Link</Nav.Link>
                </Nav>
            </Navbar>
            <Navbar variant="dark">
                <Nav className="flex-column">
                    <h4>About us</h4>
                    <Nav.Link href="#">Active</Nav.Link>
                    <Nav.Link href="#" eventKey="link-1">Link</Nav.Link>
                    <Nav.Link href="#" eventKey="link-2">Link</Nav.Link>
                </Nav>
            </Navbar>
            

        </footer>
    )
}

export default Footer
import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavDropdown} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import {Link} from "react-router-dom";

const Header = () => {

    const [showSignUpPanel, setSignUpPanelShow] = useState(false);
    const [showSignInPanel, setSignInPanelShow] = useState(false);

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Outer Circles</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        {/* <Nav.Link href="/explore">Explore</Nav.Link> */}
                        <Link to="/explore">Explore</Link>
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Trending</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Technology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Health</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button className="nav-link text-left" variant="link" >Write</Button>
                        <Button className="nav-link text-left" variant="link" 
                            onClick={() => setSignInPanelShow(true)}>
                                Sign In
                        </Button>                    
                        <Button variant="light" onClick={() => setSignUpPanelShow(true)}>Get started</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* SignUp Panel */}
            <SignUp
                show={showSignUpPanel}
                onHide={() => setSignUpPanelShow(false)}
            />
            {/* SignIn Panel */}
            <SignIn
                show={showSignInPanel}
                onHide={() => setSignInPanelShow(false)}
            />
        </header>
    )
}


export default Header;
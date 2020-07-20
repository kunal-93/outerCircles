import React from "react";
import {Modal, Button, Form, Col} from "react-bootstrap";

const SignIn = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-center"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Welcome back
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <h4>Sign In</h4>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="yourEmail@example.com" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Modal.Body>
      </Modal>
    );
  }

  export default SignIn;
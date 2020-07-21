import React from "react";
import {Button, Form, Col, InputGroup} from "react-bootstrap";
import Modal from "./Modal";

import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string()
  .email('Invalid Email')
  .required('Required'),
  password: yup.string().required('No password provided')
});

const SignIn = ({setModalShow}) => {

  const onValidatedHandler = (data) => {
    // close the model
    setModalShow(false);
    console.log("data validated");
    console.log(data);
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onValidatedHandler}
      initialValues={{
        email: '',
        password: ''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => {
        
        return (
        <Form noValidate onSubmit={handleSubmit}>
          <h4>Sign In</h4>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control 
                name="email"  
                type="email" 
                placeholder="yourEmail@example.com"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridpassword">
            <Form.Control 
                name="password"  
                type="password" 
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
              />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>
          
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        )}
      }
    </Formik>
  );
}

export default Modal(SignIn);
import React from "react";
import {Button, Form, Col, InputGroup} from "react-bootstrap";
import Modal from "./Modal";

import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string()
  .email('Invalid Email')
  .required('Required'),
  password: yup.string()
    .required('No password provided') 
    .min(8, 'Password is too short - should be atleast 8 chars.')
    .matches(/(?=.*?[0-9])/, 'Password should contain atleast 1 digit'),
  confirmPassword: yup.string()
    .required('Required')
    .when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("password")],
        "passwords must match"
      )
    })
});

const SignUp = ({setModalShow}) => {

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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
          <h4>Create Account</h4>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Control 
              name="firstName"  
              type="text" 
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
              isValid={touched.firstName && !errors.firstName}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>

            <Form.Control 
              name="lastName"  
              type="text" 
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
          </Form.Group>

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

            <Form.Control 
                name="confirmPassword"  
                type="password" 
                placeholder="confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                isValid={touched.confirmPassword && !errors.confirmPassword}
                isInvalid={!!errors.confirmPassword}
              />
            <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>

          </Form.Group>
          
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        )}
      }
    </Formik>
  );
}

export default Modal(SignUp);
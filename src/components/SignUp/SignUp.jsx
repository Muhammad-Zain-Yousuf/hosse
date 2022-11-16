import React from 'react'
import {Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "./styles.css";

export const SignUp = () => {
    return (
        <Container className='fluid mb-4 signupbox mt-4'>
            <h1 className='text-center'>Create an Account</h1>
            <Form>
                {/* Username */}
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter Phone" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Batch</Form.Label>
                    <Form.Control type="text" placeholder="Enter Class" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>School</Form.Label>
                    <Form.Control type="text" placeholder="Enter School" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Major</Form.Label>
                    <Form.Control type="text" placeholder="Enter Major" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='signUpSubmit mt-4'>
                    Sign Up
                </Button>

                <p className='text-center'>
                    Already have an account? <br />
                    <Link to="/login">Log in here</Link>
                </p>
                
            </Form>
            
        </Container>
    );
}

export default SignUp;

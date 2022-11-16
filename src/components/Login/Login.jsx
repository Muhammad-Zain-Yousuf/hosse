import React from 'react'
import {Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "./styles.css";

export const Login = () => {
    return (
        <Container className='fluid mb-4 loginbox mt-4'>
            <h1 className='text-center'>Login</h1>
            <Form>
                {/* Username */}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='signUpSubmit mt-4'>
                    Login
                </Button>

                <p className='text-center'>
                    Don't have an account? <br />
                    <Link to="/signup">Create one here</Link>
                </p>
                
            </Form>
            
        </Container>
    );
}

export default Login;

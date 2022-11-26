import React from 'react'
import {Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "./styles.css";

export const SignUp = () => {

    const [returnedData, setReturnedData] = React.useState(['hello']);
    const [user,setUser] = React.useState({StdID:0, Name:'', Password:'', Major: '', Batch:0, Email:'', Phone:''})

    const setInput = (e) => {
        const{name,value} = e.target;
        if (name=== 'StdID' || name=== 'Batch'){
            setUser(prevState => ({
                ...prevState, [name]:parseInt(value)
            }))
            return;
        }

        setUser(prevState => ({
            ...prevState, [name]:value
        }));

    }

    const fetchData = async () => {
        const newData = await fetch('/api' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: user.Name

            })
            })
            .then(res => res.json())
            console.log(newData);
            setReturnedData(newData[0]);

        }
    const createuser = async () => {
        const newData = await fetch('/hello' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...user


            })
            })
            .then(res => res.json())
            console.log(newData);
            setReturnedData(newData[0]);

        }


    return (
        <Container className='fluid mb-4 signupbox mt-4'>
            <h1 className='text-center'>Create an Account</h1>
            <Form>
                {/* Username */}
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name = "Name" type="text" placeholder="Enter name" onChange={setInput} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name= "Email" type="email" placeholder="Enter Email" onChange={setInput}  required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control name = "Phone" type="phone" placeholder="Enter Phone" onChange={setInput}  required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Batch</Form.Label>
                    <Form.Control name = "Batch" type="text" placeholder="Enter Class" onChange={setInput}  required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control name="StdID" type="number" placeholder="Enter ID" onChange={setInput} required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Major</Form.Label>
                    <Form.Control name = "Major" type="text" placeholder="Enter Major" onChange={setInput} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name = "Password" type="password" placeholder="Password" onChange={setInput}  required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='signUpSubmit mt-4' onClick={()=> createuser()}>
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

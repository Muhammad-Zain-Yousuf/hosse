import React from 'react'
import {Button, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./styles.css";


export const Suggestion = () => {
    return (
        <Container className='fluid mb-4 suggestionBox mt-4'>
            <h1 className='text-center'>Suggest A Resource</h1>
            <Form>
                {/* Username */}
                <Form.Group className="mb-3" >
                    <Form.Label>Resource Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Resource Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter Link" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Resource Category</Form.Label>
                    <Form.Control type="text" placeholder="Video Article Blog etc." required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Course</Form.Label>
                    <Form.Control type="text" placeholder="For which course" required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='suggestSubmit mt-4'>
                    Submit
                </Button>
                
            </Form>
            
        </Container>
    );
}

export default Suggestion;

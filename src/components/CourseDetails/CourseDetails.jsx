import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../../Data/db.json';
import {Container, Col, Row, Button} from 'react-bootstrap';
import "./styles.css";

const CourseDetails = () => {

    const { id } = useParams();
    const course = data.find( item => item.id === id);

    return (
        <Container className='bg-dark mt-5 mb-5'>
            <Row className="d-flex align-items-center">
                <Col sm={12} md={6} lg={6}>
                    <img src={`../${course.picture}`} alt="Resource" style={{"width":"500px", "height": "350px", "padding": "20px"}} />
                </Col>

                <Col sm={12} md={6} lg={6}>
                    <p className='mb-5'>
                        <span className='course-details'>Resource Name:</span>
                        {course.title}
                    </p>
                    <p className='mb-5'>
                        <span className='course-details'>Resource Description:</span>
                        {course.desc}
                    </p>
                    <a className='mb-5' href= {course.url} target="_blank" rel="noreferrer">
                        <Button variant="primary">Go To Resource</Button>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}


export default CourseDetails;
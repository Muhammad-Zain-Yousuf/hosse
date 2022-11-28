import React, { useRef } from 'react'
import {Row , Col, Button, Container} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "./styles.css";
import {Route ,  Navigate , useNavigate} from 'react-router-dom';
import Header from '../Navbar/Navbar';

// async function loginUser(credentials) {
//   return fetch('http://localhost:3000/about', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
// }


const Dashboard = () => {

    
    const {state}  = useLocation();
    const {std_id} = state; 
    // console.log(std_id);


    const [returnedData, setReturnedData] = React.useState(['dashboard']);

    React.useEffect(() => {
        const fetchData = async () => {
            const newData = await fetch('/dashboard' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ id: std_id })
                })
                
                .then(res => res.json())
                console.log(newData);
                setReturnedData(newData);
    
            }
        fetchData();

    }, []);


    return( 
        
        <Container className='bg-dark mt-5 mb-5'>
        <h1 className='text-center' >Hello, {returnedData.Student_name}</h1>  // iskp white krna hai color black arha hai

            <Row className="d-flex align-items-center">

                <Col sm={12} md={6} lg={6}>
                    <p className='mb-5'>
                        <span className='course-details'>Your ID:</span>
                        {returnedData.Student_id}
                    </p>
                    <p className='mb-5'>
                        <span className='course-details'>Major:</span>
                        {returnedData.major_name}
                    </p>

                    <p className='mb-5'>
                        <span className='course-details'>Batch:</span>
                        {returnedData.batch}
                    </p>
                    <p className='mb-5'>
                        <span className='course-details'>Department:</span>
                        {returnedData.depart_name}
                    </p>
                    <p className='mb-5'>
                        <span className='course-details'>School:</span>
                        {returnedData.School_Name}
                    </p>

                    <p className='mb-5'>
                        <span className='course-details'>Your Email:</span>
                        {returnedData.student_email}
                    </p>

                    <p className='mb-5'>
                        <span className='course-details'>Contact Number:</span>
                        {returnedData.phone_number}
                    </p>
                </Col>
            </Row>

            
        </Container>
    )
}

export default Dashboard;










    

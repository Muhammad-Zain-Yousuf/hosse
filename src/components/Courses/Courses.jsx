import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import data from '../../Data/db.json';
import {Container, Col, Row, Button} from 'react-bootstrap';
import "./styles.css";

const AcademicRes = () => {

    // const course = data.map( item => i);

    const [returnedData, setReturnedData] = React.useState(['events']);

    React.useEffect(() => {
        const fetchData = async () => {
            const newData = await fetch('/events' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                })
                
                .then(res => res.json())
                console.log(newData);
                setReturnedData(newData);
    
            }
        fetchData();
        


        

    }, []);


    
    return( <div>
        {returnedData.map(item => (
        <div key={item.event_id}>
        <Container className='bg-dark mt-5 mb-5'>
        
            <Row className="d-flex align-items-center">
                {/* <Col sm={12} md={6} lg={6}>
                    <img src={`../${item.picture}`} alt="Resource" style={{"width":"500px", "height": "350px", "padding": "20px"}} />
                </Col> */}

                <Col sm={12} md={6} lg={6}>
                    <p className='mb-5'>
                        <span className='course-details'>Event Name:</span>
                        {item.event_name}
                    </p>
                    <p className='mb-5'>
                        <span className='course-details'>Description:</span>
                        {item.event_description}
                    </p>

                    <p className='mb-5'>
                        <span className='course-details'>Venue:</span>
                        {item.typename}
                    </p>

                    <p className='mb-5'>
                        <span className='course-details'>Organized By:</span>
                        {item.organizer_name}
                    </p>
                    <a className='mb-5' href= "www.google.com"  target="_blank" rel="noreferrer">
                        <Button variant="primary">Register Now</Button>
                    </a>
                </Col>
            </Row>
        </Container>
        </div>
    ))};
    </div>
    )

    //
}


export default AcademicRes;
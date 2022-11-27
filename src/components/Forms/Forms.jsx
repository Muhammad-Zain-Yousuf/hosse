import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import data from '../../Data/db.json';
import {Container, Col, Row, Button} from 'react-bootstrap';
import "./styles.css";

const AcademicRes = () => {

    // const course = data.map( item => i);

    const [returnedData, setReturnedData] = React.useState(['forms']);

    React.useEffect(() => {
        const fetchData = async () => {
            const newData = await fetch('/forms' , {
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
        <div key={item.form_tool_id}>
        <Container className='bg-dark mt-5 mb-5'>
        
            <Row className="d-flex align-items-center">
                {/* <Col sm={12} md={6} lg={6}>
                    <img src={`../${item.picture}`} alt="Resource" style={{"width":"500px", "height": "350px", "padding": "20px"}} />
                </Col> */}

                <Col sm={12} md={6} lg={6}>
                    <p className='mb-5'>
                        <span className='course-details'>= Name:</span>
                        {item.form_name}
                    </p>
                    <p className='mb-5'>
                        <span className='course-details'>Description:</span>
                        {item.form_description}
                    </p>

                    <p className='mb-5'>
                        <span className='course-details'>Category:</span>
                        {item.category_name}
                    </p>

                    <p className='mb-5'>
                        <span className='course-details'>Office:</span>
                        {item.office_name}
                    </p>


                    <a className='mb-5' href= {item.form_link}  target="_blank" rel="noreferrer">
                        <Button variant="primary">Go to Resource</Button>
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
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import data from '../../Data/db.json';
import {Container, Col, Row, Button} from 'react-bootstrap';
import "./styles.css";
import { useGlobalState } from '../Login/Login';

const AcademicRes = () => {

    // const course = data.map( item => i);

    const [state, dispatch] = useGlobalState();

    const [returnedData, setReturnedData] = React.useState(['rsg']);

    React.useEffect(() => {
        const fetchData = async () => {
            const newData = await fetch('/rsg' , {
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


    const VisitHistory = async (_resid) => {
        console.log('clicked')
        const newData = await fetch('/visitedres' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            
            body: JSON.stringify({ resid: _resid, stdid: state.id })

        })
            
            .then(res => res.json())
            console.log(newData);

        }


    
    return( <div>
        {returnedData.map(item => (
        <div key={item.Resource_id}>
        <Container className='bg-dark mt-5 mb-5'>
        
            <Row className="d-flex align-items-center">
                {/* <Col sm={12} md={6} lg={6}>
                    <img src={`../${item.picture}`} alt="Resource" style={{"width":"500px", "height": "350px", "padding": "20px"}} />
                </Col> */}

                <Col sm={12} md={6} lg={6}>
                    <p className='mb-5'>
                        <span className='course-details'>Resource Name:</span>
                        {item.Resource_Name}
                    </p>
                    <p className='mb-5'>
                        <span className='course-details'>For Course:</span>
                        {item.course_name}
                    </p>

                    <p className='mb-5'>
                        <span className='course-details'>Type:</span>
                        {item.Category_name}
                    </p>
                    <a className='mb-5' href= {item.Resource_link} target="_blank" rel="noreferrer">
                        <Button variant="primary" onClick={()=> VisitHistory(item.Resource_id)}>Go To Resource</Button>
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
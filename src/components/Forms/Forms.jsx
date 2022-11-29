import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import data from '../../Data/db.json';
import {Container, Col, Row, Button, InputGroup, FormControl} from 'react-bootstrap';
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

    const [inputText, setInputText] = useState("");
  
    const handleOnChange = (e) => {

        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    const filteredData = returnedData.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.form_name.toLowerCase().includes(inputText);
        }
    });
    
    return( 
        <div className='mt-5 mb-5'>
            <Row>
                <Col sm={2} lg={2} md={2} className='mb-4'></Col>
                <Col sm={8} lg={8} md={8} className='mb-4'>
                    <InputGroup>
                        <FormControl
                        placeholder="Search a form"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        onChange={handleOnChange}
                        />
                    </InputGroup>
                </Col>
                <Col sm={2} lg={2} md={2} className='mb-4'></Col>
            </Row>

        {filteredData.map(item => (
            <div key={item.form_tool_id}>
            <Container className='bg-dark mt-5 mb-5'>
            
                <Row className="d-flex align-items-center">
                    {/* <Col sm={12} md={6} lg={6}>
                        <img src={`../${item.picture}`} alt="Resource" style={{"width":"500px", "height": "350px", "padding": "20px"}} />
                    </Col> */}

                    <Col sm={12} md={6} lg={6}>
                        <p className='mb-5'>
                            <span className='course-details'>Name:</span>
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
                            <Button variant="primary" className='mb-3'>Go to Resource</Button>
                        </a>
                    </Col>
                </Row>
            </Container>
            </div>
    ))};
    </div>
    );

    //
}


export default AcademicRes;
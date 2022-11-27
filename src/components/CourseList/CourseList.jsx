import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseList = (props) => {

  const data = props.data;
  
  const [inputText, setInputText] = useState("");
  
  const handleOnChange = (e) => {

    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.title.toLowerCase().includes(inputText);
    }
  });

  return (
    <div className='mt-5 mb-5'>
      <Container className='bg-dark rounded pt-4 pe-4 ps-4'>
        <Row>
          <Col sm={12} lg={12} md={12} className='mb-4'>
              <InputGroup>
                <FormControl
                  placeholder="Search a resource"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  onChange={handleOnChange}
                />
              </InputGroup>
          </Col>
        </Row>
        <Row>
          {filteredData.map( (course) => (
            <Col key={course.id} sm={12} lg={6} md={6} className='mb-4'>
              <Card>
                <Card.Img style={{"width":"auto", "height": "350px"}} variant="top" src={course.picture} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="primary">See Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ) )}
        </Row>
      </Container>
    </div>

  );
}

export default CourseList;
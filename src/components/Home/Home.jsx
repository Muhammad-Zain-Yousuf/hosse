import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import data from '../../Data/db.json';
import CourseList from '../CourseList/CourseList';


const Home = () => {

  return (
    <>
      <section className='home-back'>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}></Col>
            <Col lg={6} md={6} sm={12}>
              <h1 className='mb-4'>Habib OSSE</h1>
              <h4 className='mb-3'>Complete Course Guide At One Place!</h4>
            <p>If you are looking for external online courses to ace your courses, co-curricular events to take part in, or struggling to find any form on Student Portal, you're in the right place! Browse through different resources and take advantage as per your need.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <CourseList data={data}/>
    </>
  );
}

export default Home;
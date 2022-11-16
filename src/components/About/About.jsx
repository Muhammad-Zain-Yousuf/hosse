import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './styles.css';

export const About = () => {
  return (
    <Container className='about mt-5'>
      <Row className="d-flex align-items-center">
        <Col sm={12} md={12} lg={12}>
          <h1>About Habib OSSE</h1>
          <p>The project will focus around making a one stop solution, as the name suggests, for the academic perspective of the students. While various resources, like the Student Portal and Habib University Learning Management System (HULMS), are present for the students to access the resources, the students are often seen asking for those same resources on the HU Student Forum present on Facebook. This shows that they somehow fail to access those same resources that are present on the portal and HULMS due to less user-friendly interface and the lack of ease of usability. Consequently, our project will focus on user authentication, suggesting them resources for their respective courses, and help them connect to the right people.<br></br><br></br>The scope of the project revolves around helping the students achieve academic success while making sure that our project only allows Habib University students to access the resources. Other than that, it will also try to facilitate them accessing the resources that could prove helpful for them in case of emergencies, applying for medical leaves, etc.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About;
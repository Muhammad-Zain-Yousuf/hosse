import React from 'react'
import { ListGroup } from 'react-bootstrap';

export const Portals = () => {
    return (
        <ListGroup>
          <ListGroup.Item><a href='https://hulms.instructure.com/'>Canvas HULMS</a></ListGroup.Item>
          <ListGroup.Item><a href='https://pscs.habib.edu.pk/psp/CSPROD/?cmd=login&languageCd=ENG&'>PSCS</a></ListGroup.Item>
          <ListGroup.Item><a href='https://advisement.habib.edu.pk/'>Stellic (Degree Management System)</a></ListGroup.Item>
          <ListGroup.Item><a href='https://habib.edu.pk/gpa-calculator/'>GPA Calculator</a></ListGroup.Item>
        </ListGroup>
    );
}

export default Portals;
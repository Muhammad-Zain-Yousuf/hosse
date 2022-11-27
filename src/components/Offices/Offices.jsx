import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup} from 'react-bootstrap';

export const Offices = () => {

  return (
    <ListGroup>
        <ListGroup.Item>
            <Link to='/RO'>Office of Academic System & Registrar</Link> 
        </ListGroup.Item>
        <ListGroup.Item>
            <Link to='/OCS'>Office of Career Services</Link> 
        </ListGroup.Item>
        <ListGroup.Item>
            <Link to='/Finance'>Office of Student Finance</Link>
        </ListGroup.Item>
        <ListGroup.Item>
            <Link to='/IT'>Information Technology Department</Link> 
        </ListGroup.Item>
        <ListGroup.Item>
            <Link to='/OCVS'>Office of Community Values & Standards</Link>
        </ListGroup.Item>
        <ListGroup.Item>
            <Link to='/Portals'>Portals</Link>
        </ListGroup.Item>
    </ListGroup>
  );
}

export default Offices;

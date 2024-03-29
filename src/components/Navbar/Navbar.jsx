import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import './styles.css';
import logo from "../../Assets/Home/logo.png";
// import {useGlobalState} from '../../App';
import { useGlobalState } from '../Login/Login';




const Header = () => {

  // const {loggedin} = React.useContext(globalStateContext);
  const [state, dispatch] = useGlobalState();

  // console.log(state);


  return (
    
    <Navbar bg="dark" variant="dark">
      
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="" width="50" height="50" />
          {' '} One Stop Solution Explorer
          
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className='links'>Home</Link>
          <Link to="/about" className='links'>About</Link>
        </Nav>

        {state.loggedin == false && (
          <>
        <Nav className='ms-auto'>
          {/* <Link to="/login" className='links'>Login</Link> */}
          <Link to="/signup" className='links'>Sign Up</Link> 
        </Nav>
        <Nav className='me-auto'>
          <Link to="/Login" className='links'>Login</Link> 
        </Nav>
        

      </>
      )}

      {state.loggedin ==true && (
          <>
        <Nav className='ms-auto'>
          <a href="/" className='links'>Logout</a> 
        </Nav>
        {/* <Nav className='me-auto'>
          <Link to="../" className='links'>Profile</Link> 
        </Nav> */}
      </>
      )}

      </Container>
    </Navbar>
  );
}

export default Header;
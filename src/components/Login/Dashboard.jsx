import React from 'react'
import {Row , Col, Button, Container} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "./styles.css";
import {Route ,  Navigate , useNavigate} from 'react-router-dom';
// import {useGlobalState} from '../../App';
import { useGlobalState } from '../Login/Login';

// async function loginUser(credentials) {
//   return fetch('http://localhost:3000/about', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
// }


const Dashboard = () => {

    const [nstate, dispatch] = useGlobalState();


    
    const {state}  = useLocation();
    const {std_id} = state;
    console.log('dbc');
    
    


    const [returnedData, setReturnedData] = React.useState(['dashboard']);
    const [returnedData2, setReturnedData2] = React.useState(['dashboard2']);

    React.useEffect(() => {
        const fetchData = async () => {
            const newData = await fetch('/dashboard' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ id: std_id })
                })
                
                .then(res => res.json())
                console.log(newData);
                setReturnedData(newData);
    
            }
        const fetchHistory = async () => {
            const newData = await fetch('/dashboard2' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ id: std_id })
                })
                
                .then(res => res.json())
                console.log(newData);
                setReturnedData2(newData);
    
            }

        fetchData();
        fetchHistory();
        dispatch({id: std_id, loggedin: true});
        

    }, []);

    return( <div>


<Container className='bg-dark mt-5 mb-5'>
    <h1 className='text-center' style={{color: "white"}}>Hello, {returnedData.Student_name}</h1>

        <Row className="d-flex align-items-center">
        <Col sm={12} md={6} lg={6}>
                <p className='mb-5'>
                    <span className='course-details'>Your ID:</span>
                    {returnedData.Student_id}
                </p>
                <p className='mb-5'>
                    <span className='course-details'>Major:</span>
                    {returnedData.major_name}
                </p>

                <p className='mb-5'>
                    <span className='course-details'>Batch:</span>
                    {returnedData.batch}
                </p>
                <p className='mb-5'>
                    <span className='course-details'>Department:</span>
                    {returnedData.depart_name}
                </p>
                <p className='mb-5'>
                    <span className='course-details'>School:</span>
                    {returnedData.School_Name}
                </p>

                <p className='mb-5'>
                    <span className='course-details'>Your Email:</span>
                    {returnedData.student_email}
                </p>

                <p className='mb-5'>
                    <span className='course-details'>Contact Number:</span>
                    {returnedData.phone_number}
                </p>
            </Col>

 
        </Row>
        
    </Container>


        <h1> Your Resource History</h1>

    {returnedData2.map(item => (
        <div key={item.view_id}>
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
                    <p className='mb-5'>
                        <span className='course-details'>Last Accessed:</span>
                        {item.view_date}
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
    ))};



    </div>
    )


}

export default Dashboard;


    
    












    

import React from 'react'
import {Col, Row,Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "./styles.css";

export const Adminmain = () => {
    return (
        <Container className='fluid mb-4 signupbox mt-4'>
            <h1 className='text-center'>Admin Options</h1>
             <Button variant="primary" type="submit" className='signUpSubmit mt-4' href = '/adminadd'>
                    Update Database
                </Button>


                <Button variant="secondary" type="submit" className='signUpSubmit mt-4' href = '/adminmodify' >
                    Modify database
                </Button>

        </Container>
    )

}

export const Admin = () => {

    const [returnedData, setReturnedData] = React.useState(['hello']);
    const [instructor,setUser] = React.useState({ Name:'', Email:'', Department:''})
    const [course,setCourse] = React.useState({ name:'', level:0,  Code: '',Department:''})
    const [resource,setResource] = React.useState({ resname:'', link:'',  code: '', type:''})
    const [form,setForm] = React.useState({ Name:'', link:'',  category: '', office:'', desc: ''})
    const [event,setEvent] = React.useState({ Name:'', type:'', desc: ''})

    const setInput1 = (e) => {
        const{name,value} = e.target;
        if (name=== 'StdID' || name=== 'Batch'){
            setUser(prevState => ({
                ...prevState, [name]:parseInt(value)
            }))
            return;
        }

        setUser(prevState => ({
            ...prevState, [name]:value
        }));

    }
    const setInput2 = (e) => {
        const{name,value} = e.target;
        if (name=== 'level' ){
            setCourse(prevState => ({
                ...prevState, [name]:parseInt(value)
            }))
            return;
        }

        setUser(prevState => ({
            ...prevState, [name]:value
        }));

    }
    const setInput3 = (e) => {
        const{name,value} = e.target;
        if (name=== 'StdID' || name=== 'Batch'){
            setResource(prevState => ({
                ...prevState, [name]:parseInt(value)
            }))
            return;
        }

        setUser(prevState => ({
            ...prevState, [name]:value
        }));

    }
    const setInput4 = (e) => {
        const{name,value} = e.target;
        if (name=== 'StdID' || name=== 'Batch'){
            setForm(prevState => ({
                ...prevState, [name]:parseInt(value)
            }))
            return;
        }

        setUser(prevState => ({
            ...prevState, [name]:value
        }));

    }
    const setInput5 = (e) => {
        const{name,value} = e.target;
        if (name=== 'StdID' || name=== 'Batch'){
            setEvent(prevState => ({
                ...prevState, [name]:parseInt(value)
            }))
            return;
        }

        setUser(prevState => ({
            ...prevState, [name]:value
        }));

    }

    const fetchData = async () => {
        const newData = await fetch('/api' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: instructor.Name

            })
            })
            .then(res => res.json())
            console.log(newData);
            setReturnedData(newData[0]);

        }
    const addInstructor = async () => {
        const newData = await fetch('/addinst' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...instructor


            })
            })
            .then(res => res.json())
            console.log(newData);
            setReturnedData(newData);
            if (newData.result === 'Instructor Added Successfully'){
                alert('Instructor added successfully')
            }
            else {
                alert('Operation Failed. Sahi se seekh k ao admnistration')
            }

        }

    
    const addCourse = async () => {
        const newData = await fetch('/addcourse' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...course


            })
            })
            .then(res => res.json())
            console.log(newData);
            setReturnedData(newData[0]);
            if (newData.result === 'Instructor Added Successfully'){
                alert('Instructor added successfully')
            }
            else {
                alert('Operation Failed. Sahi se seekh k ao admnistration')
            }

        }

    const addResource = async () => {
        const newData = await fetch('/addresource' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...resource


            })
            })
            .then(res => res.json())
            console.log(newData);
            setReturnedData(newData[0]);
            if (newData.result === 'Instructor Added Successfully'){
                alert('Instructor added successfully')
            }
            else {
                alert('Operation Failed. Sahi se seekh k ao admnistration')
            }


        }
    const addForm = async () => {
        const newData = await fetch('/addform' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...form


            })
            })
            .then(res => res.json())
            console.log(newData);
            setReturnedData(newData[0]);
            if (newData.result === 'Instructor Added Successfully'){
                alert('Instructor added successfully')
            }
            else {
                alert('Operation Failed. Sahi se seekh k ao admnistration')
            }

        }
    const addEvent = async () => {
        const newData = await fetch('/addevent' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...event


            })
            })
            .then(res => res.json())
            console.log(newData);
            setReturnedData(newData[0]);
            if (newData.result === 'Instructor Added Successfully'){
                alert('Instructor added successfully')
            }
            else {
                alert('Operation Failed. Sahi se seekh k ao admnistration')
            }

        }


    return (
        <Container className='fluid mb-4 signupbox mt-4'>
            <h1 className='text-center'> Add Instructors</h1>
            <Form>
                {/* Username */}
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name = "Name" type="text" placeholder="Enter Name" onChange={setInput1} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name= "Email" type="email" placeholder="Enter Email" onChange={setInput1}  required/>
                
                </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Department</Form.Label>
                    <Form.Control name = "Department" type="text" placeholder="Dept name" onChange={setInput1}  required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='signUpSubmit mt-4' onClick={()=> addInstructor()}>
                    Add Instructor
                </Button>
                
            </Form>



            <h1 className='text-center'>Add Courses</h1>
            <Form>
                {/* Username */}
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name = "Name" type="text" placeholder="Enter course name" onChange={setInput2} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Course Level</Form.Label>
                    <Form.Control name= "level" type="text" placeholder="Enter level" onChange={setInput2}  required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Course Code</Form.Label>
                    <Form.Control name = "code" type="text" placeholder="Enter Code" onChange={setInput2}  required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Department</Form.Label>
                    <Form.Control name = "Department" type="text" placeholder="Enter Dept" onChange={setInput2} required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='signUpSubmit mt-4' onClick={()=> addCourse()}>
                    Add Course
                </Button>

            </Form>


            <h1 className='text-center'>Add Course Resource</h1>
            <Form>
                {/* Username */}
                <Form.Group className="mb-3" >
                    <Form.Label>Resource Name</Form.Label>
                    <Form.Control name = "resname" type="text" placeholder="Enter course name" onChange={setInput3} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Resource Link</Form.Label>
                    <Form.Control name= "link" type="text" placeholder="Enter link/URL" onChange={setInput3}  required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Course Code relating to the resource</Form.Label>
                    <Form.Control name = "code" type="text" placeholder="Enter Code" onChange={setInput3}  required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Resource Type</Form.Label>
                    <Form.Control name = "type" type="text" placeholder="Enter Resource Type" onChange={setInput3} required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='signUpSubmit mt-4' onClick={()=> addResource()}>
                    Add Resource
                </Button>

            </Form>


            
            <h1 className='text-center'>Add Forms</h1>
            <Form>
                {/* Username */}
                <Form.Group className="mb-3" >
                    <Form.Label>Form/Tool Name</Form.Label>
                    <Form.Control name = "Name" type="text" placeholder="Enter form name" onChange={setInput4} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Link</Form.Label>
                    <Form.Control name= "link" type="text" placeholder="Enter link" onChange={setInput4}  required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control name = "category" type="text" placeholder="Enter category" onChange={setInput4}  required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Office Name</Form.Label>
                    <Form.Control name = "office" type="text" placeholder="Enter Office" onChange={setInput4} required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name = "desc" type="textbox" placeholder="Enter Description" onChange={setInput4} required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='signUpSubmit mt-4' onClick={()=> addForm()}>
                    Add Tool/Form
                </Button>



            </Form>


            <h1 className='text-center'>Add Event</h1>
            <Form>
                {/* Username */}
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name = "Name" type="text" placeholder="Enter event name" onChange={setInput5} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Event Type</Form.Label>
                    <Form.Control name= "type" type="text" placeholder="Enter type" onChange={setInput5}  required/>
                </Form.Group>



                {/* <Form.Group className="mb-3">
                    <Form.Label>Course Code</Form.Label>
                    <Form.Control name = "code" type="text" placeholder="Enter Code" onChange={setInput}  required/>
                </Form.Group> */}

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name = "desc" type="textbox" placeholder="Enter Description" onChange={setInput5} required/>
                </Form.Group>

                <Button variant="primary" type="submit" className='signUpSubmit mt-4' onClick={()=> addEvent()}>
                    Add Event
                </Button>



            </Form>
            
        </Container>





    );
}




export const Adminmodify = () => {

    // const course = data.map( item => i);

    const [returnedData, setReturnedData] = React.useState(['rsg']);
    // const [resource, delResource] = React.useState({_id: 0});

    // const setInput = (e) => {
    //     const{name,value} = e.target;

    //         delResource(prevState => ({
    //             ...prevState, [name]:parseInt(value)
    //         }))


    // }


    const delRes =  (id) => {
        console.log(id)
        const newData = fetch('/del' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({id})
            })
            

        }


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
                // console.log(newData);
                setReturnedData(newData);
    
            }
        fetchData();
        


        

    }, []);


    
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
                        <Button variant="primary">Go To Resource</Button>
                    </a>

                    <a className='mb-5'  target="_blank" rel="noreferrer">
                        <Button variant="secondary">Modify</Button>
                    </a>



                        <Button variant="primary" type="submit" className='signUpSubmit mt-4' onClick = {()=> delRes({id:item.Resource_id})}>Delete</Button>
                </Col>
            </Row>
        </Container>
        </div>
    ))};
    </div>
    )

    //
}

// export default Adminmain;

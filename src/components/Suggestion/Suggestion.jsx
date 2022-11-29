import React from 'react'
import {Button, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "./styles.css";
// import {useGlobalState} from '../../App';
import { useGlobalState } from '../Login/Login';


export const Suggestion = () => {

    const [state, dispatch] = useGlobalState();
    console.log(state.id);

    const [returnedData, setReturnedData] = React.useState(['addsugg']);
    const [Sugg,setSugg] = React.useState({Name:'', Link:'', Course: '', id:state.id})

    const setInput = (e) => {
        const{name,value} = e.target;

        setSugg(prevState => ({
            ...prevState, [name]:value
        }));

    }

    const createuser = async () => {
        const newData = await fetch('/addsugg' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...Sugg


            })
            })
            .then(res => res.json())
            console.log(newData);
            setReturnedData(newData[0]);
            alert(newData.result);

        }



    return (
        <Container className='fluid mb-4 suggestionBox mt-4'>
            <h1 className='text-center'>Suggest A Resource</h1>
            <Form>
                {/* Username */}
                <Form.Group className="mb-3" >
                    <Form.Label>Resource Name</Form.Label>
                    <Form.Control name = "Name" type="text" placeholder="Enter name" onChange = {setInput} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Resource Link</Form.Label>
                    <Form.Control name = "Link" type="text" placeholder="Enter Link" onChange = {setInput} required/>
                </Form.Group>

                {/* <Form.Group className="mb-3">
                    <Form.Label>Resource Category</Form.Label>
                    <Form.Control type="text" placeholder="Video Article Blog etc." required/>
                </Form.Group> */}

                <Form.Group className="mb-3">
                    <Form.Label>Course</Form.Label>
                    <Form.Control name = "Course" type="text" placeholder="For which course" onChange = {setInput} required/>
                </Form.Group>

                <Button variant="primary"  className='suggestSubmit mt-4' onClick = {()=> createuser()}>
                    Submit
                </Button>
                
            </Form>
            
        </Container>
    );
}

export default Suggestion;
import React from 'react'
import {Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "./styles.css";
import {Route ,  Navigate , useNavigate} from 'react-router-dom';
import Dashboard from './Dashboard'

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

let Globalstate = {
    loggedin: false,
    id: 0
  };
  
  const globalStateContext = React.createContext(Globalstate);
  const dispatchStateContext = React.createContext(undefined);
  
  const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer((
      (state, newValue) => ({ ...state, ...newValue })),
      Globalstate
    );
    console.log(state);
    return (
      <globalStateContext.Provider value={state}>
        <dispatchStateContext.Provider value={dispatch}>
          {children}
        </dispatchStateContext.Provider>
      </globalStateContext.Provider>
    );
    
  };
  
  
  const useGlobalState = () => [
    React.useContext(globalStateContext),
    React.useContext(dispatchStateContext)
  ];
  
  




export const Login = () =>  {
    const [returnedData, setReturnedData] = React.useState(['hello']);
    const [user,setUser] = React.useState({Email:'', Password:''});

    const navigate = useNavigate();
    // const history = useHistory();


    const setInput = (e) => {
        const{name,value} = e.target;
        if (name=== 'StdID'){
            setUser(prevState => ({
                ...prevState, [name]:parseInt(value)
            }))
            return;
        }

        setUser(prevState => ({
            ...prevState, [name]:value
        }));

    }

    const authentication = async () => {
        const newData = await fetch('/loginrequest' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...user

            })
            })
            .then(res => res.json())
            console.log(newData.result[0].Student_id);
            if (newData.status === 'success' && newData.result[0].Student_id=== 0) {
                navigate('/admin');  // yahan dashboard aye ga  
            }
            else if (newData.status === 'success') {
                
                // navigate('/dashboard');
                navigate('/dashboard', {state: { std_id: newData.result[0].Student_id} });
            }
            else {
                alert('Invalid Credentials');
            }
            setReturnedData(newData[0]);

        }


    return (
        <Container className='fluid mb-4 loginbox mt-4'>
            <h1 className='text-center'>Login</h1>
            <Form>
                {/* Username */}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name = "Email" type="email" placeholder="Enter Email" onChange={setInput} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="Password" type="password" placeholder="Password" onChange={setInput} required/>
                </Form.Group>

                <Button variant="primary" className='signUpSubmit mt-4' onClick={() => authentication()}>
                    Login
                </Button>

                <p className='text-center'>
                    Don't have an account? <br />
                    <Link to="/signup">Create one here</Link>
                </p>
                
            </Form>

            {/* <div>
            <Dashboard data={user}  />
                </div> */}
            
        </Container>


    );

}

export default Login;
export {GlobalStateProvider, useGlobalState};

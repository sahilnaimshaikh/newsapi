import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState , useEffect} from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios'
import {
  useNavigate
} from "react-router-dom";
// history = useHistory()
function Signup() {
  const history = useNavigate();
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [IncompleteDetails, setIncompleteDetails] = useState(false)
    const [LoggedIn, setLoggedIn] = useState(false)
    const submitHandler = async () => {
     
      if (!email || !password) {
        setIncompleteDetails(true)
        return;
      }
     
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "http://localhost:786/api/user/login",
          {
            email,
            password
          },
          config
        );
          // setisSignedup(true)
        console.log(data);
        
        localStorage.setItem("userInfo", JSON.stringify(data));
        // setPicLoading(false);
        history('/general')
        window.location.reload(false);

        setLoggedIn(true)

          
      } catch (error) {
        setIncompleteDetails(true)
      }
    };
  
    

    
  return (
    <div style={{ display: 'block', 
                  width: 400, 
                  margin: "auto",
                  padding: 30 ,
                  background:"#ceddff"}}>
    <h4>Login</h4>
    {IncompleteDetails && <Alert variant="danger" onClose={() => setIncompleteDetails(false)} dismissible>
        <Alert.Heading>Please Complete all the details</Alert.Heading>
        
      </Alert>}
    <Form>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>


     
      <Button variant="primary" onClick={submitHandler}>
        Login
      </Button>
    </Form>
    </div>
  );
}

export default Signup;
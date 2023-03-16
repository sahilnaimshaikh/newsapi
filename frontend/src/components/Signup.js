import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState , useEffect} from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios'




function Signup() {
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [IncompleteDetails, setIncompleteDetails] = useState(false)
    const [Wrongpassword, setWrongpassword] = useState(false)
    const [isSignedup, setisSignedup] = useState(false)
    const submitHandler = async () => {
     
      if (!name || !email || !password || !confirmPassword) {
        setIncompleteDetails(true)
        return;
      }
      if (password !== confirmPassword) {
        setWrongpassword(true)
        return;
      }
      
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "http://localhost:786/api/user/",
          {
            name,
            email,
            password
          },
          config
        );
          setisSignedup(true)
        // console.log(data);
        
        // localStorage.setItem("userInfo", JSON.stringify(data));
        // setPicLoading(false);
        // history.push("/chats");
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
    {IncompleteDetails && <Alert variant="danger" onClose={() => setIncompleteDetails(false)} dismissible>
        <Alert.Heading>Please Complete all the details</Alert.Heading>
        
      </Alert>}
    {Wrongpassword && <Alert variant="danger" onClose={() => setWrongpassword(false)} dismissible>
        <Alert.Heading>password mismatched</Alert.Heading>
        
      </Alert>}
    {isSignedup && <Alert variant="light" onClose={() => setisSignedup(false)} dismissible>
        <Alert.Heading>Successfully registered</Alert.Heading>
        
      </Alert>}
    <h4>Sign Up</h4>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} type="text" placeholder="Enter Your Name" onChange={(e)=>{setName(e.target.value)}}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control value={confirmPassword} type="password" placeholder="Password" onChange={(e)=>{setConfirmPassword(e.target.value)}} />
      </Form.Group>

     
      <Button variant="primary" onClick={submitHandler}>
        Sign-Up
      </Button>
    </Form>
    </div>
  );
}

export default Signup;
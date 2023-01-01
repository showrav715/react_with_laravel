import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ApiUrl from '../ApiUrl';
import { UseAuthCotext } from '../contexts/AuthContext';
export default function Login() {
  const {setToken,setUser,user} = UseAuthCotext();
  console.log(user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post(ApiUrl.loginUrl, {email,password})
  .then(res => {
    setUser({
      ...res.data.user,
     
    });
    setToken(res.data.token);
  })
  .catch(err => {
    const response = err.response;
    if (response && response.status === 422) {
      setErrors(response.data.errors)
    }
  })
  
}

  return (
    <>
      <div className='row'>
      <Form onSubmit={handleSubmit} className='border m-5 p-5'>
        <h3>
          Login
        </h3>
      
        {errors &&
            <div className="alert">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={handleEmail} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={handlePassword} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
        </Button>
        <Link to="/register" className='mx-3'>Register</Link>
    </Form>
    </div>
    </>
  )
}

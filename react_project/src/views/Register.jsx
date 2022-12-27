import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ApiUrl from '../ApiUrl';

export default function Register() {
  let navigate = useNavigate();

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleData = (event) => {
    var { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    }
    )
  }

  const submitData = (event) => {
    event.preventDefault();
    axios.post(ApiUrl.registerUrl, {
      username: data.username,
      email: data.email,
      password: data.password,
      confirm_password: data.confirmPassword

    })
    .then(function (response) {
      
      return navigate('/login');
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <div className="row">
        <Form onSubmit={submitData} className='border m-5 p-5'>
          <h3>
            Register
          </h3>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" name='username' onChange={(e) => handleData(e)} placeholder="Enter Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' onChange={(e) => handleData(e)} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' onChange={(e) => handleData(e)} placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name='confirmPassword' onChange={(e) => handleData(e)} placeholder="Confirm Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <Link to="/login" className='mx-3'>Login</Link>
        </Form>
        {/* {data} */}
      </div>
    </>
  )
}

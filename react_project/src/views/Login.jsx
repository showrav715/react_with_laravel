import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Login() {



  return (
    <>
      <div className='row'>
      <Form className='border m-5 p-5'>
        <h3>
          Login
        </h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
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

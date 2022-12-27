import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
      <div className="row">
      <Form className='border m-5 p-5'>
        <h3>
          Register
        </h3>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        
      <Button variant="primary" type="submit">
        Register
        </Button>
        <Link to="/login" className='mx-3'>Login</Link>
    </Form>
      </div>
    </>
  )
}

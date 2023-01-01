import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UseAuthCotext } from '../contexts/AuthContext';

export default function Profile() {
    const {user} = UseAuthCotext();
    console.log(user);
    const handleSubmit = (e) => {

    }
  return (
    <>
        <div className="row">
        <Form onSubmit={handleSubmit}>
     <Form.Group className="mb-3" controlId="username">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='username' onChange={(e) => handleData(e)} placeholder="Enter Username" value={user.name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' value={user.email} onChange={(e) => handleData(e)} placeholder="Enter email" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
          <Link to="/user" className='mx-3'>Back</Link>
        </Form>
        </div>
    </>
  )
}

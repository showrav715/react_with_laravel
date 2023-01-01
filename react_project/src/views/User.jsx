import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { UseAuthCotext } from '../contexts/AuthContext';

export default function User() {
  const {user,setToken} = UseAuthCotext();

  const haldleLogout = () => {
    setToken(null);
  }
  return (
    
    <>
    <ListGroup as="ul">
      <ListGroup.Item as="li">
        Name : {user.name}
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Email : {user.email}
      </ListGroup.Item>
      
    </ListGroup>
    <br />
    <Link to="/profile/edit" className='btn btn-primary mx-2'>Edit Profile</Link>
    <Button onClick={haldleLogout} variant="danger">Logout</Button>
    </>
  )
}

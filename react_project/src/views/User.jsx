import axios from 'axios';
import React, { useEffect } from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ApiUrl from '../ApiUrl';
import { UseAuthCotext } from '../contexts/AuthContext';

export default function User() {
  const { user,setUser, setToken, token } = UseAuthCotext();



  const haldleLogout = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios.post(ApiUrl.logoutUrl, {}, config)
      .then(res => {
        alert(res.data.message);
        setToken(null);
        setUser({});
      })

    
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

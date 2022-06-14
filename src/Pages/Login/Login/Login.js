import React, { useRef } from 'react';
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const hendleForm = event => {
    event.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password)
  }
  const navigateRagister = event => {
    navigate('/ragister')
  }

  return (
    <div className='container w-50 mx-auto'>
      <h1 className='text-primary text-center mt-3'>Please Login</h1>
      <Form onClick={hendleForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>New To Ginius Car? <span className='text-warning register-style' onClick={navigateRagister}>Please Ragister</span></p>
    </div>
  );
};

export default Login;
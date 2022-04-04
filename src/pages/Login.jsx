import React, {useReducer} from "react";
import Layout from "./shared/Layout";
import {Form, Button, Container, Alert} from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons"; 

import { useNavigate } from 'react-router-dom';

const Login = () => {

  //Initialize useNavigate
  let navigate = useNavigate();

  const initialState = {
    error: '',
    email: '',
    password: ''
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'field': {
        return {
          ...state,
          error: '',  //To clear the error
          [action.fieldName]: action.payload
        }
      }
      case 'error': {
        return {
          ...state,
          error: action.payload
        }
      }
      case 'clearErrorAlert': { //To clear the Error Alert each time a user clicks on it
        return {
          ...state,
          error: ''
        }
      }
      default:
        return state;
    }
  }

  const handleInputChange = (evt) => {
    console.log(`${evt.target.name} : ${evt.target.value}`);
    dispatch({ type: 'field', fieldName: evt.target.name, payload: evt.target.value})
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password } = state;
  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch('/api/login', {
      method: "POST",
      body: JSON.stringify({ email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);

      if(data.status === "Login OK") {
        console.log('LOGGED IN SUCCESSFULLY');
        //Set the user info in local storage
        localStorage.setItem("user", JSON.stringify(data.user));
        // Redirect User to Home page
        navigate('/',true)
      }
      else {
        console.log(data.error);
        dispatch({ type: 'error', payload: data.error})


      }
    })
  }

  return (
    <Layout>
        <Container fluid="md">
          <main className="mx-auto border rounded p-5 mt-5" style={{width:"90%"}}>
            <Form onSubmit={handleSubmit}>
              <h1>LOGIN</h1>

              {/* Login error */}
              {state.error? 
                <Alert variant="danger" onClick={(evt) => dispatch({type: 'clearErrorAlert'})} style={{cursor: "pointer", fontWeight: "700"}}>
                  {state.error}
               </Alert>
               : null
              }
                 
              <Form.Group controlId="formBasicEmail">
                <Form.Label size="lg">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-2">
                Login
              </Button>
              <span className="mx-2">
                <a className="forgotPassword" href="/forgotPassword" style={{fontWeight:"500"}}>
                  Forgot Password?
                </a>
              </span>
            </Form>

            <div className="socialLogin mt-2 ">
              {/* <Form> */}
                <Button variant="primary" type="submit">
                  <span> <Facebook size={22} /> </span>
                  <a href="/auth/facebook" style={{color:"white", textDecoration: "none"}} > Login with Facebook  </a>
                </Button>
              {/* </Form> */}

              <Form className="mt-1">
                <Button variant="danger" type="submit">
                  <span> <Google size={22} /> </span>
                  <a href="/auth/google" style={{color:"white", textDecoration: "none"}}> Login with Google  </a>
                </Button>
              </Form>
            </div>
          </main>
        </Container>
    </Layout>
  );
};

export default Login;

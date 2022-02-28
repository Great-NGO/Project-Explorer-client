import React from "react";
import Layout from "./shared/Layout";
import {Form, Button, Container} from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons"; 

const Login = () => {
  return (
    <Layout>
        <Container fluid="md">
          <main className="mx-auto border rounded p-5 mt-5" style={{width:"90%"}}>
            <Form method="POST" action="login" id="loginForm">
              <h1>LOGIN</h1>
              {/* {logErr &&
                logErr.map((err) => (
                  <Alert variant="danger" key={err}>
                    {err}
                  </Alert>
                ))} */}

              <Form.Group controlId="formBasicEmail">
                <Form.Label size="lg">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  // value={email}
                  name="email"
                  // onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  // value={password}
                  name="password"
                  // onChange={handleInputChange}
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

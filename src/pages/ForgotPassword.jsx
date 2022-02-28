import React from "react";
import Layout from "./shared/Layout";
import { Form, Button, Container, Alert } from "react-bootstrap";

const ForgotPassword = () => {


  return (
    <Layout>
      <>
        <Container fluid="md">
          <main className="border rounded p-5 mt-5" >
            <h1>Forgot Password?</h1>

     
            <Form method="post" action="/forgotPassword">
              
              <Alert variant="info">
                Enter your email address to begin the password reset process.
              </Alert>

              {/* {
                error&&error.map((err)=>(
              
                    <Alert variant="danger" key={err}>
                        {err}
                      </Alert>
                ))
              } */}


              <Form.Group controlId="formBasicEmail">
                <Form.Label size="lg">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                //   value={email}
                  name="email"
                //   onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-2">
                Submit
              </Button>
              <span className="mx-2">
                <a className="login" href='/login' style={{fontWeight:"500"}}>Login</a>
              </span>
            </Form>
          </main>
        </Container>
      </>
    </Layout>
  );
};
export default ForgotPassword;

import React from "react";
import Layout from "./shared/Layout";
import { Form, Col, Button, Container, Alert } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";

const Signup = () => {
  return (
    <Layout>
      <h1> PROJECT EXPLORER SIGNUP!</h1>
      <Container fluid="md">
        <main className="border rounded p-5 mt-5">
          <Form method="post" action="signup" id="signupForm">
            <h1>Sign Up</h1>
         
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name="firstName"

                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  
                  name="lastName"
                  
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                 
                  name="email"
                 
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                
                  name="password"
                 
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridProgram">
                <Form.Label>Program</Form.Label>
                <Form.Control
                  as="select"
  
                >
                  <option>Choose...</option>
             
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMatricNo">
                <Form.Label>Matriculation Number</Form.Label>
                <Form.Control
                  placeholder="e.g 16/2020"
                  // value={matricNumber}
                  name="matricNumber"
                  // onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGradYear">
                <Form.Label>Graduation Year</Form.Label>
                <Form.Control
                  as="select"
                  // defaultValue="Choose..."
                  // value={graduationYear}
                  name="graduationYear"
                  // onChange={handleInputChange}
                >
                  <option>Choose...</option>
                  {/* {gradYears &&
                      gradYears.map((gradYData) => (
                        <option key={gradYData}>{gradYData}</option>
                      ))} */}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <div className="socialLogin mt-3">
            {/* <Form> */}
            <Button variant="primary" type="submit">
              <span>
                {" "}
                <Facebook size={22} />{" "}
              </span>{" "}
              <a
                href="/auth/facebook"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Signup with Facebook{" "}
              </a>
            </Button>
            {/* </Form> */}

            <div className="mt-1">
              <Button variant="danger" type="submit">
                <span>
                  {" "}
                  <Google size={22} />{" "}
                </span>{" "}
                <a
                  href="/auth/google"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Signup with Google{" "}
                </a>
              </Button>
            </div>
          </div>
        </main>
      </Container>
    </Layout>
  );
};

export default Signup;

import React, { useState, useEffect } from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Col,
} from "react-bootstrap";
import { BellFill } from "react-bootstrap-icons";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Project Explorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/projects/submit">Submit</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};
export default Header;

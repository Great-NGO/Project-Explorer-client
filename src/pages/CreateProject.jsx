import React from "react";
import Layout from "./shared/Layout";
import { Container, Form, Button } from "react-bootstrap";

const CreateProject = () => {
  return (
    <Layout>
      <Container fluid="md ">
          <Form className="mx-auto w-75 border rounded p-5 mt-5" method="POST" action="/projects/submit" id="createProjectForm">
            <h1>Submit Project</h1>
            {/* {subErr &&
              subErr.map((err) => (
                <Alert variant="danger" key={err}>
                  {err}
                </Alert>
              ))} */}
            <Form.Group controlId="Form.ControlInput1">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project name"
                name="name"
                // value={name}
                // onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="Form.ControlTextarea1">
              <Form.Label>Project Abstract</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                name="abstract"
                // value={abstract}
                // onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="Form.ControlInput2">
              <Form.Label>Authors</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author names (separated by comma)"
                name="authors"
                // value={authors}
                // onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="Form.ControlInput3">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                placeholder="Use # to tag project with different topics (e.g. #javascript #mongodb)"
                name="tags"
                // value={tags}
                // onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
    </Layout>
  );
};

export default CreateProject;

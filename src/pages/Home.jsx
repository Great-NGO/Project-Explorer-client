import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import Layout from "./shared/Layout";

const Jumbotron = () => {
  return (
    <section className="p-5 mb-2 mt-3 bg-light border rounded-3 container ">
      <div className="container-fluid py-1">
        <h1 className="display-5 fw-bold">Welcome to Project Explorer</h1>
        <p className="col-md-12 fs-4">
          Project Explorer is a repository for final year projects across all
          departments at your institution. You can submit your project and
          search projects submitted by others to learn from.
        </p>
        <a className="me-2 btn btn-primary btn-md getStartedBtn" type="button" href="Signup">
          Get Started
        </a>
        <a className="btn btn-secondary btn-md loginBtn" type="button" href="Login">
          Login
        </a>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      {/* <h1> PROJECT EXPLORER HOME!</h1> */}

      <Layout>
        <>
          <Jumbotron />
          
          <Container fluid="md">
            <Row className="showcase">
              {/* {projects.slice(0, 4).map((project) => (
                  <Col key={project.id} className="projCard" size="md">
                    <Card
                      onClick={() => {
                        window.location.href = `Projects/${project.id}`;
                      }}
                    >
                      <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Link href="#">
                          {project.authors.join(",")}
                        </Card.Link>
                        <Card.Text>{project.abstract}</Card.Text>
                        <Card.Link href="#">
                          {" "}
                          {project.tags.join("#")}{" "}
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))} */}
            </Row>
          </Container>
          ;
        </>
      </Layout>
    </>
  );
};

export default Home;

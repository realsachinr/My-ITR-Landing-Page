import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { IoArrowUpCircle } from "react-icons/io5";

function Landing() {
  return (
    <Container>
      <Row className="mb-5">
        <Col className="text-center">
          <h1 style={{ fontSize: "3.5rem" }} className="fw-bold lh-1">
            India's leading Tax e-filing website
          </h1>
          <p className="text-gray">
            Filing the income tax return is so straightforward that users can
            easily fill and submit it on their own.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center gap-4">
        <Col md={5}>
          <Card className="shadow-lg rounded px-4 py-3">
            <Card.Body className="d-flex align-items-start">
              <img
                className="width-img"
                src="https://www.myitronline.com/build/assets/call-support-DMg_3X3d.svg"
                alt=""
              />
              <div className="ms-3">
                <Card.Title>Start ITR filing Yourself</Card.Title>
                <Card.Text>
                  We have changed the way people do tax filing in India. We
                  don’t just get your tax return filed within minutes but get
                  you maximum refunds in the shortest time.
                </Card.Text>
                <button className="button-bg">File ITR Now</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card className="shadow-lg rounded px-4 py-3">
            <Card.Body className="d-flex align-items-start">
              <img
                className="width-img"
                src="https://www.myitronline.com/build/assets/call-support-DMg_3X3d.svg"
                alt=""
              />
              <div className="ms-3">
                <Card.Title>Hire a Tax Expert Now</Card.Title>
                <Card.Text>
                  We have changed the way people do tax filing in India. We
                  don’t just get your tax return filed within minutes but get
                  you maximum refunds in the shortest time.
                </Card.Text>
                <button className="button-bg">Hire Expert Now</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center gap-5 mt-5" style={{ padding: "6rem" }}>
        <Col md="auto">
          <button className="button-blue">
            Upload Form16 Direct <IoArrowUpCircle className="fs-3" />
          </button>
        </Col>
        <Col md="auto">
          <button className="button-bg">Consultancy Free</button>
        </Col>
        <Col md="auto">
          <button className="button-bg">Generate Free Rent Receipt</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;

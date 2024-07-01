import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import SubmitForm from "./SubmitForm";
import StudentTable from "./StudentTable";

export default function Student() {
  return (
    <Container fluid>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className="grids">
        <Col md={12}><NavBar/></Col>
      </Row>

      <Row style={{marginTop:"30px"}}>
        <Col md={12}><SubmitForm/></Col>
      </Row>

      {/* <Row style={{marginTop:"30px"}}>
        <Col md={12}><StudentTable/></Col>
      </Row> */}



    </Container>
  );
}

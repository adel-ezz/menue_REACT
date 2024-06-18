import React from "react";
import { Col, Row } from "react-bootstrap";

export const Header = () => {
  return (
    <Row>
      <Col className="justify-content-center text-center" sm="12">
        <div className="title">قائمة الطعام</div>
        <div className="justify-content-center d-flex">
          <p className="underline"></p>
        </div>
      </Col>
    </Row>
  );
};

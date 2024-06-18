import React from "react";
import { Col, Row } from "react-bootstrap";

export const Category = (props) => {
  const onFilter = (cat) => {
    props.filterByCategory(cat);
  };
  console.log(props.allCateories);
  return (
    <Row className="my-2 mb-5"  >
      <Col sm="12" className="d-flex justify-content-center">
        {props.allCateories.map((cat) => {
          return (
            <div key={Math.random()}>
              <button
                onClick={() => onFilter(cat)}
                className="btn-element mx-2 font "
              >
                {cat}
              </button>
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

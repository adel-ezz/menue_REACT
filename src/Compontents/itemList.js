import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Card, Col, Row } from "react-bootstrap";

export const ItemList = (props) => {
  return (
    <Row>
      {props.itemData.length >= 1 ? (
        props.itemData.map((item) => {
          return (
            <Zoom>
              <Col key={Math.random()} sm="12" className="mb-3 card-color">
                <Card className="d-flex flex-row card-color">
                  <Card.Img
                    className="img-item"
                    variant="left"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price">{item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">{item.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد اي بيانات</h3>
      )}
    </Row>
  );
};

import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import "../App.css";

const Itemlist = ({ ItemData }) => {
  return (
    <Row>
      {ItemData.length >= 1 ? (
        ItemData.map((item) => {
          return (
            <Col key={item.id} sm="12" className="justify-content-center pt-3">
              <Card className="d-flex flex-row">
                <Card.Img className="imgs" variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="">{item.title}</div>
                    <div className="">{item.price}</div>
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3>There is nothing in menu</h3>
      )}
    </Row>
  );
};
export default Itemlist;

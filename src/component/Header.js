import React from "react";
import {
  NavDropdown,
  Navbar,
  Container,
  Nav,
  Form,
  Col,
  Row,
} from "react-bootstrap";
import "../App.css";

const Header = () => {
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center">
        <div className="title">Restaurant Menu</div>
        <div className="justify-content-center d-flex">
          <p className="underline"></p>
        </div>
      </Col>
    </Row>
  );
};
export default Header;

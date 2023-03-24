import React from "react";
import {
  NavDropdown,
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
} from "react-bootstrap";
import "../App.css";
import { useState } from "react";

const NavBar = ({ filterbySearch }) => {
  const [searchval, setsearchval] = useState("");

  const onSearch = () => {
    filterbySearch(searchval);
    setsearchval("");
  };
  return (
    <Row>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="brand-color">
            Restaurant
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search.."
                className="me-2"
                aria-label="Search"
                onChange={(e) => setsearchval(e.target.value)}
                value={searchval}
              />
              <Button onClick={() => onSearch("")} variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};
export default NavBar;

import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";

export const NavBar = (props) => {
  const[searchValue,setSearchValue]=useState('');
  const onSearch = (e) => {
    e.preventDefault();
    props.filterSarch(searchValue);
  };
  return (
    <Row>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم التحلية</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex"
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   onSearch();
            // }}
            >
              <Form.Control type="input" placeholder="بحث" className="mx-2" onChange={(e)=>{setSearchValue(e.target.value)}}  value={searchValue}/>
              <button className="btn-search"  onClick={onSearch}>
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

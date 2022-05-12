import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavigationBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container className={""}>
        <Navbar.Brand href="/">Techwa Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="/">Products</Nav.Link>
            <Nav.Link href="/adminDashboardHome">AdminHome</Nav.Link>
            <Nav.Link href="/adminDashboardMoter">AdminMoter</Nav.Link>
            <Nav.Link href="/userDashbaord">HomeDashboard</Nav.Link>
            <Nav.Link href="/userDashbaord1">UserDashboard</Nav.Link>
            <Nav.Link href="/employeeUserDashboard">EmployeeUserDashboard</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="/login">LogIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

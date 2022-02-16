import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar className="nav-bar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hikers</Navbar.Brand>
          <Nav className="nav-name">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Home;

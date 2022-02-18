import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import "./Profile.css";

function Profile() {
  return (
    <div className="main-wrapper">
      {/* <Navbar className="nav-bar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hikers</Navbar.Brand>
          <Nav className="nav-name">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <div className="photo-box"></div>
      <div className="container1">
        {" "}
        <div className="username">Username: </div>
        <div className="date-joined">Date-Joined : </div>
      </div>
      <div>
        <div className="div1">
          <h1 className="name">Name: </h1>
          <input className="name-input"></input>
        </div>
        <div className="div1">
          <h2 className="mobile">Mobile number :</h2>
          <input className="mobile-input"></input>
        </div>
        <div className="div1">
          <h3 className="email">Email :</h3>
          <input className="email-input" type="text" />
        </div>
        <div className="div1">
          <h4 className="pw">Password :</h4>
          <input className="pw-input"></input>
        </div>
      </div>
      <div>
        <button className="Save-Button">Save</button>
      </div>
    </div>
  );
}

export default Profile;

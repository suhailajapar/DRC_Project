import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import "./Profile.css";
import EditIcon from "@mui/icons-material/Edit";

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
      <form className="div1">
        <div className="photo-box"></div>
        <div className="container1">
          <div className="username">Username: </div>
          <div className="date-joined">Date-Joined : </div>
        </div>

        <label className="name">
          Name:
          <input className="name-input" />
        </label>
        <label className="mobile">
          Mobile number:
          <input className="mobile-input" />
        </label>
        <label className="email">
          Email:
          <input className="email-input" type="text" />
        </label>
        <label className="pw">
          Password: <input className="pw-input" />
        </label>
        <EditIcon />
        <button className="Save-Button">Save</button>
      </form>
    </div>
  );
}

export default Profile;

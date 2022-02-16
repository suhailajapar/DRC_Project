import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Login.css";

function Login() {
  return (
    <>
      <Navbar className="nav-bar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hikers</Navbar.Brand>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
        </Container>
      </Navbar>
      <Container className="form-container">
        <form className="login-form">
          <p className="title">Hikers Account Login</p>
          <p className="welcome-msg">Welcome back Hikers!</p>
          <div className="email-label">Email</div>
          <input className="email" placeholder="Email"></input>
          <div className="password-label">Password</div>

          <input className="password" placeholder="Password"></input>
          <button className="login-button" type="submit">
            Login
          </button>
          <div className="register-link">Not a member? Register Now</div>
        </form>
      </Container>
    </>
  );
}

export default Login;

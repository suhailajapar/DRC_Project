import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import "./Home.css";
import Marketpage from "./../Market/Market";
import { ReactComponent as Logo } from "./../../assets/Hikers Logo Asset/Hikers big (Dark mode)-shrink.svg";

function Home() {
  return (
    <>
      <div className="landingPage">
        <Navbar
          className="py-1 px-3 row justify-content-between"
          id="nav-barFlow"
          bg="dark"
          variant="dark"
        >
          <Nav className="col align-items-center">
            <a href="#home">
              <Logo className="logo-size" />
            </a>
            <Navbar.Brand className="pb-2 nav-title" href="#home">
              Hikers
            </Navbar.Brand>
            <Nav.Link
              className="px-0 text-white nav-text nav-subtitle"
              href="/Marketpage"
            >
              Market
            </Nav.Link>
          </Nav>

          <Nav className=" col justify-content-end">
            <Nav.Link
              className="text-white nav-text nav-subtitle"
              href="#features"
            >
              Login
            </Nav.Link>
            <div className="divider"></div>
            <Button
              variant="success"
              className="h-50 mt-1 p-1 nav-text nav-subtitle"
              href="#pricing"
            >
              Sign Up
            </Button>
          </Nav>
        </Navbar>

        <section className="lpage" id="four">
          <div>
            <h1>Hello</h1>
          </div>
        </section>
        <section className="lpage" id="three">
          <div>
            <h1>Hello</h1>
          </div>
        </section>
        <section className="lpage" id="two">
          <div>
            <h1>Hello</h1>
          </div>
        </section>
        <section className="lpage" id="one">
          <div>
            <h1>Hello</h1>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

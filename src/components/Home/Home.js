import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Home.css";

function Home() {
  // const [scroll, setScroll] = useState(false)
  return (
    <>
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

      <div className="landingPage">
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

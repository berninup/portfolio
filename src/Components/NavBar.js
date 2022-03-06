import { Card, Container, Image, Nav } from "react-bootstrap";

function NavBar() {
  

  return (
    <Nav className="fs-5 justify-content-center">
      <Nav.Item className="navHome">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navAbout">
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navContact">
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navProjects">
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;

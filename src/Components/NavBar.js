import { Card, Container, Image, Nav } from "react-bootstrap";

function NavBar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  return (
    <Nav className="fs-5">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;

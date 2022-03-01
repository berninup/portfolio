import { Card, Container, ListGroup } from "react-bootstrap";

function About() {
  return (
    <Container
      className="text-center"
      style={{ width: "50%", marginTop: "5%" }}
    >
      <Card>
        <Card.Body>
          <Card.Title className="fs-2">Chris Basham</Card.Title>
          <Card.Subtitle className="fs-4">Software Engineer</Card.Subtitle>
          <Card.Text className="fs-5">
            I'm a new software engineer always on the lookout for my next
            project, and another skill to pickup.
          </Card.Text>
          <Card.Text>Some Technologies I've picked up</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>HTML/CSS</ListGroup.Item>
            <ListGroup.Item>Javascript/Python</ListGroup.Item>
            <ListGroup.Item>JQuery/Ajax</ListGroup.Item>
            <ListGroup.Item>Node/Express</ListGroup.Item>
            <ListGroup.Item>MongoDB/Postgresql</ListGroup.Item>
            <ListGroup.Item>React/Django</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;

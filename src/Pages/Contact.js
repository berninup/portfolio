import { Card, Container, ListGroup } from "react-bootstrap";

function Contact() {
  return (
    <Container
      className="text-center"
      style={{ width: "50%", marginTop: "5%" }}
    >
      <Card>
        <Card.Body>
          <Card.Title>Contact Me!</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Email - <a href='mailto:chris.basham@live.com'>Chris.Basham@live.com</a></ListGroup.Item>
            <ListGroup.Item>LinkedIn - <a href='https://www.linkedin.com/in/chris-basham101/'>Here</a></ListGroup.Item>
            <ListGroup.Item>GitHub - <a href='https://github.com/berninup'>Here</a></ListGroup.Item>
           
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;

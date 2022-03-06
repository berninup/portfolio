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
          

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-line.svg" />


          
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;

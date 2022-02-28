import { Card, CardGroup, Container } from "react-bootstrap";

function Projects() {
  return (
    
      <CardGroup style={{ width: '100%'}}>
        <Card border="secondary">
          <Card.Link href="http://chris-basham.com">
            <Card.Img src="https://i.imgur.com/9EncsM8.png" />
          </Card.Link>
          <Card.Body>
            <Card.Title className="fs-2">PokeSprite</Card.Title>
            <Card.Text className="fs-4">
              My first project in the web development world. Using jQuery, Ajax and
              the PokeApi, search for you favorite Pokemon's regular and shiney
              sprite.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="secondary" style={{ width: "45rem" }}>
          <Card.Link href="http://warfinder.herokuapp.com">
            <Card.Img src="https://i.imgur.com/vnMUWBA.png" />
          </Card.Link>
          <Card.Body>
            <Card.Title className="fs-2">Warfinder</Card.Title>
            <Card.Text className="fs-4">
              A slightly more advanced project, using Node, Express and MongoDB.
              Warfinder is a work in progress card game I've been tinkering with
              for years.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    
  );
}

export default Projects;

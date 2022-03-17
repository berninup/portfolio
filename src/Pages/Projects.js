import { Card, CardGroup, Container } from "react-bootstrap";

function Projects() {
  return (
    <div>
      <CardGroup>
        <Card border="secondary">
          <Card.Link href="https://poke-sprite.netlify.app/">
            <Card.Img src="https://i.imgur.com/9EncsM8.png" />
          </Card.Link>
          <Card.Body>
            <Card.Title className="fs-2">PokeSprite</Card.Title>
            <Card.Text className="fs-4">
              My first project in the web development world. Using jQuery, Ajax and
              the PokeApi, search for you favorite Pokemon's regular and shiny
              sprite.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="secondary">
          <Card.Link href="http://warfinder.herokuapp.com">
            <Card.Img src="https://i.imgur.com/vnMUWBA.png" />
          </Card.Link>
          <Card.Body>
            <Card.Title className="fs-2">Warfinder</Card.Title>
            <Card.Text className="fs-4">
            This is a more advanced project using Node, Express, and MongoDB. Warfinder is a tool I built to help keep track of the card game I'm designing.

            </Card.Text>
          </Card.Body>
        </Card>
       </CardGroup>
   
      </div>
  );
}

export default Projects;

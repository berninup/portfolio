import { Card, Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

function TextBox() {
  const textBoxStyle = {
    
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    width: "800px",
    marginTop: '15%',
    fontSize: '30px',
    color: '#B8C5FE'
    
  };

  return (
    <div >
      <Container style={textBoxStyle}>
        
            
            <Typewriter
              options={{
                deleteSpeed: 0.1,
                cursor: '',
                
              }}
              onInit={(typewriter) =>
                typewriter
                  .typeString("Welcome Adventurer")
                  .pauseFor(2500)
                  .typeString(
                    `<br/>I see you seek a <strong>Mighty Developer</strong>.<br/>`
                  )
                  .pauseFor(1000)
                  .typeString(`Look above if you wish to learn more.`)
                  .stop()
                  .start()
                  
              }
            />
          
      </Container>
    </div>
  );
}
export default TextBox;

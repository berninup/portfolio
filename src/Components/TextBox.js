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
                  .pauseFor(2500)
                  .typeString(`Welcome To My Page<br/>`)
                  .pauseFor(2500)
                  .typeString(
                    ` It's still a mess here, so watch out.<br/>`
                  )
                  .pauseFor(1000)
                  .typeString(`You should find links somewhere above.`)
                  .stop()
                  .start()
                  
              }
            />
          
      </Container>
    </div>
  );
}
export default TextBox;

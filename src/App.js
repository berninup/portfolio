import "./App.css";
import NavBar from "./Components/NavBar";
import TextBox from "./Components/TextBox";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const footer = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    textAlign: "right",
  };

  return (
    <div className="App">
      <NavBar />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        
      </Switch>
      <div style={footer}>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import "animate.css";
import NavBar from "./Components/NavBar";
import TextBox from "./Components/TextBox";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/skills"} className="nav-link">
                  Skills
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={TitlesAndIcons} />
            <Route path="/contact" component={AboutSection} />
            <Route path="/about" component={SkillSection} />
          </Switch>
        </div>
      </Router> */}
      <div className="navigation" />
      <TitlesAndIcons />
      <AboutSection />
      <SkillSection />
    </div>
  );
}

export default App;

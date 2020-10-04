import React from "react";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import ExperienceSection from "./sections/ExperienceSection";
import NavCom from "./components/NavCom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="colorIcon">
        <img src="color.png" />
      </div>
      <title>adele nademi</title>
      <NavCom />
      <TitlesAndIcons />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
    </div>
  );
}

export default App;

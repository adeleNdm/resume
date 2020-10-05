import React, { Component } from "react";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import ExperienceSection from "./sections/ExperienceSection";
import NavCom from "./components/NavCom";
import SnowStorm from "react-snowstorm";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background_first: "mistyrose",
      title_color:"steelblue",
      counter: 0,
    };
  }
  changeColor = () => {
    let rang = ["#e1bee7", "#ffecb3", "#c8e6c9", "#ff8a80"];
    let rang_2 = ["#6e709b", "#9d8fb3", "#8c97a1","#5d6eb3"];

    if (this.state.counter == 4) {
      this.setState({
        background_first: "mistyrose",
        title_color:"steelblue",
        counter:0
      });
    } else this.setState({
      background_first: rang[this.state.counter],
      title_color:rang_2[this.state.counter],
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <div className="App">
        <SnowStorm
          animationInterval={120}
          snowCharacter={"*"}
          vMaxY={2}
          vMaxX={2}
        />
        <NavCom />
        <div 
          className="colorIcon"
          onClick={() => {
            this.changeColor();
          }}
        >
          <img src="color.png"></img>
        </div>
        <title>adele nademi</title>
        <TitlesAndIcons background={this.state.background_first}
        title_color={this.state.title_color} />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
      </div>
    );
  }
}

export default App;

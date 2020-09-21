import React, { Component } from "react";
import Fullpage from "../components/FullPage";
import data from "../data.json";
import "./AboutSection.css";
class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="second">
        <h3>{data.sections[0].title}</h3>
        <div className="paragraphs">
          {data.sections[0].items.map((p) => {
            return (
              
              <p className="contentSize">
                {p.content} <br />
                {p.content1}
              </p>
            );
          })}
        </div>
      </Fullpage>
    );
  }
}

export default AboutSection;

import React, { Component } from "react";
import Fullpage from "../components/FullPage";
import DownIcon from "../components/DownIcon";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesAndIcons.css";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
class TitlesAndIcons extends Component {
  state = {
    color: "steelblue",
  };
  changeColor = () => {
    this.setState({
      color: this.state.color === "steelblue" ? "white" : "steelblue",
    });
  };
  render() {
    return (
      <div>
        <Fullpage className="first">
          <h1
            className="title"
            style={{ color: this.state.color }}
            onMouseOver={() => {
              this.changeColor();
            }}
            onMouseLeave={() => {
              this.changeColor();
            }}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icon-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
          <div>
            <h2>{data.contact}</h2>
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={300}
        >
          <DownIcon icon={data.icons.down} onClick={() => console.log("im")} />
        </Link>
        <Element name="about" className="element"></Element>
      </div>
    );
  }
}

export default TitlesAndIcons;

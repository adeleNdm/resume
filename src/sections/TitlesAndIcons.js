import React, { Component } from "react";
import Fullpage from "../components/FullPage";
import DownIcon from "../components/DownIcon";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesAndIcons.css";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form , Container } from "react-bootstrap";
import {
  Link,
  Element,
  animateScroll as scroll,
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
          <Container>
            <Row>
              <Col>
         <img src={data.icons.profile} alt="adele nademi"/>
          <h1 
            className="title text-responsive mb-5"
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
          <div className="text-responsive-subt">
            <strong>{data.subtitle}</strong>
          </div>
          <div className="icon-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon ">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
          <div className="text-responsive-subt">
            <strong>{data.contact}</strong>
          </div>
          </Col>
          </Row>
          </Container>
        </Fullpage>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={50}
          duration={400}
          delay={300}
        >
          <DownIcon icon={data.icons.down} onClick={() => console.log("im")} />
        </Link>
        <Element name="About" className="element"></Element>
      </div>
    );
  }
}

export default TitlesAndIcons;

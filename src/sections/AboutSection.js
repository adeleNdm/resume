import React, { Component } from "react";
import Fullpage from "../components/FullPage";
import data from "../data.json";
import "./AboutSection.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
class AboutSection extends Component {
  render() {
    return (
      <div id="About">
        <Fullpage className="second">
          <Container>
            <Row>
            <Col>
              <h4 className="text-responsive"><strong>{data.sections[0].title}</strong></h4>
              <hr className="hr"></hr>
              
              <div className="paragraphs text-responsive-subt">
                {data.sections[0].items.map((p) => {
                  return (
                    <p>
                      {p.content} <br />
                      {p.content1}
                    </p>
                  );
                })}
              </div>
            </Col></Row>
          </Container>
        </Fullpage>
      </div>
    );
  }
}

export default AboutSection;

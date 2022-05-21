import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import ThinkingIconDesktop from "./Thinking_svg_desktop";
import ThinkingIconMobile from "./Thinking_svg_mobile";
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="about-section1" style={{ justifyContent: "center", padding: "5px" }}>
          <Col
            md={6}
            className="about-section1-text"
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className="about-img"
          >
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
            <MediaContextProvider>
                <Media greaterThan="sm">
                  <ThinkingIconDesktop />
                </Media>
                <Media lessThan="lg">
                  <ThinkingIconMobile />
                </Media>
              </MediaContextProvider>
          </Col>
        </Row>
        <div className="about-section2">
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        </div>
      </Container>
    </Container>
  );
}

export default About;

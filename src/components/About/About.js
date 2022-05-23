import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import ThinkingIconDesktop from "./Thinking_svg_desktop";
import ThinkingIconMobile from "./Thinking_svg_mobile";
import { createMedia } from "@artsy/fresnel";
import Fade from "react-reveal/Fade";

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
        <Row className="about-section1">
          <Col md={6} className="about-section1-text">
            <Fade top duration={1500}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
            </Fade>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <Fade delay={200} duration={4000}>
              <MediaContextProvider>
                <Media greaterThan="sm">
                  <ThinkingIconDesktop />
                </Media>
                <Media lessThan="lg">
                  <ThinkingIconMobile />
                </Media>
              </MediaContextProvider>
            </Fade>
          </Col>
        </Row>

        <div className="about-section2">
          <Fade bottom>
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
          </Fade>
          <Techstack />
          <Fade bottom>
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
          </Fade>
          <Toolstack />
        </div>
      </Container>
    </Container>
  );
}

export default About;

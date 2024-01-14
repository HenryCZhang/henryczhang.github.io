import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { createMedia } from "@artsy/fresnel";
import Fade from "react-reveal/Fade";
import henry from "../../Assets/professional_2.png";
import Tilt from 'react-parallax-tilt';
import TypingIconDesktop from "./Typing_svg_desktop";
import TypingIconMobile from "./Typing_svg_mobile";
import { useSpring, animated } from "react-spring";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});


function About() {

  const animated1 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0},
    to: [{ opacity: 1 }],
  });

  
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="about-section1">
          <Col md={7} className="about-section1-text">
            <Fade top>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
            </Fade>
            <Fade bottom>
            <Aboutcard />
            </Fade>
          </Col>
          <Col md={5} className="about-img">
            <Fade right delay={500}>
              <MediaContextProvider>
                <Media greaterThan="sm">
                  <Tilt className="myAvatar">
              <img src={henry} className="img-fluid" alt="henry_sax" />
              </Tilt>
                </Media>
                <Media lessThan="lg">
                  <Tilt className="myAvatar">
              <img src={henry} className="img-fluid" alt="henry_sax" />
              </Tilt>
                </Media>
              </MediaContextProvider>
            </Fade>
          </Col>
        </Row>

        <Fade bottom>
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

        <animated.div style={animated1}>
         <div className="TypingSVGContainer">
                <MediaContextProvider>
                  <Media greaterThan="sm">
                    <TypingIconDesktop />
                  </Media>
                  <Media lessThan="lg">
                    <TypingIconMobile />
                  </Media>
                </MediaContextProvider>
              </div>
              </animated.div>
              </Fade>
      </Container>
    </Container>
  );
}

export default About;

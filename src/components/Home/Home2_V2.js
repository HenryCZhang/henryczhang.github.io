import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillWechat } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import wechatContact from "../../Assets/wechatContact.JPG";
import Fade from "react-reveal/Fade";
import { createMedia } from "@artsy/fresnel";
import Image from "react-bootstrap/Image";
import { useSpring, animated } from "react-spring";
import henry_sax from "../../Assets/henry_sax.png";
import Tilt from 'react-parallax-tilt';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

function Home2() {
  const animated1 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, y: -50 },
    to: [{ opacity: 1, y: 0 }],
  });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Fade bottom>
          <div md={9} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>Brief Introduction</h1>
            <h2 className="home-about-intro">
              <span className="goldText letterSpacing">
                Business Process Management
              </span>{" "}
              matters more than ever in an era where{" "}
              <span className="goldText letterSpacing">success</span> is defined
              by the speed of innovation . We are drenched with rich
              information. Yet, without esoteric{" "}
              <span className="goldText letterSpacing">Data Analysis</span>{" "}
              skills, we cannot turn information into useful meaning for our
              lives.
            </h2>
            <Container fluid>
              <Row className="university-about-box">
                <Col md={3} className="university-logo-container">
                  <Image
                    src="/Utoronto.png"
                    width="100%"
                    height="auto"
                    fluid
                    alt="UtorontoLogo"
                    data-tip
                    data-for="UofT"
                  />
                </Col>
                <Col>
                  <h3 style={{ textAlign: "center" }}>
                    Master of{" "}
                    <span
                      style={{
                        borderBottom: "2px solid rgba(197, 115, 230, 0.883)",
                      }}
                    >
                      Information
                    </span>
                  </h3>
                  <p style={{ fontSize: "1.1rem" }}>2023-2025</p>
                  <ul
                    style={{
                      textAlign: "left",
                      fontSize: "1.3rem",
                    }}
                  >
                    <li>Requirements Gathering</li>
                    <li>Business Process Reengineering</li>
                    <li>Stakeholder Engagement</li>
                    <li>Systems Analysis for Operational Improvement</li>
                  </ul>
                </Col>
              </Row>
              <Row className="university-about-box">
                <Col md={3} className="university-logo-container">
                  <Image
                    src="/westernLogo.png"
                    width="100%"
                    height="auto"
                    fluid
                    alt="westernLogo"
                    data-tip
                    data-for="UWO"
                  />
                </Col>
                <Col className="university-about-text">
                  <h3 style={{ textAlign: "center" }}>
                    Bachelor of{" "}
                    <span
                      style={{
                        borderBottom: "2px solid rgba(197, 115, 230, 0.883)",
                      }}
                    >
                      Software Engineering
                    </span>
                  </h3>
                  <p style={{ fontSize: "1.1rem" }}>2019-2023</p>
                  <ul
                    style={{
                      textAlign: "left",
                      fontSize: "1.3rem",
                    }}
                  >
                    <li>Requirement Specification + Solution Proposal</li>
                    <li>Software Design + Development + Documentation</li>
                    <li>Software Testing + Debugging</li>
                    <li>Software Development Life Cycle Management</li>
                    <li>
                      Java, JS (TS), Python, SQL, C++, Git, OS, React, Cloud
                      Computing...
                    </li>
                  </ul>
                </Col>
              </Row>

              <ReactTooltip
                id="UofT"
                fontSize="large"
                backgroundColor="#c770f0"
              >
                <span style={{ fontSize: "large" }}>Toronto University</span>
              </ReactTooltip>
              <ReactTooltip id="UWO" fontSize="large" backgroundColor="#c770f0">
                <span style={{ fontSize: "large" }}>
                  University of Western Ontario
                </span>
              </ReactTooltip>
            </Container>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <animated.div style={animated1}>
<MediaContextProvider>
                  <Media greaterThan="sm">
                  <Tilt className="myAvatar">
              <img src={henry_sax} className="img-fluid" style={{width:"40%"}} alt="henry_sax" />
              </Tilt>
                  </Media>
                  <Media lessThan="lg">
                  <Tilt className="myAvatar">
              <img src={henry_sax} className="img-fluid" alt="henry_sax" />
              </Tilt>
                  </Media>
                </MediaContextProvider>
           
            </animated.div>
          </div>
        </Fade>

        <Fade bottom>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p style={{ fontSize: "1.1rem" }}>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/HenryCZhang"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/henry-zhang-uwo/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <div
                    href="weixin://dl/chat?henry137589"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillWechat data-tip data-for="wechat" />
                  </div>
                </li>
                <MediaContextProvider>
                  <Media greaterThan="sm">
                    <ReactTooltip
                      id="wechat"
                      fontSize="large"
                      backgroundColor="none"
                      place="bottom"
                    >
                      <img style={{ width: "15rem" }} src={wechatContact} />
                    </ReactTooltip>
                  </Media>
                  <Media lessThan="lg">
                    <ReactTooltip
                      id="wechat"
                      fontSize="large"
                      backgroundColor="none"
                      place="top"
                    >
                      <img style={{ width: "15rem" }} src={wechatContact} />
                    </ReactTooltip>
                  </Media>
                </MediaContextProvider>
              </ul>
              <p className="home2-bottom-contact">(+1) 519-701-1804</p>
              <p className="home2-bottom-contact">henry.hzc418@gmail.com</p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </Container>
  );
}
export default Home2;

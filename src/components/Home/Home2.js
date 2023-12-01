import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headshot from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillWechat } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import wechatContact from "../../Assets/wechatContact.JPG";
import Fade from "react-reveal/Fade";
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Fade bottom>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
              Emerging expert in bridging the divide between technical and
                non-technical teams. Proficient in blending IT acumen with
                business insights to <b className="purple">optimize processes, drive strategic
                decisions,</b> and <b className="purple">create human-centric solutions</b>. My mission is to
                create an environment where technology <b className="purple">enhances the human
                experience,</b> making businesses more <b className="purple">efficient</b> and{" "}
                <b className="purple">customer-centric</b>.{" "}
                <br />
                <br />
                Currently pursuing my{" "}
                  <b className="purple">Master of Information</b>{" "}
                degree at{" "}
                  <b className="purple">Toronto University, Canada</b>.
                <br />
                <br />Completed my{" "}
                  <b className="purple">Bachelor of Software Engineering</b>{" "}
                degree at{" "}
                  <b className="purple">Western University, Canada</b>.
                <br />
                <br />
                My fields of Interest are building new &nbsp;
                  <b className="purple">
                    Full Stack Web & Mobile Technologies and Products{" "}
                  </b>{" "}
                and also in areas related to{" "}
                  <b className="purple">Business & Data Analytics</b>.
                <br />
                <br />I am fluent in classics like
                  <b className="purple">
                    {" "}
                    JavaScript (TypeScript), HTML, CSS, SQL, and Java</b>.{" "}
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <div className="myAvtarContainer">
                  <img src={headshot} className="img-fluid" alt="avatar" />
                </div>
              </Tilt>
            </Col>
          </Row>
        </Fade>
        <Fade bottom>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
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
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <div
                    href="weixin://dl/chat?henry137589"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
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

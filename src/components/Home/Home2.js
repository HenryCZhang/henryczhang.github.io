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
                I am currently pursuing my <i><b className="purple">Master of Information</b></i>{" "} 
                degree at{" "}
                <i>
                  <b className="purple">Toronto University, Canada.</b>
                </i>
                <br />
                <br />
                I completed my <i><b className="purple">Bachelor of Software Engineering</b></i>{" "} 
                degree at{" "}
                <i>
                  <b className="purple">Western University, Canada.</b>
                </i>
                <br />
                <br />
                My fields of Interest are building new &nbsp;
                <i>
                  <b className="purple">
                    Full Stack Web & Mobile Technologies and Products{" "}
                  </b>
                </i>{" "}
                and also in areas related to{" "}
                <i>
                  <b className="purple">Business & Data Analytics.</b>
                </i>
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> JavaScript (TypeScript), HTML, CSS, MySQL, and Java. </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing software
                products with{" "}
                <i>
                  <b className="purple">Node.js</b>
                </i>{" "}
                and
                <i>
                  <b className="purple">
                    {" "}
                    Modern FS web dev library and frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> Next.js and Angular.js.</b>
                </i>
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
            </Col>
          </Row>
        </Fade>
      </Container>
    </Container>
  );
}
export default Home2;

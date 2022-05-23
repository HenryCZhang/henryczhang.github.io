import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/meDark.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillWechat
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import wechatContact from "../../Assets/wechatContact.JPG";
import Fade from 'react-reveal/Fade';

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
            I’m currently pursuing my Bachelor of Software Engineering degree at <i><b className="purple">Western University, Canada</b></i> 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, HTML, CSS and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Full Stack Web & Mobile Technologies and Products </b>
                </i> and
                also in areas related to{" "}
                <i>
                <b className="purple">
                  Business Analytics.
                </b>
                </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Angular.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="myAvtarContainer">
                <img src={myImg} className="img-fluid" alt="avatar" />
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
                  <AiFillWechat data-tip data-for="wechat"/>
                </div>
              </li>
              <ReactTooltip
              id="wechat"
              fontSize="large"
              backgroundColor="none"
              place="bottom"
            >
              <img style={{width:"15rem"}} src={wechatContact} />
            </ReactTooltip>
            </ul>
          </Col>
        </Row>
        </Fade>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiXcode,
} from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";
import { FaUnity } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import Fade from "react-reveal/Fade";

function Toolstack() {
  return (
    <>
      <Fade bottom>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col
            xs={4}
            md={2}
            className="tech-icons"
            data-tip
            data-for="wordpress"
          >
            <BsWordpress />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="vsc">
            <SiVisualstudiocode />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="android">
            <AiFillAndroid />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="xcode">
            <SiXcode />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="postman">
            <SiPostman />
          </Col>
        </Row>
      </Fade>

      <Fade bottom>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="heroku">
            <SiHeroku />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="unity">
            <FaUnity />
          </Col>
        </Row>
      </Fade>

      <ReactTooltip id="wordpress" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>WordPress</span>
      </ReactTooltip>
      <ReactTooltip id="vsc" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Visual Studio Code</span>
      </ReactTooltip>
      <ReactTooltip id="android" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Android Studio</span>
      </ReactTooltip>
      <ReactTooltip id="xcode" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Xcode</span>
      </ReactTooltip>
      <ReactTooltip id="postman" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Postman</span>
      </ReactTooltip>
      <ReactTooltip id="heroku" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Heroku</span>
      </ReactTooltip>
      <ReactTooltip id="unity" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Unity Engine</span>
      </ReactTooltip>
    </>
  );
}

export default Toolstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { BsWordpress } from "react-icons/bs";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiAngularSimple,
} from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiPytorch, SiTensorflow, SiFirebase, SiIonic } from "react-icons/si";
import ReactTooltip from "react-tooltip";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="js">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="java">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="node">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="react">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="angular">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="wordpress">
        <BsWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="ionic">
        <SiIonic />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="cpp">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="github">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="firebase">
        <SiFirebase />
      </Col>
      <ReactTooltip id="react" fontSize="large" backgroundColor="#c770f0">
      <span style={{ fontSize: "large" }}>React</span>
      </ReactTooltip>
      <ReactTooltip id="angular" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Angular</span>
      </ReactTooltip>
      <ReactTooltip id="ionic" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Ionic</span>
      </ReactTooltip>
      <ReactTooltip id="java" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Java</span>
      </ReactTooltip>
      <ReactTooltip id="node" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Node</span>
      </ReactTooltip>
      <ReactTooltip id="js" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>JavaScript</span>
      </ReactTooltip>
      <ReactTooltip id="cpp" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>C++</span>
      </ReactTooltip>
      <ReactTooltip id="wordpress" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Wordpress</span>
      </ReactTooltip>
      <ReactTooltip id="firebase" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Firebase</span>
      </ReactTooltip>
      <ReactTooltip id="github" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Github</span>
      </ReactTooltip>
      <ReactTooltip id="figma" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Figma</span>
      </ReactTooltip>
      <ReactTooltip id="postman" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Postman</span>
      </ReactTooltip>
    </Row>
  );
}

export default Techstack;

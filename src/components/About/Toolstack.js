import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiGooglecloud,
  SiDocker,
  SiJirasoftware,
  SiKubernetes,
  SiMysql
} from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { FaUnity } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import Fade from "react-reveal/Fade";

function Toolstack() {
  return (
    <>
      <Fade bottom>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="vsc">
            <SiVisualstudiocode />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="gcp">
            <SiGooglecloud />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="docker">
            <SiDocker />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="kubernetes">
            <SiKubernetes />
          </Col>
     
        </Row>
      </Fade>

      <Fade bottom>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="mysql-workbench">
            <SiMysql />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="jira-software">
            <SiJirasoftware />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="postman">
            <SiPostman />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-tip data-for="unity">
            <FaUnity />
          </Col>
        </Row>
      </Fade>

    
      <ReactTooltip id="vsc" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Visual Studio Code</span>
      </ReactTooltip>
      <ReactTooltip id="gcp" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Google Cloud Platform</span>
      </ReactTooltip>
      <ReactTooltip id="docker" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Docker</span>
      </ReactTooltip>
      <ReactTooltip id="kubernetes" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Kubernetes</span>
      </ReactTooltip>

      <ReactTooltip id="mysql-workbench" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Mysql Workbench</span>
      </ReactTooltip>
      <ReactTooltip id="jira-software" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Jira Software</span>
      </ReactTooltip>
      <ReactTooltip id="postman" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Postman</span>
      </ReactTooltip>
      <ReactTooltip id="unity" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Unity Engine</span>
      </ReactTooltip>
    </>
  );
}

export default Toolstack;

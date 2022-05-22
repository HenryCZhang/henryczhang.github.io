import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFirebase,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";
import {
  DiLinux
} from "react-icons/di";

import { FaLinux } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import ReactTooltip from "react-tooltip";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="linux">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>

      <ReactTooltip id="linux" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Postman</span>
      </ReactTooltip>
    </Row>
  );
}

export default Toolstack;

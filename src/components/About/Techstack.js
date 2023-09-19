import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,
  DiAngularSimple,
} from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { FaJava, FaLinux } from "react-icons/fa";
import { SiMysql, SiFirebase, SiIonic, SiCisco, SiPrisma, SiNextdotjs, SiTailwindcss, SiTypescript, SiPython } from "react-icons/si";
import ReactTooltip from "react-tooltip";
import Fade from 'react-reveal/Fade';

function Techstack() {
  return (
    <>
    <Fade bottom>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="ts">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="node">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="python">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="mysql">
        <SiMysql />
      </Col>
      
      </Row>
      </Fade>

      <Fade bottom>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="prisma">
        <SiPrisma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="tailwind">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="java">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="cpp">
        <CgCPlusPlus />
      </Col>
      </Row>
      </Fade>

      <Fade bottom>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons" data-tip data-for="nextjs">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="react">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="github">
        <AiFillGithub />
      </Col>
      </Row>
      </Fade>

      <Fade bottom>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons" data-tip data-for="angular">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="ionic">
        <SiIonic />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="linux">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="cisco">
        <SiCisco />
      </Col>
      </Row>
      </Fade>

{/* Row 1 Tooltip */}
      <ReactTooltip id="ts" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>TypeScript</span>
      </ReactTooltip>
      <ReactTooltip id="node" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Node</span>
      </ReactTooltip>
      <ReactTooltip id="python" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Python</span>
      </ReactTooltip>
      <ReactTooltip id="mysql" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>MYSQL</span>
      </ReactTooltip>
{/* Row 2 Tooltip */}
      <ReactTooltip id="prisma" fontSize="large" backgroundColor="#c770f0">
      <span style={{ fontSize: "large" }}>Prisma</span>
      </ReactTooltip>
      <ReactTooltip id="tailwind" fontSize="large" backgroundColor="#c770f0">
      <span style={{ fontSize: "large" }}>Tailwind CSS</span>
      </ReactTooltip>
      <ReactTooltip id="cpp" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>C++</span>
      </ReactTooltip>
      <ReactTooltip id="linux" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Linux</span>
      </ReactTooltip>
{/* Row 3 Tooltip */}
<ReactTooltip id="nextjs" fontSize="large" backgroundColor="#c770f0">
      <span style={{ fontSize: "large" }}>Next.js</span>
      </ReactTooltip>
      <ReactTooltip id="react" fontSize="large" backgroundColor="#c770f0">
      <span style={{ fontSize: "large" }}>React</span>
      </ReactTooltip>
      <ReactTooltip id="firebase" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Firebase</span>
      </ReactTooltip>
      <ReactTooltip id="github" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Github</span>
      </ReactTooltip>
{/* Row 4 Tooltip */}
      <ReactTooltip id="angular" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Angular</span>
      </ReactTooltip>
      <ReactTooltip id="ionic" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Ionic</span>
      </ReactTooltip>
      <ReactTooltip id="java" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Java</span>
      </ReactTooltip>
      <ReactTooltip id="cisco" fontSize="large" backgroundColor="#c770f0">
        <span style={{ fontSize: "large" }}>Cisco</span>
      </ReactTooltip>
    {/* </Row> */}
    </>
  );
}

export default Techstack;

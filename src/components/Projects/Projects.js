import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import autoGo from "../../Assets/Projects/AutoGo.png";
import treasureHunter from "../../Assets/Projects/THDay.png";
import sortingAlgorithm from "../../Assets/Projects/sortingWebsite.png";
import groops from "../../Assets/Projects/groops.png";
import motif from "../../Assets/Projects/motif.png";
import iot from "../../Assets/Projects/iot.png";
import annaLibrary from "../../Assets/Projects/annaLibrary.png";
import Fade from "react-reveal/Fade";
import { useSpring, animated } from "react-spring";

import { createMedia } from "@artsy/fresnel";
import ThinkingIconDesktop from "./Thinking_svg_desktop";
import ThinkingIconMobile from "./Thinking_svg_mobile";

function Projects() {
  const animated1 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, y: -50 },
    to: [{ opacity: 1, y: 0 }],
  });

  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1192,
    },
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <animated.div style={animated1}>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
        </animated.div>
        <Fade bottom>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              padding: "10px",
              borderTop: "2px solid #c770f0",
              borderBottom: "2px solid #c770f0",
              display: "inline-block",
            }}
          >
            Business Analytics Works
          </h4>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={annaLibrary}
                isPDFLink={true}
                title="Anna's Library"
                description={
                  <div>
                    <span style={{ color: "#c770f0", fontWeight: "bold" }}>
                      System Analysis & Process Innovation
                    </span>
                    <br />
                    Conducted a comprehensive systems analysis of Anna Library
                    at King's University, utilizing BPMN and DFD modelling.
                    Proposed innovative solutions, including automation and
                    user-centric features, highlighting skills in business
                    systems analysis and process innovation.
                  </div>
                }
                pdfLink="https://drive.google.com/drive/folders/1n2Mo2O9ac94MHC_zKsAjhe1uGErGuDbI?usp=sharing"
              />
            </Col>
          </Row>

          <h4
            style={{
              color: "white",
              padding: "10px",
              borderTop: "2px solid #c770f0",
              borderBottom: "2px solid #c770f0",
              display: "inline-block",
            }}
          >
            Software Engineering Works
          </h4>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={groops}
                isGithub={true}
                title="Groops"
                description="Groops offers a diverse range of Asian groceries through an accessible online platform for individuals and organizations. Users can initiate group purchases and earn rewards, fostering community and convenience."
                githubLink="https://github.com/HenryCZhang/GroopsApiTest"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={sortingAlgorithm}
                isGithubRight={true}
                isDemo={true}
                title="Sorting Algorithms Playground"
                description="An educational website, gamifying the learning experience to aid programmers in comprehending sorting algorithms effectively."
                demoLink="https://sortingalgorithmgame.web.app/"
                githubLink="https://github.com/HenryCZhang/Sorting-Algorithms-Playground"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={autoGo}
                isGithub={true}
                title="AutoGo"
                description="User-friendly mobile app for automotive rental and leasing, proudly showcasing the power of Ionic App Platform technologies like Ionic Framework, Capacitor, and various plugins."
                githubLink="https://github.com/HenryCZhang/AutoGo-Angular"
              />
            </Col>
          </Row>

          <Row>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={motif}
                imgCenter="center"
                imgWidth="80%"
                isGithub={true}
                title="Motif"
                description="An iPhone app designed for easy motion sensor data recording. Its versatile applications include crucial functions like structural health monitoring (SHM) in the field of civil engineering."
                githubLink="https://github.com/HenryCZhang/Motif"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={iot}
                isGithub={true}
                title="BIM - IOT"
                description="Utilizing Arduino, this project collects sensor data and stores it in a MySQL database. It's integral to the Structure Monitoring with BIM and IoT methodology, connecting IoT and BIM for bridge beam deflection monitoring."
                githubLink="https://github.com/HenryCZhang/Arduino-IOT-Sensor-Data-to-MYSQL"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={treasureHunter}
                isDownloadGame={true}
                isQuickPlay={true}
                title="Treasure Hunter"
                description="Treasure Hunter: C#-powered Unity adventure game, delivering challenges, puzzles, and treasures in stunning visuals. Get ready for an unforgettable gaming journey!"
                demoLink="https://github.com/soumyajit4419/Plant_AI"
                downloadLink="https://henry-zhang-uwo.itch.io/treasure-hunter"
                playLink="https://play.unity.com/mg/other/treasure-hunter-day"
              />
            </Col>
          </Row>

          <MediaContextProvider>
            <Media greaterThan="sm">
              <ThinkingIconDesktop />
            </Media>
            <Media lessThan="lg">
              <ThinkingIconMobile />
            </Media>
          </MediaContextProvider>

        </Fade>
      </Container>
    </Container>
  );
}

export default Projects;

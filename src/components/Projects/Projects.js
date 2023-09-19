import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import autoGo from "../../Assets/Projects/AutoGo.png";
import treasureHunter from "../../Assets/Projects/THDay.png";
import sortingAlgorithm from "../../Assets/Projects/sortingWebsite.png";
import groops from "../../Assets/Projects/groops.png";
import motif from "../../Assets/Projects/motif.png";
import iot from "../../Assets/Projects/iot.png"
import Fade from "react-reveal/Fade";
import { useSpring, animated } from "react-spring";

function Projects() {
  const animated1 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, y: -50 },
    to: [{ opacity: 1, y: 0 }],
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
        <Fade bottom duration={1200} delay={200}>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={groops}
                isGithub={true}
                isDemo={true}
                title="Groops"
                description="Groops offers a diverse range of Asian groceries through an accessible online platform for individuals and organizations. Users can initiate group purchases and earn rewards, fostering community and convenience."
                githubLink="https://github.com/GroopsWebDev/Groops-Ecommerce-Website"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={sortingAlgorithm}
                isGithub={true}
                isDemo={true}
                title="Sorting Algorithms Playground"
                description="Sorting Algorithms Playground is an educational website, gamifying the learning experience to aid programmers in comprehending sorting algorithms effectively."
                demoLink="https://sortingalgorithmgame.web.app/"
                githubLink="https://github.com/HenryCZhang/Sorting-Algorithms-Playground"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={autoGo}
                isOnlyGithub={true}
                title="AutoGo"
                description="AutoGo is a user-friendly mobile app for automotive rental and leasing, proudly showcasing the power of Ionic App Platform technologies like Ionic Framework, Capacitor, and various plugins."
                githubLink="https://github.com/HenryCZhang/AutoGo-Angular"
              />
            </Col>
          </Row>

          <Row>
          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={motif}
                imgCenter= "center"
                imgWidth="80%"
                isOnlyGithub={true}
                title="Motif"
                description="Motif is an iPhone app designed for easy motion sensor data recording. Its versatile applications include crucial functions like structural health monitoring (SHM) in the field of civil engineering."
                githubLink="https://github.com/HenryCZhang/Motif"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={iot}
                isOnlyGithub={true}
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
                description="Treasure Hunter: A C#-powered Unity adventure game, delivering challenges, puzzles, and treasures in stunning visuals. Get ready for an unforgettable gaming journey!"
                demoLink="https://github.com/soumyajit4419/Plant_AI"
                downloadLink="https://henry-zhang-uwo.itch.io/treasure-hunter"
                playLink="https://play.unity.com/mg/other/treasure-hunter-day"
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    </Container>
  );
}

export default Projects;

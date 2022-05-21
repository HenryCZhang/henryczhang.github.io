import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.jpeg";
import autoGo from "../../Assets/Projects/AutoGo.png";
import treasureHunter from "../../Assets/Projects/THDay.png";
import sortingAlgorithm from "../../Assets/Projects/sortingWebsite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sortingAlgorithm}
              isGithub={true}
              isDemo={true}
              title="Sorting Algorithms Playground"
              description="Sorting Algorithms Playground is an educational gamified website that helps undergraduate students understand sorting algorithm(s)."
              demoLink="https://sortingalgorithmgame.web.app/"
              githubLink="https://github.com/HenryCZhang/Sorting-Algorithms-Playground"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={treasureHunter}
              isDownloadGame={true}
              isQuickPlay={true}
              title="Treasure Hunter"
              description="Treasure Hunter is a single-player adventure game developed with C# and powered by Uinty Engine."
              demoLink="https://github.com/soumyajit4419/Plant_AI"
              downloadLink="https://henry-zhang-uwo.itch.io/treasure-hunter"
              playLink="https://play.unity.com/mg/other/treasure-hunter-day"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoGo}
              isOnlyGithub={true}
              title="AutoGo"
              description="AutoGo is a user-freindly automotive rental and leasing mobile app. It's a showcase of Ionic App Platform technologies, including Ionic Framework, Capacitor and miscellaneous plugins."
              githubLink="https://github.com/HenryCZhang/AutoGo-Angular"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

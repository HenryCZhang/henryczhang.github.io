import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { GiGamepad } from "react-icons/gi";
import { AiOutlineCloudDownload } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

      </Card.Body>
      <Container style={{marginBottom:"10px"}}>
          {props.isDemo ? (
            <div
              style={{ display: "inline-block", float: "left", width: "100px", marginLeft:"30px"}}
            >
              <Button variant="primary" href={props.demoLink} target="_blank">
                <BiLinkExternal
                  style={{ fontSize: "30px", marginBottom: "10px" }}
                />{" "}
                <br />
                View Project
              </Button>
            </div>
          ) : (
            ""
          )}

          {props.isGithub ? (
            <div
              style={{
                display: "inline-block",
                float: "right",
                width: "100px",
                marginRight:"30px"
              }}
            >
              <Button variant="primary" href={props.githubLink} target="_blank">
                <BsGithub style={{ fontSize: "30px", marginBottom: "10px" }} />{" "}
                <br />
                Github Code
              </Button>
            </div>
          ) : (
            ""
          )}

          {props.isOnlyGithub ? (
            <div style={{ display: "inline-block", width: "100px" }}>
              <Button variant="primary" href={props.githubLink} target="_blank">
                <BsGithub style={{ fontSize: "30px", marginBottom: "10px" }} />{" "}
                <br />
                Github Code
              </Button>
            </div>
          ) : (
            ""
          )}

          {props.isDownloadGame ? (
            <div
              style={{ display: "inline-block", float: "left", width: "100px", marginLeft:"30px" }}
            >
              <Button
                variant="primary"
                href={props.downloadLink}
                target="_blank"
              >
                <AiOutlineCloudDownload
                  style={{ fontSize: "30px", marginBottom: "10px" }}
                />{" "}
                <br />
                Download Game
              </Button>
            </div>
          ) : (
            ""
          )}

          {props.isQuickPlay ? (
            <div
              style={{
                display: "inline-block",
                float: "right",
                width: "100px",
                height: "50px",
                marginRight:"30px"
              }}
            >
              <Button variant="primary" href={props.playLink} target="_blank">
                <GiGamepad style={{ fontSize: "30px", marginBottom: "10px" }} />{" "}
                <br />
                Quick Play
              </Button>
            </div>
          ) : (
            ""
          )}
        </Container>
    </Card>
  );
}
export default ProjectCards;

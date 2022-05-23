import React from "react";
import { Container } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="footer">
      <div md="4" className="footer-copywright">
        <h3>Originally Designed and Developed by Soumyajit Behera</h3>
        <a
          href="https://github.com/soumyajit4419"
          style={{ color: "white" }}
          target="_blank"
        >
        <h6>https://github.com/soumyajit4419</h6>
        </a>
      </div>
    </Container>
  );
}

export default Footer;

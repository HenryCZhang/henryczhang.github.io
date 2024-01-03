import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <div md="4" className="footer-copywright">
        <h3>UI Reference {" "}
        <a
          href="https://github.com/soumyajit4419"
          style={{ color: "white" }}
          target="_blank"
        >
          @Soumyajit Behera
        </a>
        </h3>
      </div>
    </Container>
  );
}

export default Footer;

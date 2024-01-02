import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2_V2";
import Type from "./Type";
import { useSpring, animated } from "react-spring";
import headshot from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";

function Home() {
  const animated1 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, y: -50 },
    to: [{ opacity: 1, y: 0 }],
  });

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <animated.div style={animated1}>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
              </animated.div>
              <animated.div style={animated1}>
                <h1>
                  I'M
                  <strong className="main-name" style={{ fontSize: "60px" }}>
                    {" "}
                    Cao (Henry) Zhang
                  </strong>
                </h1>
                <div style={{ padding: 30, textAlign: "left" }}>
                  <Type />
                </div>
              </animated.div>
            </Col>
            <Col md={5} className="myAvatar d-flex flex-column  align-items-center">
            <animated.div style={animated1}>
              <Tilt>
                <img src={headshot} className="img-fluid" alt="avatar" />
              </Tilt>
              </animated.div>
            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

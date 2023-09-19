import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TypingIconDesktop from "./Typing_svg_desktop";
import TypingIconMobile from "./Typing_svg_mobile";
import { createMedia } from "@artsy/fresnel";
import { useSpring, animated } from "react-spring";


function Home() {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1192,
    },
  });
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
              <h1 >
                I'M
                <strong className="main-name" style={{fontSize:"60px"}}> Henry (Cao), Zhang</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              </animated.div>
            </Col>
            <Col md={3}>
              {/* <img src={homeLogo} alt="home pic" className="img-fluid" /> */}
              <animated.div style={animated1}>
              <div className="TypingSVGContainer">
                <MediaContextProvider>
                  <Media greaterThan="sm">
                    <TypingIconDesktop />
                  </Media>
                  <Media lessThan="lg">
                    <TypingIconMobile />
                  </Media>
                </MediaContextProvider>
              </div>
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

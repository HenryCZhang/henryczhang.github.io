import React from "react";
import Card from "react-bootstrap/Card";
import { useSpring, animated } from "react-spring";
import Fade from "react-reveal/Fade";

function AboutCard() {
  const animated1 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0},
    to: [{ opacity: 1 }],
    delay: 500,
  });

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <animated.div style={animated1}>
            <h1 className="goldText" style={{fontSize:"2rem", textAlign:"left"}}>Emerging Business Analyst</h1>
            <ul style={{fontSize:"1.4rem",textAlign:"left"}}>
              <li>Detect + Reduce operational bottlenecks</li>
              <li>Accelerate the development of new products</li>
              <li>Fulfill customers’ expectations</li>
              <li>Mediate between IT team + stakeholders</li>
            </ul>
            <h1 className="goldText" style={{fontSize:"2rem", textAlign:"left", marginTop:"2rem"}}>Emerging Data Analyst</h1>
            <ul style={{fontSize:"1.4rem",textAlign:"left"}}>
              <li>Gather + Process datasets</li>
              <li>Analyze collected data to unravel business insights </li>
            </ul>
          </animated.div>
          </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

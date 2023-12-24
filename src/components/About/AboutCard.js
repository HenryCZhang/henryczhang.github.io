import React from "react";
import Card from "react-bootstrap/Card";
import { useSpring, animated } from "react-spring";

function AboutCard() {
  const animated1 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, y: -50 },
    to: [{ opacity: 1, y: 0 }],
    delay: 500,
  });
  const animated2 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0 },
    to: [{ opacity: 1 }],
    delay: 1500,
  });

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <animated.div style={animated1}>
            <p style={{ textAlign: "justify" }}>
              Hi! I am <span className="purple">Henry (Cao) Zhang</span>.
              I consider myself an affable and collaborative individual, with a
              genuine commitment to nurturing enduring professional connections.
              Following the successful completion of my Bachelor's degree in
              Software Engineering, I have embarked on a journey to further
              expand my horizons by pursuing a Master's degree in Information
              Systems Management. This transition represents a deliberate shift
              from my background in software development towards a broader
              understanding of information systems management, demonstrating my
              eagerness to explore new facets of the field.
        
            </p>
   
          </animated.div>
          </blockquote>
          <animated.div style={animated2}>
            <h4 className="purple" style={{marginTop:"50px"}}>
              "I heard the echo from the valleys and the heart."{" "}
            </h4>
          </animated.div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

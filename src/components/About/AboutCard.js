import React from "react";
import Card from "react-bootstrap/Card";
import { GiCampCookingPot } from "react-icons/gi";
import { MdSportsFootball } from "react-icons/md";
import { BsFillFileMusicFill } from "react-icons/bs";
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
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <GiCampCookingPot /> Culinary
              </li>
              <li className="about-activity">
                <MdSportsFootball /> Fitness
              </li>
              <li className="about-activity">
                <BsFillFileMusicFill /> Music
              </li>
            </ul>
          </animated.div>
          <animated.div style={animated2}>
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              "A plan is only useful if it can survive reality.{" "}
            </p>
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              And a future filled with unknowns is everyone’s reality."{" "}
            </p>
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              "A good plan doesn’t pretend this weren’t true;{" "}
            </p>
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              it embraces it and emphasizes room for error."{" "}
            </p>
            <footer className="blockquote-footer">Morgan Housel</footer>
          </animated.div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

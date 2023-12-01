import React from "react";
import Card from "react-bootstrap/Card";
import { PiSunHorizonBold } from "react-icons/pi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { HiOutlineMusicalNote } from "react-icons/hi2";
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
                <PiSunHorizonBold /> Spirit Cultivation
              </li>
              <li className="about-activity">
                <GiWeightLiftingUp /> Fitness
              </li>
              <li className="about-activity">
                <HiOutlineMusicalNote /> Music
              </li>
            </ul>
          </animated.div>
          <animated.div style={animated2}>
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              "In humility, value others above yourselves, not looking to your own interests but each of you to the interests of the others."{" "}
            </p>
            <footer className="blockquote-footer">Philippians 2:4</footer>
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms."{" "}
            <footer className="blockquote-footer">Peter 4:10</footer>
            </p>
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
              "Forgetting what is behind and straining toward what is ahead, I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus."{" "}
            </p>
            <footer className="blockquote-footer">Philippians 3:14</footer>
          </animated.div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

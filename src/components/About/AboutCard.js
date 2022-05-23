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
            {/* Hi Everyone, I am <span className="purple">Cao (Henry) Zhang </span>
            from 
            <span className="purple"> Jinhua, China.</span> */}
            I consider myself an easy-going and co-operative person who
            deeply cares about building professional long-term relationships.
            I’m currently pursuing my Software Engineering Bachelor degree and I specialize in building (and occasionally designing) exceptional digital experiences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GiCampCookingPot /> Cooking
            </li>
            <li className="about-activity">
              <MdSportsFootball /> Sports
            </li>
            <li className="about-activity">
              <BsFillFileMusicFill /> Music
            </li>
          </ul>
          </animated.div>
          <animated.div style={animated2}>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "You cannot manage your time 🙈,{" "}
          </p>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            but you can manage yourself 👍"{" "}
          </p>
          <footer className="blockquote-footer">Cao Zhang</footer>
          </animated.div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

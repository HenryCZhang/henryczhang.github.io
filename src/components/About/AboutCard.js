import React from "react";
import Card from "react-bootstrap/Card";
import { GiCampCookingPot } from "react-icons/gi";
import { MdSportsFootball } from "react-icons/md";
import { BsFillFileMusicFill } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zhang Cao </span>
            from <span className="purple"> Jinhua, China.</span>
            <br />I am a junior pursuing IMSC in Maths and Computing in BIT
            Mesra. I consider myself an easy-going and cooperative person who
            deeply cares about building professional long-term relationships. I
            am a results-oriented Software Engineer comfortable switching
            between architecture, design and implementation. Experienced at
            working in teams or self-directed environment. Eager to learn and
            contribute programming expertise to development projects.
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
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "You cannot manage your time 🙈,{" "}
          </p>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            but you can manage yourself 👍"{" "}
          </p>
          <footer className="blockquote-footer">Cao Zhang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

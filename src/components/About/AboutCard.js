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

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub,
  AiFillWechat,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsFileEarmarkMusic } from "react-icons/bs";
import useSound from "use-sound";
import LofiSound from "../Assets/Sound/lofi.mp3";
import ReactTooltip from "react-tooltip";
import wechatContact from "../Assets/wechatContact.JPG";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [musicIconClass, setMusicIconClass] = useState("musicIconPlay");
  const [play] = useSound(LofiSound, {
    interrupt: false,
    onend: () => {
      setMusicIconClass("musicIconPlay");
    },
  });

  const playSound = () => {
    play();
    setMusicIconClass("musicIconOnPlay");
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <BsFileEarmarkMusic
                onClick={playSound}
                className={musicIconClass}
              />
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <div className="nav-icons-container">
              <a
                href="https://github.com/HenryCZhang"
                className="nav-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/henry-zhang-uwo/"
                className="nav-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <div
                className="nav-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillWechat data-tip data-for="wechat"/>
              </div>
              <div
                className="navbar-phone "
                target="_blank"
                rel="noopener noreferrer"
              >
(+1) 519-701-1804
              </div>
            </div>
            <ReactTooltip
              id="wechat"
              fontSize="large"
              backgroundColor="none"
              place="bottom"
            >
              <img style={{width:"15rem"}} src={wechatContact} />
            </ReactTooltip>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

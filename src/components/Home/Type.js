import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    className="gold"
      options={{
        strings: [
          "Emerging Business Analyst",
          "Emerging Data Analyst",
          "Emerging Software Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

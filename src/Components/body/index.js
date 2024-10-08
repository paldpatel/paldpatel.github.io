import React, { useState } from "react";
import "./body.css";

import BugReportIcon from "@mui/icons-material/BugReport";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import TimelineCmpt from "../timeline/timelineCmpt";
import MediaCard from "../projectCard/projectCard";
import kathan from "../../Assets/pal.jpeg";
import js from "../../Assets/js.png";
import java from "../../Assets/java.png";
import cplusplus from "../../Assets/cplusplus.png";
import UE from "../../Assets/UE.png";
import css from "../../Assets/css.png";
import gitpic from "../../Assets/git.png";
import html from "../../Assets/html.png";
import python from "../../Assets/python.png";
import reactpic from "../../Assets/react.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Body() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const projectCard = [
    {
      title: "Ultimate Tic-Tac-Toe",
      subheader: "2D Game",
      img: require("../../Assets/UTTT1.jpg"),
      language: "Language: Java",
      detail: `A simple implementation of Alex Randolph's board game Ricochet Robots including a solver. This game is written in Java, where I learned major algorithms in computer science, including the "Find and Hunt" algorithm. I built an AI that provides solutions for the puzzle. The most interesting part was learning how to build the GUI and the back-end supporting it. Updates were made periodically across 4 different iterations. This project is hosted on GitHub, which helped me learn version control using Git. I designed and wrote all the code myself.`,
      software: "Software: Eclipse, IntelliJ.",
      hosted: "Hosted: GitHub",
      git: "https://github.com/paldpatel/Ultimate-TIC-TAC-TOE.git",
    },
    {
      title: "Zombie Chase",
      subheader: "Unreal Engine Game",
      img: require("../../Assets/ZC.jpg"),
      language: "Language: Python",
      detail: `A graphical interface game of Sudoku. I built a solver for the puzzle using the "Backtracking algorithm." This was a fun side project, and I used the backtracking algorithm because attempting to find every solution would be time-consuming. With some research and guidance from seniors, I implemented this algorithm. This project is a product of a larger project like Ricochet Robots. The management skills I learned from my previous project encouraged me to build this one.`,
      software: "Software: PyCharm, IDLE.",
      hosted: "Hosted: GitHub",
      git: "https://drive.google.com/drive/u/1/folders/1wlHiXTjLhlzzFs8ukyecNVfQJmLCbBLx",
    },
  ];

  const getCard = projectCard.map((cd, index) => (
    <MediaCard
      key={index} // Add a unique key for each item in the list
      title={cd.title}
      subheader={cd.subheader}
      img={cd.img}
      language={cd.language}
      detail={cd.detail}
      software={cd.software}
      hosted={cd.hosted}
      git={cd.git}
    />
  ));

  return (
    <div className="body">
      <div className="body1">
        <div className="description">
          <h1>
            &lt;Hello World! &gt; <br /> I'm{" "}
            <span style={{ color: "#1976d2" }}>Pal</span> Patel
          </h1>
          <div className="developer">
            <BugReportIcon />
            <p>Software Developer</p>
          </div>
        </div>
      </div>

      <div className="body2">
        <h3 onClick={handleClick}>
          {!active ? (
            <span>"નમ્રતા એ તમામ ગુણોનો નક્કર પાયો છે."</span>
          ) : (
            <span>"Humility is the solid foundation of all virtues."</span>
          )}
          <GTranslateIcon className="translate" />
        </h3>
        <p> - Confucius </p>
      </div>

      <div id="Education" className="body4">
        <h1>Education</h1>
        <TimelineCmpt className="timeline" isJob={false} />
      </div>

      <div id="Project" className="body5">
        <h1>Projects</h1>
        <div className="internal">{getCard}</div>
      </div>

      <div id="About" className="body6">
        
        <div className="about">
        <h1>About Me</h1>
          <p>
            Hi, I'm <b>Pal Patel</b>
          </p>
          <p>
            I'm an upcoming <b>Software Developer</b> and Computer Science student at Memorial University of Newfoundland. I have experience in programming languages like <b>HTML, CSS, JavaScript, Python, and C++</b>, and I am passionate about technology and problem-solving. I enjoy web development, game design, and backend projects, continuously expanding my skills in software development.
          </p>
        </div>
        <div>
          <img src={kathan} className="pal" alt="Pal Patel" />
        </div>
      </div>

      <div id="skills">
        <h1>Skills</h1>
        <div className="skills">
          <img className="skill" src={python} alt="Python" />
          <img className="skill" src={java} alt="Java" />
          <img className="skill" src={cplusplus} alt="C++" />
          <img className="skill" src={html} alt="HTML" />
          <img className="skill" src={css} alt="CSS" />
          <img className="skill" src={js} alt="JavaScript" />
          <img className="skill" src={UE} alt="Unreal Engine" />
          <img className="skill" src={gitpic} alt="Git" />
          <img className="skill" src={reactpic} alt="React" />
        </div>
      </div>

      <div id="Contact">
        <h1>Contact</h1>
        <h3>Let's create your next experience together</h3>
        <h3>pdipakkumarp@mun.ca</h3>
        <a href="https://github.com/paldpatel" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/paldpatel/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default Body;

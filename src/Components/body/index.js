import React from "react";
import "./body.css";

import BugReportIcon from "@mui/icons-material/BugReport";
import { useState } from "react";
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
import nextjs from "../../Assets/nextjs.png";
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
      subheader: "2D-Game",
      img: require("../../Assets/UTTT1.jpg"),
      language: "Language: Java",
      detail:
        'A simple implementation of Alex Randolph\'s board game Ricochet Robots including solver. This game is witten in JAVA. Where I learned some of the major algorithms in Computer science, one of such is "Find and hunt" algorithum. Over this I built an AI that can give the solution of the puzzle. The most intresting part was to learn how to build the GUI and the "back-end" supporting it. All the updates were done periodically in 4 different Iteration. This Project is hosted on Github, which leads me to learn the version control language, git. The whole design was created by me and all the code was led by me.',
      software: "Software: Eclipse, IntelliJ.",
      hosted: "Hosted: Github",
      git: "https://github.com/paldpatel/Ultimate-TIC-TAC-TOE.git",
    },
    {
      title: "Zombie Chase",
      subheader: "Unreal Engine Game",
      img: require("../../Assets/ZC.jpg"),
      language: "Language: Python",
      detail:
        'A graphical interface game of Sudoko. I have built an solver for the puzzle, which works on "BACK Tracking algorithm". It was a fun side project. I used the backtracking algorithm in this solver because if we try to find each and every solution and try to see if it works then it will take forever. So, by doing some research and talking to some of my seniors, i used the back tracking algorithum. This Project is an product of the bigger project like Richochet Robots. The management skills that i learned from the previous project encouraged me to built this one.',
      software: "Software: PyCharm, Idel.",
      hosted: "Hosted: Github",
      git: "https://drive.google.com/drive/u/1/folders/1wlHiXTjLhlzzFs8ukyecNVfQJmLCbBLx",
    },
  ];
  const getCard = projectCard.map((cd) => {
    return (
      <MediaCard
        title={cd.title}
        subheader={cd.subheader}
        img={cd.img}
        language={cd.language}
        detail={cd.detail}
        software={cd.software}
        hosted={cd.hosted}
        git={cd.git}
      />
    );
  });

  return (
    <div className="body">
      <div className="body1">
        <div className="discription">
          <div className="helloWorld"></div>
          <h1></h1>
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
            <span>"
નમ્રતા એ તમામ ગુણોનો નક્કર પાયો છે."</span>
          ) : (
            <span>"Humility is the solid foundation of all virtues."</span>
          )}
          <GTranslateIcon className="translate" />
        </h3>
        <p> - Dipak Patel (Father)</p>
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
          <p>I'm an upcoming <b>Software Developer</b> and Computer Science student at Memorial University of Newfoundland. With experience in programming languages like <b>HTML, CSS, JavaScript, Python, and C++</b>, I am passionate about technology and problem-solving. I enjoy working on web development, game design, and backend projects, constantly expanding my skill set in the software development field.
          </p>
        </div>
        <div>
          <img src={kathan} className="pal"></img>
        </div>
      </div>
      <div id="skills">
        <h1>Skills</h1>
        <div className="skills">
          
          <div>
            <p></p>
            <img className="skill" src={python}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={java}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={cplusplus}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={html}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={css}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={js}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={UE}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={gitpic}></img>
          </div>
          <div>
            <p></p>
            <img className="skill" src={reactpic}></img>
          </div>
        </div>
      </div>
      <div id="Contact">
        <h1>Contact</h1>
        <h3>Let's create your next experience together</h3>
        <h3>pdipakkumarp@mun.ca</h3>
        <a href="https://github.com/paldpatel"><GitHubIcon></GitHubIcon></a>
        <a href="https://www.linkedin.com/in/paldpatel/"><LinkedInIcon></LinkedInIcon></a>
      </div>
    </div>
  );
}

export default Body;

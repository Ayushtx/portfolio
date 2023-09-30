import React from "react";
import "./skills.scss";
import {delay, motion} from 'framer-motion'

import react from "../../assets/react.png";
import javascript from "../../assets/js.png";
import bootstrap from "../../assets/bootstrap.png";
import sass from "../../assets/sass.png";


const Skills = () => {
  return (
    <div className="app__skills" id="skills">
      <h1>
        <span>See my </span>
        <span id="skills-break">Skills !</span>
      </h1>
      {/* Box Container */}
      <motion.div 
        className="app__skills-container">
          {/* First Skill */}
        <motion.div 
          whileInView={{scale : [0, 1]}}
          transition = {{duration : 0.3, ease : 'easeInOut'}}
          className="container-item"
        >
          <img src={react} alt="react" />
          <h5>React.js</h5>

        </motion.div>

        <motion.div 
          whileInView={{scale : [0, 1]}}
          transition = {{duration : 0.3, delay : 0.2, ease: 'easeInOut'}}
          className="container-item"
        >
          <img src={javascript} alt="javascript" />
          <h5>Javascript</h5>

        </motion.div>

        <motion.div 
          whileInView={{scale : [0, 1]}}
          transition = {{duration : 0.3, delay : 0.4, ease : 'easeInOut'}}
          className="container-item"
        >

          <img src={bootstrap} alt="bootstrap" />
          <h5>Bootstrap</h5>

        </motion.div>
        <motion.div 
          whileInView={{scale : [0, 1]}}
          transition = {{duration : 0.3, delay : 0.6, ease: 'easeInOut'}}
          className="container-item">
          <img src={sass} alt="sass" />
          <h5>Sass</h5>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;

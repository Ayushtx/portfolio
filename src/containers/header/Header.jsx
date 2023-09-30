import React from 'react'
import './header.scss'
import {motion} from 'framer-motion'


const Header = () => {
  return (
    <div className='app__header' id='home'>
        <motion.h1 
        whileInView={{y : [100, 0], opacity:[0, 1]}} 
        transition={{duration : 0.7}}>
            <span id='grad'>Hello, I'm Adarsh,</span><span id='break'> creative </span><span>front-end developer.</span> 
        </motion.h1>

        <motion.p  
        whileInView={{y : [100, 0], opacity:[0, 1]}} 
        transition={{duration : 0.8}}>
            Computer science student with web development skills in HTML, CSS, JavaScript and React.js. looking for growth opportunities where I can learn from professionals and work on real-world projects.
        </motion.p>

        <motion.div 
        whileInView={{y : [100, 0], opacity:[0, 1]}} 
        transition={{duration : 0.8}}
        className='app__header-buttons'>

            <button className='button-inactive'>Projects Soon !</button>

        </motion.div>
    </div>
  )
}

export default Header
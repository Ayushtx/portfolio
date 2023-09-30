import React, { useState } from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import { FiMenu, } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo app__flex">
        <h1>ADARSH.</h1>
      </div>
      <ul className='app__navbar-list'>
        {['home', 'skills', 'certificates', 'about'].map((item, key) => (
          <li key={key}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-button'>
        <a href='#about'><motion.button className='ado'>Let's Talk</motion.button></a>
      </div>
      {toggle ? true : <FiMenu onClick={() => setToggle(true)} />}
      {toggle && (
        <motion.div whileInView={{ x: [0, 0], ease: 'easeIn' }} transition={{ duration: 0.3 }} className='app__navbar-menu'>
          <RxCross2 onClick={() => setToggle(false)} />
          <ul>
            {['home', 'skills', 'certificates', 'about'].map((item, key) => (
              <li key={key}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav >
  )
}

export default Navbar
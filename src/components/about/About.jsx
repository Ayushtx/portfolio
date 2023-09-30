import React from 'react'
import './about.scss'
import {BsLinkedin} from 'react-icons/bs'
import {FaFreeCodeCamp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const About = () => {
  return (
    <div className='app_about' id='about'>
        <h1>Interested in Working with me?</h1>
        <button>BELOW ARE MY SOCIALS !</button>

        <div className="socials">
          <a href='https://www.linkedin.com/in/adarshtx/'><BsLinkedin/></a>
          <a><HiOutlineMail /><span> adarshtz@outlook.com</span></a>
        </div>
    </div>
  )
}

export default About
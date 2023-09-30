import React from 'react'
import './certified.scss'

import freecodecamp from '../../assets/freecodecamp.png'
import coursera from '../../assets/coursera.png'
import linkedin from '../../assets/linkedin.png'

const Certified = () => {
  return (
    <div className='app__certified'>
        <h3>Certified by Leading <br />Ed-Tech Brands.</h3>
        <div className='app__certified-brands'>
            <img src={coursera} alt="coursera" />
            <img src={linkedin} alt="linkedin" />
            <img src={freecodecamp} alt="freecodecamp" />
        </div>
    </div>
  )
}

export default Certified
import React from 'react'
import './certificates.scss'
import {BsArrowUpRightCircle} from 'react-icons/bs'

const Certificates = () => {
  return (
    <div className='app_certificate' id='certificates'>
      <h1>
        <span>Look at my</span>
        <span id="cert-break"> Certificates !</span>
      </h1>
      <div className='app_certificate-container'>
          <div className='certificate-item'>
              <h3>Introduction to Front-end development</h3>
              <div className='cert-div'>
                <h5>Coursera</h5>
                <p>• Jul 2023</p>
              </div>
              <a href="https://www.coursera.org/account/accomplishments/certificate/7MBMW3RMVXYH" target='_blank'><button>Show Credential <BsArrowUpRightCircle /></button></a>
          </div>
          <div className='certificate-item'>
              <h3>Responsive Web Design</h3>
              <div className='cert-div'>
                <h5>freecodecamp</h5>
                <p>• Jul 2023</p>
              </div>
             <a href="https://www.freecodecamp.org/certification/Adarshtx/responsive-web-design" target='_blank'><button>Show Credential <BsArrowUpRightCircle /></button></a>
          </div>
          <div className='certificate-item'>
              <h3>What is Generative AI</h3>
              <div className='cert-div'>
                <h5>LinkedIn</h5>
                <p>• Jul 2023</p>
              </div>
              <a href="https://www.linkedin.com/learning/certificates/310ff94d2ff2698deb0c674f5720035abf4961509b8cd4f7ad60ccc4ae23e3cb" target='_blank'><button>Show Credential <BsArrowUpRightCircle /></button></a>
          </div>
      </div>
    </div>
  )
}

export default Certificates;
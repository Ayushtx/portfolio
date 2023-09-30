import React from 'react'
import './App.scss'
import { Navbar, Certified, Skills, About } from './components'
import { Header, Certificates } from './containers'

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <Certified />
            <Skills />
            <Certificates />
            <About />
        </div>
    )
}

export default App
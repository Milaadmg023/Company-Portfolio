import React from 'react'
import Menu from '../components/home/Menu'
import ProjectsSlider from '../components/home/ProjectsSlider'
import Reputation from '../components/home/Reputation'
import AboutUs from '../components/home/AboutUs'
import Services from '../components/home/Services'
import Experience from '../components/home/Experience'
import Contact from '../components/home/Contact'
import Projects from '../components/home/Projects'
import Massege from '../components/home/Massege'
import Footer from '../components/home/Footer'

function Home() {
  return (
    <div id='Main__Page'>
    <Menu/>
    <ProjectsSlider/>
    <Reputation/>
    <AboutUs/>
    <Services/>
    <Experience/>
    <Contact/>
    <Projects/>
    <Massege/>
    <Footer/>
    </div>
  )
}

export default Home
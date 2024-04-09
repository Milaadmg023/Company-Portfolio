import React from 'react'
import ProjectsSlider from '../components/home/ProjectsSlider'
import Reputation from '../components/home/Reputation'
import AboutUs from '../components/home/AboutUs'
import Services from '../components/home/Services'
import Experience from '../components/home/Experience'
import Contact from '../components/home/Contact'
import Projects from '../components/home/Projects'
import Massege from '../components/home/Massege'

function Home() {
  return (
    <div id='Main__Page'>
    <ProjectsSlider/>
    <Reputation/>
    <AboutUs/>
    <Services/>
    <Experience/>
    <Contact/>
    <Projects/>
    <Massege/>
    </div>
  )
}

export default Home
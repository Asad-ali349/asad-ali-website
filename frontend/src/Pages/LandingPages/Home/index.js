import React from 'react';

import TopBar from '../../../components/TopBar'
import HeroSection from '../../../components/HeroSection/HeroSection';
import AboutMe from '../../../components/AboutMe/AboutMe';
import Skills from '../../../components/Skills/index';
import Services from '../../../components/Services/index';
import Projects from '../../../components/CompletedProjects/index';
import ContactMe from '../../../components/ContactMe/index';
import Footer from '../../../components/Footer/index';


export default function index() {
  return (
    <div>
       <TopBar/>
       <HeroSection/>
       <AboutMe/>
       <Skills/>
       <Services/>
       <Projects/>
       <ContactMe/>
       <Footer/>
       
    </div>
  )
}

import React from 'react';

import TopBar from '../../../components/TopBar'
import HeroSection from '../../../components/HeroSection/HeroSection';
import AboutMe from '../../../components/AboutMe/AboutMe';

export default function index() {
  return (
    <div>
       <TopBar/>
       <HeroSection/>
       <AboutMe/>
    </div>
  )
}

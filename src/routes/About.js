import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectMainSection from '../components/ProjectMainSection';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <ProjectMainSection heading="ABOUT" text="I'm very friendly and very passionate about my work." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
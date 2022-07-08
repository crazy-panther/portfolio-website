import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectMainSection from '../components/ProjectMainSection';
import PriceCard from '../components/PriceCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <ProjectMainSection heading="PROJECTS." text="Here are some of my most recent projects" />
      <Work />
      <PriceCard />
      <Footer />
    </div>
  )
}

export default Project;
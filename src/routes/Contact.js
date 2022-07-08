import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectMainSection from '../components/ProjectMainSection';
import Form from '../components/Form';

const contact = () => {
  return (
    <div>
      <Navbar />
      <ProjectMainSection heading="CONTACT" text="Please feel free to ask me anything."/>
      <Form />
      <Footer />
    </div>
  )
}

export default contact
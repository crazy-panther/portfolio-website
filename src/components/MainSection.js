import "./MainSection.css";
import "../index.css";
import React from 'react'
import IntroImg from '../assets/using-laptop.jpg'
import { Link } from 'react-router-dom';

const MainSection = () => {
  return (
    <div className="main-section">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hello, I'M PALINDA.</p>
            <h1>A Software Engineer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default MainSection;
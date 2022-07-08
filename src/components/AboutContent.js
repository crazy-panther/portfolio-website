import "./AboutContent.css";

import React from 'react'
import { Link } from 'react-router-dom';
import fullstack1 from '../assets/typing-hands.jpg';
import fullstack2 from '../assets/hacker.jpg';

function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Full-Stack Developer with 3 years of experience in the software development field. I always create responsive secure Applications for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={fullstack1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={fullstack2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;
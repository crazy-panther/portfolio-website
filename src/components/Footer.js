import "./Footer.css";
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaUserCog, FaInfoCircle, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: '#fff', marginRight: "2rem"}}/>
                    <div>
                        <p>366/2/1 Kelanithissa Mw.</p>
                        <p>Kelaniya.</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{ color: '#fff', marginRight: "2rem"}}/>
                    <div>
                        <p>+9470 171 8606</p>
                    </div>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{ color: '#fff', marginRight: "2rem"}}/>
                    <div>
                        <p>info@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="footer-projects">
                    <FaUserCog size={20} style={{ color: '#fff', marginRight: "2rem"}}/>
                    <div>
                    <Link to="/project">My Projects</Link>
                    </div>
                </div>
                <div className="footer-about">
                    <FaInfoCircle size={20} style={{ color: '#fff', marginRight: "2rem"}}/>
                    <div>
                        <Link to="/about">About Me</Link>
                    </div>
                </div>
                <div className="social">
                    <FaLinkedin size={30} style={{ color: '#fff', marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{ color: '#fff', marginRight: "1rem"}}/>
                    <FaGithub size={30} style={{ color: '#fff', marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
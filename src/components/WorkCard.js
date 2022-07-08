import "./WorkCard.css";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="WorkImage" className="work-img" />
      <h2 className="pro-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          <NavLink to={props.view} className="btn">View</NavLink>
          <NavLink to="./contact" className="btn">Source</NavLink>
        </div>
      </div>
    </div>
  )
}

export default WorkCard;
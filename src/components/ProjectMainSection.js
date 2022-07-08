import React, { Component } from 'react'
import "./ProjectMainSection.css";

class ProjectMainSection extends Component {
    render() {
        return (
            <div className="main-section">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    }
};

export default ProjectMainSection
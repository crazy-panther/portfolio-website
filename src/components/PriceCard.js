import "./PriceCard.css";
import React from 'react'
import { Link } from 'react-router-dom'

function JobCard() {
  return (
    <div className="job-card">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="usd">$ 100</p>
                <p>- 4 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="price-btn">PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>- Standard -</h3>
                <span className="bar"></span>
                <p className="usd">$ 200</p>
                <p>- 7 Days -</p>
                <p>- 6 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="price-btn">PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="usd">$ 300</p>
                <p>- 9 Days -</p>
                <p>- 8 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="price-btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default JobCard;
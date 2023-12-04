import React from 'react'
import "./home.css";
import { NavLink ,useNavigate, Link} from "react-router-dom";
const Home = () => {
  return (
    <div>
        <div className="app">
          <div className="top-bar">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/home">
                  Home
                  <span className="down-arrow">▼</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/login-signup">
                  Login/Signup
                  <span className="down-arrow">▼</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/AboutUs">
                <a href="/about-us">
                  About Us
                  <span className="down-arrow">▼</span>
                </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="home-page">
            <div className="header">
              <h1>What Are You Looking For?</h1>
            </div>
            <div className="exam-buttons">
              <div className="row">
              <Link to="/CAT">
                <button className="exam-button">CAT Exam</button>
                </Link>
              <Link to="/GATE">
              <button className="exam-button">GATE Exam</button>
              </Link>
              </div>
              <div className="row">
                <Link to="/Inter">
                <button className="exam-button">Interview Preparation</button>
                </Link>
                <Link to="/UPSC">
                <button className="exam-button">UPSC Preparation</button>
                </Link>
                <Link to="/Chat">
                <button className="exam-button">Have questions?</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-5">
              <p>Welcome to a Professional Health Care</p>
            </div>

            <div className="col-md-8 col-sm-7 text-align-right">
              <span className="phone-icon">
                <i className="fa fa-phone"></i> 010-060-0160
              </span>
              <span className="date-icon">
                <i className="fa fa-calendar-plus-o"></i> 6:00 AM - 10:00 PM
                (Mon-Fri)
              </span>
              <span className="email-icon">
                <i className="fa fa-envelope-o"></i>{" "}
                <a href="#">info@company.com</a>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section
        className="navbar navbar-default navbar-static-top"
        role="navigation"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>

            <a href="index.html" className="navbar-brand">
              <i className="fa fa-h-square"></i>Health Center
            </a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#top" className="smoothScroll">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="smoothScroll">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="smoothScroll">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#news" className="smoothScroll">
                  News
                </a>
              </li>
              <li>
                <a href="#google-map" className="smoothScroll">
                  Contact
                </a>
              </li>
              <li className="appointment-btn">
                <a href="#appointment">Make an appointment</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

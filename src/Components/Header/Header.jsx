import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
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
                <NavLink href="#">info@company.com</NavLink>
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
          <div className="row w-100">
            <div className="navbar-header2 col-3">
              {/* <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button> */}

              <NavLink href="index.html" className="navbar-brand">
                <i className="fa fa-h-square"></i>Health Center
              </NavLink>
            </div>

            <div className="col-9 ">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to={"/"} href="#top" className="smoothScroll">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#about" className="smoothScroll">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#team" className="smoothScroll">
                    Doctors
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#news" className="smoothScroll">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#google-map" className="smoothScroll">
                    Contact
                  </NavLink>
                </li>
                {!localStorage.userrole && (
                  <li>
                    <NavLink to={"login"} className="smoothScroll">
                      Login
                    </NavLink>
                  </li>
                )}
                {localStorage.userrole && (
                  <>
                    <li>
                      <NavLink to={"/dashboard"} className="smoothScroll">
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => {
                          localStorage.userrole = "";
                        }}
                        className="smoothScroll"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </>
                )}
                <li className="appointment-btn">
                  <NavLink href="#appointment">Make an appointment</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

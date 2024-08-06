import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Assets/logo.png';
import HeroSection from '../HeroSection/HeroSection';
// import SignUpForm from '../SignUpForm/SignUpForm';

const NavBar = () => {
  return (
    <header className="header-section">
      <div className="container  ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <a href="./index.html">
              <img width="80" height="30" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="nav-menu d-none d-lg-block">
            <nav className="mainmenu">
              <ul className="nav">
                <li className="nav-item active">
                  <a className="nav-link" href="./index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./about-us.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./classes.html">Classes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./blog.html">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./gallery.html">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./contact.html">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="d-none d-lg-block">
            <a href="#" className="btn btn-danger signup-btn">Sign Up Today</a>
          </div>
          <div className="d-lg-none">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileMenu"
              aria-controls="mobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse d-lg-none" id="mobileMenu">
          <ul className="navbar-nav w-100">
            <li className="nav-item active">
              <a className="nav-link" href="./index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./about-us.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./classes.html">Classes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./blog.html">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./gallery.html">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact.html">Contacts</a>
            </li>
          </ul>
          <a href="#" className="btn btn-primary w-100 mt-3">Sign Up Today</a>
        </div>
      </div>
      <HeroSection />
      {/* <SignUpForm /> */}
      
    </header>
  );
};

export default NavBar;
  
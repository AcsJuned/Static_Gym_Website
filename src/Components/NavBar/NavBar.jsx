import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../Assets/logo.png';

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header-section">
      <div className="container containerN">
        <div className="d-flex justify-content-between align-items-center p-2">
          <div className="logo">
            <a href="./index.html">
              <img width="80" height="30" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Offcanvas Toggle Button for small screens */}
          <div className="d-lg-none">
            <Button variant="outline-light" onClick={handleShow}>
              <span className="navbar-toggler-icon ">☰</span>
            </Button>
          </div>

          <div className="nav-menu d-none d-lg-block">
            <nav className="mainmenu">
              <ul className="nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Classes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="d-none d-lg-block">
            <a href="#" className="btn btn-danger signup-btn">Sign Up Today</a>
          </div>
        </div>
      </div>

     
      <Offcanvas show={show} onHide={handleClose} className="d-lg-none" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Classes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contacts</a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default NavBar;

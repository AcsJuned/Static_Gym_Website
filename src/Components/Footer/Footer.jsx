import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="ACS-footer-footer">
      <div className="ACS-footer-footer-top">
        <div className="ACS-footer-footer-item">
          <div className="ACS-footer-footer-label">YEAR FOUNDED</div>
          <div className="ACS-footer-footer-value">2024</div>
        </div>
        <div className="ACS-footer-footer-item">
          <div className="ACS-footer-footer-label">LOCATION</div>
          <div className="ACS-footer-footer-value">Sector 63, Noida</div>
        </div>
      </div>
      <div className="ACS-footer-footer-middle">
        <div className="ACS-footer-footer-contact">
          <div> <h3>Get in touch</h3></div>
          <div>info@acstechconsulting.com</div>
          <div>+91 93156 52636</div>
          <div>01204465842</div>
        </div>
        <div className="ACS-footer-footer-connect">
          <div><h3>Connect</h3></div>
          <div>LinkedIn</div>
          <div>Instagram</div>
          <div>Twitter</div>
          <div>Facebook</div>
          <div>YouTube</div>
        </div>
        <div className="ACS-footer-footer-services">
          <div><h3>Design Services</h3></div>
          <div>"IT services Digital Integration & Transformation Data Migration ERP Web Devlopment Internship IT Staffing"</div>
          <div>"We empower clients with world-class technology products, services, and solutions"</div>
          <div>"Move from manual & excel based to a advance product-based approach"</div>
        </div>
        <div className="ACS-footer-footer-ventures">
          <div><h3>Address</h3></div>
          <div>#B06, H-169, Block H, Block J, Sector 63, Noida, Chotpur, Uttar Pradesh 201203</div>
          <div>Sector-63, Noida</div>
          <div>Noida, Delhi NCR</div>
        </div>
      </div>
      <div className="ACS-footer-footer-bottom">
        <div className="ACS-footer-footer-nav">
          <button>Profile</button>
          <button>Services</button>
          <button>Work</button>
          <button>Contact</button>
        </div>
        <div className="ACS-footer-footer-info">
          <div>Term of Services</div>
          <div>&copy; 2024</div>
          <div>ACS Consulting Services Ltd.</div>
          <div>All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './AboutSection.css'; 
import AboutPic from "../../Assets/about-pic.jpg"
import Play from "../../Assets/play.png";

const AboutSection = () => {
  return (
    <section className="about-section spad ">
      <div className="container ">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-pic ">
              <img className='w-25  ms-4 card rounded border border-danger' src={AboutPic} alt="About Us" />
              <a href="https://www.youtube.com" className="play-btn video-popup">
                <img src={Play} alt="Play Video" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-text">
              <h2>Story About Us</h2>
              <p className="first-para">Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium
                sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate
                cursus a amet.</p>
              <p className="second-para">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida
                quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                rhoncus, gravida quam semper libero sit amet.</p>
              <a href="#" className="primary-btn readbtn rounded">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

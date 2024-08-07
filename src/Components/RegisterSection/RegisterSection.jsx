import React from 'react';
import './RegisterSection.css'; 
import Registerpic from "../../Assets/register-pic.jpg";


const RegisterSection = () => {
  return (
    <section className="register-section bg-white ">
      <div className="container membership-item mt-3  rounded ">
        <div className="row p-5">
          <div className="col-lg-8">
            <div className="register-text">
              <div className="section-title">
                <h2>Register Now</h2>
                <p className='mt-3'>The First 7 Day Trial Is Completely Free With The Teacher</p>
              </div>
              <form action="#" className="register-form">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="name">First Name</label>
                    <input type="text" id="name" className="form-control" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="email">Your email address</label>
                    <input type="email" id="email" className="form-control" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" className="form-control" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="mobile">Mobile No*</label>
                    <input type="text" id="mobile" className="form-control" />
                  </div>
                </div>
                <button type="submit" className="register-btn btn btn-primary">
                  Get Started
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="register-pic">
              <img src={Registerpic} alt="Registration" className="img-fluid card rounded border border-danger" />
            </div>
          </div>
        </div>
      </div>
   
    </section>
    
  );
};

export default RegisterSection;

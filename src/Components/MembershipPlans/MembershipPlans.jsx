import React from 'react';
import './MembershipPlans.css'; 

const MembershipPlans = () => {
  return (
    <section className="membership-section spad">
      <div className="container mainCardC">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>MEMBERSHIP PLANS</h2>
            </div>
          </div>
        </div>
        <div className="row  ">
          <div className="col-lg-4">
            <div className="membership-item text-center ">
              <div className="mi-title">
                <h4>Basic</h4>
                <div className="triangle"></div>
              </div>
              <h2 className="mi-price">$17<span>/01 mo</span></h2>
              <ul>
                <li>
                  <p>Duration</p>
                  <span>12 months</span>
                </li>
                <li>
                  <p>Personal trainer</p>
                  <span>00 person</span>
                </li>
                <li>
                  <p>Amount of people</p>
                  <span>01 person</span>
                </li>
                <li>
                  <p>Number of visits</p>
                  <span>Unlimited</span>
                </li>
              </ul>
              <a href="#" className="primary-btn membership-btn">Start Now</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="membership-item">
              <div className="mi-title">
                <h4>Standard</h4>
                <div className="triangle"></div>
              </div>
              <h2 className="mi-price">$57<span>/01 mo</span></h2>
              <ul>
                <li >
                  <p>Duration</p>
                  <span>12 months</span>
                </li>
                <li>
                  <p>Personal trainer</p>
                  <span>01 person</span>
                </li>
                <li>
                  <p>Amount of people</p>
                  <span>01 person</span>
                </li>
                <li>
                  <p>Number of visits</p>
                  <span>Unlimited</span>
                </li>
              </ul>
              <a href="#" className="primary-btn membership-btn">Start Now</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="membership-item">
              <div className="mi-title">
                <h4>Premium</h4>
                <div className="triangle"></div>
              </div>
              <h2 className="mi-price">$98<span>/01 mo</span></h2>
              <ul>
                <li>
                  <p>Duration</p>
                  <span>12 months</span>
                </li>
                <li>
                  <p>Personal trainer</p>
                  <span>01 person</span>
                </li>
                <li>
                  <p>Amount of people</p>
                  <span>01 person</span>
                </li>
                <li>
                  <p>Number of visits</p>
                  <span>Unlimited</span>
                </li>
              </ul>
              <a href="#" className="primary-btn membership-btn">Start Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;

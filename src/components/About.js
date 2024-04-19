import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
  <main className="main" id="top">
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" data-navbar-on-scroll="data-navbar-on-scroll">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logos/logonew.png" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars text-white fs-3" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" activeclass="active-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeclass="active-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeclass="active-link" to="/service">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeclass="active-link" to="/careers">Careers</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeclass="active-link" to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    <section className="bg-dark text-center py-9">
      <div className="container">
        <p className="text-light fs-1">About</p>
        <div className="col-12 col-md-7 mx-auto">
          <h1 className="text-white fs-lg-7 fs-md-4 fs-3 my-4">Empowering Success Through Innovative Technology Solutions</h1>
        </div>
        <p className="w-md-50 text-light mx-auto">Sansutek Inc., a Texas-based Software Development and Professional Services company, delivers tailored solutions to startups and Fortune 500 firms. With expertise in next-gen technologies like Web, SaaS, Cloud, and Analytics, we drive success by accelerating growth and enabling a competitive advantage in the market."</p>
      </div>
    </section>
    <section className="pb-0">
      <div className="container">
        <div className="gallery-wraper">
          <div className="img-wraper"><img className="img-fluid" src="assets/img/gallery/1.png" alt /></div>
          <div className="img-wraper"><img className="img-fluid" src="assets/img/gallery/2.png" alt /></div>
          <div className="img-wraper"><img className="img-fluid" src="assets/img/gallery/3.png" alt /></div>
          <div className="img-wraper"><img className="img-fluid" src="assets/img/gallery/4.png" alt /></div>
          <div className="img-wraper"><img className="img-fluid" src="assets/img/gallery/5.png" alt /></div>
        </div>
        <div className="px-xl-8 px-md-5 px-3 py-8">
          <p className="fs-1">Our Story</p>
          <h1 className="fs-lg-6 fs-md-4 fs-3 my-4">Empowering Success Through Innovation</h1>
          <p className="fs-1">Sansutek Inc. began its journey in 2012 with a mission to revolutionize the tech industry. Over the years, we've evolved into a leading provider of innovative technology solutions, catering to businesses of all sizes worldwide. With a dedicated team and a commitment to excellence, we continue to drive success through cutting-edge innovation."</p>
        </div>
      </div>
    </section>
    <section className="bg-dark">
      <div className="container">
        <p className="text-center text-light">Our numbers</p>
        <h1 className="text-center text-white w-lg-75 mx-auto fs-xl-6 fs-lg-4 fs-3">Driving Sansutek's Success</h1>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-6 text-center">
            <h1 className="text-success fs-5 fs-md-6 fs-lg-7 fs-xl-9">10M</h1>
            <p className="text-light fs-2">Successful Placements</p>
          </div>
          <div className="col-md-4 col-sm-6 text-center">
            <h1 className="text-success fs-5 fs-md-6 fs-lg-7 fs-xl-9">10,000 </h1>
            <p className="text-light fs-2">Satisfied Clients</p>
          </div>
          <div className="col-md-4 col-sm-6 text-center">
            <h1 className="text-success fs-5 fs-md-6 fs-lg-7 fs-xl-9">240</h1>
            <p className="text-light fs-2">Innovative Solutions Deployed</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="px-xl-8 px-md-5 px-3">
          <p className="text-gray fs-1">Our team</p>
          <h1 className="text-black fs-lg-6 fs-md-4 fs-3 my-4">Leaders in Staffing, Consultancy, and App Development</h1>
          <p className="text-gray fs-1 w-lg-75">Sansutek's leadership team excels in staffing, consultancy, and application development, driving success with expertise and innovation</p>
        </div>
        <div className="row mt-7">
          <div className="col-md-4 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left"><a href="#"><img className="img-fluid" src="assets/img/team/1.png" alt /></a>
            <h1 className="fs-3 mt-3">Michael Scott</h1>
            <p className="fs-1">General Manager</p>
          </div>
          <div className="col-md-4 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left"><a href="#"><img className="img-fluid" src="assets/img/team/2.png" alt /></a>
            <h1 className="fs-3 mt-3">Dwight Schrute</h1>
            <p className="fs-1">General Manager</p>
          </div>
          <div className="col-md-4 col-sm-6 mb-5 mb-lg-0 text-center text-sm-left"><a href="#"><img className="img-fluid" src="assets/img/team/3.png" alt /></a>
            <h1 className="fs-3 mt-3">Pam Beetsley</h1>
            <p className="fs-1">General Manager</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-dark">
      <div className="container">
        <div className="px-xl-8 px-md-5 px-3">
          <p className="text-light fs-1">Guiding Sansutek's Path</p>
          <h1 className="text-white fs-lg-6 fs-md-4 fs-3 my-lg-4 my-3">Commitment</h1>
          <p className="text-light w-lg-75 fs-1">Dedicated to providing top-tier staffing, consultancy, and application development services for client success</p>
          <div className="row mt-5">
            <div className="col-md-3"><img className="img-fluid" src="assets/img/values/1.png" alt /></div>
            <div className="col-md-9 mt-2 mb-md-0">
              <h1 className="text-white fs-2 fs-lg-3 my-2">Responsibility</h1>
              <p className="text-light fs-1">Upholding accountability and trust in all endeavors, ensuring reliability and integrity in our work.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3"><img className="img-fluid" src="assets/img/values/2.png" alt /></div>
            <div className="col-md-9 mt-2 mb-md-0">
              <h1 className="text-white fs-2 fs-lg-3 my-2">Progress</h1>
              <p className="text-light fs-1">Continuously innovating and adapting to drive progress, delivering cutting-edge solutions for sustained growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <section className="pt-0">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6 col-sm-12"><a href="index.html"><img className="img-fluid footer-logo mt-5 mb-4" src="assets/img/logos/logonew.png" alt /></a>
          <p className="w-lg-75 text-gray">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
        </div>
        <div className="col-lg-2 col-sm-4">
          <h3 className="fw-bold fs-1 mt-5 mb-4">Landings</h3>
          <ul className="list-unstyled">
            <li className="my-3 col-md-4"><Link to="/">Home</Link></li>
            <li className="my-3"><Link to="/about">About</Link></li>
            <li className="my-3"><Link to="/service">Services</Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-sm-4">
          <h3 className="fw-bold fs-1 mt-5 mb-4">Company</h3>
          <ul className="list-unstyled">
            <li className="my-3"><Link to="/careers">Careers</Link><span className="py-1 px-2 rounded-2 bg-success fw-bold text-dark ms-2">Hiring!</span></li>
            <li className="my-3"><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-gray">2012. All Rights Reserved By Sansutek Sansutek</p>
    </div>
  </section>
</div>

  );
}

export default About;

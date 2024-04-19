import React from 'react'
// import { Link } from 'react-router-dom';
import { NavLink ,Link } from 'react-router-dom';
const Services = () => {
  return (
   <div>
  <div>
    <main className="main" id="top">
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" data-navbar-on-scroll="data-navbar-on-scroll">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="assets/img/logos/logonew.png" alt />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars text-white fs-3" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active-link" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active-link" to="/service">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active-link" to="/careers">Careers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active-link" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <div className="container mt-6">
          <div className="border-bottom border-dark ">
            {/* <p class="text-dark text-center fs-1">Blog</p> */}
            <h1 className="text-center fs-lg-7 fs-md-4 fs-3 text-dark mb-5">Our Services</h1>
          </div>
        </div>
      </section></main></div>
  <section className="py-0">
    <div className="container">
      {/* <h1 class="fs-lg-6 fs-md-5 fs-3">Letest News</h1> */}
      <div className="row mt-5 gx-xl-7 d-flex justify-content-center align-items-center">
        <div className="col-lg-4 col-md-6 mb-5 mb-md-0 text-center text-md-start h-auto">
          <div className="d-flex justify-content-between flex-column h-100"><a href="#"><img className="w-md-100 w-75 rounded-2" src="assets/img/services/service1.jpg" alt /></a>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3"><a href="#">
                <h3 className="fw-bold mb-0 text-black">Staffing Services</h3>
              </a>
              {/* <p class="mb-0">November 22, 2021</p> */}
            </div><a href="#">
              <h5 className="mt-1 mb-3 fs-0 fs-md-1">It is never easy to find a reliable and skill matching resource for your short term/long term ...</h5>
            </a>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 mb-md-5"><a href="#">
                <p className="mb-0 text-black fs-1 text-decoration-underline">Read More</p>
              </a></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-md-0 text-center text-md-start h-auto">
          <div className="d-flex justify-content-between flex-column h-100"><a href="#"><img className="w-md-100 w-75 rounded-2" src="assets/img/services/service2.jpg" alt /></a>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3"><a href="#">
                <h3 className="fw-bold mb-0 text-black">IT Consulting Services</h3>
              </a>
              {/* <p class="mb-0">November 22, 2021</p> */}
            </div><a href="#">
              <h5 className="mt-1 mb-3 fs-0 fs-md-1"> In today's era, every company is a technology company no matter what business model it is....</h5>
            </a>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 mb-md-5"><a href="#">
                <p className="mb-0 text-black fs-1 text-decoration-underline">Read More</p>
              </a></div>
          </div>
        </div>
        <h1 className="fw-bold mb-0 text-black p-5 text-center">Application Services</h1>
        <div className="col-lg-4 col-md-6 mb-5 mb-md-0 text-center text-md-start h-auto">
          <div className="d-flex justify-content-between flex-column h-100"><a href="#"><img className="w-md-100 w-75 rounded-2" src="assets/img/services/service3.jpg" alt /></a>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3"><a href="#">
                <h3 className="fw-bold mb-0 text-black">Application Maintanance &amp; Support</h3>
              </a>
              {/* <p class="mb-0">November 22, 2021</p> */}
            </div><a href="#">
              <h5 className="mt-1 mb-3 fs-0 fs-md-1">As we know software applications are really important to any organization to carry out the day to day business functions  ...</h5>
            </a>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 mb-md-5"><a href="#">
                <p className="mb-0 text-black fs-1 text-decoration-underline">Read More</p>
              </a></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-md-0 text-center text-md-start h-auto">
          <div className="d-flex justify-content-between flex-column h-100"><a href="#"><img className="w-md-100 w-75 rounded-2" src="assets/img/services/service4.jpg" alt /></a>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3"><a href="#">
                <h3 className="fw-bold mb-0 text-black">Implementation <br /> services</h3>
              </a>
              {/* <p class="mb-0">November 22, 2021</p> */}
            </div><a href="#">
              <h5 className="mt-1 mb-3 fs-0 fs-md-1">Though, we have many pre-packaged software solutions available in the market, more often than not, lot of business challenges </h5>
            </a><div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 mb-md-5"><a href="#" /><a href="#">
                <p className="mb-0 text-black fs-1 text-decoration-underline">Read More</p>
              </a></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-md-0 text-center text-md-start h-auto">
          <div className="d-flex justify-content-between flex-column h-100"><a href="#"><img className="w-md-100 w-75 rounded-2" src="assets/img/services/service5.jpg" alt /></a>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3"><a href="#">
                <h3 className="fw-bold mb-0 text-black">Implementation <br />services</h3>
              </a>
              {/* <p class="mb-0">November 22, 2021</p> */}
            </div><a href="#">
              <h5 className="mt-1 mb-3 fs-0 fs-md-1">hether you are integrating a new system, upgrading an existing system, or combining two or more business systemsSansutek ...</h5>
            </a>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 mb-md-5"><a href="#">
                <p className="mb-0 text-black fs-1 text-decoration-underline">Read More</p>
              </a></div>
          </div>
        </div>
      </div>
    </div></section>
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

  )
}

export default Services

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/contactform/', formData);
      console.log('Response:', response);
      if (response.status === 201) {
        setSubmitMessage('We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        console.error('Error saving form data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };
  return (
    <div>
      <main className="main" id="top">
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" data-navbar-on-scroll="data-navbar-on-scroll">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logos/logonew.png" alt="Logo" />
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
          <div className="container mt-6 mb-0">
            <div className="border-bottom border-dark">
              <h1 className="text-center fs-lg-5 fs-md-3 fs-2 text-dark mb-4">Contact Us</h1>
            </div>
          </div>
        </section>
      </main>
      <div className="container mt-1">
        <div className="container bg-dark overflow-hidden rounded-1">
          <div className="bg-holder" />
          <div className="row">
            <div className="col-lg-6 mb-4 mt-5">
              <h1 className="fs-md-4 fs-4 m-4 text-white">Address</h1>
              <h1 className="fs-md-3 fs-2 m-3 text-white font-weight-bold">1930 E Rosemeade Pkwy, Suite #208</h1>
              <h1 className="fs-md-1 fs-2 m-3 text-white">Carrollton, TX – 75007</h1>
              <h1 className="fs-md-1 fs-2 m-3 text-white">Phone: 469-993-0040</h1>
              <h1 className="fs-md-1 fs-2 m-3 text-white">Fax: 469-574-5101</h1>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="card" style={{ maxWidth: '30rem', width: '100%', margin: 'auto' }}>
                <div className="card-body text-center">
                  <form onSubmit={handleSubmit}>
                    <h1 className="fs-md-4 fs-4 text-white pb-3">Ask a Question</h1>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control form-control-sm rounded"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control form-control-sm rounded"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control form-control-sm rounded"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control form-control-sm rounded"
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-dark btn-sm rounded" style={{ background: '#65E4A3', color: 'black' }}>Start now</button>
                    </form>
                {submitMessage && <p className="text-success">{submitMessage}</p>}    
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <section className="pt-0">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 col-sm-12">
                <a href="index.html">
                  <img className="img-fluid footer-logo mt-5 mb-4" src="assets/img/logos/logonew.png" alt="" />
                </a>
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
    </div>
  );
}

export default Contactus;

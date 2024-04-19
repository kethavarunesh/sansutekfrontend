import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('telephone', formData.telephone);
      formDataToSend.append('resume', formData.resume);

      const response = await axios.post('http://127.0.0.1:8000/resumesubmission/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response);
      if (response.status === 201) {
        alert('Your resume has been submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          telephone: '',
          resume: null,
        });
      } else {
        console.error('Error submitting resume:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting resume:', error);
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
          <div className="container mt-6">
            <div className="border-bottom border-dark ">
              <h1 className="text-center fs-lg-7 fs-md-4 fs-3 text-dark mb-5">Careers</h1>
            </div>
          </div>
        </section>
      </main>
      <div className="container">
        <div className="card" style={{ maxWidth: '30rem', width: '100%', margin: 'auto' }}>
          <div className="card-body text-center">
            <form onSubmit={handleSubmit}>
              <h1 className="fw-bold mb-0 text-black text-center pb-2">SEND RESUME</h1>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm rounded"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm rounded"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control form-control-sm rounded"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telephone" className="form-label">Telephone</label>
                <input
                  type="number"
                  className="form-control form-control-sm rounded"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="resume" className="form-label">Resume</label>
                <input
                  type="file"
                  className="form-control form-control-sm rounded"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </div>
              <button type="submit" className="btn btn-dark btn-sm rounded">Submit</button>
            </form>
          </div>
        </div>
      </div>
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
  );
}

export default Careers;

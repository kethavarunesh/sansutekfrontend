import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink,Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {


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
    <div className="bg-dark"><img className="img-fluid position-absolute end-0" src="assets/img/hero/hero-bg.png" alt="" />
      <section>
        <div className="container">
          <div className="row align-items-center py-lg-8 py-6">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="text-white fs-5 fs-xl-6">Sansutek: Bridging Possibilities</h1>
              <p className="text-white py-lg-3 py-2">Enabling Growth with Staffing, IT Consulting, Application Development, and Maintenance Solutions
                Since 2012.</p>
            </div>
            <div className="col-lg-6 text-center text-lg-end mt-3 mt-lg-0"><img className="img-fluid" src="assets/img/hero/hero-graphics.png" alt =""/></div>
          </div>
          <div className="swiper">
      <div className="swiper-container swiper-shadow swiper-theme">
        <div className="swiper-wrapper">
          <div className="swiper-slide scroll-img text-center"><img className="scroll-img" src="assets/img/logo2.png" alt="" /></div>
          <div className="swiper-slide scroll-img text-center"><img className="scroll-img" src="assets/img/logo2.png" alt="" /></div>
          <div className="swiper-slide scroll-img text-center"><img className="scroll-img" src="assets/img/logo2.png" alt="" /></div>
          <div className="swiper-slide scroll-img text-center"><img className="scroll-img" src="assets/img/logo2.png" alt="" /></div>
          <div className="swiper-slide scroll-img text-center"><img className="scroll-img" src="assets/img/logo2.png" alt="" /></div>
          <div className="swiper-slide scroll-img text-center"><img className="scroll-img" src="assets/img/logo2.png" alt="" /></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
        </div>
      </section>
    </div>
    <section>
      <div className="container">
        <p className="text-center fs-1">Sansutek Services</p>
        <h2 className="mx-auto text-center fs-lg-6 fs-md-5 w-lg-75">Handshake infographic mass market crowdfunding iteration.</h2>
        <div className="row gx-3 mt-5">
          <div className="col-md-3 mb-6 mb-md-0 text-center text-md-start">
            <img className="w-50 w-md-100" src="assets/img/services/1.png" alt="" />
            <h4 className="mt-3 my-1">Application services</h4>
            <p className="fs-1 mb-0">Though, we have many pre-packaged software solutions available in the market, more often than not, lot of </p>
            <a className="text-dark fs-1 pb-2 fw-bold border-black border-bottom text-decoration-none" href="/">Explore page<i className="fa-solid fa-arrow-right ms-2" /></a>
          </div>
          <div className="col-md-3 mb-6 mb-md-0 text-center text-md-start">
            <img className="w-50 w-md-100" src="assets/img/services/2.png" alt="" />
            <h4 className="mt-3 my-1">Technology Consulting</h4>
            <p className="fs-1 mb-0">In today's era, every company is a technology company no matter what business model it is.Technology as never </p>
            <a className="text-dark fs-1 pb-2 fw-bold border-black border-bottom text-decoration-none" href="/">Explore page<i className="fa-solid fa-arrow-right ms-2" /></a>
          </div>
          <div className="col-md-3 mb-6 mb-md-0 text-center text-md-start">
            <img className="w-50 w-md-100" src="assets/img/services/3.png" alt="" />
            <h4 className="mt-3 my-1">Implementation Services</h4>
            <p className="fs-1 mb-0">Whether you are integrating a new system, upgrading an existing system, or combining two or more business</p>
            <a className="text-dark fs-1 pb-2 fw-bold border-black border-bottom text-decoration-none" href="/">Explore page<i className="fa-solid fa-arrow-right ms-2" /></a>
          </div>
          <div className="col-md-3 mb-6 mb-md-0 text-center text-md-start">
            <img className="w-50 w-md-100" src="assets/img/services/3.png" alt="" />
            <h4 className="mt-3 my-1">Staffing</h4>
            <p className="fs-1 mb-0">It is never easy to find a reliable and skill matching resource for your short term/long term technology engagements on a  </p>
            <a className="text-dark fs-1 pb-2 fw-bold border-black border-bottom text-decoration-none" href="/">Explore page<i className="fa-solid fa-arrow-right ms-2" /></a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start"><img className="img-fluid" src="assets/img/offer/1.png" alt="" /></div>
          <div className="col-lg-6">
            <h1 className="fs-xl-5 fs-lg-4 fs-3">We connect our customers with the best, and help them keep up-and stay open.</h1>
            <ul className="list-unstyled my-xl-5 my-3">
              <li className="fs-2 my-4 d-flex align-items-center gap-3 text-black"><i className="fa-solid fa-circle-check fs-4 text-dark" /><span>Expert Staffing: We connect businesses with top talent to drive success and growth.</span></li>
              <li className="fs-2 my-4 d-flex align-items-center gap-3 text-black"><i className="fa-solid fa-circle-check fs-4 text-dark" /><span>Strategic Consulting: Our consultancy services provide tailored guidance for achieving
                  business objectives.</span></li>
              <li className="fs-2 my-4 d-flex align-items-center gap-3 text-black"><i className="fa-solid fa-circle-check fs-4 text-dark" /><span>Application Development and Support: We specialize in developing robust applications and
                  providing ongoing support to ensure seamless operations and long-term success."</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-8 pt-lg-0">
      <div className="container">
        <div className="d-flex flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <h1 className="fs-lg-4 fs-md-3 fs-xl-5 mb-5">Sansutek: Your Partner in Progress</h1>
            <ul className="list-unstyled">
              <li className="fs-2 shadow-sm offer-list-item"><i className="fa-solid fa-leaf fs-lg-4 fs-3" /><span>Talent Connection: We link you with top talent to fuel your business growth.</span></li>
              <li className="fs-2 shadow-sm offer-list-item"><i className="fa-solid fa-eye fs-lg-4 fs-3" /><span>Strategic Guidance: Our tailored advice helps you navigate challenges and achieve success.</span></li>
              <li className="fs-2 shadow-sm offer-list-item"><i className="fa-solid fa-sun fs-lg-4 fs-3" /><span>Reliable Support: From app development to ongoing support, we're here to ensure your
                  success journey."</span></li>
            </ul>
          </div>
          <div className="col-lg-6 text-center text-lg-end"><img className="img-fluid" src="assets/img/offer/2.png" alt="" /></div>
        </div>
      </div>
    </section>
    <section className="bg-dark pt-6">
      <div className="container">
        <div className="col-md-6">
          <h1 className="text-white fs-lg-5 fs-md-3 fs-2">An enterprise template to ramp up your company website</h1>
        </div>
        <div className="swiper mt-7">
          <div className="swiper-container swiper-theme" data-swiper="{&quot;slidesPerView&quot;:1,&quot;breakpoints&quot;:{&quot;640&quot;:{&quot;slidesPerView&quot;:1,&quot;spaceBetween&quot;:10},&quot;768&quot;:{&quot;slidesPerView&quot;:2,&quot;spaceBetween&quot;:20},&quot;1025&quot;:{&quot;slidesPerView&quot;:3,&quot;spaceBetween&quot;:40}},&quot;spaceBetween&quot;:10,&quot;grabCursor&quot;:true,&quot;pagination&quot;:{&quot;el&quot;:&quot;.swiper-pagination&quot;,&quot;clickable&quot;:true},&quot;navigation&quot;:{&quot;nextEl&quot;:&quot;.swiper-button-next&quot;,&quot;prevEl&quot;:&quot;.swiper-button-prev&quot;},&quot;loop&quot;:true,&quot;freeMode&quot;:true,&quot;loopedSlides&quot;:3}">
            <div className="swiper-wrapper">
              <div className="swiper-slide bg-white p-5 rounded-3 h-auto">
                <div className="d-flex flex-column justify-content-between h-100">
                  <h4 className="text-black">“Sansutek's enterprise template transformed our website into a dynamic platform that perfectly showcases
                    our brand. It's user-friendly, visually stunning, and has significantly enhanced our online presence.”</h4>
                  <div className="d-flex align-items-center gap-3 mt-5"><img src="assets/img/review/1.png" alt="" />
                    <div className="text-black">
                      <p className="mb-0 fw-bold text-dark">Marco Bianchi </p><small>IT Project Manager  @ Italy</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide bg-white p-5 rounded-3 h-auto">
                <div className="d-flex flex-column justify-content-between h-100">
                  <h4 className="text-black">“Implementing Sansutek's enterprise template was a game-changer for our company's website. Our
                    customers now enjoy a seamless browsing experience, leading to increased engagement and conversions."</h4>
                  <div className="d-flex align-items-center gap-3 mt-5"><img src="assets/img/review/2.png" alt="" />
                    <div className="text-black">
                      <p className="mb-0 fw-bold text-dark">Anna Kowalska </p><small>Systems Analyst @ Poland</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide bg-white p-5 rounded-3 h-auto">
                <div className="d-flex flex-column justify-content-between h-100">
                  <h4 className="text-black">“Sansutek's enterprise template exceeded our expectations. Its modern design and customizable features
                    allowed us to create a unique and professional website that truly reflects our brand."</h4>
                  <div className="d-flex align-items-center gap-3 mt-5"><img src="assets/img/review/3.png" alt="" />
                    <div className="text-black">
                      <p className="mb-0 fw-bold text-dark">Lars Jensen </p><small>Network Administrator @ Denmark</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide bg-white p-5 rounded-3 h-auto">
                <div className="d-flex flex-column justify-content-between h-100">
                  <h4 className="text-black">“We're thrilled with the results of using Sansutek's enterprise template for our website. It's responsive, easy
                    to navigate, and has received rave reviews from our customers. Highly recommended!"</h4>
                  <div className="d-flex align-items-center gap-3 mt-5"><img src="assets/img/review/1.png" alt=""/>
                    <div className="text-black">
                      <p className="mb-0 fw-bold text-dark">Marta García </p><small>UX/UI Designer @ Spain</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next"><span className="fas fa-arrow-right fs-lg-3 fs-2" /></div>
          <div className="swiper-button-prev"><span className="fas fa-arrow-left fs-lg-3 fs-2" /></div>
        </div>
      </div>
    </section>
    <section>
      <div className="container"><img className="img-fluid" src="assets/img/offer/3.png" alt="" />
        <div className="row mt-5 align-items-center">
          <div className="col-md-6">
            <h2 className="fs-md-4 fs-3 pt-3">We connect our customers with the best, and help them keep up-and stay open.</h2>
          </div>
          <div className="col-md-6">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item" />
              <h2 className="accordion-header border-bottom" id="srgdgfdgdgg45">
                <button className="accordion-button collapsed text-black" type="button" data-bs-toggle="collapse" data-bs-target="#srgdgfdgdgg45tyuu" aria-expanded="false" aria-controls="srgdgfdgdgg45"><span className="fs-1 pe-3">What services does Sansutek offer?</span></button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="srgdgfdgdgg45" data-bs-parent="#accordionFlushExample" id="srgdgfdgdgg45tyuu">
                <div className="accordion-body">
                  <p className="mb-0">Sansutek offers a range of services including staffing
                    solutions, strategic consulting, application development, and ongoing support services.</p>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header border-bottom" id="exampleAccordionHeader">
                  <button className="accordion-button collapsed text-black" type="button" data-bs-toggle="collapse" data-bs-target="#exampleAccordionCollapse" aria-expanded="false" aria-controls="exampleAccordionCollapse">
                    <span className="fs-1 pe-3">How does Sansutek find the right talent for staffing needs?</span>
                  </button>
                </h2>
                <div className="accordion-collapse collapse" aria-labelledby="exampleAccordionHeader" data-bs-parent="#accordionFlushExample" id="exampleAccordionCollapse">
                  <div className="accordion-body">
                    <p className="mb-0">We utilize a rigorous screening
                      process and tap into our extensive network to ensure we connect businesses with the best-suited talent for
                      their specific requirements.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item" />
              <h2 className="accordion-header border-bottom" id="sxvdgrfhfh276">
                <button className="accordion-button collapsed text-black" type="button" data-bs-toggle="collapse" data-bs-target="#srgdgfdgdgg45tyuu5ghj" aria-expanded="false" aria-controls="sxvdgrfhfh276"><span className="fs-1 pe-3">What industries does Sansutek serve?</span></button>
              </h2>
              <div className="accordion-collapse collapse" aria-labelledby="sxvdgrfhfh276" data-bs-parent="#accordionFlushExample" id="srgdgfdgdgg45tyuu5ghj">
                <div className="accordion-body">
                  <p className="mb-0">Sansutek caters to a diverse range of industries including
                    technology, finance, healthcare, retail, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <section className="pt-0">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6 col-sm-12"><a href="index.html"><img className="img-fluid footer-logo mt-5 mb-4" src="assets/img/logos/logonew.png" alt="" /></a>
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

export default Home

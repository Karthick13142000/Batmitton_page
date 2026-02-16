import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../assets/logo.svg';
import './Home.css';
import cork1 from '../../assets/cork1.svg'
import trainerimg1 from '../../assets/Rectangle 117.svg'
import trainerimg2 from '../../assets/Rectangle 125.svg'
import trainerimg3 from '../../assets/Rectangle 127.svg'
import calender from '../../assets/calendar_month.svg'
import time from '../../assets/schedule.svg'
import Footer from "../Footer/Footer";
import ScrollToTop from "../../Scroll_Arrow/ScrollToTop";
import floatingCork from "../../assets/new_cork.svg"
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [showCork, setShowCork] = useState(false);
  const [hideCork, setHideCork] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };
    const handleBookNow = (e) => {
    e.preventDefault(); 
    navigate("/contact", { state: { scrollTo: "form" } });
};
  return (
    <div>

      <ScrollToTop />
      {/* Hero Section */}
      <section
        className="hero-section"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowCork(true)}
        onMouseLeave={() => setShowCork(false)}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 style={{ fontSize: '70px' }}>Train. Grow. Win.</h1>

          <p
            style={{
              fontSize: '20px',
              fontFamily: 'sans-serif',
              fontWeight: '400px',
              marginTop: '26px',
            }}
          >
            Powered by expert coaching, Advanced training, and a Culture built{' '}
            <span style={{ color: '#F57921' }}>for Everyone.</span>
          </p>

          <button className="book-btn" onMouseEnter={() => setHideCork(true)}
            onMouseLeave={() => setHideCork(false)} onClick={handleBookNow}>
            <span className="arrow">→</span>
            Book Now
          </button>
        </div>

        {/* Floating cork cursor */}
        {showCork && !hideCork && (
          <img
            src={floatingCork}
            className="floating-cork"
            style={{
              left: mouse.x,
              top: mouse.y,
            }}
            alt="cork"
          />
        )}
      </section>

      {/* sec2 */}
      <section className="mt-4">
        <div >
          <div className="row align-items-center">

            {/* LEFT – TEXT */}
            <div className="col-lg-4 col-md-12">
              <div className="corksection">
                <h1>
                  WHAT MAKES <br />
                  FEATHERSSPORTS <br />
                  DIFFERENT?
                </h1>
              </div>
            </div>

            {/* RIGHT – IMAGE */}
            <div className="col-lg-8 col-md-12">
              <div className="image-wrapper">
                <img
                  src={cork1}
                  className="img-fluid rounded"
                />
              </div>
              {/* button */}
              <button style={{ width: '243px', height: '54px', border: '1px solid #F57921', color: '#F57921', fontSize: '20px', fontWeight: '700', borderRadius: '8px', padding: '10px', textAlign: 'center', backgroundColor: 'transparent', marginTop: '20px', marginLeft: '30px' }} className="coachhover">Professional Coaches</button>
            </div>

          </div>
        </div>
      </section>
      {/* sec3 */}
      <section style={{ marginTop: '100px' }}>
        <div className="container-fluid">
          <div className="row g-4">

            <div className="col-lg-4 col-md-6 ps-4" >
              <img
                src={trainerimg1}
                alt="Trainer 1"
                className="img-fluid rounded"
              />
              <button className="trainer1">Tailored Training Programs</button>
            </div>

            <div className="col-lg-4 col-md-6">
              <img
                src={trainerimg2}
                alt="Trainer 2"
                className="img-fluid rounded"
              />
              <button className="trainer2">World class facility</button>

            </div>

            <div className="col-lg-4 col-md-12 ">
              <img
                src={trainerimg3}
                alt="Trainer 3"
                className="img-fluid rounded"
              />
              <button className="trainer1">Track Record of Champions</button>
              <div className="cork"></div>
            </div>

          </div>
        </div>
      </section>
      {/* sec4 */}
      <section className="offer-section">
        <div className="container-fluid">

          <h1 className="offer-title">What we Offer?</h1>

          <div className="row justify-content-center g-4" style={{ display: 'flex', gap: '120px' }}>

            {/* LEFT CARD */}
            <div className="col-lg-5 col-md-10">
              <div className="studenttraining">

                <h2 className="training-title">Students Training</h2>

                <div className="training-block">
                  <div className="row-item">
                    <img src={calender} alt="calendar" />
                    <span>Tuesday – Thursday</span>
                  </div>
                  <div className="row-item">
                    <img src={time} alt="time" />
                    <span>5:00 PM – 7:00 PM</span>
                  </div>
                </div>

                <div className="training-block">
                  <div className="row-item">
                    <img src={calender} alt="calendar" />
                    <span>Friday</span>
                  </div>
                  <div className="row-item">
                    <img src={time} alt="time" />
                    <span>2:00 PM – 4:00 PM & 5:00 PM – 7:00 PM</span>
                  </div>
                </div>

                <div className="training-block">
                  <div className="row-item">
                    <img src={calender} alt="calendar" />
                    <span>Saturday & Sunday</span>
                  </div>
                  <div className="row-item" style={{ alignItems: 'baseline', display: 'flex' }}>
                    <img src={time} alt="time" />
                    <span>
                      11:00 AM – 1:00 PM, 1:00 PM – 2:00 PM, 5:00 PM – 7:00 PM
                    </span>
                  </div>
                </div>


              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="col-lg-5 col-md-10">
              <div className="studenttraining1">
                <h2 className="training-title">Adults Training</h2>

                <div className="training-center">
                  <div className="row-item">
                    <img src={calender} alt="calendar" />
                    <span>Fri - Sunday</span>
                  </div>

                  <div className="row-item">
                    <img src={time} alt="time" />
                    <span>6:00PM - 8:00PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cork1"></div>

          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

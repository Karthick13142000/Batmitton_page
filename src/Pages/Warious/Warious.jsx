
import { NavLink } from "react-router-dom";
import "./Warious.css";
import { useState } from "react";
import client1 from "../../assets/client1.svg"
import client2 from "../../assets/client2.svg"
import client3 from "../../assets/client3.svg"
import client4 from "../../assets/client4.svg"
import ScrollToTop from "../../Scroll_Arrow/ScrollToTop";
import img1 from "../../assets/img1.svg"
import img2 from "../../assets/img2.svg"
import img3 from "../../assets/img3.svg"
import img4 from "../../assets/img4.svg"
import img5 from "../../assets/img5.svg"
import img6 from "../../assets/img6.svg"
import img7 from "../../assets/img7.svg"
import img8 from "../../assets/img8.svg"
import img9 from "../../assets/img9.svg"
import Footer from "../Footer/Footer";
export default function Warious() {
    const [isActive, setIsActive] = useState(false)
    const images =[img1,img2,img3,img4,img5,img6,img7,img8,img9]
    return (
        <div>
            <ScrollToTop />
            <section className="hero-section2">
                <div className="overlay"></div>

                <div className="hero-content">
                    <h1 style={{ color: '#F57921', fontFamily: 'Charm', fontSize: '70px' }}>Warriors</h1>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            fontFamily: 'Charm',
                            color: isActive ? '#fff' : '#9E9E9E',
                        })}
                    >
                        Home /
                    </NavLink>

                    <NavLink
                        to="/warriors"
                        style={({ isActive }) => ({
                            fontFamily: 'Charm',
                            color: isActive ? '#fff' : '#9E9E9E',
                        })}
                    >
                        Warriors
                    </NavLink>

                </div>
            </section>
            {/* sec2 */}
            <section>
                <div style={{ marginTop: '80px' }}>
                    <h1 style={{ fontSize: '32px', color: '#F57921', fontWeight: '700', textAlign: 'center' }}>Track Record of Champions</h1>
                    <p style={{ fontSize: '20px', color: '#333333', textAlign: 'center', marginTop: '32px', lineHeight: '39px' }}><span style={{ fontSize: '20px', color: '#333333', fontWeight: '700', }}>Feathers Sports</span> has a growing track record of developing disciplined, confident, and competitive players. Our athletes regularly<br></br> participate in local and national-level tournaments, demonstrating strong technical skills, mental toughness, and sportsmanship.<br></br> <spna style={{ fontSize: '20px', color: '#333333', fontWeight: '700' }}>Success for us is not only medals, but consistent improvement and character building.</spna></p>
                </div>
            </section>
            {/* sec3 */}
            <div className="corkwarious"></div>
            <section>
                <div style={{ marginTop: '80px' }}>
                    <h1 style={{ fontSize: '32px', color: '#F57921', fontWeight: '700', textAlign: 'center' }}>Our Coaches</h1>
                    <p style={{ fontSize: '20px', color: '#333333', textAlign: 'center', marginTop: '32px', lineHeight: '39px' }}>Our coaches are certified, experienced, and performance-driven professionals who have consistently produced<br></br> results over the last 5 years in UAE ranking and competitive tournaments.<br></br>
                        We focus on long-term athlete development, technical excellence, mental strength, and disciplined training culture.</p>
                </div>
            </section>
            {/* sec4 */}
            <section >
                <div className="corkwarious1"></div>
                <div className="container" style={{ marginTop: '80px' }}>
                    <div className="row" style={{ justifyContent: 'center' }}>
                        <div className="col-lg-6" style={{ textAlign: 'center' }}>
                            <div style={{ position: 'relative' }}>
                                <div className="client-circle "></div>
                                <div>
                                    <img src={client1} style={{ width: '50%' }} />
                                    <h2 style={{ fontSize: '32px', color: '#F57921', marginTop: '32px' }}>Vishnu</h2>
                                    <h4 style={{ fontSize: '20px', color: '#F57921', fontWeight: '400', marginTop: '12px' }}>Head Coach & Founder</h4>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6" style={{ textAlign: 'center' }}>
                            <div style={{ position: 'relative' }}>
                                <div className="client-circle1 "></div>
                                <div>
                                    <img src={client2} style={{ width: '50%' }} />
                                    <h2 style={{ fontSize: '32px', color: '#F57921', marginTop: '32px' }}>Sanjay</h2>
                                    <h4 style={{ fontSize: '20px', color: '#F57921', fontWeight: '400', marginTop: '12px' }}>Head Coach & Founder</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* sec5 */}
            <section >
                <div className="corkwarious"></div>
                <div className="container" style={{ marginTop: '80px' }}>

                    <div className="row" style={{ justifyContent: 'center' }}>
                        <div className="col-lg-6" style={{ textAlign: 'center' }}>
                            <div style={{ position: 'relative' }}>
                                <div className="client-circle "></div>
                                <div>
                                    <img src={client3} style={{ width: '65%', margin: '-30px 0px 0px 40px;' }} />
                                    <h2 style={{ fontSize: '32px', color: '#F57921', marginTop: '32px' }}>Praveen</h2>
                                    <h4 style={{ fontSize: '20px', color: '#F57921', fontWeight: '400', marginTop: '12px' }}>Assistant Coach</h4>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6" style={{ textAlign: 'center' }}>
                            <div style={{ position: 'relative' }}>
                                <div className="client-circle1 "></div>
                                <div>
                                    <img src={client4} style={{ width: '50%' }} />
                                    <h2 style={{ fontSize: '32px', color: '#F57921', marginTop: '32px' }}>Dave</h2>
                                    <h4 style={{ fontSize: '20px', color: '#F57921', fontWeight: '400', marginTop: '12px' }}>Assistant Coach</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
            {/* sec6 */}
              <section className="slider-section">
                <h1 style={{color:'#F57921',fontSize:'36px',fontWeight:'700',textAlign:'center'}}>The Art</h1>
      <div className="slider">
        <div className="slide-track">
          {images.concat(images).map((img, index) => (
            <div
              className={`img-wrapper ${index % 2 !== 0 ? "down" : ""}`}
              key={index}
            >
              <img src={img} alt="player" />
            </div>
          ))}
        </div>
      </div>
    </section>
   <Footer />
        </div>

    );
}

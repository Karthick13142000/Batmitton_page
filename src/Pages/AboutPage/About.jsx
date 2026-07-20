import { NavLink } from 'react-router-dom'
import '../AboutPage/About.css'
import { useState } from 'react'
import about1 from '../../assets/about1.svg'
import about2 from '../../assets/about2.svg'
import about3 from '../../assets/about3.svg'
import Footer from "../Footer/Footer";
import ScrollToTop from '../../Scroll_Arrow/ScrollToTop'

export default function About() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div>
            <ScrollToTop />
            <section className="hero-section1">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 style={{ fontSize: '70px', color: '#F57921', fontFamily: 'charm' }}>Abouts US</h1>
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
                        to="/about"
                        style={({ isActive }) => ({
                            fontFamily: 'Charm',
                            color: isActive ? '#fff' : '#9E9E9E',
                        })}
                    >
                        About Us
                    </NavLink>

                </div>
            </section>
            {/* sec2 */}
            <div className="corkabout"></div>
            <section style={{ marginTop: '100px' }}>

                <div >
                    <h2 style={{ color: '#F57921', fontSize: '36px', fontWeight: '700', textAlign: 'center' }}>Welcome to Feathers Sports</h2>
                    <h4 style={{ color: '#F57921', fontSize: '32px', fontWeight: '400', textAlign: 'center' }}>“Rise Above Your Limits..”</h4>
                    <p
                        style={{
                            color: '#F57921',
                            fontSize: '20px',
                            fontWeight: '400',
                            textAlign: 'center',
                            maxWidth: '900px',
                            width: '90%',
                            margin: '20px auto',
                            lineHeight: '1.8',
                            padding: '0 15px',
                        }}
                    >
                        Feathers Sports is committed to developing athletes and individuals through
                        structured coaching, discipline, and a positive sporting culture. We strive
                        to inspire confidence, resilience, and excellence both on and off the court.
                    </p>
                </div>
                <h1 style={{ color: '#F57921', fontSize: '36px', fontWeight: '700', textAlign: 'left', paddingTop: '40px', paddingLeft: '50px' }}>What we do?</h1>
                <div className="row pt-5 px-5">
                    <div className="col-lg-5">
                        <img src={about1} alt="About Feathers Sports" />
                    </div>

                    <div className="col-lg-7">
                        <h2
                            style={{
                                color: '#333333',
                                fontSize: '20px',
                                fontWeight: '300',
                                lineHeight: '39px',
                                paddingTop: '14vh',
                                width: '814px'
                            }}
                        >
                            <span style={{ color: '#4a4a4a', fontWeight: '800' }}>At Feathers Sports</span>, we believe in
                            growing the sport by <span style={{ color: '#4a4a4a', fontWeight: '800' }}>building a strong</span> <br></br><span style={{ color: '#4a4a4a', fontWeight: '800' }}>community and shaping the future
                                generation.</span> Our focus goes beyond winning<br></br> matches – we aim to improve
                            mental wellness, physical well-being, discipline,<br></br> and confidence for
                            everyone who steps onto the court. Feathers Sports is<br></br> committed to
                            developing athletes and individuals through structured coaching,<br></br>
                            discipline, and a positive sporting culture. We strive to inspire
                            confidence,<br></br> resilience, and excellence both on and off the court.
                        </h2>
                    </div>

                </div>


            </section>
            <div className="corkabout1"></div>
            {/* sec3 */}
            <section style={{ marginTop: '100px' }}>
                <h1 style={{ color: '#F57921', fontSize: '36px', fontWeight: '700', textAlign: 'left', paddingTop: '40px', paddingLeft: '50px' }}>WHY FEATHERS SPORTS IS DIFFERENT?</h1>
                <div className="row pt-5 px-5">
                    <div className="col-lg-8">


                        <ul
                            style={{
                                width: '814px',
                                paddingLeft: '20px',
                                color: '#333333',
                                fontSize: '20px',
                                fontWeight: '400',
                                lineHeight: '50px',
                                listStyleType: 'disc',
                                paddingTop: '70px'
                            }}
                        >
                            <li>
                                Athlete-first approach – Long-term development over short-term results.
                            </li>
                            <li>
                                Strong emphasis on mental wellness, focus, and emotional balance.
                            </li>
                            <li>
                                Structured training systems with clear progression pathways.
                            </li>
                            <li>
                                Community-driven environment that builds character, respect, and <br></br>responsibility.
                            </li>
                            <li>
                                Professional coaching with international exposure and modern training<br></br> methods.
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-4" style={{ position: 'relative', zIndex: '9999' }}>
                        <img src={about2} alt="About Feathers Sports" />
                    </div>



                </div>


            </section>
            {/* sec4 */}

            <section style={{ marginTop: '100px' }}>
                <div className="corkabout"></div>
                <h1 style={{ color: '#F57921', fontSize: '36px', fontWeight: '700', textAlign: 'left', paddingTop: '40px', paddingLeft: '50px' }}>TAILORED TRAINING PROGRAMMES</h1>

                <h3 style={{ textAlign: 'center', color: '#3a3a3a', fontSize: '20px', fontWeight: '300', width: '1440px', lineHeight: '39px', margin: '20px 10px', paddingLeft: '70px' }}>Our training programs are <span style={{ fontSize: '20px', fontWeight: '500', color: '#3a3a3a' }}>Carefully tailored based</span> on age, skill level, and performance goals. Each athlete follows a structured pathway designed to build strong fundamentals, advanced tactical awareness, physical conditioning, and mental resilience</h3>
                <div className="row pt-5 px-5">
                    <div className="col-lg-5" style={{ position: 'relative', zIndex: '9999' }}>
                        <img src={about3} alt="About Feathers Sports" />
                    </div>
                    <div className="col-lg-7">


                        <ul
                            style={{
                                width: '814px',
                                paddingLeft: '20px',
                                color: '#333333',
                                fontSize: '20px',
                                fontWeight: '400',
                                lineHeight: '50px',
                                listStyleType: 'disc',
                                paddingTop: '70px'
                            }}
                        >
                            <li style={{ fontSize: '20px', fontWeight: '300', color: '#3a3a3a' }}>
                                <span style={{ fontSize: '20px', fontWeight: '600', color: '#3a3a3a' }}>
                                    Grassroots Development –
                                </span>{' '}
                                Strong fundamentals, coordination, and love for the sport.
                            </li>

                            <li style={{ fontSize: '20px', fontWeight: '300', color: '#3a3a3a' }}>
                                <span style={{ fontSize: '20px', fontWeight: '600', color: '#3a3a3a' }}>
                                    Performance Pathway –
                                </span>{' '}
                                Skill refinement, match tactics, fitness, and<br></br> competition readiness.
                            </li>

                            <li style={{ fontSize: '20px', fontWeight: '300', color: '#3a3a3a' }}>
                                <span style={{ fontSize: '20px', fontWeight: '600', color: '#3a3a3a' }}>
                                    Elite & Competitive Training –
                                </span>{' '}
                                High-intensity sessions, <br></br>tournament preparation, and performance analysis.
                            </li>

                            <li style={{ fontSize: '20px', fontWeight: '300', color: '#3a3a3a' }}>
                                <span style={{ fontSize: '20px', fontWeight: '600', color: '#3a3a3a' }}>
                                    Recreational & Fitness Training –
                                </span>{' '}
                                Fitness, skill development, stress relief, <br></br>and enjoyment.
                            </li>
                        </ul>


                    </div>




                </div>


            </section>
            {/* sec5 */}
            <div className="corkabout1"></div>
            <section className="about3">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1 style={{ fontSize: '36px', color: '#F57921', paddingTop: '24px' }}>Your Journey to Greatness Starts Here.</h1>
                    <h3 style={{ fontSize: '20px', color: '#F57921', paddingTop: '24px' }}>Train with purpose. Grow with discipline. Play with heart.”</h3>
                    <button style={{ width: '154px', height: '48px', backgroundColor: '#F57921', color: '#fff', borderRadius: '8px', padding: '11px', marginTop: '24px', border: 'none' }}>Book Now</button>

                </div>
            </section>
            {/* footer */}
            <div className="corkabout2"></div>
            <Footer />

        </div>
    )
}
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeadImg from '../../assets/team/ParulAboutUs.jpeg';
import '../../styles/about.css';

function AboutUs() {
  return (
    <>
      <Navbar />

      <div className="about-wrapper">
        <section className="hero-section">
          <h1 className="club-heading">About The Astronomy Club...</h1>
        </section>

        <section className="vision-section">
          <div className="vision-card">
            <h2 className="vision-title">🌌 Our Vision</h2>
            <p className="vision-text">
              Welcome to the Astronomy Club, a hub for curiosity, discovery, and a shared love for the cosmos! Our goal is to connect students,
              faculty, and space enthusiasts in a journey to uncover the mysteries of the universe. Whether you're a seasoned observer or just
              starting to gaze at the stars, this is the place for you. We offer stargazing events, dynamic space talks, and thought-provoking
              discussions. Curious about the nature of black holes or life beyond Earth? This club is your platform to explore, share insights,
              and grow with a like-minded community. Every idea sparks a new perspective. Let’s journey through the stars together!
            </p>
          </div>
        </section>

        <section className="club-head-section">
          <h2 className="club-head-title">Message from the Club Head</h2>
          <div className="club-head-content">
            <div className="club-head-photo">
              <img src={HeadImg} alt="Club Head" className="club-head-img" />
            </div>
            <div className="club-head-message">
              <p>
                Welcome to the Astronomy Club of IIT Indore! We are driven by an unending curiosity about the universe and a
                passion for exploring the cosmos. Our mission is to provide a platform for students, faculty, and astronomy enthusiasts to
                come together and share their love for the night sky, unravel the mysteries of space, and delve into the wonders of the universe.
              </p>
              <p>
                Whether you're a seasoned stargazer or a curious beginner, our club offers a wide range of activities: stargazing sessions,
                astrophotography workshops, guest lectures, and observatory field trips. We're committed to building a community that learns,
                inspires, and grows together. Join us in this cosmic adventure—where each observation reveals the universe anew.
              </p>
              <p>
                <strong>Clear skies and happy stargazing!<br />
                Warm regards,<br />
                Parul Pahurkar<br />
                Club Head, Astronomy Club IIT Indore</strong>
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;